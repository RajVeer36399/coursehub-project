const express = require("express");
const Course = require("../models/Course");
const Subscription = require("../models/Subscription");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
/**
 * SUBSCRIBE to a course
 */
router.post("/subscribe", authMiddleware, async (req, res) => {
  try {
    const { courseId, promoCode } = req.body;

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // 🔒 Check if already subscribed
    const existing = await Subscription.findOne({
      userId: req.userId,
      courseId: course._id,
    });

    if (existing) {
      return res
        .status(400)
        .json({ message: "You are already subscribed to this course" });
    }

    let pricePaid = course.price;

    // Paid course → validate promo
    if (course.price > 0) {
      if (promoCode !== "BFSALE25") {
        return res.status(400).json({ message: "Invalid promo code" });
      }
      pricePaid = course.price * 0.5;
    }

    await Subscription.create({
      userId: req.userId,
      courseId: course._id,
      pricePaid,
    });

    res.json({
      message: "Subscribed successfully",
      pricePaid,
    });
  } catch (err) {
    // 🔒 DB-level duplicate protection (extra safety)
    if (err.code === 11000) {
      return res
        .status(400)
        .json({ message: "You are already subscribed to this course" });
    }

    res.status(500).json({ message: "Subscription failed" });
  }
});


/**
 * GET my courses
 */
router.get("/my-courses", authMiddleware, async (req, res) => {
  const subscriptions = await Subscription.find({
    userId: req.userId,
  }).populate("courseId");

  const result = subscriptions.map((sub) => ({
    id: sub.courseId._id,
    title: sub.courseId.title,
    image: sub.courseId.image,
    pricePaid: sub.pricePaid,
    subscribedAt: sub.subscribedAt,
  }));

  res.json(result);
});

module.exports = router;

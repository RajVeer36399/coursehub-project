const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

/**
 * TEMP: Seed courses (RUN ONCE)
 */
// router.get("/seed", async (req, res) => {
//   await Course.deleteMany();

//   const courses = [
//     {
//       title: "React Basics",
//       description: "Learn the fundamentals of React",
//       price: 0,
//       image: "https://picsum.photos/seed/react/400/200",
//     },
//     {
//       title: "Advanced React",
//       description: "Hooks, performance, best practices",
//       price: 1499,
//       image: "https://picsum.photos/seed/advreact/400/200",
//     },
//     {
//       title: "Node.js Fundamentals",
//       description: "Backend development with Node.js",
//       price: 999,
//       image: "https://picsum.photos/seed/node/400/200",
//     },
//     {
//       title: "Full Stack Bootcamp",
//       description: "Frontend + Backend + Deployment",
//       price: 2999,
//       image: "https://picsum.photos/seed/fullstack/400/200",
//     },
//     {
//       title: "JavaScript Mastery",
//       description: "Deep dive into JavaScript",
//       price: 0,
//       image: "https://picsum.photos/seed/js/400/200",
//     },
//   ];

//   await Course.insertMany(courses);
//   res.json({ message: "Courses seeded successfully" });
// });

/**
 * GET all courses
 */
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

/**
 * GET single course by ID
 */
router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ message: "Course not found" });
  }
  res.json(course);
});

module.exports = router;

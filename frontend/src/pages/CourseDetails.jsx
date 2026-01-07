import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountedPrice, setDiscountedPrice] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await api.get(`/courses/${id}`);
        setCourse(res.data);
      } catch {
        setError("Course not found");
      }
    };

    fetchCourse();
  }, [id]);

  if (!course) {
    return <p>{error || "Loading..."}</p>;
  }

  const applyPromo = () => {
    if (promoCode === "BFSALE25") {
      setDiscountedPrice(course.price * 0.5);
      setPromoApplied(true);
      setError("");
    } else {
      setError("Invalid promo code");
    }
  };

  const handleSubscribe = async () => {
    try {
      await api.post("/subscribe", {
        courseId: course._id,
        promoCode: promoApplied ? promoCode : null,
      });

      alert("Subscribed successfully!");
    } catch (err) {
      alert(err.response?.data?.message || "Subscription failed");
    }
  };

  return (
      <div className="max-w-4xl mx-auto px-6 py-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="overflow-hidden rounded mb-6">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"/>
      </div>

      <h1 className="text-2xl font-bold mb-2">
        {course.title}
      </h1>

      <p className="text-gray-700 mb-4 leading-relaxed">
        {course.description}
      </p>

      <p className="text-lg font-semibold mb-4">
        Price: {course.price === 0 ? "FREE" : `₹${course.price}`}
      </p>

      {/* FREE */}
      {course.price === 0 && (
        <button
          onClick={handleSubscribe}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Subscribe
        </button>
      )}

      {/* PAID */}
      {course.price > 0 && (
        <div className="mt-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Enter promo code"
              className="flex-1 border px-3 py-2 rounded"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />

            <button
              onClick={applyPromo}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Apply Promo
            </button>
          </div>

          {error && (
            <p className="text-red-600 mt-2 text-sm">
              {error}
            </p>
          )}

          {promoApplied && (
            <p className="text-green-600 mt-2 text-sm">
              Discounted Price: ₹{discountedPrice}
            </p>
          )}

          <button
            onClick={handleSubscribe}
            disabled={!promoApplied}
            className="mt-5 w-full bg-black text-white py-3 rounded disabled:opacity-50"
          >
            Subscribe
          </button>
        </div>
      )}
    </div>
  );
}

export default CourseDetails;

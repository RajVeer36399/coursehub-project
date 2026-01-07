import { useEffect, useState } from "react";
import api from "../services/api";

function MyCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyCourses = async () => {
      try {
        const res = await api.get("/my-courses");
        setCourses(res.data);
      } catch {
        console.error("Failed to fetch my courses");
      } finally {
        setLoading(false);
      }
    };

    fetchMyCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (courses.length === 0) {
    return <p>You have not subscribed to any courses yet.</p>;
  }

  return (
    <div>
      <h1 className="text-xl font-bold mb-6">
        My Courses
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded shadow overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="h-40 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-lg font-bold">
                {course.title}
              </h3>

              <p className="text-sm text-gray-600">
                Price Paid:{" "}
                {course.pricePaid === 0
                  ? "FREE"
                  : `₹${course.pricePaid}`}
              </p>

              <p className="text-sm text-gray-600 mt-1">
                Subscribed On:{" "}
                {new Date(course.subscribedAt).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCourses;

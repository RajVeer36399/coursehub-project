import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden flex flex-col transform transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Thumbnail */}
      <img
        src={course.image}
        alt={course.title}
        className="h-40 w-full object-cover transition-transform duration-300 hover:scale-105"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold mb-2">
          {course.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3">
          {course.description}
        </p>

        <div className="mt-auto pt-4 flex items-center justify-between">
          {/* Price */}
          <p className="font-semibold text-gray-900">
            {course.price === 0 ? "FREE" : `₹${course.price}`}
          </p>

          {/* View Details CTA */}
          <Link
            to={`/courses/${course._id}`}
            className="
              inline-flex items-center gap-1
              px-4 py-2 text-sm font-medium
              text-blue-600 border border-blue-600 rounded
              transition-all duration-200
              hover:bg-blue-600 hover:text-white
            "
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

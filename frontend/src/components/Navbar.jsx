import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

return (
  <nav className="bg-black text-white px-6 py-4 flex justify-between items-center">
    <div className="flex items-center gap-6">
      <Link to="/" className="text-2xl font-bold">
        SubscribEd
      </Link>
    </div>

    <div className="flex gap-4 items-center">
      {token ? (
        <>
          <Link
            to="/my-courses"
            className="hover:underline"
          >
            My Courses
          </Link>

          <button
            onClick={handleLogout}
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="hover:underline"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-white text-black px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            Signup
          </Link>
        </>
      )}
    </div>
  </nav>
);
}

export default Navbar;

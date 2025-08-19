import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-950 text-white px-6">
      <h1 className="text-7xl font-extrabold text-red-500 drop-shadow-md">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found 🚨</h2>
      <p className="mt-2 text-white text-center">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      {/* <Link to="/">
      <button 
          className="mt-10 px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 
                     text-white font-semibold rounded-full shadow-lg hover:opacity-90 transition"
        >
          HomePage
        </button>
      </Link> */}
    </div>
  );
}

export default ErrorPage;

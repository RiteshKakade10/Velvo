import { Link } from "react-router-dom";
import errorImage from "../assets/ErrorImage.jpg"; 

export default function ErrorPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="lg:w-1/2 w-full h-64 lg:h-auto">
        <img
          src={errorImage}
          alt="Error Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:w-1/2 w-full flex items-center justify-center px-6 py-24 sm:py-32 lg:px-16 text-black">
        <div className="grid gap-8 text-center lg:text-left">
          <p className="text-base font-semibold text-red-500">404</p>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl drop-shadow-md">
            Page not found
          </h1>
          <p className="text-lg font-medium text-gray-900 sm:text-xl/8">
            Oops! The page you’re looking for doesn’t exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <a
              href="contact"
              className="text-sm font-semibold text-gray-400 hover:text-indigo-600"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

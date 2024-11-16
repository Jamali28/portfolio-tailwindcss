// pages
import Link from "next/link";
export default function Navbar() {
    return (
    <header className="border-b-black  bg-sky-600 shadow-md">
      <nav className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white font-bold text-2xl">
            <Link href="/">
              <p>My Personal Portfolio</p>
            </Link>
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/more">
              <p className="text-white hover:text-gray-200 transition duration-300">SKills</p>
            </Link>
            <Link href="/about">
              <p className="text-white hover:text-gray-200 transition duration-300">About</p>
            </Link>
            <Link href="/contact">
              <p className="text-white hover:text-gray-200 transition duration-300">Contact</p>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu (hidden by default, will be shown on mobile click) */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/more">
            <p className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">
              Home
            </p>
          </Link>
          <Link href="/about">
            <p className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">
              About
            </p>
          </Link>
          <Link href="/contact">
            <p className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </header>

    )
}
import { Link } from 'react-router-dom'

function Header() {
  // Common link classes
  const linkClass = "text-sm font-medium transition-colors text-gray-600 hover:text-indigo-600"

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <h1 className="text-xl font-extrabold text-gray-900 tracking-tight">E-Shop</h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass}>
              Home
            </Link>
            <Link to="/products" className={linkClass}>
              Shop
            </Link>
            {/* The rest can be external links or placeholders for now */}
            <a href="#" className={linkClass}>
              About
            </a>
            <a href="#" className={linkClass}>
              Contact
            </a>
          </div>

          {/* Cart and User Actions */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-indigo-600 transition-colors rounded-full bg-gray-100 hover:bg-gray-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-white">
                0
              </span>
            </button>
            <button className="hidden sm:inline-flex px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button - Placeholder for mobile menu */}
          <button className="md:hidden p-2 text-gray-500 hover:text-indigo-600 transition-colors rounded-full bg-gray-100 hover:bg-gray-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
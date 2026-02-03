import { Link } from 'react-router-dom';

const AmazonLogo = () => (
  <Link to="/" className="flex items-center p-2 border border-transparent hover:border-white rounded cursor-pointer">
    <div className="flex items-center">
      {/* Placeholder for Amazon Logo (a simple white 'E-Shop' text with a small location icon) */}
      <h1 className="text-2xl font-bold text-white tracking-tight mr-1">E-Shop</h1>
      <span className="text-xs text-white opacity-75 mt-4 ml-1">.co</span>
    </div>
  </Link>
);

const SearchBar = () => (
  <div className="flex-grow max-w-[600px] h-10 flex items-center">
    {/* Simple dropdown for 'All' categories */}
    <select className="hidden sm:block h-full border-0 rounded-l-md bg-gray-200 text-sm text-gray-700 focus:outline-none cursor-pointer hover:bg-gray-300">
      <option>All</option>
      <option>Electronics</option>
      <option>Books</option>
      <option>Home & Kitchen</option>
    </select>
    <input
      type="text"
      placeholder="Search E-Shop"
      className="flex-grow h-full p-2 border-0 focus:outline-none text-black text-base"
    />
    <button className="h-full px-4 rounded-r-md bg-amazon-orange text-black hover:bg-amazon-yellow flex items-center justify-center">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.66l.27.28v.79l5 5L20.49 19l-5-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      </svg>
    </button>
  </div>
);

const NavLink = ({ children, to }) => (
  <Link to={to} className="flex flex-col justify-center p-2 border border-transparent hover:border-white rounded cursor-pointer h-14">
    {children}
  </Link>
);

const NavAction = ({ primaryText, secondaryText, icon }) => (
  <div className="flex flex-col justify-center p-2 border border-transparent hover:border-white rounded cursor-pointer h-14">
    <span className="text-xs leading-none text-white">{primaryText}</span>
    <span className="text-sm font-bold leading-none text-white whitespace-nowrap">{secondaryText}</span>
  </div>
);

function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* Top Header Row: Logo, Search, Actions */}
      <div className="bg-amazon-blue-dark text-white h-16 flex items-center px-4">
        <div className="flex items-center max-w-7xl mx-auto w-full">
          
          {/* Logo */}
          <AmazonLogo />

          {/* Delivery Location Placeholder (optional, but part of Amazon feel) */}
          <div className="hidden lg:flex flex-col text-xs p-2 ml-4 border border-transparent hover:border-white rounded cursor-pointer h-14 justify-center">
            <span className="text-gray-300">Deliver to</span>
            <span className="font-bold whitespace-nowrap">Your Location</span>
          </div>

          {/* Search Bar */}
          <div className="flex-grow mx-4 hidden md:flex">
            <SearchBar />
          </div>

          {/* User Actions: Sign In/Account & Orders */}
          <div className="flex items-center space-x-2 text-white">
            <NavAction primaryText="Hello, Sign in" secondaryText="Account & Lists" />
            <NavAction primaryText="Returns" secondaryText="& Orders" />
            
            {/* Cart Icon */}
            <NavLink to="/cart">
                <div className="relative flex items-end">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-amazon-orange font-bold text-lg leading-none absolute bottom-0 left-5">0</span>
                    <span className="text-sm font-bold whitespace-nowrap ml-1">Cart</span>
                </div>
            </NavLink>
          </div>
        </div>
      </div>

      {/* Bottom Header Row: Secondary Navigation */}
      <div className="bg-amazon-blue-mid text-white flex items-center text-sm space-x-3 px-4 h-10">
        <div className="max-w-7xl mx-auto w-full flex items-center space-x-3">
            {/* All Menu Button */}
            <a href="#" className="flex items-center font-bold p-1 border border-transparent hover:border-white rounded">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                All
            </a>
            
            {/* Nav Links */}
            <Link to="/products" className="p-1 border border-transparent hover:border-white rounded">
              Today's Deals
            </Link>
            <a href="#" className="p-1 border border-transparent hover:border-white rounded">
              Customer Service
            </a>
            <a href="#" className="p-1 border border-transparent hover:border-white rounded">
              Registry
            </a>
            <a href="#" className="p-1 border border-transparent hover:border-white rounded">
              Gift Cards
            </a>
            <a href="#" className="p-1 border border-transparent hover:border-white rounded">
              Sell
            </a>
        </div>
      </div>
    </header>
  );
}

export default Header;

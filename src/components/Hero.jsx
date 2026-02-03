import React from 'react';

// A simple card component for the Hero section, mimicking the look of Amazon's category/deal cards
const HeroCard = ({ title, imageUrl, linkText }) => (
  <div className="bg-white p-4 shadow-md h-full flex flex-col justify-between">
    <h2 className="text-xl font-bold mb-3">{title}</h2>
    <div className="flex-grow flex items-center justify-center">
        {/* Placeholder for a realistic image */}
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-sm text-gray-500">
            {imageUrl ? <img src={imageUrl} alt={title} className="max-h-full object-cover" /> : "Image Placeholder"}
        </div>
    </div>
    <a href="#" className="mt-4 text-sm text-amazon-link hover:text-amazon-orange">
      {linkText}
    </a>
  </div>
);

function Hero() {
  return (
    <section className="relative -mt-6">
      {/* Large Banner Placeholder (simulating the Amazon carousel) */}
      <div className="bg-cover bg-center h-80 mb-6 relative" style={{ backgroundImage: `url('https://source.unsplash.com/random/1200x320?shopping,tech')`, backgroundPosition: 'center 40%' }}>
          {/* Subtle gradient overlay/fade to mimic the slight visual depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-100 via-transparent to-transparent opacity-90"></div>
          {/* A call to action area on the image, usually top-left or bottom-left on Amazon */}
          <div className="absolute bottom-0 left-0 p-8 text-black max-w-lg">
              <h2 className="text-2xl font-bold bg-white p-2 rounded shadow-lg">New Deals Every Hour</h2>
              <p className="text-sm bg-white p-2 mt-1 rounded shadow-lg inline-block">Save up to 70% this week.</p>
          </div>
      </div>
      
      {/* Content Grid - Mimics the 4-card layout directly under the banner */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-40 relative z-10">
        <HeroCard 
          title="Shop by Category" 
          linkText="See all categories"
        />
        <HeroCard 
          title="Deals in Electronics" 
          linkText="Explore deals"
        />
        <HeroCard 
          title="Home Essentials" 
          linkText="Shop now"
        />
        {/* This fourth card is often used for a CTA like "Sign In" or "Find your perfect gift" */}
        <div className="bg-white p-4 shadow-md h-full flex flex-col justify-center items-center text-center">
            <h2 className="text-xl font-bold mb-3">Welcome to E-Shop</h2>
            <p className="text-sm mb-4 text-gray-600">Sign in for the best experience.</p>
            <button className="w-full py-2 text-sm bg-amazon-yellow rounded-lg text-black hover:bg-amazon-orange transition-colors border border-yellow-700 shadow-md">
                Sign in securely
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

function StarIcon({ className }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.955a1 1 0 00.95.69h4.156c.969 0 1.371 1.24.588 1.81l-3.362 2.443a1 1 0 00-.364 1.118l1.286 3.955c.3.921-.755 1.688-1.539 1.118l-3.362-2.443a1 1 0 00-1.176 0l-3.362 2.443c-.784.57-1.838-.197-1.539-1.118l1.286-3.955a1 1 0 00-.364-1.118L2.07 9.382c-.783-.57-.38-1.81.588-1.81h4.156a1 1 0 00.95-.69l1.286-3.955z" />
    </svg>
  );
}

// Custom Amazon price formatting (simulates large dollar, small decimal/currency)
function formatPrice(value) {
  const number = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(number)) return String(value);

  const parts = number.toFixed(2).split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const decimalPart = parts[1];

  return (
    <>
      <sup className="text-sm align-top">$</sup>
      <span className="text-xl font-bold leading-none">{integerPart}</span>
      <sup className="text-sm align-top">{decimalPart}</sup>
    </>
  );
}

export default function ProductCard({ product }) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(product.rating)));
  
  return (
    <article className="flex h-full flex-col rounded bg-white p-3 border border-gray-200 hover:shadow-lg transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-sm bg-white">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-3"
        />
      </div>

      <div className="mt-2 flex flex-1 flex-col">
        {/* Name (Link) */}
        <h3
          title={product.name}
          className="line-clamp-2 text-sm text-amazon-link hover:text-amazon-orange font-medium leading-snug cursor-pointer"
        >
          {product.name}
        </h3>

        {/* Rating and Reviews */}
        <div className="mt-1 flex items-center mb-1">
            <div
                className="flex items-center mr-1"
                aria-label={`Rated ${product.rating} out of 5`}
            >
                {Array.from({ length: 5 }).map((_, idx) => {
                    const filled = idx < roundedRating;
                    return (
                        <StarIcon
                            key={idx}
                            className={[
                                "h-4 w-4",
                                filled ? "text-amazon-yellow" : "text-gray-300",
                            ].join(" ")}
                        />
                    );
                })}
            </div>
            <span className="text-xs text-amazon-link hover:text-amazon-orange">
                {product.reviews.toLocaleString?.() ?? product.reviews}
            </span>
        </div>

        {/* Price */}
        <p className="mt-1">
          {formatPrice(product.price)}
        </p>
        
        {/* Delivery/Shipping info (Simulated) */}
        <div className='text-xs text-gray-700 mt-1'>
            Free shipping
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-3">
            <button className="w-full py-1 text-sm bg-amazon-yellow rounded-lg text-black hover:bg-amazon-orange transition-colors border border-yellow-700 shadow-md">
                Add to Cart
            </button>
        </div>
      </div>
    </article>
  );
}

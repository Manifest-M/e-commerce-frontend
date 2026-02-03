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

function formatPrice(value) {
  const number = typeof value === "number" ? value : Number(value);
  if (Number.isNaN(number)) return String(value);
  return number.toLocaleString(undefined, { style: "currency", currency: "USD" });
}

export default function ProductCard({ product }) {
  const roundedRating = Math.max(0, Math.min(5, Math.round(product.rating)));
  const displayRating = product.rating?.toFixed ? product.rating.toFixed(1) : product.rating;

  return (
    <article className="group flex h-full flex-col rounded-2xl bg-white p-4 shadow-md ring-1 ring-slate-900/5 transition hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-slate-50 ring-1 ring-slate-900/5">
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-3 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3
            title={product.name}
            className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900"
          >
            {product.name}
          </h3>

          <div className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-600/15">
            <StarIcon className="h-4 w-4 text-amber-500" />
            <span>{displayRating}</span>
          </div>
        </div>

        <p className="mt-3 text-xl font-extrabold tracking-tight text-slate-950">
          {formatPrice(product.price)}
        </p>

        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-500">
            {product.reviews.toLocaleString?.() ?? product.reviews} reviews
          </span>
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/15">
            Fast delivery
          </span>
        </div>

        <div className="mt-auto pt-4">
          <div
            className="flex items-center"
            aria-label={`Rated ${product.rating} out of 5`}
          >
            {Array.from({ length: 5 }).map((_, idx) => {
              const filled = idx < roundedRating;
              return (
                <StarIcon
                  key={idx}
                  className={[
                    "h-4 w-4",
                    filled ? "text-amber-500" : "text-slate-200",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}


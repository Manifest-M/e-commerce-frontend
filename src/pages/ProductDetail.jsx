import { Link, useParams } from "react-router-dom";
import { mockProducts } from "../data/mockProducts";

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

export default function ProductDetail() {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="bg-slate-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <h1 className="text-lg font-bold text-slate-950">Product not found</h1>
            <p className="mt-1 text-sm text-slate-600">
              We couldn’t find that item. Try browsing the catalog instead.
            </p>
            <div className="mt-5">
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Back to products
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const roundedRating = Math.max(0, Math.min(5, Math.round(product.rating)));
  const displayRating = product.rating?.toFixed ? product.rating.toFixed(1) : product.rating;

  return (
    <main className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
          <Link className="hover:text-slate-900" to="/">
            Home
          </Link>
          <span className="text-slate-300">/</span>
          <Link className="hover:text-slate-900" to="/products">
            Products
          </Link>
          <span className="text-slate-300">/</span>
          <span className="truncate text-slate-800" title={product.name}>
            {product.name}
          </span>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-900/5">
          <div className="grid gap-0 md:grid-cols-[3fr_2fr]">
            <div className="bg-slate-50 p-8 md:p-10">
              <div className="aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-slate-900/5">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-contain p-6"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="p-8 md:p-10">
              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
                    {product.name}
                  </h1>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
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
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-1 text-xs font-semibold text-amber-900 ring-1 ring-inset ring-amber-600/15">
                      <span>{displayRating}</span>
                      <span className="text-amber-900/60">
                        ({product.reviews.toLocaleString?.() ?? product.reviews})
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex items-end justify-between gap-4 border-t border-slate-100 pt-6">
                  <div>
                    <p className="text-sm text-slate-600">Price</p>
                    <p className="text-3xl font-black tracking-tight text-slate-950">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-inset ring-indigo-600/15">
                    Fast delivery
                  </span>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-900/5">
                  <p className="text-sm font-semibold text-slate-900">Highlights</p>
                  <ul className="mt-2 space-y-1 text-sm text-slate-600">
                    <li>Clean, minimal design with premium feel</li>
                    <li>Reliable everyday performance</li>
                    <li>Easy returns within 30 days</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Add to cart
                  </button>
                  <Link
                    to="/products"
                    className="inline-flex w-full items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-inset ring-slate-900/10 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Back to products
                  </Link>
                </div>

                <p className="text-xs text-slate-500">
                  Tip: This is a mock product detail page using local data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


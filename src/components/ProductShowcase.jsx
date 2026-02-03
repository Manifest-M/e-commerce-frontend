import ProductCard from "./ProductCard";
import { mockProducts } from "../data/mockProducts";

function ArrowRightIcon({ className }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.69L10.22 5.53a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l4.22-4.22H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ProductShowcase() {
  return (
    <section id="products" className="bg-white">
      {/* Use max-w-7xl to keep it aligned with the header content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b pb-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">
              Today's Featured Deals
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-slate-600">
              Limited-time offers and top picks, just like you'd find on Amazon.
            </p>
          </div>

          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-amazon-yellow text-black px-4 py-2 text-sm font-semibold shadow-md transition hover:bg-amazon-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amazon-orange border border-yellow-700">
            Explore All Products
            <ArrowRightIcon className="h-4 w-4" />
          </button>
        </div>

        {/* Dense Grid Layout */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

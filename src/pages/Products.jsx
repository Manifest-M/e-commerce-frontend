import ProductCard from "../components/ProductCard";
import { mockProducts } from "../data/mockProducts";

export default function Products() {
  return (
    <main className="bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
              Products
            </h1>
            <p className="mt-1 text-sm text-slate-600">
              Browse all {mockProducts.length} items.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {mockProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              to={`/products/${product.id}`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}


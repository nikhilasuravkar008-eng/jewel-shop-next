import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <h1 className="text-4xl font-semibold tracking-tight">Suravkar Jewels</h1>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
          
        ))}
      </div>
    </main>
  );
}
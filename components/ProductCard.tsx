import type { Product } from "@/lib/products";

const WHATSAPP = "917276566218";

export default function ProductCard({ product }: { product: Product }) {
  const msg = encodeURIComponent(
    `Hi, I’m interested in ${product.name} (₹${product.price}). Is it available?`
  );

  return (
    <article className="overflow-hidden rounded-3xl bg-neutral-100">
      <div className="relative aspect-square bg-neutral-200">
        {product.isNew && product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-brand">
            New
          </span>
        )}
        {!product.inStock && (
          <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-500">
            Sold out
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-neutral-500">{product.name}</h3>
        <p className="text-neutral-500">₹{product.price}</p>

        {product.inStock ? (
          <a
            href={`https://wa.me/${WHATSAPP}?text=${msg}`}
            className="mt-3 block rounded-full bg-neutral-900 py-2.5 text-center text-sm font-medium text-white"
          >
            Ask on WhatsApp
          </a>
        ) : (
          <span className="mt-3 block rounded-full border border-neutral-300 py-2.5 text-center text-sm text-neutral-500">
            Sold out
          </span>
        )}
      </div>
    </article>
  );
}
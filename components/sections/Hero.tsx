import ButtonCart from "../product/ButtonCart";
import Counter from "../product/Counter";
import ProductGallery from "../product/ProductGallery";
import ProductInfo from "../product/ProductInfo";

export default function Hero() {
  return (
    <main className="mx-auto max-w-6xl px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
        <section>
          <ProductGallery />
        </section>

        <section className="flex flex-col gap-8">
          <div>
            <ProductInfo />
          </div>
          <div className="flex items-center gap-4">
            <Counter />
            <ButtonCart />
          </div>
        </section>
      </div>
    </main>
  );
}

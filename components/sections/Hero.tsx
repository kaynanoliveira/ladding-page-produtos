import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <main className="mx-auto max-w-6xl px-10 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
        <section className="flex flex-col items-center">
          <Image
            src="/images/image-product-1.jpg"
            alt="Hero Image"
            width={420}
            height={500}
            className="rounded-2xl object-cover"
            quality={100}
          />

          <div className="grid grid-cols-4 mt-8 gap-8">
            <Image
              src="/images/image-product-1-thumbnail.jpg"
              alt="Hero Image"
              width={80}
              height={90}
              className="rounded-md object-cover border-3 border-transparent transition-all duration-300 hover:border-orange-500 hover:opacity-45 cursor-pointer"
            />

            <Image
              src="/images/image-product-2-thumbnail.jpg"
              alt="Hero Image"
              width={80}
              height={90}
              className="rounded-md object-cover border-3 border-transparent transition-all duration-300 hover:border-orange-500 hover:opacity-45 cursor-pointer"
              quality={100}
            />

            <Image
              src="/images/image-product-3-thumbnail.jpg"
              alt="Hero Image"
              width={80}
              height={90}
              className="rounded-md object-cover border-3 border-transparent transition-all duration-300 hover:border-orange-500 hover:opacity-45 cursor-pointer"
              quality={100}
            />

            <Image
              src="/images/image-product-4-thumbnail.jpg"
              alt="Hero Image"
              width={80}
              height={90}
              className="rounded-md object-cover border-3 border-transparent transition-all duration-300 hover:border-orange-500 hover:opacity-45 cursor-pointer"
              quality={100}
            />
          </div>
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-sm text-gray-500 tracking-widest">
              SNEAKER COMPANY
            </h1>
            <h1 className="text-5xl font-bold">
              Fall Limited Edition Sneakers
            </h1>
          </div>
          <p className="text-gray-600 font-sans text-lg">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <h1 className="text-3xl font-bold">$125.00</h1>
              <span className="bg-black text-white px-3 py-1 rounded-md font-semibold">
                50%
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-500 line-through">
              $250.00
            </h2>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 h-14 text-black font-bold w-76 cursor-pointer">
            <Image
              src="/images/icon-cart.svg"
              alt="Cart"
              width={20}
              height={20}
              className="brightness-0"
            />
            Add to Cart
          </Button>
        </section>
      </div>
    </main>
  );
}

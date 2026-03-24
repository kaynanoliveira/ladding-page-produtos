import Image from "next/image";
import { Button } from "../ui/button";

export default function ButtonCart() {
  return (
    <div>
      <Button className="bg-orange-500 hover:bg-orange-400 duration-300 py-7 text-black font-bold w-66 cursor-pointer">
        <Image
          src="/images/icon-cart.svg"
          alt="Cart"
          width={20}
          height={20}
          className="brightness-0"
        />
        Add to Cart
      </Button>
    </div>
  );
}

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";

export default function CartDropdown() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="relative">
            <Image
              src="/images/icon-cart.svg"
              alt="Cart"
              width={25}
              height={25}
              className="cursor-pointer hover:brightness-0 transition-all duration-300"
            />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          side="bottom" // Abre para baixo
          sideOffset={25}
          className="w-90 p-0 bg-white rounded-xl shadow-2xl"
        >
          <div className="p-6 border-b-2 border-slate-200">
            <h3 className="font-bold text-lg">Cart</h3>
          </div>
          <div className="flex items-center justify-center py-20 px-6">
            <p className="text-gray-500 font-bold">Your cart is empty.</p>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

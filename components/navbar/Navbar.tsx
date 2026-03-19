import Link from "next/link";
import Image from "next/image";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-8 h-25 flex items-center justify-between border-b-2 border-gray-200">
        <div className="flex items-center gap-12">
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.svg" alt="Logo" width={135} height={20} />
          </Link>

          <nav className="hidden md:flex gap-8 text-gray-500 font-medium h-25">
            <Link
              href="/features"
              className="h-full flex items-center border-b-4 border-transparent hover:text-black hover:border-orange-500 transition-all duration-300"
            >
              Collections
            </Link>
            <Link
              href="/features"
              className="h-full flex items-center border-b-4 border-transparent hover:text-black hover:border-orange-500 transition-all duration-300"
            >
              Men
            </Link>
            <Link
              href="/features"
              className="h-full flex items-center border-b-4 border-transparent hover:text-black hover:border-orange-500 transition-all duration-300"
            >
              Women
            </Link>
            <Link
              href="/features"
              className="h-full flex items-center border-b-4 border-transparent hover:text-black hover:border-orange-500 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/features"
              className="h-full flex items-center border-b-4 border-transparent hover:text-black hover:border-orange-500 transition-all duration-300"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-10">
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
          <Avatar className="w-12 h-12 border-3 border-transparent transition-all  hover:border-orange-500 duration-400 cursor-pointer">
            <AvatarImage
              src="https://github.com/kaynanoliveira.png"
              alt="User Avatar"
            />
            <AvatarFallback>KN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}

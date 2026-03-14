import Link from "next/link";
import Image from "next/image";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-8 h-25 flex items-center justify-between border-b-2 border-gray-200">
        <div className="flex items-center gap-12">
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.svg" alt="Logo" width={135} height={20} />
          </Link>

          <nav className="flex gap-8 text-gray-500 font-medium h-25">
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
        <div className="flex items-center gap-8">
          <Link href="/cart" className="relative">
            <Image
              src="/images/icon-cart.svg"
              alt="Cart"
              width={20}
              height={20}
            />
          </Link>
          <Avatar className="w-10 h-10">
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

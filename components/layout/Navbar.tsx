import Link from "next/link";
import Image from "next/image";
import CartDropdown from "../cart/CartDropdown";
import { NAV_LINKS } from "../constants/navigations";
import UserAvatar from "../product/UserAvatar";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto max-w-6xl px-8 h-25 flex items-center justify-between border-b-2 border-gray-200">
        <div className="flex items-center gap-12">
          <Link href="/" className="shrink-0">
            <Image src="/images/logo.svg" alt="Logo" width={135} height={20} />
          </Link>

          <nav className="hidden md:flex gap-8 text-gray-500 font-medium h-25">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="h-full flex items-center border-b-4 border-transparent hover:text-black hover:border-orange-500 transition-all duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-10">
          <CartDropdown />
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}

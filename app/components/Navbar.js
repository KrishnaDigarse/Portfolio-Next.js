import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-center text-sm mx-auto py-5 md:px-4 px-1 border-b border-zinc-800 z-30 md:mb-30 mb-10">
        <div className="flex items-center lg:max-w-[60%] mx-auto">
          <Link href="/" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Krishna Digarse logo"
                width={28}
                height={28}
                priority
                className="object-contain"
              />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between lg:max-w-[60%] mx-auto">
          <ul className="flex gap-2 lg:flex-row lg:items-center lg:gap-6">
            {["About", "Contact", "Projects"].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="relative inline-block font-bold hover-underline px-1 py-1 text-slate-100"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
}
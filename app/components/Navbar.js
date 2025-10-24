import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex justify-center text-sm mx-auto py-5 md:px-16 px-3 border-b border-zinc-800 z-30 md:mb-40 mb-10">
        <div className="flex items-center max-w-[60%] mx-auto">
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
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-[60%] mx-auto">
          <ul className="flex gap-2 lg:flex-row lg:items-center lg:gap-6">
            {["About", "Contact", "Skills", "Projects"].map((item) => (
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
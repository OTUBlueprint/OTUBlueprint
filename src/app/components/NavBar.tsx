import Link from "next/link";

import Logo from "@/logos/blueprint-logo-with-text.svg"

const NavBar = () => (
    <nav className="flex justify-between p-4 pb-8">
        <Link href="/" className="py-2 px-3">
            <Logo className="fill-[var(--foreground)]" />
        </Link>
        <ul className="flex gap-5 items-center">
            <li className="flex text-[var(--foreground)]"><Link href="/about" className="py-2 px-3 text-lg">About</Link></li>
            <li className="flex text-[var(--foreground)]"><Link href="/projects" className="py-2 px-3 text-lg">Projects</Link></li>
            <li className="flex text-[var(--foreground)]"><Link href="/contact" className="py-2 px-3 text-lg">Contact</Link></li>
        </ul>
    </nav>
);

export default NavBar;
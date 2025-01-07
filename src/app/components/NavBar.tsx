import Link from "next/link";

const NavBar = () => (
    <nav className="flex items-center">
        <ul className="flex gap-6 items-center">
            <li className="flex text-[var(--foreground)]"><Link href="/about" className="">About Us</Link></li>
            <li className="flex text-[var(--foreground)]"><Link href="/projects" className="">Projects</Link></li>
            <li className="flex text-[var(--foreground)]"><Link href="/team" className="">Our Team</Link></li>
            <li className="flex text-[var(--foreground)]"><Link href="/contact" className="">Contact Us</Link></li>
        </ul>
    </nav>
);

export default NavBar;
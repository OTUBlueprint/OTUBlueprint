import Link from "next/link";

const NavBar = () => (
    <nav className="flex items-center text-lg">
        <ul className="flex gap-2 md:gap-12 items-center">
            <li className="flex text-white"><Link href="/about" className="">About Us</Link></li>
            <li className="flex text-white"><Link href="/projects" className="">Projects</Link></li>
            <li className="flex text-white"><Link href="/team" className="">Our Team</Link></li>
            <li className="flex text-white"><Link href="/contact" className="">Contact Us</Link></li>
        </ul>
    </nav>
);

export default NavBar;
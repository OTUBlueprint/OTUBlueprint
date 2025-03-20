import Link from "next/link";

const NavBar = () => (
    <nav className="flex items-center text-lg">
        <ul className="flex gap-2 md:gap-12 items-center">
            <li className="flex">
                <Link href="/about" className="text-white hover:text-blue-500 hover:underline transition-colors duration-300">
                    About Us
                </Link>
            </li>
            <li className="flex">
                <Link href="/projects" className="text-white hover:text-blue-500 hover:underline transition-colors duration-300">
                    Projects
                </Link>
            </li>
            <li className="flex">
                <Link href="/team" className="text-white hover:text-blue-500 hover:underline transition-colors duration-300">
                    Our Team
                </Link>
            </li>
            <li className="flex">
                <Link href="/contact" className="text-white hover:text-blue-500 hover:underline transition-colors duration-300">
                    Contact Us
                </Link>
            </li>
        </ul>
    </nav>
);

export default NavBar;
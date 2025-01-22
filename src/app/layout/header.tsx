import Link from "next/link";
import NavBar from "../components/NavBar";
import Logo from "@/logos/blueprint-logo-with-text.svg";

export default function Header() {
    return (
        <header className="bg-blue sticky top-0 p-2 py-4 z-10">
            <nav className="flex justify-between md:mx-12">
                <Link href="/">
                    <Logo className="fill-white" />
                </Link>
                <NavBar />
            </nav>
        </header>
    );
}
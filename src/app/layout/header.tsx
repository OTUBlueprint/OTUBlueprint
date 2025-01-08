
import Link from "next/link";
import NavBar from "../components/NavBar";
import Logo from "@/logos/blueprint-logo-with-text.svg";

export default function Header() {
    return (
        <header className="bg-blue sticky top-0">
            <nav className="max-w-screen-2xl mx-auto flex flex-wrap space-x-4 lg:space-x-0 lg:justify-between pt-5 md:pt-6 pb-2 md:pb-6 box-border">
                <div className="flex flex-col justify-center">
                <Link href="/">
                    <Logo className="fill-white" />
                </Link>
                </div>
                <div className="hidden lg:flex flex-wrap space-x-7">
                    <NavBar />
                </div>
            </nav>
        </header>
    );
}
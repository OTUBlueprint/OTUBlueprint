
import Link from "next/link";
import NavBar from "../components/NavBar";
import Logo from "@/logos/blueprint-logo-with-text.svg"

export default function Header() {
    return (
        <header className="bg-blue sticky top-0">
            <nav className="content flex flex-wrap space-x-4 lg:space-x-0 lg:justify-between pt-5 md:pt-6 pb-2 md:pb-6 box-border">
                <div className="flex flex-col justify-center">
                <Link href="/">
                    <Logo className="fill-[var(--foreground)]" />
                </Link>
                </div>
                <div className="hidden lg:flex flex-wrap space-x-7">
                    <NavBar />
                    <div className="flex items-center space-x-6 text-sm">
                    </div>
                    <div className="flex space-x-4">
                        <Link className="hover:opacity-100" href="/join">
                            <button className="border-white bg-blue text-white hover:border-transparent hover:bg-sky-200
                                                hover:text-blue-100 h-auto py-2.5 text-sm px-8 border-2 border-solid
                                                rounded-full bg-transparent">
                                Join Our Team!
                            </button>
                        </Link>
                        <Link className="hover:opacity-100" href="/nonprofits">
                            <button className="border-white bg-blue text-blue hover:border-transparent hover:bg-sky-200
                                                hover:text-blue-100 h-auto py-2.5 text-sm px-8 border-2 border-solid
                                                rounded-full bg-white">
                                For Nonprofits
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}
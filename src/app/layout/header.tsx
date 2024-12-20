
import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blueprint-blue sticky top-0">
            <nav className="content flex flex-wrap space-x-4 lg:space-x-0 lg:justify-between pt-5 md:pt-6 pb-2 md:pb-6 box-border">
                <div className="flex flex-col justify-center">
                    <a href="/">
                        <img src="/blueprint.svg" alt="OTU Blueprint Logo" />
                    </a>
                </div>
                <div className="hidden lg:flex flex-wrap space-x-7">
                    <div className="flex items-center space-x-6 text-sm">
                        <Link href="" className="text-white">About Us</Link>
                        <Link href="" className="text-white">Projects</Link>
                        <Link href="" className="text-white">Students</Link>
                        <Link href="" className="text-white">Contact Us</Link>
                    </div>
                    <div className="flex space-x-4">
                        <Link className="hover:opacity-100" href="">
                            <button className="border-white bg-blue text-white hover:border-transparent hover:bg-sky-200
                                                hover:text-blue-100 h-auto py-2.5 text-sm px-8 border-2 border-solid
                                                rounded-full bg-transparent">
                                Join Our Team!
                            </button>
                        </Link>
                        <Link className="hover:opacity-100" href="">
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
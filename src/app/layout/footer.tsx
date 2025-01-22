import Link from "next/link";
import Logo from "@/logos/blueprint-logo-with-text.svg";

export default function Footer() {
    const date = new Date();

    return (
        <footer className="w-full bg-blue text-white">
            <div className="flex flex-row justify-between py-3 px-4 text-lg">
                <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                    <p className="font-bold md:hidden">Pages</p>
                    <Link href="/about" className="hover:text-sky-200">
                        About
                    </Link>
                    <Link href="/projects" className="hover:text-sky-200">
                        Projects
                    </Link>
                    <Link href="/team" className="hover:text-sky-200">
                        Team
                    </Link>
                    <Link href="/contact" className="hover:text-sky-200">
                        Contact
                    </Link>
                </div>
                <div className="flex justify-center items-center gap-4 flex-col md:flex-row">
                    <div className="hidden lg:flex flex-row gap-x-3">
                        {/* TODO: Email Icon */}
                        <a href="mailto:otublueprint@hotmail.com" className="hover:text-sky-200">otublueprint@hotmail.com</a>
                    </div>
                    <div className="flex flex-row gap-x-3">
                        {/* TODO: Insta and discord Icon */}
                    </div>
                    <div className="w-auto h-auto">
                        <Logo className="fill-white object-cover" />
                    </div>
                    <h5 className="text-white font-semibold capitalize text-sm">
                        &copy; OTU Blueprint {date.getFullYear()}
                    </h5>
                </div>
            </div>
        </footer>
    );
}
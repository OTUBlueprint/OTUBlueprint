import Link from "next/link";
import Logo from "@/logos/blueprint-logo-with-text.svg";

export default function Footer() {
    const date = new Date();

    return (
        <footer className="w-full bg-blue">
            <div className="flex flex-row justify-between py-3 px-4">
                <div>
                    <h2 className="text-white mb-4">Pages</h2>
                    <Link href="">
                        <h5 className="text-white mb-4">About Us</h5>
                    </Link>
                    <Link href="">
                        <h5 className="text-white mb-4">Projects</h5>
                    </Link>
                    <Link href="">
                        <h5 className="text-white mb-4">Our Team</h5>
                    </Link>
                    <Link href="">
                        <h5 className="text-white mb-4">Contact</h5>
                    </Link>
                </div>
                <div className="w-auto h-auto">
                    {/* TODO: Add the image */}
                </div>
                <div>
                    <h2 className="text-white mb-3">Contact Us!</h2>
                    <div className="flex flex-row gap-x-3">
                        {/* TODO: Email Icon */}
                        <a href="mailto:otublueprint@hotmail.com" className="text-white font-bold">otublueprint@hotmail.com</a>
                    </div>
                    <div className="flex flex-row gap-x-3">
                        {/* TODO: Insta and discord Icon */}
                    </div>
                    <div className="w-auto h-auto mt-5">
                        <Logo className="fill-white object-cover" />
                    </div>
                    <h5 className="text-white font-semibold capitalize">
                        &copy; OTU Blueprint {date.getFullYear()}
                    </h5>
                </div>
            </div>
        </footer>
    );
}
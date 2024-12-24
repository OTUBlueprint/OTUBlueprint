import Link from "next/link";

export default function Footer() {
    const date = new Date();

    return (
        <footer className="w-full bg-blue md:bg-gradient-to-r md:from-blue md:to-sky-500">
            <div className="content relative z-10 flex flex-col items-center space-y-20 mx-auto pt-14 pb-6">
                <div className="w-full flex flex-col md:flex-row justify-between items-stretch space-y-24 md:space-y-0 md:space-x-20 mt-4">
                    <div className="flex flex-col space-y-5">
                        <Link href="">
                            <h5 className="text-white">About Us</h5>
                        </Link>
                        <Link href="">
                            <h5 className="text-white">Projects</h5>
                        </Link>
                        <Link href="">
                            <h5 className="text-white">Students</h5>
                        </Link>
                        <Link href="">
                            <h5 className="text-white">Join Our Team</h5>
                        </Link>
                        <Link href="">
                            <h5 className="text-white">For Nonprofits</h5>
                        </Link>
                    </div>
                    <div className="relative flex flex-col justify-between items-start space-y-10">
                        <img className="h-7" src="/blueprint.svg" alt="OTU Blueprint" />
                        <div className="relative">
                            <img className="w-80 -ml-4" src="/say-hello.svg" alt="Don't be shy, say hello" />
                            <div className="absolute bottom-0 right-0 flex flex-col space-y-4">
                                <Link href="mailto:">
                                    <h5 className="text-white">Org email here</h5>
                                </Link>
                                <div className="flex items-center space-x-3">
                                    {/* TODO: Social icons */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h5 className="text-white font-semibold">
                    &copy; OTU Blueprint {date.getFullYear()}
                </h5>
            </div>
        </footer>
    );
}
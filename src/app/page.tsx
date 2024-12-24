import Link from "next/link";
import Button from "@/app/components/Button";
import {Fragment} from "react";

export default function Home() {
    return (
        <Fragment>
            <section className="w-full relative z-10 flex flex-col items-center bg-blue">
                <div className="w-full relative mt-80 md:mt-48 lg:mt-40 -mb-16">
                    <img className="min-h-[18rem] object-cover md:min-h-[36rem] lg:w-full"
                         src="/hero-background.svg"
                         alt="People supporting social good" />
                    <div className="absolute -top-1/2 md:top-0 lg:top-1/4 left-1/2 -translate-x-1/2 flex flex-col items-center w-full">
                        <div className="w-full flex flex-col justify-center items-center space-y-5">
                            <div className="flex flex-col items-center">
                                <img className="hidden md:block" src="/blueprint.svg" alt="OTU Blueprint logo" />
                                <div className="text-white text-center">
                                    <h4 className="font-normal">
                                        tech for social good. built by students.
                                    </h4>
                                </div>
                            </div>
                            <div className="flex flex-col md:ml-3 lg:ml-0 space-y-2 md:flex-row md:space-x-4 md:space-y-0">
                                <Link href="" className="hover:opacity-100">
                                    <Button text="See our work" />
                                </Link>
                                <Link href="" className="hover:opacity-100">
                                    <Button text="See our work" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-sky pt-36 lg:pt-32 pb-24 ld:pb-12">
                <h3 className="w-full px-4 lg:w-3/4 mx-auto text-blue text-left md:text-center font-normal lg:font-semibold">
                    Blueprint is a student-run organization that creates technological solutions for nonprofit organizations.
                </h3>
            </section>
            <img className="w-full z-20" src="/hero-wave.svg" alt="People supporting social good" />
            <section className="w-full relative pt-24 pb-24 md:pb-20 px-4 md:px-0 bg-top bg-cover bg-origin-border">
                <div className="absolute -top-8 inset-x-0 bottom-0 overflow-hidden">
                    <img className="w-full absolute -top-80" src="/impact-background.svg" alt="Impact section background" />
                </div>
                <div className="relative z-10 flex flex-col items-start md:items-center space-y-4">
                    <h2 className="text-blue mb-6 md:text-center md:mb-0 w-5/6 md:w-3/4 lg:w-full">
                        Here's how we measure our impact
                    </h2>
                    <hr className="hidden md:block w-48 text-blue" />
                    <div className="w-full md:px-4 flex flex-col items-start md:flex-row md:items-center justify-between space-y-12 md:space-y-0 md:py-12 lg:px-32">
                        <div className="flex flex-col md:items-center space-y-2 md:space-y-4 md:w-1/4">
                            <p className="text-7xl text-sky-400 font-semibold">22</p>
                            <h6 className="md:text-center">Completed nonprofit projects</h6>
                        </div>
                        <div className="flex flex-col md:items-center space-y-2 md:space-y-4 md:-translate-y-3">
                            <p className="text-7xl md:text-8xl text-blue font-semibold">
                                70,000
                            </p>
                            <h6 className="md:text-center">
                                Accumulated volunteer hours
                            </h6>
                        </div>
                        <div className="flex flex-col md:items-center space-y-2 md:space-y-4 md:w-1/4">
                            <p className="text-7xl text-sky-400 font-semibold">
                                468
                            </p>
                            <h6 className="md:text-center">
                                Past and present student volunteers
                            </h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full px-4 relative z-10 flex flex-col items-start md:items-center pt-20 pb-28 md:pb-0 bg-sky md:bg-how-it-works md:bg-top md:bg-cover">
                <h2 className="text-blue">How it Works</h2>
                <hr className="w-48 my-8 text-blue hidden md:block" />
                <img className="hidden md:block" src="/high-five.svg" alt="People giving a high five" />
                <div className="max-w-5xl flex flex-col mt-10 md:mt-16 space-y-16 md:space-y-0 md:flex-row md:divide-x md:divide-blue">
                    <div className="flex flex-col items-start md:text-center md:items-center md:pr-8 lg:pr-16 md:w-1/2">
                        <h3 className="text-blue mb-3 md:mb-0">
                            Student Volunteers
                        </h3>
                        <hr className="w-20 mt-3 mb-6 text-blue hidden md:block" />
                        <h6 className="text-blue uppercase mb-2">Help us help you</h6>
                        <p className="mb-4 md:text-center">
                            Want to make a difference? Want to learn how to create professional products that will make
                            a real world impact? Kickstart your career at UW Blueprint!
                        </p>
                        <Link href="" className="flex space-x-2 text-blue text-base font-extrabold">
                            <span>Join our team</span>
                        </Link>
                    </div>
                    <div className="flex flex-col items-start md:text-center md:items-center md:pl-8 lg:pl-16 md:w-1/2">
                        <h3 className="text-blue mb-3 md:mb-0">
                            Non Profit Partners
                        </h3>
                        <hr className="w-20 mt-3 mb-6 text-blue hidden md:block" />
                        <h6 className="text-blue uppercase mb-2">Trust our expertise</h6>
                        <p className="mb-4 md:text-center">
                            Our team of experienced product managers, project leads, designers, and developers can help
                            you scale your organization with innovative new solutions. Whether you have a project idea
                            already or you’re just curious about how Blueprint can help, we want to be there every step
                            of the way.
                        </p>
                        <Link href="" className="flex space-x-2 text-blue text-base font-extrabold">
                            <span>Contact us</span>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="py-24 px-4 w-full relative flex justify-center items-center">
                {/*  TODO: ADD VIDEO EMBED HERE  */}
            </section>
        </Fragment>
    );
}

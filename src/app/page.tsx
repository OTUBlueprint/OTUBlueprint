import Link from "next/link";
import Button from "@/app/components/Button";
import {Fragment} from "react";
import Logo from "@/logos/blueprint-logo-with-text.svg";

export default function Home() {
    return (
        <Fragment>
            <section className="w-full flex h-dvh">
                <div className="w-1/2 flex flex-col justify-center px-12">
                    {/* TODO: add the image */}
                </div>
                <div className="w-1/2 bg-blue flex flex-col justify-center items-center px-12">
                    <div className="w-auto h-auto">
                        <Logo className="fill-white object-cover" />
                    </div>
                    <p className="text-white mb-3">tech for social good. build by students.</p>
                    <Button background="white" colour="blue">Learn More</Button>
                </div>
            </section>
            <section className="flex flex-row justify-center py-12">
                <div className="max-w-screen-lg">
                    <h1 className="text-blue capitalize">
                        Who are we
                        <hr className="w-20 h-0.5 bg-blue" />
                    </h1>
                    <p className="my-4">
                        We are a group of students at Ontario Tech University that are dedicate to developing technology
                        based solutions for nonprofit organizations.
                    </p>
                    <Button background="blue" colour="white">Meet our Team</Button>
                </div>
            </section>
            <section className="flex flex-row justify-center py-12">
                <div className="max-w-screen-lg">
                    <div className="flex flex-row">
                        <div className="pt-3 px-5 border-r-2 border-blue">
                            <h1 className="text-blue capitalize">
                                Are you interested in our services?
                                <hr className="w-20 h-0.5 bg-blue" />
                            </h1>
                            <p className="my-4 text-center">
                                Our team of skilled product managers, project leaders, designers, and developers is here
                                to help your organization grow with creative solutions.
                            </p>
                        </div>
                        <div className="pt-3 px-5 border-l-2 border-blue">
                            <h1 className="text-blue capitalize">
                                Want to help make a real world impct?
                                <hr className="w-20 h-0.5 bg-blue" />
                            </h1>
                            <p className="my-4 text-center">
                                Ready to make an impact? Learn how to create professional products that drive real world
                                change and jumpstart your career with UW Blueprint!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <Button background="blue" colour="white">Get in touch with us!</Button>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

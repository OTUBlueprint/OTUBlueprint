import Link from "next/link";
import Button from "@/app/components/Button";
import {Fragment} from "react";
import Logo from "@/logos/blueprint-logo-with-text.svg";
import Section from "@/app/components/Section";

export default function Home() {
    return (
        <Fragment>
            <section className="w-full flex flex-col h-dvh md:flex-row md:h-[32rem] lg:h-dvh">
                <div className="w-full h-full flex flex-col justify-center px-12 md:w-1/2 md:h-auto">
                    <img className="w-auto h-auto object-cover" src="assets/otu_building.jpg" alt="Ontario Tech University Building" />
                </div>
                <div className="w-full h-full bg-blue flex flex-col justify-center items-center px-12 md:w-1/2 md:h-auto">
                    <div className="w-auto h-auto">
                        <Logo className="fill-white object-cover" />
                    </div>
                    <p className="text-white text-center my-4">tech for social good. built by students.</p>
                    <Link href="/team" className="text-xl">
                        <Button background="white" colour="blue">Learn More</Button>
                    </Link>
                </div>
            </section>
            <Section heading="Who are we" background="who_are_we_section.svg">
                <p className="my-6 text-center lg:my-16">
                    We are a group of students at Ontario Tech University that are dedicate to developing technology
                    based solutions for nonprofit organizations.
                </p>
                <div className="flex flex-row justify-center">
                    <Link href="/team" className="mx-auto">
                        <Button background="blue" colour="white">Meet our Team</Button>
                    </Link>
                </div>
                <div className="mt-6 md:mt-16">
                    <div className="flex flex-col md:flex-row">
                        <div className="p-6 border-r border-blue md:p-10">
                            <div className="flex flex-col items-center">
                                <h3 className="text-blue">Are you interested in our services?</h3>
                                <div className="w-24 mt-2 border border-blue" />
                            </div>
                            <p className="my-4 text-center">
                                Our team of skilled product managers, project leaders, designers, and
                                developers is here to help your organization grow with creative solutions.
                            </p>
                        </div>
                        <div className="p-6 border-l border-blue md:p-10">
                            <div className="flex flex-col items-center">
                                <h3 className="text-blue">Want to help make a real world impact?</h3>
                                <div className="w-24 mt-2 border border-blue" />
                            </div>
                            <p className="my-4 text-center">
                                Ready to make an impact? Learn how to create professional products that drive real world
                                change and jumpstart your career with OTU Blueprint!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center mt-0 md:mt-16">
                        <Link href="/contact" className="text-xl"><Button background="blue" colour="white">Get in touch with us!</Button></Link>
                    </div>
                </div>
            </Section>
        </Fragment>
    );
}

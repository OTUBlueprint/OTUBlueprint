import { Fragment } from "react";
import InternalPageHeader from "@/app/components/InternalPageHeader";
import Section from "@/app/components/Section";

export default function Projects() {
    return (
        <Fragment>
            <InternalPageHeader imageSrc="projectteam.png" imageAlt="People working on project" title="Projects" align="left">
                <p className="text-white md:text-lg">
                    At OTU Blueprint, we value transparency and accessibility, which is why all of our work is open source.
                    We strive to develop technology that strengthens connections and promotes inclusivity within the community.
                </p>
            </InternalPageHeader>
            <Section heading="Our Projects">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <img className="icon object-cover" src="/assets/Tools.png" alt="Project tools icon" />
                    <p className="text-center">
                        We're excited to be working on some amazing projects. Stay tuned for updates as we bring them to life!
                    </p>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <div className="bg-blue-600 text-blue p-6 rounded-lg shadow-lg text-center w-full max-w-md border-2 border-blue-600">
                        <h3 className="font-bold text-xl mb-2">Project NINE</h3>
                        <p className="text-lg">Stay tuned for more updates!</p>
                    </div>
                </div>
            </Section>
        </Fragment>
    );
}

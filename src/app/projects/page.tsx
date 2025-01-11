import {Fragment} from "react";
import InternalPageHeader from "@/app/components/InternalPageHeader";
import Section from "@/app/components/Section";

export default function Projects() {
    return (
        <Fragment>
            <InternalPageHeader imageSrc="assets/projectteam.png" imageAlt="People working on project" title="Projects" align="left">
                At OTU Blueprint, we value transparency and accessibility, which is why all of our work is open source.
                We strive to develop technology that strengthens connections and promotes inclusivity within the community.
            </InternalPageHeader>
            <Section heading="Our Projects">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <img className="icon object-cover" src="/assets/Tools.png" alt="Project tools icon" />
                    <p className="text-center">We're excited to be working on some amazing projects. Stay tuned for updates as we bring them to life!</p>
                </div>
            </Section>
        </Fragment>
    );
}

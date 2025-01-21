import {Fragment} from "react";
import InternalPageHeader from "@/app/components/InternalPageHeader";
import Button from "@/app/components/Button";
import Section from "@/app/components/Section";

const values = [
    {
        image: '/assets/Tools.png',
        title: 'Inclusivity',
        description: 'Our website and apps are designed in accordance with web accessibility standards to ensure inclusivity for all users.'
    },
    {
        image: '/assets/Tools.png',
        title: 'Community Good',
        description: 'We partner with nonprofits, working with integrity and care to deliver quality projects that address their needs and foster growth.'
    },
    {
        image: '/assets/Tools.png',
        title: 'Impact',
        description: 'We share a commitment to continuous learning and strive to empower communities through digital media, helping them expand their reach and create a greater positive impact.'
    },
    {
        image: '/assets/Tools.png',
        title: 'Positive Culture',
        description: 'We foster a respectful environment where every voice is valued as we work together towards our shared vision of community change.'
    },
]

export default function About() {
    return (
        <Fragment>
            <InternalPageHeader imageSrc="assets/projectteam.png" imageAlt="People working on project" title="About Us" align="right">
                <p className="text-white md:text-lg">Bringing technology within reach to empower those who build and support communities.</p>
                <Button className="mt-4" background="white" colour="blue">Check out our Work</Button>
            </InternalPageHeader>
            <Section heading="Who are we" background="about-pattern">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <p className="text-blue text-bold text-center">Tech for Good</p>
                    <p>
                        We are a team of Ontario Tech University students collaborate with nonprofits each term to develop
                        technology that addresses social issues and creates positive community impact.
                    </p>
                </div>
            </Section>
            <Section heading="What we do" background="about-pattern">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <p className="text-blue text-bold text-center">Pro bono tech solutions for nonprofits</p>
                    <p>
                        We offer free technology services including website and mobile app development, and data analytics
                        to local nonprofits, collaborating closely with them to improve their operations.
                    </p>
                </div>
            </Section>
            <Section heading="What is Blueprint" background="about-pattern">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <p className="text-blue text-bold text-center">Serving Communities Across Universities</p>
                    <p>
                        Blueprint, established at UC Berkeley in 2012, creates free software for nonprofits to advance
                        technology's positive impact on society.
                    </p>
                    <Button background="blue" colour="white">Learn more</Button>
                </div>
            </Section>
            <Section heading="Our Values" background="about-pattern">
                <div className="flex flex-row justify-start mt-6 gap-x-4">
                    {values.map(value => {
                        return(
                            <div className="flex flex-col items-center gap-y-4 px-3">
                                <img className="icon object-cover" src={value.image} alt="Project tools icon" />
                                <h5 className="text-blue">{value.title}</h5>
                                <p className="text-center">
                                    {value.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </Section>
            <Section heading="Sponsors" background="about-pattern">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <img className="icon object-cover" src="/assets/Tools.png" alt="Project tools icon" />
                    <p className="text-center">
                        We are currently seeking sponsors. If you are interested, please get in touch with us.
                    </p>
                    <Button background="blue" colour="white">Reach out!</Button>
                </div>
            </Section>
        </Fragment>
    );
}

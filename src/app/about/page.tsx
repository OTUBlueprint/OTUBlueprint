import {Fragment} from "react";
import InternalPageHeader from "@/app/components/InternalPageHeader";
import Button from "@/app/components/Button";
import Section from "@/app/components/Section";

const values = [
    {
        image: '/assets/inclusivity_icon.svg',
        title: 'Inclusivity',
        description: 'Our website and apps are designed in accordance with web accessibility standards to ensure inclusivity for all users.'
    },
    {
        image: '/assets/community_good_icon.svg',
        title: 'Community Good',
        description: 'We partner with nonprofits, working with integrity and care to deliver quality projects that address their needs and foster growth.'
    },
    {
        image: '/assets/impact_icon.svg',
        title: 'Impact',
        description: 'We share a commitment to continuous learning and strive to empower communities through digital media, helping them expand their reach and create a greater positive impact.'
    },
    {
        image: '/assets/positive_culture_icon.svg',
        title: 'Positive Culture',
        description: 'We foster a respectful environment where every voice is valued as we work together towards our shared vision of community change.'
    },
]

export default function About() {
    return (
        <Fragment>
            <InternalPageHeader imageSrc="about_us.svg" imageAlt="People working on project" title="About Us" align="right">
                <p className="text-white md:text-lg">Bringing technology within reach to empower those who build and support communities.</p>
                <Button className="mt-4" background="white" colour="blue">Check out our Work</Button>
            </InternalPageHeader>
            <Section heading="Who are we">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <h5 className="text-blue font-bold text-center">Tech for Good</h5>
                    <p>
                        We are a team of Ontario Tech University students collaborate with nonprofits each term to develop
                        technology that addresses social issues and creates positive community impact.
                    </p>
                </div>
            </Section>
            <Section heading="What we do">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <h5 className="text-blue font-bold text-center">Pro bono tech solutions for nonprofits</h5>
                    <p>
                        We offer free technology services including website and mobile app development, and data analytics
                        to local nonprofits, collaborating closely with them to improve their operations.
                    </p>
                </div>
            </Section>
            <Section heading="What is Blueprint">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <h5 className="text-blue font-bold text-center">Serving Communities Across Universities</h5>
                    <p>
                        Blueprint, established at UC Berkeley in 2012, creates free software for nonprofits to advance
                        technology's positive impact on society.
                    </p>
                    <Button background="blue" colour="white">Learn more</Button>
                </div>
            </Section>
            <Section heading="Our Values">
                <div className="flex flex-row justify-start mt-6 gap-x-4">
                    {values.map(value => {
                        return(
                            <div className="w-3/12 flex flex-col items-center gap-y-4 px-3">
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
            <Section heading="Sponsors">
                <div className="flex flex-col items-center mt-6 gap-y-4">
                    <img className="icon object-cover" src="/assets/sponsors_icon.svg" alt="Project tools icon" />
                    <p className="text-center">
                        We are currently seeking sponsors. If you are interested, please get in touch with us.
                    </p>
                    <Button background="blue" colour="white">Reach out!</Button>
                </div>
            </Section>
        </Fragment>
    );
}

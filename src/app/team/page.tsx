import { Fragment } from "react";
import InternalPageHeader from "../components/InternalPageHeader";
import Section from "@/app/components/Section";

// TeamMember Component
interface TeamMemberProps {
    src: string;
    name: string;
    role: string;
    className?: string; // Add className to the props
}

const TeamMember: React.FC<TeamMemberProps> = ({ src, name, role, className }) => {
    return (
        <div className={`text-center ${className}`}> {/* Apply className here */}
            <img
                src={src}
                alt={name}
                className="rounded-full w-32 h-32 object-cover mx-auto" // Ensure the image is not stretched
            />
            <h3 className="mt-4 text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
        </div>
    );
};

// Team Data and Main Component
interface TeamMemberData {
    src: string;
    name: string;
    role: string;
    rank: number;
}

const teamMembers: TeamMemberData[] = [
    { src: 'team/teammembers/execs/jb-copres.jpg', name: 'Jun-Bin Cheng', role: 'Co-President', rank: 0 }, // Rank 0 for co-presidents
    { src: 'team/teammembers/placeholder.jpg', name: 'Kumayl Zafar', role: 'Co-President', rank: 0 }, // Rank 0 for co-presidents
    { src: 'team/teammembers/execs/AaronChristian-projects.jpg', name: 'Aaron Christian', role: 'Projects', rank: 1 }, // Rank 1 for other execs
    { src: 'team/teammembers/placeholder.jpg', name: 'Fia Rehman', role: 'External', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Kevin Massey', role: 'Internal', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Francis Wong', role: 'Operations', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Nimra Rehman', role: 'Design', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Mikael Arian', role: 'Engineering', rank: 1 },
    { src: 'team/teammembers/execs/Krishna-talent.png', name: 'Krishna Mallick', role: 'Talent', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Rebecca', role: 'External - Social Media', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Open', role: 'External - Events', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Open', role: 'External - Outreach', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Open', role: 'Operations - Finance', rank: 1 },
    { src: 'team/teammembers/placeholder.jpg', name: 'Open', role: 'Operations - Logistics', rank: 1 },
];

function groupByRank(members: TeamMemberData[]) {
    return members.reduce((acc, member) => {
        if (!acc[member.rank]) acc[member.rank] = [];
        acc[member.rank].push(member);
        return acc;
    }, {} as Record<number, TeamMemberData[]>);
}

export default function Team() {
    const groupedMembers = groupByRank(teamMembers);
    const rankTitles = {
        0: 'Co-Presidents', // Title for rank 0
        1: 'Executive Team', // Title for rank 1
    };

    return (
        <Fragment>
            <InternalPageHeader imageSrc="team.svg" imageAlt="Photo of people yapping." title="Our Team" align="left">
                <p className="text-white">
                    OTU Blueprint is a team of students devoted to serving their community, using their technological
                    expertise to bring that mission to life.
                </p>
            </InternalPageHeader>
            <Section heading="Meet the Team" background="meet_team_section.svg">
                {/* Co-Presidents Section */}
                {groupedMembers[0] && (
                    <div className="my-10">
                        <h2 className="font-semibold text-blue text-center">{rankTitles[0]}</h2>
                        <div className="flex justify-center gap-8 p-8 md:p-20">
                            {groupedMembers[0].map((member, index) => (
                                <TeamMember
                                    key={index}
                                    src={member.src}
                                    name={member.name}
                                    role={member.role || ""}
                                    className="w-full h-auto" // Pass className here
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Executive Team Section */}
                {groupedMembers[1] && (
                    <div className="my-10">
                        <h2 className="font-semibold text-blue md:text-center">{rankTitles[1]}</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8 md:p-20 md:max-w-6xl mx-auto">
                            {groupedMembers[1].map((member, index) => (
                                <TeamMember
                                    key={index}
                                    src={member.src}
                                    name={member.name}
                                    role={member.role || ""}
                                    className="w-full h-auto" // Pass className here
                                />
                            ))}
                        </div>
                    </div>
                )}
            </Section>
        </Fragment>
    );
}
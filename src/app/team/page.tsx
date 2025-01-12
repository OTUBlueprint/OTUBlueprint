import { Fragment } from "react";
import TeamMember from "../components/TeamMember";
import InternalPageHeader from "../components/InternalPageHeader";

const teamMembers = [
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Jaime Williams', role: 'President', rank: 1 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'James Smith', role: 'Vice-President', rank: 1 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Kendrick Jaqui', role: 'VP of Engineering', rank: 1 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Pick Carup', role: 'VP of Internal Communications', rank: 1 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Brandon Sami', role: 'Lead Designer', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Jevante Banso', role: 'Designer', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Toby Fox', role: 'Designer', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Alice Johnson', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Bob Brown', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Steve Jobs', role: 'Designer', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Alice Johnson', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Bob Brown', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Steve Jobs', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Alice Johnson', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Bob Brown', rank: 2 },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Steve Wilkerwilson-Jamers', rank: 2 },
];

function groupByRank(members) {
  return members.reduce((acc, member) => {
    if (!acc[member.rank]) acc[member.rank] = [];
    acc[member.rank].push(member);
    return acc;
  }, {});
}

export default function Team() {
  const groupedMembers = groupByRank(teamMembers);
  const rankTitles = {
    1: 'Executive Team',
    2: 'Developer',
  };

  return (
    <Fragment>
      <InternalPageHeader imageSrc="team/TeamPhoto.png" imageAlt="Photo of people yapping." title="Our Team" align="left">
        OTU Blueprint is a team of students devoted to serving their community, using their technological expertise to bring that mission to life.
      </InternalPageHeader>
      <div className="bg-white p-10 relative">
        <div className="flex flex-col items-center">
          <p className="text-blue text-3xl">Meet the Team</p>
          <div className="w-24 mt-2 border border-blue" />
        </div>
        {Object.entries(groupedMembers).map(([rank, members]) => (
          <div key={rank} className="my-10">
            <h2 className="text-xl font-semibold text-blue md:text-center">{rankTitles[rank]}</h2>
            <div className="flex flex-wrap justify-center p-8 md:p-20 gap-8 md:gap-12 md:max-w-6xl mx-auto">
              {members.map((member, index) => (
                <div className="flex justify-center w-32 md:w-40">
                  <TeamMember 
                    key={index}
                    src={member.src}
                    name={member.name}
                    role={member.role || ""}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* Vector Graphics in Each Corner */}
        <div className="absolute top-0 left-0 p-4">
          <img src="team/Diamonds.svg" className="w-32 lg:w-64 rotate-180" />
        </div>
        <div className="absolute top-0 right-0">
          <img src="team/TopRight.svg" className="w-32 lg:w-64" />
        </div>
        <div className="absolute bottom-0 left-0">
          <img src="team/BottomLeft.svg" className="w-32 lg:w-64" />
        </div>
        <div className="absolute bottom-0 right-0 p-4">
          <img src="team/Diamonds.svg" className="w-32 lg:w-64" />
        </div>
      </div>
    </Fragment>
  );
}

import TeamMember from "../components/TeamMember";

const teamMembers = [
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Tyler Blevins', role: 'President' },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Toby Fox', role: 'Vice-President' },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Alice Johnson', role: 'VP of Engineering' },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Bob Brown', role: 'Developer' },
  { src: '/team/IbisPaintedEdges.jpeg', name: 'Steve Jobs', role: 'Designer' },
];

export default function Team() {
  return (
    <div className="bg-white p-10">
      <div className="flex flex-col items-center">
        <p className="text-blue text-3xl">Meet the Team</p>
        <div className="w-24 mt-2 border border-blue" />
      </div>
      <div className="flex flex-wrap justify-center p-8 md:p-20 gap-8 md:gap-12">
        {teamMembers.map((member, index) => (
          <div key={index}>
            <TeamMember 
              key={index}
              src={member.src}
              name={member.name}
              role={member.role}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

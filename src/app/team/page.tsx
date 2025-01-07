import TeamMember from "../components/TeamMember";

const teamMembers = [
  { src: '/team/IbisPaintedEdges.jpeg', width: 150, height: 150, name: 'Tyler Blevins', role: 'President' },
  { src: '/team/IbisPaintedEdges.jpeg', width: 150, height: 150, name: 'Toby Fox', role: 'Vice-President' },
  { src: '/team/IbisPaintedEdges.jpeg', width: 150, height: 150, name: 'Alice Johnson', role: 'VP of Engineering' },
  { src: '/team/IbisPaintedEdges.jpeg', width: 150, height: 150, name: 'Bob Brown', role: 'Developer' },
  { src: '/team/IbisPaintedEdges.jpeg', width: 150, height: 150, name: 'Steve Jobs', role: 'Designer' },
];

export default function Team() {
  return (
    <div className="bg-white p-10">
      <div className="flex flex-col items-center">
        <p className="text-blue text-3xl">Meet the Team</p>
        <div className="w-24 mt-2 border border-blue" />
      </div>
      <div className="flex p-20 gap-12">
        {teamMembers.map((member, index) => (
          <div className="w-1/2 flex flex-col items-center gap-2" key={index}>
            <TeamMember 
              key={index}
              src={member.src}
              width={member.width}
              height={member.height}
              alt={member.name}
            />
            <p className="text-blue text-xl">{member.name}</p>
            <p className="text-blue">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

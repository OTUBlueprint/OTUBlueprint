import Image from 'next/image';

const TeamMember = ({ src, width = 150, height = 150, name = "Team Member", role = "Developer" }) => (
  <div className="flex flex-col items-center gap-1">
    <Image 
      src={src}
      width={width}
      height={height}
      alt={name}
      className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full overflow-hidden"
    />
    <p className="text-blue text-xl">{name}</p>
    <p className="text-blue">{role}</p>
  </div>
);

export default TeamMember;

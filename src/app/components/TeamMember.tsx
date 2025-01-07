import Image from 'next/image';

const TeamMember = ({ src, width = 100, height = 100, alt = "Team member" }) => (
  <div className="">
    <Image 
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  </div>
);

export default TeamMember;

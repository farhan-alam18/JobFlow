import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import { Button } from './ui/button';

interface SectionData {
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  linkPath: string;
}

interface SectionProps {
  data: SectionData[];
}

const Section: React.FC<SectionProps> = ({ data }) => {
  return (
    <div className="flex gap-10 justify-between mx-10">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-3 w-[500px] items-center text-center">
          {item.icon}
          <p className="font-semibold text-xl">{item.title}</p>
          <p>{item.description}</p>
          <Button asChild variant='ghost'>
            <Link href={item.linkPath}>{item.link} <span className="ml-2"><MdOutlineArrowOutward /></span></Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Section;

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
    <div className="flex flex-col lg:flex-row gap-10 justify-between items-center">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-3 w-[300px] lg:w-[400px]   items-center text-center border py-10 rounded-2xl shadow-md ">
          {item.icon}
          <p className="font-semibold text-xl text-balance">{item.title}</p>
          <p className='text-balance'>{item.description}</p>
          <Button asChild variant='secondary'>
            <Link href={item.linkPath}>{item.link} <span className="ml-2"><MdOutlineArrowOutward /></span></Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Section;

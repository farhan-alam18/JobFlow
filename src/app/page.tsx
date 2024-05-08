import Link from "next/link";
// import { Button } from "./ui/button";
import { CgTrack } from "react-icons/cg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Section from "@/components/Section";
import { LuClipboardList } from "react-icons/lu";
import { GrUserExpert } from "react-icons/gr";
import { Button } from "@/components/ui/button";

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
export default function Header() {
  const section: SectionData[] = [
    {
      icon: <CgTrack size={30} />,
      title: "Track job apps, stay organized.",
      description:
        "JobFlow is designed to help you prepare for interviews and stand out from the competition.",
      link: "Learn More",
      linkPath: "",
    },
    {
      icon: <LuClipboardList size={30} />,
      title: " Find personalized job listings.",
      description:
        "Stay up-to-date with the latest job market trends and industry insights.",
      link: "Sign Up",
      linkPath: "",
    },
    {
      icon: <GrUserExpert size={30} />,
      title: "Expert career advice from pros.",
      description:
        "Connect with a network of employers and expand your professional connections.",
      link: "Join Now",
      linkPath: "",
    },
  ];

  return (
    <>
      <header className="my-32 text-center flex flex-col gap-3">
        <p className="text-5xl p-2">
          Streamline your job search <br />{" "}
          <span>
            with <span className="font-bold">JobFlow</span>
          </span>
        </p>
        <p className="">
          The comprehensive job onboarding platform designed to make your
          transition into a new job seamless and efficient.
        </p>
        <div className="my-5">
          <Button asChild className="mx-2">
            <Link href="">
              Learn More{" "}
              <span className="ml-2">
                <MdOutlineArrowOutward />
              </span>
            </Link>
          </Button>
          <Button asChild className="mx-2" variant="outline">
            <Link href="">Sign Up</Link>
          </Button>
        </div>
      </header>

      <section className="flex flex-col gap-20 mx-10 max-w-[]">
        <p className="text-4xl text-center">
          Simplify your job onboarding process with{" "}
          <span className="font-bold">JobFlow</span>.
        </p>
        <Section data={section} />
      </section>

      <section className="flex gap-56 items-center justify-between my-28 mx-20 border-2 p-10 ">
        <div>
          <p className="text-2xl font-medium tracking-tighter my-1">
            Calling All Employers: Elevate Your Hiring Strategy Now!
          </p>
          <p className="text-sm">
            Unlock Your Hiring Potential with Effortless Job Posting or a
            Personalized Demo Experience.
          </p>
        </div>
        <div className="flex gap-5">
          <Button asChild>
            <Link href="">Post a Job</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="">Request a Demo</Link>
          </Button>
        </div>
      </section>
    </>
  );
}

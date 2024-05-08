import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  const f1 = [
    {
      name: "About Us",
      href: "/aboutus",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "FAQ",
      href: "/faq",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  const f2 = [
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Solutions",
      href: "/solutions",
    },
    {
      name: "Case Studies",
      href: "/casestudies",
    },
    {
      name: "Training",
      href: "/training",
    },
  ];
  return (
    <footer className="flex flex-col border-2 pt-10">
      <div className="flex justify-around">
        <p className="text-2xl font-bold">JobFlow</p>
        <div className="flex flex-col">
          {f1.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
          {f2.map((item, index) => (
            <Link href={item.href} key={index}>
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium">Subscribe</p>
          <p className="text-sm">Join our mailing list to receive updates and exclusive offers. </p>
          <div className="flex gap-3">
            <Input placeholder="Enter you email address.." className="max-w-[350px]"/>
            <Button asChild >
              <Link href="">Subscribe</Link>
            </Button>
          </div>
          <p className="text-xs">
            By subscribing you agree to our Privacy Policy and continue to
            receive updates.
          </p>
        </div>
      </div>

      <div className="flex justify-between mx-28 border-t-2 mt-5 pt-5 pb-5">
        <div className="flex gap-8 text-xs">
            <p>&copy; 2024 JobFLow. All rights reserved.</p>
            <Link href='' className="underline">Privacy Policy</Link>
            <Link href='' className="underline">Terms of Service</Link>
            <Link href='' className="underline">Cookie Policy</Link>
        </div>
        <div className="flex gap-3">
            <Link href='www.facebook.com'><FaFacebook/></Link>
            <Link href='www.instagram.com'><FaInstagram/></Link>
            <Link href='www.linkedin.com'><FaLinkedin/></Link>
            <Link href='www.youtube.com'><FaYoutube/></Link>
            <Link href='www.twitter.com/'><FaXTwitter/></Link>
        </div>
      </div>

    </footer>
  );
}
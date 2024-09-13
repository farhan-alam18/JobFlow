import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  const f1 = ["About Us", "Contact", "FAQ", "Blog"];
  const f2 = ["Services", "Solutions", "Case Studies", "Training"];

  return (
    <footer className="flex flex-col border-2 pt-10 mt-28">
      <div className="flex flex-col lg:flex-row lg:mx-20 items-center gap-5">
        <div className="flex flex-grow gap-10">
        <p className="text-2xl font-bold">JobFlow</p>
          <div className="flex flex-col gap-2 px-10">
            {f1.map((item, index) => (
              <Link href="" key={index}>
                {item}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 px-10">
            {f2.map((item, index) => (
              <Link href="" key={index}>
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium">Subscribe</p>
          <p className="text-sm">
            Join our mailing list to receive updates and exclusive offers.{" "}
          </p>
          <div className="flex gap-3">
            <Input
              placeholder="Enter you email address.."
              className="max-w-[350px]"
            />
            <Button asChild>
              <Link href="">Subscribe</Link>
            </Button>
          </div>
          <p className="text-xs">
            By subscribing you agree to our Privacy Policy and continue to
            receive updates.
          </p>
        </div>
      </div>

      <div className="container mt-5 flex flex-col lg:flex-row justify-between border-t-2 pb-5 pt-5 gap-5">
        <div className="flex gap-8 text-xs">
          <p>&copy; 2024 JobFLow. All rights reserved.</p>
          <Link href="" className="underline">
            Privacy Policy
          </Link>
          <Link href="" className="underline">
            Terms of Service
          </Link>
          <Link href="" className="underline">
            Cookie Policy
          </Link>
        </div>
        <div className="flex gap-3">
          <Link href="www.facebook.com">
            <FaFacebook />
          </Link>
          <Link href="www.instagram.com">
            <FaInstagram />
          </Link>
          <Link href="www.linkedin.com">
            <FaLinkedin />
          </Link>
          <Link href="www.youtube.com">
            <FaYoutube />
          </Link>
          <Link href="www.twitter.com/">
            <FaXTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}

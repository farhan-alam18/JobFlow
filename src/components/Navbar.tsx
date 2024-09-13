import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="my-5 mx-7 flex items-end justify-between border-b-2 pb-5">
      <div className="text-3xl font-bold tracking-tighter">
        <Link href="/">JobFlow.</Link>
      </div>
      <div className="flex items-center gap-10">
        <Link href="/discover">Discover</Link>
        <Button asChild>
        <Link href="/jobs/new">Post a job</Link>
        </Button>
      </div>
    </div>
  );
}

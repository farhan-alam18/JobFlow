import Link from "next/link";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="my-5 flex items-end justify-between border-b-2 px-5 pb-5 shadow-sm">
      <div className="text-3xl font-bold tracking-tighter">
        <Link href="/">JobFlow.</Link>
      </div>
      <div className="flex items-center gap-3">
        <Button asChild variant="outline">
          <Link href="/discover">Discover</Link>
        </Button>
        <Button asChild>
          <Link href="/jobs/new">Post a job</Link>
        </Button>
      </div>
    </div>
  );
}

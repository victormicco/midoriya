"use client";
import { Worm } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { DrawerAbout } from "./drawer";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="/">
        <Worm className="h-6 w-6" />
        <span className="sr-only">Midoriya</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/tool"
        >
          Try it
        </Link>
        <DrawerAbout />
        <a
          className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline"
          onClick={() => {
            toast("You ain't got to pay anything🍾", {
              description: "You can give a star to the repository as a payment",
            });
          }}
        >
          Price
        </a>
      </nav>
    </header>
  );
}

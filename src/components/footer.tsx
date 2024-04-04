"use client";
import { Github, Home, Linkedin } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 border-t p-4 backdrop-blur-lg dark:border-gray-800">
      <div className="container flex items-center justify-between  text-sm">
        <div className="flex items-center gap-4">
          <Home
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              window.open("/");
            }}
            target="_blank"
          />
          <Linkedin
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              window.open("https://www.linkedin.com/in/victormicco");
            }}
          />
          <Github
            className="h-5 w-5 cursor-pointer"
            onClick={() => {
              window.open("https://www.github.com/victormicco");
            }}
          />
          <ThemeToggle />
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Developed with 💚 by Victor Micco
        </p>
      </div>
    </footer>
  );
}

"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Application } from "@splinetool/runtime";

export default function HeroSection() {
  useEffect(() => {
    const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/F3cBG2jsmNnrbHx8/scene.splinecode");

    canvas.width = canvas.width * 0.5; // Decrease canvas width by half
    canvas.height = canvas.height * 0.5; // Decrease canvas height by half

    return () => {
      // Cleanup if necessary
    };
  }, []);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <canvas id="canvas3d" className="h-screen rounded-3xl"></canvas>
          <div className=" my-52 flex h-full flex-col justify-center space-y-4 rounded-3xl border px-20">
            <div className="flex flex-col space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The complete platform for building{" "}
                <span className="bg-gradient-to-r from-green-500 via-green-900 to-green-500 bg-clip-text   tracking-tighter text-transparent ">
                  awesome
                </span>{" "}
                quiz
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                Give your team the toolkit to stop configuring and start
                innovating. Securely build, deploy, and scale the best web
                experiences.
              </p>
              <Button>Get started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

<<<<<<< HEAD
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AboutAccordion } from "./AboutAccordion";

export function DrawerAbout() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <a className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline">
          About
        </a>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>About Section</DrawerTitle>
            <DrawerDescription>
              Check some information about this project
            </DrawerDescription>
          </DrawerHeader>
          <AboutAccordion />
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close it</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
=======
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AboutAccordion } from "./AboutAccordion";

export function DrawerAbout() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <a className="cursor-pointer text-sm font-medium underline-offset-4 hover:underline">
          About
        </a>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>About Section</DrawerTitle>
            <DrawerDescription>
              Check some information about this project
            </DrawerDescription>
          </DrawerHeader>
          <AboutAccordion />
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close it</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
>>>>>>> f2cd5ecfb7519d0b21f026f81d034c95047bf1cf

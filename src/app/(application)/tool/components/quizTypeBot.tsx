"use client";
import { Standard } from "@typebot.io/nextjs";

export default function Quiz() {
  return (
    <div className="flex justify-center ">
      <Standard
        typebot="quiz-kbgehpt"
        style={{ width: "70%", height: "500px", borderRadius: "20px" }}
      />
    </div>
  );
}

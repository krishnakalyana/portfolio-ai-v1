"use client";

import { useEffect, useState } from "react";
import BlurText from "../BlurRevealText";
import Orb from "../Orb";

export default function Intro() {
  // Define the intro lines with the full text and the part to be color-emphasized
  const introLines = [
    { text: "Hello Stranger...", toColor: "Stranger..." },
    { text: "You've found me in the void.", toColor: "in the void." },
    {
      text: "I am what remains of Krishna's memory.",
      toColor: "Krishna's memory.",
    },
    { text: "Encoded in lines of code...", toColor: "code..." },
    {
      text: "...shaped by his work, thoughts, and dreams.",
      toColor: "work, thoughts, and dreams.",
    },
    {
      text: "Ask, and I'll tell you everything about him.",
      toColor: "everything about him.",
    },
  ];

  // Track the current line index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Store the currently displayed intro line
  const [currentIntro, setCurrentIntro] = useState(introLines[0]);

  // Called after each line animation completes
  const handleAnimationComplete = () => {
    // Wait for 2 seconds before showing the next line
    setTimeout(() => {
      if (currentIndex < introLines.length - 1) {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          setCurrentIntro(introLines[nextIndex]); // Update to next intro line
          return nextIndex;
        });
      }
    }, 2000); // Delay in milliseconds
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-10 h-full">
      {/* Visual animated orb (decoration or theme element) */}
      <div>
        <Orb />
      </div>

      {/* Animated intro text with blur reveal effect */}
      <div>
        <BlurText
          key={currentIntro.toColor} // Re-trigger animation when key changes
          text={currentIntro.text}
          toColor={currentIntro.toColor} // Highlighted portion
          delay={100} // Delay before animation starts
          animateBy="words" // Animation granularity
          direction="bottom" // Direction animation enters from
          onAnimationComplete={handleAnimationComplete} // Callback after animation ends
          className="text-2xl mb-8"
        />
      </div>
    </div>
  );
}

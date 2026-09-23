"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { withBasePath } from "@/shared/config/base-path";

export function Mascot() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="pointer-events-none absolute left-[12%] top-[22.4%] aspect-square w-[85%] max-w-[340px]"
      animate={
        shouldReduceMotion
          ? undefined
          : {
              y: [0, -10, 0],
              rotate: [-1.5, 1.5, -1.5],
            }
      }
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Image
        src={withBasePath("/media/hero/pear.png")}
        alt="Almurt — маскот в виде груши"
        fill
        priority
        sizes="(max-width: 430px) 85vw, 340px"
        className="object-contain"
      />
    </motion.div>
  );
}

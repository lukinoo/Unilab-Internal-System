import React from "react";
import { motion } from "framer-motion";

export const ChevronDownSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="70"
      viewBox="0 0 40 70"
      fill="none"
    >
      <rect
        x="39"
        y="69"
        width="38"
        height="68"
        rx="19"
        transform="rotate(-180 39 69)"
        stroke="url(#paint0_linear_1466_10)"
        strokeWidth="2"
      />

      <motion.path
        animate={{ y: 10 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.7,
        }}
        d="M14 47L20 53L26 47"
        stroke="#3641A2"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1466_10"
          x1="60"
          y1="70"
          x2="60"
          y2="140"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0B12B8" />
          <stop offset="1" stopColor="#FF56D0" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

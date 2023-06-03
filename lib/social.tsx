import * as React from "react";

import { FiCodepen, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

interface socialListProps {
  delay: string,
  href: string,
  icon: React.ReactElement,
};

export const socialList: socialListProps[] = [
  {
    delay: "320ms",
    href: "https://github.com/lizlukasiewicz",
    icon: <FiGithub />,
  },
  {
    delay: "240ms",
    href: "https://www.linkedin.com/in/elizabeth-lukasiewicz",
    icon: <FiLinkedin />,
  },
  {
    delay: "160ms",
    href: "https://www.instagram.com/nycpigeon/",
    icon: <FiInstagram />,
  },
  {
    delay: "80ms",
    href: "https://codepen.io/Elukasiewicz",
    icon: <FiCodepen />,
  },
  {
    delay: "0ms",
    href: "https://leetcode.com/lizlukasiewicz/",
    icon: <SiLeetcode />,
  },
];
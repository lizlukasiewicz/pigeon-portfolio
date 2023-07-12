import { useEffect, useState } from 'react';

export const useNavigation = (): [number, string] => {
  const [y, setY] = useState<number>(0);
  const [scrollDir, setScrollDir] = useState<string>("");

  useEffect(() => {
    const handleNavigation = () => {
      if (typeof window !== 'undefined') {
        const windowScrollY = window.scrollY;
        if (y > windowScrollY) {
          setScrollDir("up");
        } else if (y < windowScrollY) {
          setScrollDir("down");
        };
        setY(windowScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      setY(window.scrollY);
      window.addEventListener("scroll", handleNavigation);
      return () => {
        window.removeEventListener("scroll", handleNavigation);
      };
    }
  }, [y]);

  return [y, scrollDir];
}

import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    //remove everything before the hash
    const targetId = e.currentTarget.href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem?.getBoundingClientRect().top,
      behavior: "smooth",
    });
  };
  return (
    <Link {...props} onClick={handleScroll}>
      {children}
    </Link>
  );
};
export default ScrollLink;
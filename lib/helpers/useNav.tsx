'use client';
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

export const useNavigation = (): [number, string] => {
  const [y, setY] = React.useState<number>(0);
  const [scrollDir, setScrollDir] = React.useState<string>("");

  React.useEffect(() => {
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



type AnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
>;
type ScrollLinkProps = AnchorProps & LinkProps & PropsWithChildren;

const ScrollLink = ({ children, ...props }: ScrollLinkProps) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    // TODO:Temp fix for scrolling issue - resets Y to zero 
    if (window.scrollY){
      window.scroll(0,0)
    }
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
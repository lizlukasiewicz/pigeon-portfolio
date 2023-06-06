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

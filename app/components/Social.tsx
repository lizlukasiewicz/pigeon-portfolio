import {
    Divider,
    IconButton,
    Stack,
    Text,
    useColorModeValue as uCMV
  } from "@chakra-ui/react";

import * as React from "react";
import { fadeDown } from 'lib/helpers/animation';
import { socialList } from "lib/social";
import { FiMail } from "react-icons/fi";

interface PageProps {
  scrollDir: string | number,
  y: string | number,
} 

export default function Social({ scrollDir, y }: PageProps ) {
    const fadeDownAnim: string = `${fadeDown} 200ms 180ms forwards`;
    return (
        <React.Fragment>
            <Stack
                alignItems={"center"}
                direction={{ base: "column-reverse", lg: "row" }}
                display={"flex"}
                justifyContent={"center"}
                position={"fixed"}
                right={{ base: 1, sm: 3, lg: -1 }}
                top={
                    y > 80 && scrollDir === "down" ? 
                        "6%"
                        : y > 60 && scrollDir === "up" ? 
                            "8%"
                            : 
                            "10%"
                        }
                transition={"200ms ease-out"}
                zIndex={3}>
                {socialList.map((e, i) => ( 
                    <SocialIcon
                        icon={e.icon}
                        delay={e.delay}
                        key={i}
                        href={e.href} /> ))}
                <Divider
                    borderColor={uCMV("#3D1C4A", "#F3BA40")}
                    width={{ base: 0, lg: 10 }} />
            </Stack>
            <Stack
                alignItems={"center"}
                pl={[2, 0]}
                bottom={{ base:"15%", lg: "11%" }}
                direction={"row"}
                display={"flex"}
                justifyContent={"center"}
                left={[-24, -20]}
                position={"fixed"}
                transform={"rotate(-90deg)"}
                transition={"200ms ease-out"}
                zIndex={1}>
                    <SocialIcon
                        delay={"80ms"} 
                        href={"mailto:e.lukasiewicz.n@gmail.com"} 
                        icon={<FiMail />} />
                        <Text
                            animation={fadeDownAnim}
                            as={"a"}
                            color={uCMV("#3D1C4A", "#F3BA40")}
                            fontFamily={"var(--chakra-fonts-mono)"}
                            fontSize={{ base: "xs", lg: "sm" }}
                            href={"mailto:e.lukasiewicz.n@gmail.com"}
                            opacity={0}
                            rel={"noreferrer"}
                            target={"_blank"}
                            transition={"100ms ease-out"}
                            _before={{
                                backgroundColor: uCMV("#3D1C4A", "#F3BA40"),
                                borderRadius: "5px",
                                bottom: -1,
                                content: `""`,
                                height: "2px",
                                position: "absolute",
                                transition: "100ms ease-out",
                                width: 0 }}
                            _hover={{
                                color: uCMV("#3D1C4A", "#F3BA40"),
                                _before: {
                                width: "105%" } }}>
                            e.lukasiewicz.n@gmail.com
                        </Text>
            </Stack>
        </React.Fragment>
    )
}


interface SocialIconProps {
    delay?: string,
    href: string,
    icon: React.ReactElement,
};

export const SocialIcon = ({ delay, href, icon }: SocialIconProps) => {
    const fadeDownAnim: string = `${fadeDown} 200ms ${delay} forwards`;

    return (
        <IconButton
          as={"a"}
          animation={fadeDownAnim}
          aria-label={"social-icon-button"}
          backgroundColor={"transparent"}
          border={uCMV("1.5px solid", "1px solid")}
          color={uCMV("#3D1C4A", "#F3BA40")}
          href={href}
          icon={icon}
          opacity={"0"}
          rel={"noreferrer"}
          size={"xs"}
          target={"_blank"}
          transition={"100ms ease-out"}
          _hover={{
              backgroundColor: uCMV("rgba(255,255,129,0.5)", "rgba(0,226,203,0.5)"),
              border: uCMV("1.5px solid #2B2B2B", "1px solid white"),
              color: uCMV("#2B2B2B", "white") }} />
    );
};

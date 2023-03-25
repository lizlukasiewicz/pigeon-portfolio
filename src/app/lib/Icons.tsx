//import { cache } from 'react';
import { IconType } from "react-icons";
import { ColoredIcon } from './ColoredIcon';
import {
    Box,
    Tooltip,
    Center,
    Icon,
    HStack,
    keyframes,
} from '@chakra-ui/react'
export const SiChakraui = require('react-icons/si').SiChakraui;
export const SiCss3 = require('react-icons/si').SiCss3;
export const SiExpress = require('react-icons/si').SiExpress;
export const SiFirebase = require('react-icons/si').SiFirebase
export const SiGit = require('react-icons/si').SiGit;
export const SiHtml5= require('react-icons/si').SiHtml5;
export const SiJavascript = require('react-icons/si').SiJavascript;
export const SiMaterialdesignicons= require('react-icons/si').SiMaterialdesignicons;
export const SiMicrosoftexcel = require('react-icons/si').SiMicrosoftexcel;
export const SiMongodb = require('react-icons/si').SiMongodb;
export const SiMysql = require('react-icons/si').SiMysql;
export const SiNextdotjs = require('react-icons/si').SiNextdotjs;
export const SiNodemon = require('react-icons/si').SiNodemon;
export const SiPandas = require('react-icons/si').SiPandas;
export const SiPostgresql = require('react-icons/si').SiPostgresql;
export const SiPython = require('react-icons/si').SiPython;
export const SiSqlite = require('react-icons/si').SiSqlite;
export const SiStyledcomponents = require('react-icons/si').SiStyledcomponents;
export const SiTailwindcss= require('react-icons/si').SiTailwindcss;
export const SiTypescript = require('react-icons/si').SiTypescript;
export const SiVuedotjs = require('react-icons/si').SiVuedotjs;


export const TbBrandBootstrap = require('react-icons/tb').TbBrandBootstrap;
export const TbBrandJavascript = require('react-icons/tb').TbBrandJavascript;
export const TbBrandNextjs = require('react-icons/tb').TbBrandNextjs;

export const DiJavascript = require('react-icons/di').DiJavascript;
export const DiMongodb = require('react-icons/di').DiMongodb;
export const DiReact = require('react-icons/di').DiReact;
export const DiSqllite = require('react-icons/di').DiSqllite;

export const GrReactjs = require('react-icons/gr').GrReactjs;

export const FaNode = require('react-icons/fa').FaNode;

export interface Project {
  name: string,
  slug: string,
  active:string,
  git:string,
  icons: {
      name: string,
      alt: string, 
      icon?: React.ComponentType<IconType>, 
      IconComponent: React.ElementType,
  }[],
};
export type Icon = {
  name: string;
  alt: string;
  icon: React.ComponentType<IconType>;//React.ComponentType<{ size?: string; }>;
  IconComponent: React.ElementType;
};

interface SkillIconProps {
  color?: string,
  delay?: string,
  icon?: React.ComponentType<IconType>,
  label?: string,
  marginX?: number | string,
};

export const fadeRight: string = keyframes`
from {
  transform: translateX(-40px);
  opacity: 0;
}
to {
  transform: translateX(0px);
  opacity: 1;
}
`;

export const fadeDown: string = keyframes`
from {
  transform: translateY(-20px);
  opacity: 0;
} to {
  transform: translateY(0px);
  opacity: 1;
}
`;

  export const projects: { name:string; slug:string; bullet1:string; bullet2:string; active:string; git:string; details:Icon[] }[] = [
    {
      name: 'Riders Guild',
      slug: 'riders-guild',
      bullet1: "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
      bullet2: "built with NextAuth and RESTful API functionality",
      active: 'https://capstone-nine.vercel.app/',
      git: 'https://github.com/lizlukasiewicz/capstone',
      details: [
        { name: 'Next.js', alt: 'Next JS logo', icon: SiNextdotjs, IconComponent: ColoredIcon},
        { name: 'MongoDB', alt: 'Mongo DB logo', icon: SiMongodb, IconComponent: ColoredIcon},
        { name: 'JavaScript', alt: 'Javascript logo', icon: SiJavascript, IconComponent: ColoredIcon},
        { name: 'Node.js', alt: 'Node logo', icon: FaNode, IconComponent: ColoredIcon},
        { name: 'React', alt: 'React logo', icon: DiReact, IconComponent: ColoredIcon},
      ],
    },
    {
      name: 'Dispatch',
      slug: 'dispatch',
      bullet1: "WebApp created as a more customized solution for automating fleet dispatching and routing",
      bullet2: "JavaScript, Express, Postgres, SQL, Mapbox API",
      active: '',
      git: "https://github.com/lizlukasiewicz/dispatch",
      details: [
        { name: 'Express', alt: 'Express logo', icon: SiExpress, IconComponent: ColoredIcon },
        { name: 'JavaScript', alt: 'JavaScript logo', icon: TbBrandJavascript, IconComponent: ColoredIcon },
        //{ name: 'Node', alt: 'Node logo', icon: FaNode, IconComponent: ColoredIcon },
        { name: 'Nodemon', alt: 'Nodemon logo', icon: SiNodemon, IconComponent: ColoredIcon },
        { name: 'SQLite', alt: 'SQLite logo', icon: SiSqlite, IconComponent: ColoredIcon },
        { name: 'PostgreSQL', alt: 'PostgreSQL logo', icon: SiPostgresql, IconComponent: ColoredIcon },
      ],
    },
    {
      name: 'Falendar',
      slug: 'falendar',
      bullet1: "Github workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
      bullet2: "",
      active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
      git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
      details: [
        { name: 'MongoDB', alt: 'MongoDB logo', icon: DiMongodb, IconComponent: ColoredIcon },
        { name: 'React', alt: 'React logo', icon: GrReactjs, IconComponent: ColoredIcon },
        { name: 'Styled-Components', alt: 'Styled Components logo', icon: SiStyledcomponents, IconComponent: ColoredIcon },
        { name: 'Material-Icons', alt: 'Material Icons logo', icon: SiMaterialdesignicons, IconComponent: ColoredIcon },
        { name: 'JavaScript', alt: 'JavaScript logo', icon: DiJavascript, IconComponent: ColoredIcon },
      ],
    },
    {
      name: 'Escape Noface',
      slug: 'escape-noface',
      bullet1: "A simple and fun game I created as an ode to my favorite director",
      bullet2: "Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
      active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
      git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
      details: [
        { name: 'JavaScript', alt: 'JavaScript logo', icon: TbBrandJavascript, IconComponent: ColoredIcon },
        { name: 'HTML', alt: 'HTML logo', icon: SiHtml5, IconComponent: ColoredIcon },
        { name: 'CSS', alt: 'CSS logo', icon: SiCss3, IconComponent: ColoredIcon },
      ],
    },
  ];

export const SkillIcon = ({ color, delay, icon, label, marginX }: SkillIconProps) => {
    const fadeDownAnim: string = `${fadeDown} 500ms ${delay} forwards`;

    return (
        <Tooltip label={label} hasArrow>
            <Center animation={fadeDownAnim} marginX={marginX} opacity={0}>
                <Icon
                    as={icon}
                    borderRadius={5}
                    boxSize={6}
                    color={color}
                    transition={"100ms ease-in-out"}
                    _hover={{
                        transform: "scale(1.1)",
                        // filter: colorMode(
                        //     "brightness(1.1)" ,
                        //     `brightness(1.2) drop-shadow(0 0 5px ${color})`) 
                    }} 
                />
            </Center>
        </Tooltip>
    );
};
export const SkillTable = () => (
    <Box
        borderRadius={5}
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={{ base: "xs", lg: "sm" }}
        width={"100%"}>
        <HStack justifyContent={"space-around"} padding={1}>
            <SkillIcon icon={SiJavascript} color={"rgb(229,212,88)"} label={"JavaScript"} delay={"0ms"} />
            <SkillIcon icon={GrReactjs} color={"rgb(114,183,208)"} label={"React"} delay={"60ms"} />
            <SkillIcon icon={SiCss3} color={"rgb(69,98,226)"} label={"CSS"} delay={"120ms"} />
            <SkillIcon icon={SiMysql} color={"rgb(43,97,157)"} label={"SQL"} delay={"180ms"} />
            <SkillIcon icon={FaNode} color={"rgb(110,149,99)"} label={"Node.js"} delay={"240ms"} />
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiTypescript} color={"rgb(65,112,183)"} label={"TypeScript"} delay={"300ms"} />
            <SkillIcon icon={SiNextdotjs} color={"rgb(50,109,170)"} label={"Next.js"} delay={"360ms"} />
            <SkillIcon icon={SiExpress} color={"rgb(182,103,144)"} label={"Express"} delay={"420ms"} />
            <SkillIcon icon={SiMongodb} color={"rgb(89,188,125)"} label={"MongoDB"} delay={"480ms"} />
            <SkillIcon icon={SiChakraui} color={"rgb(112,197,192)"} label={"ChakraUI"} delay={"540ms"} />
            {/* <SkillIcon icon={SiFirebase} color={"rgb(219,129,49)"} label={"Firebase"} delay={"540ms"} /> */}
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiPython} color={"rgb(66,108,152)"} label={"Python"} delay={"600ms"} />
            <SkillIcon icon={SiVuedotjs} color={"rgb(96,172,128)"} label={"Vue.js"} delay={"660ms"} />
            <SkillIcon icon={SiTailwindcss} color={"rgb(89,170,163)"} label={"Tailwind"} delay={"720ms"} />
            <SkillIcon icon={SiGit} color={"rgb(211,87,60)"} label={"Git"} delay={"780ms"} />
            <SkillIcon icon={SiPandas} color={"rgb(202,42,128)"} label={"Pandas"} delay={"840ms"} />
        </HStack>
    </Box>
);
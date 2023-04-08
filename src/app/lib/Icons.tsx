//import { cache } from 'react';
import { IconType } from "react-icons";
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
export const SiMagento = require('react-icons/si').SiMagento
export const SiMaterialdesignicons= require('react-icons/si').SiMaterialdesignicons;
//export const SiMicrosoftexcel = require('react-icons/si').SiMicrosoftexcel;
export const SiMongodb = require('react-icons/si').SiMongodb;
export const SiMysql = require('react-icons/si').SiMysql;
export const SiNextdotjs = require('react-icons/si').SiNextdotjs;
export const SiNodemon = require('react-icons/si').SiNodemon;
export const SiPandas = require('react-icons/si').SiPandas;
export const SiPhp = require('react-icons/si').SiPhp
export const SiPostgresql = require('react-icons/si').SiPostgresql;
export const SiPython = require('react-icons/si').SiPython;
export const SiSqlite = require('react-icons/si').SiSqlite;
export const SiStyledcomponents = require('react-icons/si').SiStyledcomponents;
export const SiTailwindcss= require('react-icons/si').SiTailwindcss;
export const SiTypescript = require('react-icons/si').SiTypescript;
export const SiVuedotjs = require('react-icons/si').SiVuedotjs;

export const TbBrandBootstrap = require('react-icons/tb').TbBrandBootstrap;
export const TbBrandNextjs = require('react-icons/tb').TbBrandNextjs;

export const DiSqllite = require('react-icons/di').DiSqllite;

export const GrReactjs = require('react-icons/gr').GrReactjs;

export const FaPaintBrush = require('react-icons/fa').FaPaintBrush;
export const FaNode = require('react-icons/fa').FaNode;

export const VscSymbolClass=require('react-icons/vsc').VscSymbolClass;
//export const DiMongodb = require('react-icons/di').DiMongodb;
//export const TbBrandJavascript = require('react-icons/tb').TbBrandJavascript;
//export const DiJavascript = require('react-icons/di').DiJavascript;
//export const DiReact = require('react-icons/di').DiReact;

export interface Project {
  name: string,
  slug: string,
  bullet1:string, 
  bullet2:string,
  active:string,
  git:string,
  icons: {
      name: string,
      alt: string, 
      icon: React.ComponentType<IconType>, 
      hoverColor?:string,
  }[],
};
// export type Icon = {
//   name: string;
//   alt: string;
//   icon: React.ComponentType<IconType>;
//   IconComponent: React.ElementType;
// };

export interface SkillIconProps {
  hoverColor:string, 
  delay: string,
  icon: React.ComponentType<IconType>,
  label: string,
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

  export const projects: { name:string; slug:string; bullets: string[]; active:string; git:string; details:SkillIconProps[] }[] = [
    {
      name: 'Riders Guild',
      slug: 'riders-guild',
      bullets:[
      "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
      "built with NextAuth and RESTful API functionality"
    ],
      active: 'https://capstone-nine.vercel.app/',
      git: 'https://github.com/lizlukasiewicz/capstone',
      details: [
        { label: 'Next.js', icon: SiNextdotjs, hoverColor:"rgb(50,109,170)", delay: "0ms"}, //  alt: 'Next JS logo', 
        { label: 'MongoDB', icon: SiMongodb, hoverColor:"rgb(89,188,125)", delay: "4ms"},//  alt: 'Mongo DB logo', 
        { label: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "80ms"},//  alt: 'Javascript logo', 
        { label: 'Node.js', icon: FaNode, hoverColor:"rgb(110,149,99)", delay: "120ms"},//  alt: 'Node logo', 
        { label: 'React', icon: GrReactjs, hoverColor:"rgb(114,183,208)", delay: "160ms"},//  alt: 'React logo', 
      ],
    },
    {
      name: 'Dispatch',
      slug: 'dispatch',
      bullets:[
      "WebApp created as a more customized solution for automating fleet dispatching and routing",
      "JavaScript, Express, Postgres, SQL, Mapbox API. Users are able to chart out zones on the map and displays the corresponding zone the geocoded data is within."
    ],
      active: '',
      git: "https://github.com/lizlukasiewicz/dispatch",
      details: [
        { label: 'Express', icon: SiExpress, hoverColor:"rgb(182,103,144)", delay: "0ms"}, 
        { label: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "4ms"},
        { label: 'Nodemon', icon: SiNodemon, hoverColor:"rgb(110,149,99)", delay: "80ms"},
        { label: 'SQLite', icon: SiSqlite, hoverColor:"rgb(43,97,157)", delay: "120ms"},
        { label: 'PostgreSQL', icon: SiPostgresql, hoverColor:"rgb(43,97,157)", delay: "160ms" },
        { label: 'Node', icon: FaNode, hoverColor:"rgb(110,149,99)", delay: "180ms"},//  alt: 'Node logo', 
      ],
    },
    {
      name: 'Falendar',
      slug: 'falendar',
      bullets:[
      "Github workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
    ],
      active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
      git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
      details: [
        { label: 'MongoDB', icon: SiMongodb, hoverColor:"rgb(89,188,125)", delay: "0ms"}, //        alt: 'MongoDB logo', 
        { label: 'React', icon: GrReactjs, hoverColor:"rgb(114,183,208)", delay: "4ms"},//        alt: 'React logo', 
        { label: 'Styled-Components', icon: SiStyledcomponents, hoverColor:"rgb(206,133,195)", delay: "80ms"},//        alt: 'Styled Components logo', 
        { label: 'Material-Icons', icon: SiMaterialdesignicons, hoverColor:"rgb(0,127,255)", delay: "120ms"},//        alt: 'Material Icons logo', 
        { label: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "160ms" },//        alt: 'JavaScript logo', 
      ],
    },
    {
      name: 'Escape Noface',
      slug: 'escape-noface',
      bullets:[
      "A simple and fun game I created as an ode to my favorite director",
      "Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation"
    ],
      active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
      git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
      details: [
        { label: 'Class-Based Programming', icon: VscSymbolClass, hoverColor:"rgb(211,110,90)", delay:"0ms"},
        { label: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "4ms"}, // alt: 'JavaScript logo', 
        { label: 'HTML', icon: SiHtml5, hoverColor:"rgb(200,85,51)", delay: "80ms"},//alt: 'HTML logo', 
        { label: 'Canvas', icon: FaPaintBrush, hoverColor:"rgb(147,42,92)", delay: "120ms"},//alt: 'CSS logo', 
        { label: 'CSS', icon: SiCss3, hoverColor:"rgb(69,98,226)", delay: "180ms"},//alt: 'CSS logo', 
      ],
    },
  ];

export const SkillIcon = ({ hoverColor, delay, icon, label}: SkillIconProps) => {
    const fadeDownAnim: string = `${fadeDown} 500ms ${delay} forwards`;

    return (
        <Tooltip label={label} hasArrow aria-label={label}>
            <Center animation={fadeDownAnim} opacity={0}>
                <Icon
                    as={icon}
                    borderRadius={5}
                    color={"#00C484"}
                    boxSize={8}
                    transition={"100ms ease-in-out"}
                    _hover={{
                        transform: "scale(1.1)",
                        color: `${hoverColor}`,
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
        fontSize={{ base: "sm", lg: "md" }}
        width={"100%"}>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiJavascript} hoverColor={"rgb(229,212,88)"} label={"JavaScript"} delay={"0ms"} />
            <SkillIcon icon={GrReactjs} hoverColor={"rgb(114,183,208)"} label={"React"} delay={"60ms"} />
            <SkillIcon icon={SiCss3} hoverColor={"rgb(69,98,226)"} label={"CSS"} delay={"120ms"} />
            <SkillIcon icon={SiMysql} hoverColor={"rgb(43,97,157)"} label={"SQL"} delay={"180ms"} />
            <SkillIcon icon={FaNode} hoverColor={"rgb(110,149,99)"} label={"Node.js"} delay={"240ms"} />
            <SkillIcon icon={SiPhp} hoverColor={"rgb(135,141,184)"} label={"PHP"} delay={"300ms"} />
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiTypescript} hoverColor={"rgb(65,112,183)"} label={"TypeScript"} delay={"360ms"} />
            <SkillIcon icon={SiNextdotjs} hoverColor={"rgb(50,109,170)"} label={"Next.js"} delay={"420ms"} />
            <SkillIcon icon={SiExpress} hoverColor={"rgb(182,103,144)"} label={"Express"} delay={"480ms"} />
            <SkillIcon icon={SiMongodb} hoverColor={"rgb(89,188,125)"} label={"MongoDB"} delay={"540ms"} />
            <SkillIcon icon={SiChakraui} hoverColor={"rgb(112,197,192)"} label={"ChakraUI"} delay={"600ms"} />
            <SkillIcon icon={SiFirebase} hoverColor={"rgb(219,129,49)"} label={"Firebase"} delay={"660ms"} />
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiPython} hoverColor={"rgb(66,108,152)"} label={"Python"} delay={"720ms"} />
            <SkillIcon icon={SiVuedotjs} hoverColor={"rgb(96,172,128)"} label={"Vue.js"} delay={"780ms"} />
            <SkillIcon icon={SiTailwindcss} hoverColor={"rgb(89,170,163)"} label={"Tailwind"} delay={"840ms"} />
            <SkillIcon icon={SiGit} hoverColor={"rgb(211,87,60)"} label={"Git"} delay={"900ms"} />
            <SkillIcon icon={SiPandas} hoverColor={"rgb(202,42,128)"} label={"Pandas"} delay={"960ms"} />
            <SkillIcon icon={SiMagento} hoverColor={"rgb(229,100,53)"} label={"Magento"} delay={"1020ms"} />
        </HStack>
    </Box>
);
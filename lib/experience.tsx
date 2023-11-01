import {
  Box,
  Tooltip,
  Center,
  Icon,
  HStack,
  useColorModeValue as uCMV
} from '@chakra-ui/react'
import { fadeDown } from "./helpers/animation";
import { IconType } from "react-icons";

export const SiMagento = require('react-icons/si').SiMagento;
export const SiPhp = require('react-icons/si').SiPhp;
export const SiPython = require('react-icons/si').SiPython;
export const SiDjango = require('react-icons/si').SiDjango;
export const SiSelenium = require('react-icons/si').SiSelenium;
export const SiFilezilla=require('react-icons/si').SiFilezilla;
export const SiMongodb = require('react-icons/si').SiMongodb;
export const SiMysql = require('react-icons/si').SiMysql;
export const SiGithub=require('react-icons/si').SiGithub;
export const SiSqlite = require('react-icons/si').SiSqlite 
export const SiHtml5= require('react-icons/si').SiHtml5
export const SiCss3 = require('react-icons/si').SiCss3 
export const SiMaterialdesignicons= require('react-icons/si').SiMaterialdesignicons
export const SiStyledcomponents = require('react-icons/si').SiStyledcomponents
export const SiNodemon = require('react-icons/si').SiNodemon
export const SiPostgresql = require('react-icons/si').SiPostgresql;
export const SiNextdotjs = require('react-icons/si').SiNextdotjs;
export const SiJavascript = require('react-icons/si').SiJavascript;
export const SiExpress = require('react-icons/si').SiExpress 
export const SiDigitalocean = require('react-icons/si').SiDigitalocean;
export const SiChakraui = require('react-icons/si').SiChakraui;
export const SiFirebase = require('react-icons/si').SiFirebase
export const SiTailwindcss= require('react-icons/si').SiTailwindcss;
export const SiTypescript = require('react-icons/si').SiTypescript;
export const SiVuedotjs = require('react-icons/si').SiVuedotjs;
export const SiGit = require('react-icons/si').SiGit;
export const SiPandas = require('react-icons/si').SiPandas;

export const FaNode = require('react-icons/fa').FaNode
export const FaPaintBrush = require('react-icons/fa').FaPaintBrush;

export const GrStackOverflow=require('react-icons/gr').GrStackOverflow;
export const GrReactjs = require('react-icons/gr').GrReactjs;

export const RiCodeBoxLine = require('react-icons/ri').RiCodeBoxLine;

export const VscSymbolClass=require('react-icons/vsc').VscSymbolClass;

//colored icons
//export const SiMicrosoftexcel = require('react-icons/si').SiMicrosoftexcel;
//export const SiMicrosoftteams = require('react-icons/si').SiMicrosoftteams;
//export const VscGear = require('react-icons/vsc').VscGear
//export const FcCommandLine=require('react-icons/fc').FcCommandLine;
//export const FcDataEncryption=require('react-icons/fc').FcDataEncryption;
//export const FcWorkflow=require('react-icons/fc').FcWorkflow;


// ------------------------------   EXPERIENCE 
export interface expArrayProps {
  title: string,
  details: string[],
  dates: string,
  skills: {
      color: string,
      delay: string,
      icon: React.ComponentType<IconType>,
      label: string,
  }[],
  company: string,
  companyFull: string,
  companyLink: string,
};

export const getExpArray: expArrayProps[] = [
  {
      title: "Software Engineer, Infrastructure",
      details: [
        //"Deployed customized Python/Django tools for integrating data between multiple vendors into a unified relational database model",
        "Spearheaded database infrastructure including data ingestion modules in Python/Django, which streamlined processing complex data across multiple vendor platforms into a unified relational database.", 
        "Contributed to all phases of the SDLC within an Agile-Scrum environment, ensuring code quality and efficient build processes.",
        "Developed and maintained e-commerce website using PHP Magento, implementing custom themes, modules, and extensions.",
        // "Employed Selenium for Web Scraping, efficiently collecting and cleaning data from various sources",
      ],
      dates: "March 2022 - March 2023",
      skills: [
          {
              icon: SiPython,
              color: "rgb(66,106,149)",
              label: "Python",
              delay: "0ms"
          },
          {
              icon: SiDjango,
              color: "rgb(202,42,128)",
              label: "Django",
              delay: "60ms"
          },
          {
              icon: SiSelenium,
              color: "rgb(0,174,0)",
              label: "Selenium",
              delay: "120ms"
          },
          {
              icon: SiMagento,
              color: "rgb(229,100,53)",
              label: "Magento",
              delay: "240ms"
          },
          {
              icon: SiPhp,
              color: "rgb(135,141,184)",
              label: "PHP",
              delay: "300ms"
          },
          {
              icon: SiMongodb,
              color: "rgb(89,188,125)",
              label: "MongoDB Compass",
              delay: "360ms"
          },
          {
            icon: SiDigitalocean,
            color: "rgb(69,98,226)",
            label: "Cloud Computing",
            delay: "420ms"
          },
          // {
          //     icon: SiMysql,
          //     color: "rgb(43,97,157)",
          //     label: "MySQL",
          //     delay: "180ms"
          // },
      ],
      company: "BuySupply",
      companyFull: "Buy-Supply Corp",
      companyLink: "https://www.buysupply.com/",
  },
  {
    title: "Software Engineering Fellow",
    details: [
        "Utilized Git version control and managed team repositories while maintaining CI/CD pipelines for automated testing, integration, and deployment.",
        "Launched a portfolio using HTML, CSS, JavaScript, Next.js, AWS Route 53, and Tailwind.",
        "Foundational principles of object oriented programming alongside utilizing RESTful APIs, Unit test, Integration test, Data structures and Algorithms.",
    ],
    dates: "Summer 2021",
    skills: [
        {
            icon: GrStackOverflow,
            color: "rgb(234,200,88)",
            label: "Full-Stack Engineering",
            delay: "0ms"
        },
        {
            icon: SiGithub,
            color: "rgb(111,51,153)",
            label: "Git",
            delay: "60ms"
        },
        {
            icon: GrReactjs,
            color: "rgb(96,206,238)",
            label: "React",
            delay: "120ms"
        },
        {
            icon: SiPython,
            color: "rgb(66,106,149)",
            label: "Python",
            delay: "180ms"
        },
        {
            icon: SiPostgresql,
            color: "rgb(61,97,174)",
            label: "SQL",
            delay: "240ms"
        },
        {
            icon: SiMongodb,
            color: "rgb(100,160,83)",
            label: "Mongo",
            delay: "300ms"
        },
    ],
    company: "GA",
    companyFull: "General Assembly",
    companyLink: "https://generalassemb.ly/",

},
];


// ----------------------------------  PROJECTS
export interface Compartment {
  name: string,
  bullets: string[],
  active:string, 
  git:string,
  details: {
      name: string,
      delay: string,
      icon: React.ComponentType<IconType>, 
      hoverColor:string,
  }[],
};

export const projectArray: Compartment[] = [
  {
    name: 'Riders Guild',
    bullets:[
    "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
    "built with NextAuth and RESTful API functionality"
  ],
    active: 'https://capstone-nine.vercel.app/',
    git: 'https://github.com/lizlukasiewicz/capstone',
    details: [
      { name: 'Next.js', icon: SiNextdotjs, hoverColor:"rgb(50,109,170)", delay: "0ms"}, //  alt: 'Next JS logo', 
      { name: 'MongoDB', icon: SiMongodb, hoverColor:"rgb(89,188,125)", delay: "4ms"},//  alt: 'Mongo DB logo', 
      { name: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "80ms"},//  alt: 'Javascript logo', 
      { name: 'Node.js', icon: FaNode, hoverColor:"rgb(110,149,99)", delay: "120ms"},//  alt: 'Node logo', 
      { name: 'React', icon: GrReactjs, hoverColor:"rgb(114,183,208)", delay: "160ms"},//  alt: 'React logo', 
    ],
  },
  {
    name: 'Dispatch',
    bullets:[
    "WebApp created as a more customized solution for automating fleet dispatching and routing",
    "JavaScript, Express, Postgres, SQL, Mapbox API. Users are able to chart out zones on the map and displays the corresponding zone the geocoded data is within."
  ],
    active: '',
    git: "https://github.com/lizlukasiewicz/dispatch",
    details: [
      { name: 'Express', icon: SiExpress, hoverColor:"rgb(182,103,144)", delay: "0ms"}, 
      { name: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "4ms"},
      { name: 'Nodemon', icon: SiNodemon, hoverColor:"rgb(110,149,99)", delay: "80ms"},
      { name: 'SQLite', icon: SiSqlite, hoverColor:"rgb(43,97,157)", delay: "120ms"},
      { name: 'PostgreSQL', icon: SiPostgresql, hoverColor:"rgb(43,97,157)", delay: "160ms" },
      { name: 'Node', icon: FaNode, hoverColor:"rgb(110,149,99)", delay: "180ms"},//  alt: 'Node logo', 
    ],
  },
  {
    name: 'Falendar',
    bullets:[
    "Github workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
  ],
    active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
    git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
    details: [
      { name: 'MongoDB', icon: SiMongodb, hoverColor:"rgb(89,188,125)", delay: "0ms"}, //        alt: 'MongoDB logo', 
      { name: 'React', icon: GrReactjs, hoverColor:"rgb(114,183,208)", delay: "4ms"},//        alt: 'React logo', 
      { name: 'Styled-Components', icon: SiStyledcomponents, hoverColor:"rgb(206,133,195)", delay: "80ms"},//        alt: 'Styled Components logo', 
      { name: 'Material-Icons', icon: SiMaterialdesignicons, hoverColor:"rgb(0,127,255)", delay: "120ms"},//        alt: 'Material Icons logo', 
      { name: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "160ms" },//        alt: 'JavaScript logo', 
    ],
  },
  {
    name: 'Escape Noface',
    bullets:[
    "A simple and fun game I created as an ode to my favorite director",
    "Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation"
  ],
    active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
    git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
    details: [
      { name: 'Class-Based Programming', icon: VscSymbolClass, hoverColor:"rgb(211,110,90)", delay:"0ms"},
      { name: 'JavaScript', icon: SiJavascript, hoverColor:"rgb(229,212,88)", delay: "4ms"}, // alt: 'JavaScript logo', 
      { name: 'HTML', icon: SiHtml5, hoverColor:"rgb(200,85,51)", delay: "80ms"},//alt: 'HTML logo', 
      { name: 'Canvas', icon: FaPaintBrush, hoverColor:"rgb(147,42,92)", delay: "120ms"},//alt: 'CSS logo', 
      { name: 'CSS', icon: SiCss3, hoverColor:"rgb(69,98,226)", delay: "180ms"},//alt: 'CSS logo', 
    ],
  },
  
]



// -------------------------------   SKILL TABLE
export interface SkillIconProps {
  hoverColor:string, 
  delay: string,
  icon: React.ComponentType<IconType>,
  label: string,
};


export const SkillIcon = ({ hoverColor, delay, icon, label}: SkillIconProps) => {
    const fadeDownAnim: string = `${fadeDown} 500ms ${delay} forwards`;

    return (
        <Tooltip label={label} hasArrow aria-label={label}>
            <Center animation={fadeDownAnim} opacity={0}>
                <Icon
                    as={icon}
                    borderRadius={5}
                    color={uCMV("#822320", "#00C484")}
                    boxSize={8}
                    transition={"100ms ease-in-out"}
                    _hover={{
                        transform: "scale(1.1)",
                        color: `${hoverColor}`,
                        filter: uCMV(
                            "brightness(1.1)" ,
                            `brightness(1.2) drop-shadow(0 0 5px ${hoverColor})`) 
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
            <SkillIcon icon={SiTypescript} hoverColor={"rgb(65,112,183)"} label={"TypeScript"} delay={"0ms"} />
            <SkillIcon icon={SiPython} hoverColor={"rgb(66,108,152)"} label={"Python"} delay={"60ms"} />
            <SkillIcon icon={SiPhp} hoverColor={"rgb(135,141,184)"} label={"PHP"} delay={"120ms"} />
            <SkillIcon icon={SiMysql} hoverColor={"rgb(43,97,157)"} label={"SQL"} delay={"180ms"} />
            <SkillIcon icon={FaNode} hoverColor={"rgb(110,149,99)"} label={"Node.js"} delay={"240ms"} />
            <SkillIcon icon={SiCss3} hoverColor={"rgb(69,98,226)"} label={"CSS"} delay={"300ms"} />
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiJavascript} hoverColor={"rgb(229,212,88)"} label={"JavaScript"} delay={"360ms"} />
            <SkillIcon icon={SiNextdotjs} hoverColor={"rgb(50,109,170)"} label={"Next.js"} delay={"420ms"} />
            <SkillIcon icon={SiExpress} hoverColor={"rgb(182,103,144)"} label={"Express"} delay={"480ms"} />
            <SkillIcon icon={SiMongodb} hoverColor={"rgb(89,188,125)"} label={"MongoDB"} delay={"540ms"} />
            <SkillIcon icon={SiChakraui} hoverColor={"rgb(112,197,192)"} label={"ChakraUI"} delay={"600ms"} />
            <SkillIcon icon={SiFirebase} hoverColor={"rgb(219,129,49)"} label={"Firebase"} delay={"660ms"} />
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={GrReactjs} hoverColor={"rgb(114,183,208)"} label={"React"} delay={"720ms"} />
            <SkillIcon icon={SiVuedotjs} hoverColor={"rgb(96,172,128)"} label={"Vue.js"} delay={"780ms"} />
            <SkillIcon icon={SiTailwindcss} hoverColor={"rgb(89,170,163)"} label={"Tailwind"} delay={"840ms"} />
            <SkillIcon icon={SiGit} hoverColor={"rgb(211,87,60)"} label={"Git"} delay={"900ms"} />
            <SkillIcon icon={SiPandas} hoverColor={"rgb(202,42,128)"} label={"Pandas"} delay={"960ms"} />
            <SkillIcon icon={SiMagento} hoverColor={"rgb(229,100,53)"} label={"Magento"} delay={"1020ms"} />
        </HStack>
    </Box>
);

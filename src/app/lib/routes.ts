import { cache } from 'react';
import { IconType } from "react-icons";
export const SiNextdotjs = require('react-icons/si').SiNextdotjs;
export const SiMongodb = require('react-icons/si').SiMongodb;
export const SiJavascript = require('react-icons/si').SiJavascript;
export const SiExpress = require('react-icons/si').SiExpress 
export const SiPostgresql = require('react-icons/si').SiPostgresql 
export const SiSqlite = require('react-icons/si').SiSqlite 
export const SiHtml5= require('react-icons/si').SiHtml5
export const SiCss3 = require('react-icons/si').SiCss3 
export const SiMaterialdesignicons= require('react-icons/si').SiMaterialdesignicons
export const SiStyledcomponents = require('react-icons/si').SiStyledcomponents
export const SiNodemon = require('react-icons/si').SiNodemon
export const TbBrandNextjs = require('react-icons/tb').TbBrandNextjs;
export const DiMongodb = require('react-icons/di').DiMongodb 
export const GrReactjs = require('react-icons/gr').GrReactjs
export const FaNode = require('react-icons/fa').FaNode

//export const TbBrandJavascript = require('react-icons/tb').TbBrandJavascript 
//export const DiJavascript = require('react-icons/di').DiJavascript 
//export const DiReact = require('react-icons/di').DiReact;
//export const SiMysql = require('react-icons/si').SiMysql 
//export const SiTailwindcss= require('react-icons/si').SiTailwindcss
//export const TbBrandBootstrap = require('react-icons/tb').TbBrandBootstrap 
// export const DiSqllite = require('react-icons/di').DiSqllite 

export type PageProps = {
  pageRefs?: React.MutableRefObject<{}>;
  visible?: boolean;
  visRef?: React.RefObject<Element>;
  params?: any;
  children?: React.ReactNode;
};

export interface Compartment {
  name: string,
  slug: string,
  description: string;
  active:string, 
  git:string,
  details: {
      name: string,
      alt: string, 
      icon: React.ComponentType<IconType>, 
      hoverColor:string,
  }[],
};

export type Item = {
    name: string;
    slug: string;
    bullet1?: string;
    bullet2?: string;
};


  export const demos: { name: string; slug: string; description: string; items?: Item[] }[] = [
    {    
     name: 'About Me',
     slug: 'about',
     description: 'I build things, because I can, because I feel like it',
     items: [

        ],
    },
    {    
     name: 'Experience',
     slug: 'experience',
     description: 'Experience will go here',
     items: [

        ],
    },
    // {
    //   name: 'Blog',
    //   slug: 'blog',
    //   description: 'Open Source, Openly Sourced',
    //   items: [


    //   ],
    // },
    {
      name: 'Projects',
      slug: 'projects',
      description: ' ',
      items: [
        {
          name: 'Riders Guild',
          slug: 'riders-guild',
          bullet1: "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
          bullet2: "built with NextAuth and RESTful API functionality",
        },
        {
          name: 'Dispatch',
          slug: 'dispatch',
          bullet1: "WebApp created as a more customized solution for automating fleet dispatching and routing",
          bullet2: "JavaScript, Express, Postgres, SQL, Mapbox API",
        },
        {
          name: 'Falendar',
          slug: 'falendar',
          bullet1: "Github workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
          bullet2: "",
        },
        {
          name: 'Escape Noface',
          slug: 'escape-noface',
          bullet1: "A simple and fun game I created as an ode to my favorite director",
          bullet2: "Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
        },


      ],
    },
    {
      name: 'Resume',
      slug: 'resume',
      description: "How I've spent my days",
      items: [


      ],
  },
    {
      name: 'Contact Me',
      slug: 'contact',
      description: 'Spent some time? Drop a line',
      items: [


      ],
    },
    
];


export const getCompartment = cache((): Compartment[] => [
  {
    name: 'Riders Guild',
    slug: 'riders-guild',
    description: "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes. Built with NextAuth for user authentication and database encryption, RESTful API functionality for posts and comments between users.",
    active: 'https://capstone-nine.vercel.app/',
    git: 'https://github.com/lizlukasiewicz/capstone',
    details: [
        { name: 'Next.js', alt: 'Next JS logo', icon: SiNextdotjs, hoverColor: "rgb(50,109,170)"},
        { name: 'MongoDB', alt: 'Mongo DB logo', icon: SiMongodb, hoverColor: "rgb(89,188,125)"},
        { name: 'JavaScript', alt: 'Javascript logo', icon: SiJavascript, hoverColor: "rgb(229,212,88)"},
        { name: 'NextAuth', alt: 'Next Auth logo', icon: TbBrandNextjs, hoverColor: "rgb(110,149,99)"},
        { name: 'React', alt: 'React logo', icon: GrReactjs, hoverColor: "rgb(114,183,208)"},
    ],
  },
  {
    name: 'Dispatch',
    slug: 'dispatch',
    description: "WebApp created as a more customized solution for automating fleet dispatching and routing. JavaScript, Express, Postgres, SQL, Mapbox API. Users are able to chart out zones on the map and displays the corresponding zone the geocoded data is within.",
    active: '',
    git: "https://github.com/lizlukasiewicz/dispatch",
    details: [
        { name: 'Express', alt: 'Express logo', icon: SiExpress, hoverColor: "rgb(182,103,144)" },
        { name: 'JavaScript', alt: 'JavaScript logo', icon: SiJavascript, hoverColor: "rgb(229,212,88)" },
        { name: 'Node', alt: 'Node logo', icon: FaNode, hoverColor: "rgb(110,149,99)" },
        { name: 'Nodemon', alt: 'Nodemon logo', icon: SiNodemon, hoverColor: "rgb(110,149,99)" },
        { name: 'SQLite', alt: 'SQLite logo', icon: SiSqlite, hoverColor: "rgb(43,97,157)" },
        { name: 'PostgreSQL', alt: 'PostgreSQL logo', icon: SiPostgresql, hoverColor: "rgb(43,97,157)" },
    ],
  },
  {
    name: 'Falendar',
    slug: 'falendar',
    description: "Github manager workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters. Utilized React Calendar Component to record and render Schedules stored within MongoDB",
    active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
    git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
    details: [
        { name: 'MongoDB', alt: 'MongoDB logo', icon: DiMongodb, hoverColor:"rgb(89,188,125)" },
        { name: 'React', alt: 'React logo', icon: GrReactjs, hoverColor:"rgb(114,183,208)" },
        { name: 'Styled-Components', alt: 'Styled Components logo', icon: SiStyledcomponents, hoverColor:"rgb(206,133,195)" },
        { name: 'Material-Icons', alt: 'Material Icons logo', icon: SiMaterialdesignicons, hoverColor:"rgb(0,127,255)" },
        { name: 'JavaScript', alt: 'JavaScript logo', icon: SiJavascript, hoverColor:"rgb(229,212,88)" },
    ],
  },
  {
    name: 'Escape Noface',
    slug: 'escape-noface',
    description: "A simple and fun game I created as an ode to my favorite director. Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
    active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
    git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
    details: [
        { name: 'JavaScript', alt: 'JavaScript logo', icon: SiJavascript, hoverColor:"rgb(229,212,88)" },
        { name: 'HTML', alt: 'HTML logo', icon: SiHtml5, hoverColor:"rgb(200,85,51)" },
        { name: 'CSS', alt: 'CSS logo', icon: SiCss3, hoverColor:"rgb(69,98,226)" },
    ],
  },
]);

//   {
//     name: 'Riders Guild',
//     slug: 'riders-guild',
//     description: "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
//     bullet2:"built with NextAuth for user authentication and database encryption, RESTful API functionality for posts and comments between users.",
//   },
//   {
//     name: 'Dispatch',
//     slug: 'dispatch',
//     description: "WebApp created as a more customized solution for automating fleet dispatching and routing",
//     bullet2:"JavaScript, Express, Postgres, SQL, Mapbox API. Users are able to chart out zones on the map and displays the corresponding zone the geocoded data is within.",
//   },
//   {
//     name: 'Falendar',
//     slug: 'falendar',
//     description:  "Github manager workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
//     bullet2:'Utilized React Calendar Component to record and render Schedules stored within MongoDB',
//   },
//   {
//     name: 'Escape Noface',
//     slug: 'escape-noface',
//     description: "A simple and fun game I created as an ode to my favorite director",
//     bullet2:"Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
//   },
// ];

export async function fetchCompartmentBySlug(slug: string | undefined) {
  return getCompartment().find((compartment) => compartment.slug === slug);
}

export async function fetchCompartment(): Promise<Compartment[]> {
  return getCompartment();
}

// async function findSubCompartment(
//   compartment: Compartment | undefined,
//   subCompartmentSlug: string | undefined,
// ) {
//   return compartment?.details.find((compartment) => compartment.alt === subCompartmentSlug);
// }

// export async function fetchSubCompartment(
//   compartmentSlug: string | undefined,
//   subCompartmentSlug: string | undefined,
// ) {
//   const compartment = await fetchCompartmentBySlug(compartmentSlug);
//   return findSubCompartment(compartment, subCompartmentSlug);
// }
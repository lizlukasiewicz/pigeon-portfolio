
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
export const VscSymbolClass=require('react-icons/vsc').VscSymbolClass;
export const FaPaintBrush = require('react-icons/fa').FaPaintBrush;


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

export type Item = {
    name: string;
    slug: string;
    bullet1?: string;
    bullet2?: string;
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

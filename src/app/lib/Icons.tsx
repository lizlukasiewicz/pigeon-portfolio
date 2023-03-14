// 'use client'
import { cache } from 'react';
import { ColoredIcon } from './ColoredIcon';
export const SiNextdotjs = require('react-icons/si').SiNextdotjs;
export const SiMongodb = require('react-icons/si').SiMongodb;
export const SiJavascript = require('react-icons/si').SiJavascript;
export const SiExpress = require('react-icons/si').SiExpress 
export const SiPostgresql = require('react-icons/si').SiPostgresql 
export const SiMysql = require('react-icons/si').SiMysql 
export const SiSqlite = require('react-icons/si').SiSqlite 
export const SiHtml5= require('react-icons/si').SiHtml5
export const SiTailwindcss= require('react-icons/si').SiTailwindcss
export const SiCss3 = require('react-icons/si').SiCss3 
export const SiMaterialdesignicons= require('react-icons/si').SiMaterialdesignicons
export const SiStyledcomponents = require('react-icons/si').SiStyledcomponents
export const SiNodemon = require('react-icons/si').SiNodemon

export const TbBrandNextjs = require('react-icons/tb').TbBrandNextjs;
export const TbBrandBootstrap = require('react-icons/tb').TbBrandBootstrap 
export const TbBrandJavascript = require('react-icons/tb').TbBrandJavascript 

export const DiReact = require('react-icons/di').DiReact;
export const DiSqllite = require('react-icons/di').DiSqllite 
export const DiMongodb = require('react-icons/di').DiMongodb 
export const DiJavascript = require('react-icons/di').DiJavascript 

export const GrReactjs = require('react-icons/gr').GrReactjs

export const FaNode = require('react-icons/fa').FaNode


export type Project = {
    name: string;
    slug: string;
    icons: Omit<Icon, 'icons'>[];
  };
export type Icon = {
    name: string;
    alt: string;
    icon: React.ComponentType<{ size?: string; }>;
    IconComponent: React.ElementType;
  };

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
        { name: 'NextAuth', alt: 'Next Auth logo', icon: TbBrandNextjs, IconComponent: ColoredIcon},
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
        { name: 'Node', alt: 'Node logo', icon: FaNode, IconComponent: ColoredIcon },
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

export const getProject = cache((): Project[] => [
    {
      name: 'Riders Guild',
      slug: 'riders-guild',
      icons: [
        { name: 'Next.js', alt: 'Next JS logo', icon: SiNextdotjs, IconComponent: ColoredIcon},
        { name: 'MongoDB', alt: 'Mongo DB logo', icon: SiMongodb, IconComponent: ColoredIcon},
        { name: 'JavaScript', alt: 'Javascript logo', icon: SiJavascript, IconComponent: ColoredIcon},
        { name: 'NextAuth', alt: 'Next Auth logo', icon: TbBrandNextjs, IconComponent: ColoredIcon},
        { name: 'React', alt: 'React logo', icon: DiReact, IconComponent: ColoredIcon},
      ],
    },
    {
      name: 'Dispatch',
      slug: 'dispatch',
      icons: [
        { name: 'Express', alt: 'Express logo', icon: SiExpress, IconComponent: ColoredIcon },
        { name: 'JavaScript', alt: 'JavaScript logo', icon: TbBrandJavascript, IconComponent: ColoredIcon },
        { name: 'Node', alt: 'Node logo', icon: FaNode, IconComponent: ColoredIcon },
        { name: 'Nodemon', alt: 'Nodemon logo', icon: SiNodemon, IconComponent: ColoredIcon },
        { name: 'SQLite', alt: 'SQLite logo', icon: SiSqlite, IconComponent: ColoredIcon },
        { name: 'PostgreSQL', alt: 'PostgreSQL logo', icon: SiPostgresql, IconComponent: ColoredIcon },
      ],
    },
    {
      name: 'Falendar',
      slug: 'falendar',
      icons: [
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
      icons: [
        { name: 'JavaScript', alt: 'JavaScript logo', icon: TbBrandJavascript, IconComponent: ColoredIcon },
        { name: 'HTML', alt: 'HTML logo', icon: SiHtml5, IconComponent: ColoredIcon },
        { name: 'CSS', alt: 'CSS logo', icon: SiCss3, IconComponent: ColoredIcon },
      ],
    },
  ]);

  export async function fetchProjectBySlug(slug: string | undefined) {
    return getProject().find((project) => project.slug === slug);
  }

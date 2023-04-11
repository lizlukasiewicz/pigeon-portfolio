import { cache } from 'react';
import { IconType } from "react-icons";

export const SiMagento = require('react-icons/si').SiMagento;
export const SiPhp = require('react-icons/si').SiPhp;
export const SiPython = require('react-icons/si').SiPython;
export const SiMicrosoftexcel = require('react-icons/si').SiMicrosoftexcel;
export const SiMicrosoftteams = require('react-icons/si').SiMicrosoftteams;
export const SiDjango = require('react-icons/si').SiDjango;
export const SiSelenium = require('react-icons/si').SiSelenium;
export const SiDigitalocean = require('react-icons/si').SiDigitalocean;
export const SiFilezilla=require('react-icons/si').SiFilezilla;
export const SiMongodb = require('react-icons/si').SiMongodb;
export const SiMysql = require('react-icons/si').SiMysql;
export const SiGithub=require('react-icons/si').SiGithub;
export const SiPostgresql = require('react-icons/si').SiPostgresql;

export const GrStackOverflow=require('react-icons/gr').GrStackOverflow;
export const GrReactjs = require('react-icons/gr').GrReactjs;

export const RiCodeBoxLine = require('react-icons/ri').RiCodeBoxLine;

export const VscGear = require('react-icons/vsc').VscGear

//colored icons
export const FcCommandLine=require('react-icons/fc').FcCommandLine;
export const FcDataEncryption=require('react-icons/fc').FcDataEncryption;
export const FcWorkflow=require('react-icons/fc').FcWorkflow;

interface expArrayProps {
  title: string,
  details: string[],
  dates: string,
  skills: {
      color?: string,
      delay?: string,
      icon?: React.ComponentType<IconType>,
      label?: string,
  }[],
  company: string,
  companyFull: string,
  companyLink: string,
  color: string
};

export const getExpArray = cache((): expArrayProps[] => [
  {
      title: "Backend Software Engineer, Infrastructure / Data Operations",
      details: [
          "Designed, developed, and deployed custom in-house tools using Python/Django to integrate complex data from multiple vendor platforms into a unified database, enabling more efficient data analysis and reporting.",
          "Collaborated throughout the full software development life cycle, ensuring adherence to coding standards, source control management, build processes, and testing within an Agile development workflow.",
          "Implemented continuous testing using unittest, resulting in improved system validation, reliability, and scalability, and reducing software bugs and downtime",
          "Utilized SQL and data visualization tools such as Matplotlib to extract and analyze data from large-scale databases, providing actionable insights to inform strategic decision-making.",
          "Developed and maintained e-commerce website using PHP and Magento, implementing custom themes, modules, and extensions to enhance user experience and site performance."
      ],
      dates: "March 2022 - Current",
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
              icon: SiMysql,
              color: "rgb(43,97,157)",
              label: "MySQL",
              delay: "180ms"
          },
          // {
          //     icon: SiMicrosoftteams,
          //     color: "rgb(119,124,216)",
          //     label: "Teams",
          //     delay: "180ms"
          // },
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
              icon: RiCodeBoxLine,
              color: "rgb(89,188,125)",
              label: "Legacy Code",
              delay: "420ms"
          },
          {
              icon: SiFilezilla,
              color: "rgb(184,0,0)",
              label: "FTP/FTPS",
              delay: "480ms"
          },
      ],
      company: "BuySupply",
      companyFull: "Buy-Supply Corp",
      companyLink: "https://www.buysupply.com/",
      color: "rgb(57,64,120)",
  },
  {
    title: "Software Engineering Fellow",
    details: [
        "Attended an 80+ hours/weekly bootcamp focused on full-stack software development",
        "Developed a portfolio using HTML/CSS/JS, SQL, MongoDB, Axios, and Node",
        "Utilized Git version control and managed team repositories",
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
    color: "rgb(150,54,52)",

},
]);

export async function fetchExpByCompany(company: string | undefined) {
  return getExpArray().find((exp) => exp.company === company);
}

export async function fetchExpArray(): Promise<expArrayProps[]> {
  return getExpArray();
}

// "• Participate in full life-cycle software development
// • Design, implement, and deploy highly scalable and reliable systems
// • Build storage systems, libraries, and frameworks
// • Contribute ideas for new features and identify areas for improvement proactively
// • Collaborate effectively across teams, including outside of engineering
// • Write clean, tested, and well-documented code"
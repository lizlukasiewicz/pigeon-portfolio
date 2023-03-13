import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Compartment = {
  name: string;
  slug: string;
  description: string;
  active: string;
  git: string;
  details: Omit<Detail, 'details'>[];
};
export type Detail = {
  name: string;
  alt: string;
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
      name: 'Blog',
      slug: 'blog',
      description: 'Open Source, Openly Sourced',
      items: [


      ],
    },
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
      { name: 'Next.js', alt: 'Next JS logo'},
      { name: 'MongoDB', alt: 'Mongo DB logo'},
      { name: 'JavaScript', alt: 'Javascript logo'},
      { name: 'NextAuth', alt: 'Next Auth logo'},
      { name: 'React', alt: 'React logo'},
    ],
  },
  {
    name: 'Dispatch',
    slug: 'dispatch',
    description: "WebApp created as a more customized solution for automating fleet dispatching and routing. JavaScript, Express, Postgres, SQL, Mapbox API. Users are able to chart out zones on the map and displays the corresponding zone the geocoded data is within.",
    active: '',
    git: "https://github.com/lizlukasiewicz/dispatch",
    details: [
      { name: 'Express', alt: 'Express logo'},
      { name: 'JavaScript', alt: 'JavaScript logo'},
      { name: 'SQL', alt: 'SQL logo'},
      { name: 'SQLite', alt: 'SQLite logo'},
      { name: 'PostgreSQL', alt: 'PostgreSQL logo'},
    ],
  },
  {
    name: 'Falendar',
    slug: 'falendar',
    description: "Github manager workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters. Utilized React Calendar Component to record and render Schedules stored within MongoDB",
    active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
    git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
    details: [
      { name: 'MongoDB', alt: 'MongoDB logo'},
      { name: 'React', alt: 'React logo'},
      { name: 'Styled-Components', alt: 'Styled Components logo'},
      { name: 'Material-Icons', alt: 'Material Icons logo'},
      { name: 'JavaScript', alt: 'JavaScript logo'},
    ],
  },
  {
    name: 'Escape Noface',
    slug: 'escape-noface',
    description: "A simple and fun game I created as an ode to my favorite director. Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
    active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
    git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
    details: [
      { name: 'JavaScript', alt: 'JavaScript logo'},
      { name: 'HTML', alt: 'HTML logo'},
      { name: 'CSS', alt: 'CSS logo'},
    ],
  },
]);


// export const projects: { name:string; slug:string; description:string; bullet2:string; active:string; git:string; details:Detail[] }[] = [
//   {
//     name: 'Riders Guild',
//     slug: 'riders-guild',
//     description: "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
//     bullet2:"built with NextAuth for user authentication and database encryption, RESTful API functionality for posts and comments between users.",
//     active: 'https://capstone-nine.vercel.app/',
//     git: 'https://github.com/lizlukasiewicz/capstone',
//     details: [
//       { name: 'Next.js', alt: 'Next JS logo'},
//       { name: 'MongoDB', alt: 'Mongo DB logo'},
//       { name: 'JavaScript', alt: 'Javascript logo'},
//       { name: 'NextAuth', alt: 'Next Auth logo'},
//       { name: 'React', alt: 'React logo'},
//     ],
//   },
//   {
//     name: 'Dispatch',
//     slug: 'dispatch',
//     description: "WebApp created as a more customized solution for automating fleet dispatching and routing",
//     bullet2:"JavaScript, Express, Postgres, SQL, Mapbox API. Users are able to chart out zones on the map and displays the corresponding zone the geocoded data is within.",
//     active: '',
//     git: "https://github.com/lizlukasiewicz/dispatch",
//     details: [
//       { name: 'Express', alt: 'Express logo'},
//       { name: 'JavaScript', alt: 'JavaScript logo'},
//       { name: 'SQL', alt: 'SQL logo'},
//       { name: 'PostgreSQL', alt: 'PostgreSQL logo'},
//     ],
//   },
//   {
//     name: 'Falendar',
//     slug: 'falendar',
//     description:  "Github manager workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
//     bullet2:'Utilized React Calendar Component to record and render Schedules stored within MongoDB',
//     active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
//     git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
//     details: [
//       { name: 'MongoDB', alt: 'MongoDB logo'},
//       { name: 'React', alt: 'React logo'},
//       { name: 'Education', alt: 'education'},
//     ],
//   },
//   {
//     name: 'Escape Noface',
//     slug: 'escape-noface',
//     description: "A simple and fun game I created as an ode to my favorite director",
//     bullet2:"Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
//     active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
//     git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
//     details: [
//       { name: 'JavaScript', alt: 'JavaScript logo'},
//       { name: 'HTML', alt: 'HTML logo'},
//       { name: 'CSS', alt: 'CSS logo'},
//     ],
//   },
// ];

export async function fetchCompartmentBySlug(slug: string | undefined) {
  // Assuming it always return expected compartment
  return getCompartment().find((compartment) => compartment.slug === slug);
}

export async function fetchCompartment(): Promise<Compartment[]> {
  return getCompartment();
}

async function findSubCompartment(
  compartment: Compartment | undefined,
  subCompartmentSlug: string | undefined,
) {
  return compartment?.details.find((compartment) => compartment.alt === subCompartmentSlug);
}

export async function fetchSubCompartment(
  compartmentSlug: string | undefined,
  subCompartmentSlug: string | undefined,
) {
  const compartment = await fetchCompartmentBySlug(compartmentSlug);
  return findSubCompartment(compartment, subCompartmentSlug);
}
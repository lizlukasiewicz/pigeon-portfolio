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
  icon?: any;
};
export type Item = {
    name: string;
    slug: string;
    bullet1?: string;
    bullet2?: string;
    img: string;
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
          img: '',
        },
        {
          name: 'Dispatch',
          slug: 'dispatch',
          bullet1: "WebApp created as a more customized solution for automating fleet dispatching and routing",
          bullet2: "JavaScript, Express, Postgres, SQL, Mapbox API",
          img: '',
        },
        {
          name: 'Falendar',
          slug: 'falendar',
          bullet1: "Github workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
          bullet2: "",
          img: '',
        },
        {
          name: 'Escape Noface',
          slug: 'escape-noface',
          bullet1: "A simple and fun game I created as an ode to my favorite director",
          bullet2: "Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
          img: '',
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
    description: "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
    active: 'https://capstone-nine.vercel.app/',
    git: 'https://github.com/lizlukasiewicz/capstone',
    details: [
      { name: 'Next.js', alt: 'Next js logo', icon: "icon-logo" },
      { name: 'MongoDB', alt: 'Mongo DB logo', icon: "icon-logo" },
      { name: 'Mongoose', alt: 'laptops', icon: "icon-logo" },
      { name: 'NextAuth', alt: 'laptops', icon: "icon-logo" },
      { name: 'React', alt: 'React logo', icon: "icon-logo" },
    ],
  },
  {
    name: 'Dispatch',
    slug: 'dispatch',
    description: "WebApp created as a more customized solution for automating fleet dispatching and routing",
    active: '',
    git: "https://github.com/lizlukasiewicz/dispatch",
    details: [
      { name: 'Tops', alt: 'tops', icon: "icon-logo" },
      { name: 'Shorts', alt: 'shorts', icon: "icon-logo" },
      { name: 'Shoes', alt: 'shoes', icon: "icon-logo" },
    ],
  },
  {
    name: 'Falendar',
    slug: 'falendar',
    description: "1",
    active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
    git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
    details: [
      { name: 'Fiction', alt: 'fiction', icon: "icon-logo" },
      { name: 'Biography', alt: 'biography', icon: "icon-logo" },
      { name: 'Education', alt: 'education', icon: "icon-logo" },
    ],
  },
  {
    name: 'Escape Noface',
    slug: 'escape-noface',
    description: "A simple and fun game I created as an ode to my favorite director",
    active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
    git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
    details: [
      { name: 'Fiction', alt: 'fiction', icon: "icon-logo" },
      { name: 'Biography', alt: 'biography', icon: "icon-logo" },
      { name: 'Education', alt: 'education', icon: "icon-logo" },
    ],
  },
]);


export const projects: { name:string; slug:string; description:string; bullet2:string; active:string; git:string; details:Detail[] }[] = [
  {
    name: 'Riders Guild',
    slug: 'riders-guild',
    description: "A Blog built for cycling enthousiasts or beginners as a central place to trade parts, tips, and routes.",
    bullet2:"built with NextAuth for user authentication and database encryption, RESTful API functionality for posts and comments between users.",
    active: 'https://capstone-nine.vercel.app/',
    git: 'https://github.com/lizlukasiewicz/capstone',
    details: [
      { name: 'Next.js', alt: 'Next JS logo', icon: "icon-logo" },
      { name: 'MongoDB', alt: 'Mongo DB logo', icon: "icon-logo" },
      { name: 'JavaScript', alt: 'Javascript logo', icon: "icon-logo" },
      { name: 'NextAuth', alt: 'Next Auth logo', icon: "icon-logo" },
      { name: 'React', alt: 'React logo', icon: "icon-logo" },
    ],
  },
  {
    name: 'Dispatch',
    slug: 'dispatch',
    description: "WebApp created as a more customized solution for automating fleet dispatching and routing",
    bullet2: "JavaScript, Express, Postgres, SQL, Mapbox API. Users are able to chart out zones on the map and displays the corresponding zone the geocoded data is within.",
    active: '',
    git: "https://github.com/lizlukasiewicz/dispatch",
    details: [
      { name: 'Express', alt: 'Express logo', icon: "icon-logo" },
      { name: 'JavaScript', alt: 'JavaScript logo', icon: "icon-logo" },
      { name: 'SQL', alt: 'SQL logo', icon: "icon-logo" },
      { name: 'PostgreSQL', alt: 'PostgreSQL logo', icon: "icon-logo" },
    ],
  },
  {
    name: 'Falendar',
    slug: 'falendar',
    description:  "Github manager workflow project using React Calendar component to record and render synchronized schedules between user groups and clusters.",
    bullet2: 'Utilized React Calendar Component to record and render Schedules stored within MongoDB',
    active: 'https://60f1ef3a5668050007a6b11d--condescending-lamarr-3bcb2c.netlify.app/',
    git: 'https://github.com/lizlukasiewicz/Collab-MERN-Client',
    details: [
      { name: 'MongoDB', alt: 'MongoDB logo', icon: "icon-logo" },
      { name: 'React', alt: 'React logo', icon: "icon-logo" },
      { name: 'Education', alt: 'education', icon: "icon-logo" },
    ],
  },
  {
    name: 'Escape Noface',
    slug: 'escape-noface',
    description: "A simple and fun game I created as an ode to my favorite director",
    bullet2: "Single player online game utilizing vanilla JavaScipt and HTML Canvas for collision detection, gravitational elements, and randomized obstacle generation",
    active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
    git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
    details: [
      { name: 'JavaScript', alt: 'JavaScript logo', icon: "icon-logo" },
      { name: 'HTML', alt: 'HTML logo', icon: "icon-logo" },
      { name: 'CSS', alt: 'CSS logo', icon: "icon-logo" },
    ],
  },
];

export async function fetchCompartmentBySlug(slug: string | undefined) {
  // Assuming it always return expected compartment
  return getCompartment().find((compartment) => compartment.slug === slug);
}

export async function fetchCompartment(): Promise<Compartment[]> {
  return getCompartment();
}

async function findSubCompartment(
  Compartment: Compartment | undefined,
  subCompartmentSlug: string | undefined,
) {
  return Compartment?.details.find((Compartment) => Compartment.alt === subCompartmentSlug);
}

export async function fetchSubCompartment(
  compartmentSlug: string | undefined,
  subCompartmentSlug: string | undefined,
) {
  const Compartment = await fetchCompartmentBySlug(compartmentSlug);
  return findSubCompartment(Compartment, subCompartmentSlug);
}

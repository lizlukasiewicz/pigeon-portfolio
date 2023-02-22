import React, { cache } from 'react';


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
  icon?: string;
};
export type Item = {
    name: string;
    slug: string;
    bullet1?: string;
    bullet2?: string;
    img: string;
  };


  export const demos: { name: string; slug: string; description: string; items?: Item[] }[] = [
{    name: 'About Me',
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
      description: 'Built by a Machine',
      items: [
        {
          name: 'Riders Guild',
          slug: 'riders-guild',
          bullet1: "A Blog built with NextAuth for user authentication and database encryption",
          bullet2: "RESTful API functionality for posts and comments between users.",
          img: '',
        },
        {
          name: 'Dispatch',
          slug: 'dispatch',
          bullet1: "Full stack Express and Postgres app that uses Sequelize as an ORM to interact with protected customer data with full CRUD functionality for each user.",
          bullet2: "Data is run through the Mapbox API which geocodes customer addresses and renders them on map. Users are able to chart out zones on the map and the app displays the corresponding zone the geocoded data is within.",
          img: '',
        },


      ],
    },
    {
      name: 'Contact Me',
      slug: 'contact',
      description: 'Spent some time? Drop a line',
      items: [


      ],
    },
    {
      name: 'Resume',
      slug: 'resume',
      description: "How I've spent my days",
      items: [


      ],
  },
];


export const getCompartment = cache((): Compartment[] => [
  {
    name: 'Riders Guild',
    slug: 'riders-guild',
    description: "A Blog built with NextAuth for user authentication and database encryption, RESTful API functionality for posts and comments between users.",
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
    description: "Full stack Express and Postgres app that uses Sequelize as an ORM to interact with protected customer data with full CRUD functionality for each user. Data is run through the Mapbox API which geocodes customer addresses and renders them on map. Users are able to chart out zones on the map and the app displays the corresponding zone the geocoded data is within.",
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
    description: "1",
    active: 'https://lizlukasiewicz.github.io/Project-1-escape-Noface/',
    git: 'https://github.com/lizlukasiewicz/Project-1-escape-Noface',
    details: [
      { name: 'Fiction', alt: 'fiction', icon: "icon-logo" },
      { name: 'Biography', alt: 'biography', icon: "icon-logo" },
      { name: 'Education', alt: 'education', icon: "icon-logo" },
    ],
  },
]);

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

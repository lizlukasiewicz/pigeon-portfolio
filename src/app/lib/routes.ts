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
  // React.ReactSVGElement;
};
export type Item = {
    name: string;
    slug: string;
    description?: string;
  };

//   (alias) const QuestionAnswerTwoToneIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
//     muiName: string;
// }
// <SvgIcon ><path d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z" /></SvgIcon>
  
  export const demos: { name: string; items: Item[] }[] = [
{    name:'Home',
     items: [
            {
                name: 'About',
                slug: 'about',
                description: 'I build things, because I can, because I feel like it'
            },
            {
                name: 'Blog',
                slug: 'blog',
                description: 'Open Source, Openly Sourced'
            },
            {
                name: 'Projects',
                slug: 'projects',
                description: 'Built by a Machine'
            }, 
            {
                name: 'Contact',
                slug: 'contact',
                description: 'Spent some time? Drop a line'
            },
            {
                name: 'Resume',
                slug: 'resume',
                description: "How I've spent my days"
            },
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

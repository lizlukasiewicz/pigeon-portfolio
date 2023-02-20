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
  items: Omit<Item, 'items'>[];
};
export type Item = {
    name: string;
    slug: string;
    description?: string;
  };

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
    active: '',
    git: '',
    items: [
      { name: 'Next.js', slug: 'phones', description: "4" },
      { name: 'MongoDB', slug: 'tablets', description: "5" },
      { name: 'Mongoose', slug: 'laptops', description: "2" },
      { name: 'NextAuth', slug: 'laptops', description: "2" },
      { name: 'React', slug: 'laptops', description: "2" },
    ],
  },
  {
    name: 'Clothing',
    slug: 'clothing',
    description: "1",
    active: '',
    git: '',
    items: [
      { name: 'Tops', slug: 'tops', description: "3" },
      { name: 'Shorts', slug: 'shorts', description: "4" },
      { name: 'Shoes', slug: 'shoes', description: "5" },
    ],
  },
  {
    name: 'Books',
    slug: 'books',
    description: "1",
    active: '',
    git: '',
    items: [
      { name: 'Fiction', slug: 'fiction', description: "5" },
      { name: 'Biography', slug: 'biography', description: "2" },
      { name: 'Education', slug: 'education', description: "3" },
    ],
  },
  {
    name: 'Books',
    slug: 'books',
    description: "1",
    active: '',
    git: '',
    items: [
      { name: 'Fiction', slug: 'fiction', description: "5" },
      { name: 'Biography', slug: 'biography', description: "2" },
      { name: 'Education', slug: 'education', description: "3" },
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
  return Compartment?.items.find((Compartment) => Compartment.slug === subCompartmentSlug);
}

export async function fetchSubCompartment(
  CompartmentSlug: string | undefined,
  subCompartmentSlug: string | undefined,
) {
  const Compartment = await fetchCompartmentBySlug(CompartmentSlug);
  return findSubCompartment(Compartment, subCompartmentSlug);
}

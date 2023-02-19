import { cache } from 'react';

export type PageProps = {
  params?: any;
  children?: React.ReactNode;
};
export type Compartment = {
  name: string;
  slug: string;
  count: number;
  items: Omit<Compartment, 'items'>[];
};
export type Item = {
    name: string;
    slug: string;
    description?: string;
  };

  export const demos: { name: string; items: Item[] }[] = [
{    name:'Layouts',
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
    name: 'Electronics',
    slug: 'electronics',
    count: 11,
    items: [
      { name: 'Phones', slug: 'phones', count: 4 },
      { name: 'Tablets', slug: 'tablets', count: 5 },
      { name: 'Laptops', slug: 'laptops', count: 2 },
    ],
  },
  {
    name: 'Clothing',
    slug: 'clothing',
    count: 12,
    items: [
      { name: 'Tops', slug: 'tops', count: 3 },
      { name: 'Shorts', slug: 'shorts', count: 4 },
      { name: 'Shoes', slug: 'shoes', count: 5 },
    ],
  },
  {
    name: 'Books',
    slug: 'books',
    count: 10,
    items: [
      { name: 'Fiction', slug: 'fiction', count: 5 },
      { name: 'Biography', slug: 'biography', count: 2 },
      { name: 'Education', slug: 'education', count: 3 },
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

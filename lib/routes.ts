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
            },
            {
                name: 'Blog',
                slug: 'blog',
            },
            {
                name: 'Projects',
                slug: 'projects',
            }, 
            {
                name: 'Contact',
                slug: 'contact',
            },
            {
                name: 'Resume',
                slug: 'resume',
            },
        ],
    },
];
'use client'

// import { fetchCompartment } from '../lib/routes';
// import { TabGroup  } from './TabGroup';
// import Link from 'next/link';
// import { useSelectedLayoutSegment } from 'next/navigation';



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const projects= await fetchCompartment();

    return (

      <div>
        <div >
          <p>This is from Projects/layout.tsx</p>
          {/* <TabGroup
          path='/projects'
          items={[
            {
              text: 'All',
            },
            ...projects.map((x) => ({
              text: x.name,
              slug: x.slug,
            })), 
          ]}
          /> */}

  
        </div>
  
        <div>{children}</div>
      </div>
    );
  }

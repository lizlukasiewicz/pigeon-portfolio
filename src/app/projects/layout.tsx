
import React from 'react';
import { fetchCompartment } from '../lib/routes';
import { TabGroup  } from './TabGroup';


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects = await fetchCompartment();
  // console.log(`🌞 from projects/layout projects:${projects[1].slug}`)
    return (

      <div>
        <div >
          <TabGroup
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
          />

  
        </div>
  
        <div>{children}</div>
      </div>
    );
  }

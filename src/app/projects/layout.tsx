
import React from 'react';
import { fetchCompartment } from '../lib/routes';
import { TabGroup  } from './TabGroup';
// import { useOnScreen } from '../lib/Loading';


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pageRefs: React.MutableRefObject<{}> = React.useRef({});
  // const [visRef, visible] = useOnScreen();
  const projects = await fetchCompartment();
    return (
      <>
       
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

  
        
  
        <>{children}</>
      </>
    );
  }

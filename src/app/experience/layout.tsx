'use client';
import React from 'react';
//import { fetchExpArray } from '../lib/experience';

import { TempContainer } from '../ui/TempContainer';
import { Stack, Text } from '@chakra-ui/react'

// interface PageProps {
//   pageRefs?: React.MutableRefObject<{}>,
//   visRef?: any,
//   visible?: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
// }

export default async function Layout({children,}: {children: React.ReactNode}) //pageRefs, visible, visRef }: PageProps)
    {
  //const experiences= await fetchExpArray()
  // const [idx, setIdx] = React.useState<number>(0);
  // React.useEffect((): void => {
  //   idx && setIdx(idx)
  // }, [idx]);
  return(
    <TempContainer label={'Experience'}>
      <Stack>

      <p>hi this is from layout.tsx</p>

        {children}
        
      
      </Stack>
    </TempContainer>
          

    );
  }
//   <Stack
//   direction={'row'}
//   spacing={5}
//   minHeight={{ base: "80vh", lg: "60vh" }}>

        
//       <Text>THIS IS CHILD-------------</Text>
//       <Text>-------------</Text>
//       {children}
// </Stack>        
  // <ExpGroup
              // idx={idx} 
              // setIdx={setIdx}
              // items={[
                //   ...experiences.map((x) => ({
                  //     company: x.company,
                  // idx: {idx}, 
                  // setIdx: {setIdx}
                  // title: x.title,
                  // details: x.details,
                  // dates: x.dates,
                  // skills: x.skills,
                  // companyFull: x.companyFull,
                  // companyLink: x.companyLink,
                  // color: x.color,
                  //   })),
                  // ]}
                 // />
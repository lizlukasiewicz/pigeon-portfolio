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
export type expProps = {
  idx: number;
  setIdx: React.Dispatch<React.SetStateAction<number>>;
}
export type PageProps = {
  children?: React.ReactNode;
  params?: expProps;
};

export default function Layout({ children, params }: PageProps) //pageRefs, visible, visRef }: PageProps)
    {

  return(
    <TempContainer label={'Experience'}>
      <Stack
        spacing={5}
        minHeight={{ base: "80vh", lg: "60vh" }}>


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
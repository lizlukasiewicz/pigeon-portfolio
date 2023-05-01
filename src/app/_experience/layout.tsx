'use client';
import React from 'react';

import { TempContainer } from '../ui/TempContainer';
import { Stack, Text } from '@chakra-ui/react'

interface PageProps {
  children?: React.ReactNode,
  pageRefs: React.MutableRefObject<{}>,
  visRef: any,
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};

// export type PageProps = {
//   children?: React.ReactNode;
//   pageRefs: React.MutableRefObject<{}>;
//   visRef: any;
//   visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
// };

export default function ExperienceLayout({ children, pageRefs, visRef, visible}: PageProps) //pageRefs, visible, visRef }: PageProps)
    {

  return(
    <TempContainer label={'experience'} title={'My Experience'} pageRefs={pageRefs} refNum={2}>
      <Stack
        spacing={5}
        minHeight={{ base: "80vh", lg: "60vh" }}>


        {children}
        
      
      </Stack>
    </TempContainer>
          

    );
  }
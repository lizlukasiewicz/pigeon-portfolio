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
// FORMALLY PAGE.TSX
'use client';
import React from "react";
import { Stack} from '@chakra-ui/react';// List, VStack, Heading, StackDivider, Container, ListItem } from '@chakra-ui/react';
import { PageProps } from "./layout"
import { ExpGroup } from "./ExpGroup";



export default function Experience({ params }: PageProps){
  const [idx, setIdx] = React.useState<number>(0);
  React.useEffect((): void => {
    idx && setIdx(idx)
  }, [idx]);
  return(
    <Stack>
      <ExpGroup idx={idx} setIdx={setIdx}/>
    </Stack>

  )
}
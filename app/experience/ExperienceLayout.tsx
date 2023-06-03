'use client';
import React from 'react';
import { ExpGroup } from "./ExpGroup";
import { TempContainer } from 'ui/TempContainer';
import { Stack } from "@chakra-ui/react";

interface PageProps {
  pageRefs: React.MutableRefObject<{}>,
  visRef: any,
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};

export default function ExperienceLayout({ pageRefs, visRef, visible}: PageProps) {
  const [loaded, setLoaded] = React.useState<boolean>(false);
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);

  const [idx, setIdx] = React.useState<number>(0);
    React.useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
  return(
    <TempContainer 
      label={'experience'} 
      title={'My Experience'} 
      pageRefs={pageRefs} 
      refNum={2}
      loaded={loaded}>
        <Stack ref={visRef}>
          <ExpGroup idx={idx} setIdx={setIdx}/>
        </Stack>
    </TempContainer>
          

    );
  }
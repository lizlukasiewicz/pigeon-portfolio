'use client';
import {useState, useEffect} from 'react';
import { ExpGroup } from "./ExpGroup";
import { TempContainer } from 'ui/TempContainer';
import { Stack, Container} from "@chakra-ui/react";

interface PageProps {
  pageRefs: React.MutableRefObject<{}>,
  visRef: any,
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};

export default function ExperienceLayout({ pageRefs, visRef, visible}: PageProps) {
  const [loaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);

  const [idx, setIdx] = useState<number>(0);
    useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
  return(
    <Container
      maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
      opacity={loaded ? 1 : 0.1}
      ref={el => pageRefs.current = { ...pageRefs.current, experience: el }}
      transition={"500ms ease-out"}>
        <TempContainer 
          label={'experience'} 
          title={'My Experience'} 
          loaded={loaded}>
            <Stack 
              ref={visRef} >
              <ExpGroup idx={idx} setIdx={setIdx}/>
            </Stack>
        </TempContainer>
    </Container>
          

    );
  }
'use client';
import {useState, useEffect} from 'react';
import { ExpGroup } from "./ExpGroup";
import { TempContainer } from 'ui/TempContainer';
import { Container } from "@chakra-ui/react";
import { useVisible } from "lib/helpers/Loading";

export default function Experience() {
  const [visRef, visible] = useVisible();
  const [loaded, setLoaded] = useState<boolean>(false);//useVisible();
    useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);

  const [idx, setIdx] = useState<number>(0);
    useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
  return(
    <Container
      id="experience"
      maxW={{ base: "100%", sm: "85%", lg: "85%", xl: "70%" }}
      ref={visRef}
      transition={"500ms ease-out"}>
        <TempContainer 
          label={'experience'} 
          title={'My Experience'}
          loaded={loaded} >
              <ExpGroup idx={idx} setIdx={setIdx}/>
        </TempContainer>
    </Container>
          

    );
  }
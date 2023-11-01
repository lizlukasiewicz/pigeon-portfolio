'use client';
import {useState, useEffect} from 'react';
import { TempContainer } from 'ui/TempContainer';
import ProjectGroup from './ProjectGroup';
import { Container } from "@chakra-ui/react";
import { projectVisible } from "lib/helpers/Loading";

export default function Projects() {
  const [visRef, visible] = projectVisible();
  const [loaded, setLoaded] = useState<boolean>(false);
    
    useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
  
  const [idx, setIdx] = useState<number>(0);
      useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
    return (
      <Container
        id="projects"
        maxW={{ base: "100%", sm: "85%", lg: "85%", xl: "70%" }}
        transition={"500ms ease-out"}
        ref={visRef}>
        <TempContainer 
          label={'projects'} 
          title={"Built by Me"} 
          loaded={loaded}>
              <ProjectGroup idx={idx} setIdx={setIdx} />
        </TempContainer>
        </Container>
    );
  }

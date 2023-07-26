'use client';
import {useState, useEffect} from 'react';
import { TempContainer } from 'ui/TempContainer';
import Project from './Project';
import { Container } from "@chakra-ui/react";

// interface PageProps {
//   visRef: any,
//   visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
// };//{ visRef, visible}: PageProps

export default function Projects() {
  // const [loaded, setLoaded] = useState<boolean>(false);
    
  //   useEffect(() => {
  //       visible && setLoaded(true)
  //   }, [visible]);
  
  const [idx, setIdx] = useState<number>(0);
      useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
    return (
      <Container
        id="projects"
        maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
        //opacity={loaded ? 1 : 0.5}
        transition={"500ms ease-out"}>
        <TempContainer 
          label={'projects'} 
          title={"The things I've Built"} >
            {/* <Stack ref={visRef}> */}
              <Project idx={idx} setIdx={setIdx} />
            {/* </Stack> */}
        </TempContainer>
        </Container>
    );
  }

import React from 'react';
import { TempContainer } from 'ui/TempContainer';
import Projects from './Projects'
import { Stack, Container } from "@chakra-ui/react";

interface PageProps {
  pageRefs: React.MutableRefObject<{}>,
  visRef: any,
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};

export default function ProjectLayout({ pageRefs, visRef, visible}: PageProps) {
  const [loaded, setLoaded] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
  
  const [idx, setIdx] = React.useState<number>(0);
      React.useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
    return (
      <Container
        maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
        //opacity={1}//loaded ? 1 : 0.5
        ref={el => pageRefs.current = { ...pageRefs.current, projects: el }}
        transition={"500ms ease-out"}>
        <TempContainer 
          label={'projects'} 
          title={"The things I've Built"} 
          loaded={loaded}/>
          <Stack ref={visRef}>
            <Projects idx={idx} setIdx={setIdx} />
          </Stack>
          
        </Container>
    );
  }

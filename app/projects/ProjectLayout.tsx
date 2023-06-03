import React from 'react';
import { TempContainer } from 'ui/TempContainer';
import Projects from './Projects'
import { Stack } from "@chakra-ui/react";

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
      <TempContainer 
        label={'projects'} 
        title={"The things I've Built"} 
        pageRefs={pageRefs} 
        refNum={3}
        loaded={loaded}>
        <Stack ref={visRef}>
          <Projects idx={idx} setIdx={setIdx} />
        </Stack>
        
      </TempContainer>
    );
  }

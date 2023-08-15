'use client';
import {useState, useEffect} from 'react';
import { ExpGroup } from "./ExpGroup";
import { TempContainer } from 'ui/TempContainer';
import { Container} from "@chakra-ui/react";

// interface PageProps {
//   visRef: any,
//   visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
// };//{ visRef, visible}: PageProps

export default function Experience() {
  // const [loaded, setLoaded] = useState<boolean>(false);
  //   useEffect(() => {
  //       visible && setLoaded(true)
  //   }, [visible]);

  const [idx, setIdx] = useState<number>(0);
    useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
  return(
    <Container
      id="experience"
      maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
      //opacity={loaded ? 1 : 0.1}
      transition={"500ms ease-out"}>
        <TempContainer 
          label={'experience'} 
          title={'My Experience'} >
              <ExpGroup idx={idx} setIdx={setIdx}/>
        </TempContainer>
    </Container>
          

    );
  }
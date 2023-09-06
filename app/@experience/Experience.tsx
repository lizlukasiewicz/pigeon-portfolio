
import {useState, useEffect} from 'react';
import { ExpGroup } from "./ExpGroup";
import { TempContainer } from 'ui/TempContainer';
import { Container} from "@chakra-ui/react";
import { PageProps } from 'lib/helpers/interfaces';

export default function Experience({ visRef, visible }: PageProps) {
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
      id="experience"
      maxW={{ base: "95%", sm: "85%", lg: "85%", xl: "70%" }}
      //opacity={loaded ? 1 : 0.1}
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
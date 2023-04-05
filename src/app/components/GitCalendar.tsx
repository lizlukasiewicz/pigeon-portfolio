import { Heading, Stack, Flex, Text} from "@chakra-ui/react";
import * as React from "react";
//import { useOnScreen } from "../lib/Loading";//, PageProps} from "../lib/Loading";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";

type PageProps = {
    pageRefs: React.MutableRefObject<{}>;
    visRef: any;
    visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
};

export default function GitCalendar({ pageRefs, visRef, visible }: PageProps) {
    const [loaded, setLoaded] = React.useState<boolean>(false);
    
    React.useEffect(() => {
        visible && setLoaded(true)
    }, [visible]);
    
    return(
        <Flex
          alignItems={"center"}
          boxSizing={"border-box"}
          flexDirection={{ base: "column", md: "row" }}
          height={"30vh"}
          // 💥 REMOVE WHEN DONE FORMATTING
          //border={"1px solid rgb(172,35,244)"} // PURPLE  
          opacity={visible ? 1 : 0.25}
          position={"relative"}
          ref={el => pageRefs.current = { ...pageRefs.current, home: el }}
          transition={"1s ease-out"}>
            
            <Stack
              align={"center"}
              ref={visRef}
              width={{ base: "85vw", lg: "65vw" }}>

                <Text
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize={"2xl"}
                  color='#00C484'
                  marginY={5}>

                    Git Commit, To 
                      
                      <Text 
                        as='b' 
                        color='#00C484'
                        _hover={{color:"#F3BA40"}}>
                          Something 
                      </Text>

                    ::

                </Text>

                <GitHubCalendar
                  blockRadius={7}
                  color={"#00C484"}
                  theme={{
                      level0:  "rgb(17 24 55)",//uCMV('rgb()','rgb()'),
                      level1:  "rgb(33, 74, 55)",//uCMV('rgb()','rgb(0)'),
                      level2:  "rgb(68, 150, 109)",//uCMV('rgb()','rgb()'),
                      level3:  "rgb(89, 188, 125)",//uCMV('rgb()','rgb()'),
                      level4:  "rgb(0, 196, 132)",//uCMV('rgb()','rgb()') 
                  }}
                  username="lizlukasiewicz">

                    <ReactTooltip html />

                </GitHubCalendar>

            </Stack>
        </Flex>
    )
};
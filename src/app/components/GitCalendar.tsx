import { Stack, Flex, Text, useColorModeValue as uCMV} from "@chakra-ui/react";
import * as React from "react";
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";

// TODO  DAYMODE COLORS
export default function GitCalendar() {
    
    return(
        <Flex
          alignItems={"center"}
          boxSizing={"border-box"}
          flexDirection={{ base: "column", md: "row" }}
          height={"30vh"}
          position={"relative"}
          transition={"1s ease-out"}>
            
            <Stack
              align={"center"}
              width={{ base: "85vw", lg: "65vw" }}>

                <Text
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize={"2xl"}
                  color={uCMV("#822320", "#00C484")}//{'#00C484'}//
                  marginY={5}>

                    Git Commit, To<Text as={"span"} color={'#00C484'} _hover={{color:"#F3BA40"}} transition={"300ms ease-in-out"}> Something </Text>

                    ::

                </Text>

                <GitHubCalendar
                  blockRadius={7}
                  color={"#00C484"}
                  theme={{
                      level0: uCMV("rgb(236,217,234)", "rgb(17 24 55)"),//"rgb(17 24 55)",
                      level1: uCMV("rgb(226,156,176)", "rgb(33, 74, 55)"),//"rgb(33, 74, 55)",
                      level2: uCMV("rgb(241,114,90)", "rgb(68, 150, 109)"),//"rgb(68, 150, 109)",
                      level3: uCMV("rgb(213,68,64)", "rgb(89, 188, 125)"),//"rgb(89, 188, 125)",
                      level4: uCMV("rgb(130,35,32)", "rgb(0, 196, 132)"),//"rgb(0, 196, 132)",
                  }}
                  username="lizlukasiewicz">

                    <ReactTooltip html />

                </GitHubCalendar>

            </Stack>
        </Flex>
    )
};
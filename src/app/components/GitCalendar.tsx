import { Heading, Stack} from "@chakra-ui/react";
import * as React from "react";

import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip";

export const GitCalendar = () => (
    <Stack paddingTop={20}>
        <Heading
            fontFamily={"var(--chakra-fonts-mono)"}
            fontSize={"lg"}
            color='#00C484'
            _hover={{color:"#FFFFFF"}}
            marginY={5}>
            Git Commit To Something::
        </Heading>
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
);

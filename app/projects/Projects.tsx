'use client';
import * as React from 'react';
import { SkillIcon } from 'lib/Icons';
import { projectArray } from 'lib/routes';
import { fadeDown } from 'lib/helpers/animation';
import { Icon, 
        Button, 
        List, 
        ListItem, 
        Tooltip, 
        Heading, 
        HStack, 
        VStack, 
        Container, 
        Center, 
        Box, 
        Text, 
        Stack } from '@chakra-ui/react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { VscDebugStart } from "react-icons/vsc";

interface ProjectProps {
  idx: number,
  setIdx: React.Dispatch<React.SetStateAction<number>>
};

export default function Projects({ idx, setIdx }: ProjectProps) {
    const fadeDownAnim: string = `${fadeDown} 500ms 80ms forwards`;
    return(
          <Stack
            spacing={5}
            minHeight={{ base: "40vh", lg: "50vh" }}
            height={280}
            marginTop={{ base: "20%", sm: "5%", lg: 0 }}
            marginBottom={{ base: "50%", sm: "30%", lg: 0 }}
            width={{ base: "80vw", lg: "60vw" }}>


                {/* PROJECT TABS */}
              <List
                marginTop={'5%'}
                display={"flex"} 
                width={"100%"}
                flexDirection={"row"}>
                  {projectArray.map((title, i) => (

                      <ListItem
                        key={i}
                        color={idx === i ? '#E1E1E1' : '#175C78' }
                        onClick={() => setIdx(i)}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        paddingLeft={6}
                        fontSize={'lg'}
                        fontWeight={"bold"}
                        _hover={{
                          color: "#F3BA40",
                          cursor: "pointer"
                        }}>

                          <Text
                            as={"span"}
                            color={idx === i ? "#FFFFFF" : '#00C484'}
                            _hover={{
                              color: "#F3BA40"
                            }}>
                              {title.name}
                          </Text>

                      </ListItem>

                  ))}
              </List>

              <VStack spacing={0}>

                {/* PROJECT DETAILS */}
                  
                <Container padding={3} maxW="100%" >
                  <Box padding={3}>
                    <HStack
                      marginBottom={6}
                      justifyContent={"space-between"}>

                        {/* PROJECT TITLE */}
                        <Heading
                          fontFamily={"var(--chakra-fonts-mono)"}
                          fontWeight={"bold"}
                          fontSize={"2xl"}
                          color="#E1E1E1"
                          _hover={{color:"#FFFFFF"}}>
                            {projectArray[idx].name}
                        </Heading>
                        
                        {/* GITHUB / ACTIVE LINKS */}
                        <HStack spacing={2}>
                          <Button
                              as={"a"}
                              target={"_blank"}
                              href={`${projectArray[idx].git}`}
                              backgroundColor={"transparent"}
                              _hover={{backgroundColor:"#112941"}}>
                              <Tooltip hasArrow label={"Github Repo"} aria-label={"Github Repo Link"}>
                                <Center animation={fadeDownAnim} opacity={0}>
                                  <Icon as={FiGithub} w={7} h={7} color='#B3DDC1' />
                                </Center>
                              </Tooltip>
                          </Button>

                          <Button
                              as={"a"}
                              target={"_blank"}
                              href={`${projectArray[idx].active}`}
                              backgroundColor={"transparent"}
                              _hover={{backgroundColor:"#112941"}}>
                            <Tooltip hasArrow label={"Link to Project"} aria-label={"Link to Project"}>
                              <Center animation={fadeDownAnim} opacity={0}>
                                <Icon as={FaExternalLinkAlt} w={7} h={7} color='#B3DDC1' />
                              </Center>
                            </Tooltip>
                          </Button>
                        </HStack>
                    </HStack>

                    {/* PROJECT DETAILS/DESCRIPTION */}
                    <List>
                        {projectArray[idx].bullets.map((bullet, x) => (
                            <ListItem key={x} color='#B3DDC1'>
                                <Icon as={VscDebugStart} w={3} marginRight={3}/> 
                                {bullet}
                            </ListItem>
                        ))}
                    </List>

                    {/* ICON STACK */}
                    <HStack spacing={8} marginTop={3}>
                      {/* { hoverColor, delay, icon, label}: SkillIconProps */}
                      {projectArray[idx].details.map((icons, i) => (
                        <SkillIcon key={i} hoverColor={icons.hoverColor} delay={icons.delay} icon={icons.icon} label={icons.name}/>
                      ))}

                    </HStack>

                  </Box>
                </Container>
              </VStack>
          </Stack>
    )
}
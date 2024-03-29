import { projectArray, SkillIcon } from 'lib/experience';
import { fadeDown } from 'lib/helpers/animation';
import { Icon, 
        Button, 
        List, 
        ListItem, 
        Tooltip, 
        Heading, 
        HStack, 
        VStack, 
        Center, 
        Box, 
        useColorModeValue as uCMV,
        Text, 
        Stack } from '@chakra-ui/react';
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { VscDebugStart } from "react-icons/vsc";

interface ProjectProps {
  idx: number,
  setIdx: React.Dispatch<React.SetStateAction<number>>
};


export default function ProjectGroup({ idx, setIdx }: ProjectProps) {
    const fadeDownAnim: string = `${fadeDown} 500ms 80ms forwards`;
    return(
          <Stack
            spacing={1}
            minHeight={"25vh"}//{ base: "50vh", md: "30vh" }
            marginTop={{ base: "4%", md:0 }}
            width={{ base: "80vw", md: "60vw" }}>


              {/* PROJECT TABS */}
              <HStack padding={{base:0, md:2}} position={"relative"} left={[-3, 0]}>
                  {projectArray.map((title, i) => (
                    
                    <Heading
                        key={i}
                        color={idx === i ? uCMV("#822320", "#E1E1E1") : uCMV("#4D403C", "#175C78") }
                        onClick={() => setIdx(i)}
                        fontFamily={"var(--chakra-fonts-mono)"}
                        paddingX={1}
                        fontSize={{base:'md', md: 'lg'}}
                        fontWeight={"bold"}
                        _hover={{
                          color: "#F3BA40",
                          cursor: "pointer"
                        }}>

                          <Text
                            as={"span"}
                            color={idx === i ? uCMV("#D54440", "#FFFFFF") : uCMV("#4D403C", "#00C484")}
                            _hover={{
                              color: uCMV("#AC23F4", "#F3BA40")
                            }}>
                              {title.name}
                          </Text>

                      </Heading>
                    ))}
              </HStack>


              <VStack spacing={2} padding={3} >

                {/* PROJECT DETAILS */}
                  
                
                  <Box padding={2}>
                    <HStack
                      marginBottom={5}
                      justifyContent={"space-between"}>

                        {/* PROJECT TITLE */}
                        <Heading
                          as={"a"}
                          target={"_blank"}
                          href={`${projectArray[idx].active}`}
                          fontFamily={"var(--chakra-fonts-mono)"}
                          fontWeight={"bold"}
                          fontSize={"2xl"}
                          color={uCMV("#822320", "#E1E1E1")}
                          _hover={{color:uCMV("#3D1C4A", "#FFFFFF")}}
                          >
                            {projectArray[idx].name}
                        </Heading>
                        
                        {/* GITHUB / ACTIVE LINKS */}
                        <HStack spacing={2}>
                          <Button
                              as={"a"}
                              target={"_blank"}
                              href={`${projectArray[idx].git}`}
                              backgroundColor={"transparent"}
                              _hover={{backgroundColor:uCMV("#FFFF81", "#112941")}}
                              >
                              <Tooltip hasArrow label={"Github Repo"} aria-label={"Github Repo Link"}>
                                <Center animation={fadeDownAnim} opacity={0}>
                                  <Icon as={FiGithub} w={7} h={7} color={uCMV("#4D403C", "#B3DDC1")}/>
                                </Center>
                              </Tooltip>
                          </Button>

                          <Button
                              as={"a"}
                              target={"_blank"}
                              href={`${projectArray[idx].active}`}
                              backgroundColor={"transparent"}
                              _hover={{backgroundColor:uCMV("#FFFF81", "#112941")}}
                              >
                            <Tooltip hasArrow label={"Link to Project"} aria-label={"Link to Project"}>
                              <Center animation={fadeDownAnim} opacity={0}>
                                <Icon as={FaExternalLinkAlt} w={7} h={7} color={uCMV("#4D403C", "#B3DDC1")}/>
                              </Center>
                            </Tooltip>
                          </Button>
                        </HStack>
                    </HStack>

                    {/* PROJECT DETAILS/DESCRIPTION */}
                    <List>
                        {projectArray[idx].bullets.map((bullet, x) => (
                            <ListItem key={x} color={uCMV("020405", "#B3DDC1")}>
                                <Icon as={VscDebugStart} w={3} marginRight={3}/> 
                                {bullet}
                            </ListItem>
                        ))}
                    </List>

                    {/* ICON STACK */}
                    <HStack spacing={8} marginTop={3}>
                      {projectArray[idx].details.map((icons, i) => (
                        <SkillIcon key={i} hoverColor={icons.hoverColor} delay={icons.delay} icon={icons.icon} label={icons.name}/>
                      ))}

                    </HStack>

                  </Box>
                
              </VStack>
          </Stack>
    )
}
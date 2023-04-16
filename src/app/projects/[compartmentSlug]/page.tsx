'use client';
import { fetchCompartmentBySlug, Compartment, type PageProps } from "@/app/lib/routes";
import { SkillIcon } from "@/app/lib/Icons";
//import { type PageProps } from '@/app/lib/Loading'
import { 
    Icon, 
    Button, 
    Tooltip,
    Center,  
    Flex,
    Heading,
    List,
    ListItem,
    HStack,
    VStack } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import React from "react";


// TODO: Make it REALLY pretty
export default function Page({ params }: PageProps) {
    const [data, setData] = React.useState(params.Compartment);
    React.useEffect(() => {
        const project = async () => {
            const response = await fetchCompartmentBySlug(params.compartmentSlug)
            setData(response);
          }; 
          project();
        }, []);

    if (!data) return null;
    return(
        <Flex
          flexDir={"column"}
          marginY={"5%"}
          marginX={8}>
            <VStack
             alignItems={{
              base: "center",
              lg: "flex-start"}}
             textAlign={{
              base: "justify",
              lg: "left" }}
             transform={{
              base: "none",
              lg: "trans;ate(5%, 5%)"}}>
                
                <VStack
                  alignItems={{
                    base: "center",
                    lg: "flex-start" }}
                  marginTop={{ base: 5, lg: 0 }}>

                    <HStack>
                      <Heading
                        fontFamily={"var(--chakra-fonts-mono)"}
                        fontWeight={"bold"}
                        fontSize={'xl'}
                        color='#00C484'>
                          {data.name}
                      </Heading>
                    
                      <Button
                        as={"a"}
                        target={"_blank"}
                        href={`${data.git}`}
                        backgroundColor={"transparent"}>
                          <Tooltip hasArrow label={"Github Repo"} aria-label={"Github Repo Link"}>
                            <Icon as={FiGithub} w={7} h={7} color='#00C484' />
                          </Tooltip>
                      </Button>
                            
                      <Button
                        as={"a"}
                        target={"_blank"}
                        href={`${data.active}`}
                        backgroundColor={"transparent"}>
                          <Tooltip hasArrow label={"Link to Project"} aria-label={"Link to Project"}>
                            <Icon as={FaExternalLinkAlt} w={7} h={7} color='#00C484' />
                          </Tooltip>
                      </Button>
                    </HStack>
                </VStack>
                <VStack 
                  alignItems={{
                    base: "center",
                    lg: "flex-start" }}
                  opacity={0.9}>

                    <List 
                      bgColor={"rgb(48,48,48)"}
                      borderRadius={5}
                      boxShadow={"0 15px 10px -10px rgba(0,0,0,0.5)"}
                      fontFamily={"var(--chakra-fonts-nunito)"}
                      fontSize={{ base: "md", lg: "lg" }}
                      marginY={5}
                      minWidth={"30vw"}
                      padding={5}
                      spacing={2}>
                        <ListItem
                        alignItems={"left"}
                        color='#00C484'>
                            {data.description}
                        </ListItem>
                    </List>
                
            
                    <HStack>
                       
                        {data.details.map((icons, i) => (
                        <SkillIcon hoverColor={icons.hoverColor} delay={icons.delay} icon={icons.icon} label={icons.label}/>
                            
                                
                        ))}
                    </HStack>
                </VStack>

            </VStack>
        </Flex>
    )
}

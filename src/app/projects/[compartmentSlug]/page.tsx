'use client';
import { fetchCompartmentBySlug, Compartment, type PageProps } from "@/app/lib/routes";
//import { type PageProps } from '@/app/lib/Loading'
import { 
    Icon, 
    Button, 
    Tooltip,  
    Flex,
    Heading,
    List,
    ListItem,
    HStack,
    VStack } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import React from "react";


// TODO: Make it pretty
export default function Page({ params }: PageProps) {
    // for ( let y in params ) {
    //  console.log(`🍗 [compartmentSlug]/page.tsx params:: ${y}`)
    // };
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

                    <Heading
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontWeight={"bold"}
                    fontSize={'xl'}
                    color='#00C484'>
                        {data.name}
                    </Heading>
                    
                    <HStack>
                        <Button
                            as={"a"}
                            target={"_blank"}
                            href={`${data.git}`}
                            backgroundColor={"transparent"}
                            >
                            <Icon as={FiGithub} w={7} h={7} color='#00C484' />
                        </Button>
                            
                        <Button
                            as={"a"}
                            target={"_blank"}
                            href={`${data.active}`}
                            backgroundColor={"transparent"}
                            >
                            <Icon as={FaExternalLinkAlt} w={7} h={7} color='#00C484' />
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
                        {/* TODO: EDIT THIS FOR NEW ICONS FORMAT */}
                        {/* {data.details?.map((icons, i) => {
                            return(
                                <Tooltip hasArrow label={icons.name} key={i} aria-label={icons.alt} >

                                    < icons.IconComponent as={icons.icon} />

                                </Tooltip>
                                )
                            })} */}
                    </HStack>
                </VStack>

            </VStack>
        </Flex>
    )
}

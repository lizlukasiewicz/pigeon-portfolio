'use client';
import React from "react";
import { 
          Stack, 
          List, 
          VStack, 
          HStack, 
          Text, 
          ListItem, 
          Box
         } from '@chakra-ui/react'
import { getExpArray } from '../lib/experience';
import { sideBob } from "../lib/helpers/animation";
import { SkillIcon } from "@/app/lib/Icons";

interface ExperienceWidgetProps {
  idx: number,
  setIdx: React.Dispatch<React.SetStateAction<number>>
};


export const ExpGroup = ({ idx, setIdx }: ExperienceWidgetProps) => {
  const sideBobAnim: string = `${sideBob} 1s infinite`;
  return (
      <Stack 
        spacing={5}
        minHeight={{ base: "80vh", lg: "60vh" }}>
        <Stack
          direction={["column", "row"]}
          height={300}
          marginTop={{ base: "20%", sm: "10%", lg: 0 }}
          marginBottom={{ base: "50%", sm: "35%", lg: 0 }}
          width={{ base: "80vw", lg: "60vw" }}>

          {/* EXPERIENCE TABS */}

          <List
            display={"flex"}
            flexDirection={["row", "column"]}
            height={"100%"}
            width={["100%", "20%"]}>
              {getExpArray.map((exp, i) => (
                <ListItem
                  key={i}
                  color={idx === i ? '#E1E1E1' : '#175C78' } // 2ndPal NEON BLUE :::  WHITE
                  backgroundColor={idx === i ? '#121D36' : "rgba(2,4,5,0.5)"} // 2ndPal DEEP BLUE ::: BLACK
                  borderBottom={["3px solid", 0] }
                  borderLeft={[0, "3px solid"]}
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize={"md"}
                  fontWeight={"bold"}
                  onClick={() => setIdx(i)}
                  padding={3}
                  paddingLeft={4}
                  position={"relative"}
                  width={"100%"}
                  transitionDuration={"0.3s"}
                  _before={{
                    content: `"»"`,
                    left: ["50%", "-25%"],
                    top: ["-25%", "25%"],
                    transform: ["rotate(90deg)", "rotate(0deg)"],
                    opacity: idx === i ? 1 : 0,
                    position: "absolute" }}
                  _hover={{
                      backgroundColor: "#111837", // 1stPal DEEPEST BLUE
                      borderColor: "#175C78", // 1stPal MED BLUE
                      color: "#F3BA40", // GOLD
                      cursor: "pointer",
                      transitionDuration: "0.3s",
                      _before: { opacity: 1 } }}>

                      <Text
                        as={"span"}
                        // fontFamily={"var(--chakra-fonts-mono)"}
                        // fontSize={'xl'}
                        color={idx === i ? '#B3DDC1': '#00C484'}// 1stPal LGT GRN ::: 1stPal NEON GRN
                        fontWeight={"bold"}>
                          {exp.company}
                        </Text>

                </ListItem>
              ))}
          </List>


          {/* EXPERIENCE DETAILS */}

          <VStack
            alignItems={"flex-start"}
            display={"flex"}
            height={"100%"}
            paddingX={[0, 5]}
            paddingY={{ base: 10, sm: 0, lg: 5 }}
            width={{ base: "100%", lg: "80%" }}>
              <Box>
                <Text
                  fontWeight={"bold"}
                  fontFamily={"var(--chakra-fonts-mono)"} 
                  marginBottom={2}>
                    {/* <Stack display={"flex"}> */}

                      {/* POSITION TITLE */}
                    <Text 
                        //as={"span"} 
                        color={"#E1E1E1"}>
                          {getExpArray[idx].title}
                          {/* <Text> */}
                    </Text>
                    <Text
                      as={'span'}
                      color={"#B3DDC1"}
                      fontFamily={"var(--chakra-fonts-nunito)"}>
                        {` @ `}

                      {/* LINK TO COMPANY */}
                    <Text
                      as={"a"}
                      href={getExpArray[idx].companyLink}
                      opacity={0.6}
                      color={"#E1E1E1"}
                      position={"relative"}
                      rel={"noreferrer"}
                      target={"_blank"}
                      transitionDuration={"0.2s"}
                      _before={{
                        backgroundColor: "white",
                        borderRadius: "2px",
                        bottom: -1,
                        content: `""`,
                        height: "2px",
                        position: "absolute",
                        transition: "100ms ease-out",
                        width: 0 }}
                        _hover={{
                          opacity: 1,
                          _before: { width: "100%" } }}>
                          {getExpArray[idx].companyFull}
                    </Text>
                    </Text>
                      {/* </Text> */}
                    {/* </Stack> */}

                </Text>
                
                {/* EMPLOYMENT DATES */}
                <Text
                  fontFamily={"var(--chakra-fonts-mono)"}
                  fontSize={"sm"}
                  opacity={0.7}>
                    {getExpArray[idx].dates}
                </Text>

              </Box>

              {/* JOB DESCRIPTION */}
              <List
                alignItems={"space-between"}
                display={"flex"}
                flexDirection={"column"}
                marginY={1}>
                  {getExpArray[idx].details.map((bullet, i) => (
                    <ListItem
                      
                      display={"flex"}
                      key={i}
                      flexDirection={"column"}
                      marginY={1}>
                        <Text as={"span"}
                        fontFamily={"var(--chakra-fonts-nunito)"}>
                          {bullet}
                        </Text>
                    </ListItem>
                  ))}


              
              </List>
          </VStack>
        </Stack>

        {/* TOOLS USED ICONS */}
        <HStack
          fontFamily={"var(--chakra-fonts-nunito)"}
          paddingLeft={5}
          spacing={"10%"}>
            {getExpArray[idx].skills.map((skill, i) => (
              <SkillIcon hoverColor={skill.color} delay={skill.delay} icon={skill.icon} label={skill.label} key={i}/>
              
            ))}
                

        </HStack>
      </Stack>
              
  )
}
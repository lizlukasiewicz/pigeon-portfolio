import { 
          Stack, 
          List, 
          VStack, 
          HStack, 
          Text, 
          ListItem, 
          useColorModeValue as uCMV,
          Box
         } from '@chakra-ui/react'
import { getExpArray, SkillIcon } from 'lib/experience';

interface ExperienceWidgetProps {
  idx: number,
  setIdx: React.Dispatch<React.SetStateAction<number>>
};

export const ExpGroup = ({ idx, setIdx }: ExperienceWidgetProps) => {
  return (
      <Stack 
        minHeight={{ base: "35vh", lg: "30vh" }}
        width={{ base: "70vw", lg: "60vw" }}>
        <Stack
          direction={["column", "row"]}
          marginTop={{ base: "10%", sm: "5%", lg: 0 }}>

          {/* EXPERIENCE TABS */}

          <List
            display={"flex"}
            flexDirection={["row", "column"]} //{["mobile_screen", "desktop_screen"]} 
            height={"100%"}
            width={["90%", "30%"]}>
              {getExpArray.map((exp, i) => (
                <ListItem
                  key={i}
                  color={idx === i ? uCMV("#822320", "#E1E1E1") : uCMV("#FFD316", "#175C78") }
                  backgroundColor={idx === i ? uCMV("rgb(255,255,255)", "#121D36") : uCMV("rgba(236,217,234,0.3)", "rgba(2,4,5,0.5)")} 
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
                      backgroundColor: uCMV("#ECD9EA", "#111837"),
                      borderColor: uCMV("#FFFF81", "#175C78"),
                      color: "#F3BA40",
                      cursor: "pointer",
                      transitionDuration: "0.3s",
                      _before: { opacity: 1 } }}>

                      <Text
                        as={"span"}
                        color={idx === i ? uCMV("#020405", "#B3DDC1"): uCMV("#822320", "#00C484")}
                        fontWeight={"bold"}>
                          {exp.company}
                        </Text>

                </ListItem>
              ))}
          </List>


          {/* EXPERIENCE DETAILS */}

          <VStack
            alignItems={"flex-start"}
            borderRadius={20}
            display={"flex"}
            height={"100%"}
            paddingY={{ base: 5, sm: 0, lg: 5 }}
            width={{ base: "100%", lg: "80%" }}>
              <Box>
                <Text
                  fontWeight={"bold"}
                  color={uCMV("#020405", "#E1E1E1")}
                  fontFamily={"var(--chakra-fonts-mono)"} 
                  marginBottom={2}>

                      {/* POSITION TITLE */}

                          {getExpArray[idx].title}

                    <Text
                      as={'span'}
                      color={uCMV("#822320", "#B3DDC1")}
                      fontFamily={"var(--chakra-fonts-nunito)"}>
                        {` @ `}

                      {/* LINK TO COMPANY */}
                      <Text
                        as={"a"}
                        href={getExpArray[idx].companyLink}
                        opacity={0.7}
                        color={uCMV("#46373E", "#E1E1E1")}
                        position={"relative"}
                        rel={"noreferrer"}
                        target={"_blank"}
                        transitionDuration={"0.2s"}
                        _before={{
                          backgroundColor: uCMV("#3D1C4A", "white"),
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
              <Box>
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
              </Box>
          </VStack>
        </Stack>

        {/* TOOLS USED ICONS */}
        <HStack
          fontFamily={"var(--chakra-fonts-nunito)"}
          paddingLeft={2}
          spacing={"5%"}>
            {getExpArray[idx].skills.map((skill, i) => (
              <SkillIcon hoverColor={skill.color} delay={skill.delay} icon={skill.icon} label={skill.label} key={i}/>
              
            ))}
                

        </HStack>
      </Stack>
              
  )
}
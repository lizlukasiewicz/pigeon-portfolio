
import { IconType } from "react-icons";
import {
    Box,
    Tooltip,
    Center,
    Icon,
    HStack,
    createIcon,
} from '@chakra-ui/react'
import { fadeDown, fadeRight, upDown } from "./helpers/animation";
export const SiChakraui = require('react-icons/si').SiChakraui;
export const SiCss3 = require('react-icons/si').SiCss3;
export const SiExpress = require('react-icons/si').SiExpress;
export const SiFirebase = require('react-icons/si').SiFirebase
export const SiGit = require('react-icons/si').SiGit;
export const SiJavascript = require('react-icons/si').SiJavascript;
export const SiMagento = require('react-icons/si').SiMagento
export const SiMongodb = require('react-icons/si').SiMongodb;
export const SiMysql = require('react-icons/si').SiMysql;
export const SiNextdotjs = require('react-icons/si').SiNextdotjs;
export const SiPandas = require('react-icons/si').SiPandas;
export const SiPhp = require('react-icons/si').SiPhp
export const SiPython = require('react-icons/si').SiPython;
export const SiTailwindcss= require('react-icons/si').SiTailwindcss;
export const SiTypescript = require('react-icons/si').SiTypescript;
export const SiVuedotjs = require('react-icons/si').SiVuedotjs;
export const GrReactjs = require('react-icons/gr').GrReactjs;
export const FaNode = require('react-icons/fa').FaNode;

export interface SkillIconProps {
  hoverColor:string, 
  delay: string,
  icon: React.ComponentType<IconType>,
  label: string,
};


export const SkillIcon = ({ hoverColor, delay, icon, label}: SkillIconProps) => {
    const fadeDownAnim: string = `${fadeDown} 500ms ${delay} forwards`;

    return (
        <Tooltip label={label} hasArrow aria-label={label}>
            <Center animation={fadeDownAnim} opacity={0}>
                <Icon
                    as={icon}
                    borderRadius={5}
                    color={"#00C484"}
                    boxSize={8}
                    transition={"100ms ease-in-out"}
                    _hover={{
                        transform: "scale(1.1)",
                        color: `${hoverColor}`,
                        // filter: colorMode(
                        //     "brightness(1.1)" ,
                        //     `brightness(1.2) drop-shadow(0 0 5px ${color})`) 
                    }} 
                />
            </Center>
        </Tooltip>
    );
};
export const SkillTable = () => (
    <Box
        borderRadius={5}
        fontFamily={"var(--chakra-fonts-mono)"}
        fontSize={{ base: "sm", lg: "md" }}
        width={"100%"}>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiTypescript} hoverColor={"rgb(65,112,183)"} label={"TypeScript"} delay={"0ms"} />
            <SkillIcon icon={SiPython} hoverColor={"rgb(66,108,152)"} label={"Python"} delay={"60ms"} />
            <SkillIcon icon={SiCss3} hoverColor={"rgb(69,98,226)"} label={"CSS"} delay={"120ms"} />
            <SkillIcon icon={SiMysql} hoverColor={"rgb(43,97,157)"} label={"SQL"} delay={"180ms"} />
            <SkillIcon icon={FaNode} hoverColor={"rgb(110,149,99)"} label={"Node.js"} delay={"240ms"} />
            <SkillIcon icon={SiPhp} hoverColor={"rgb(135,141,184)"} label={"PHP"} delay={"300ms"} />
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={SiJavascript} hoverColor={"rgb(229,212,88)"} label={"JavaScript"} delay={"360ms"} />
            <SkillIcon icon={SiNextdotjs} hoverColor={"rgb(50,109,170)"} label={"Next.js"} delay={"420ms"} />
            <SkillIcon icon={SiExpress} hoverColor={"rgb(182,103,144)"} label={"Express"} delay={"480ms"} />
            <SkillIcon icon={SiMongodb} hoverColor={"rgb(89,188,125)"} label={"MongoDB"} delay={"540ms"} />
            <SkillIcon icon={SiChakraui} hoverColor={"rgb(112,197,192)"} label={"ChakraUI"} delay={"600ms"} />
            <SkillIcon icon={SiFirebase} hoverColor={"rgb(219,129,49)"} label={"Firebase"} delay={"660ms"} />
        </HStack>
        <HStack justifyContent={"space-around"} padding={2}>
            <SkillIcon icon={GrReactjs} hoverColor={"rgb(114,183,208)"} label={"React"} delay={"720ms"} />
            <SkillIcon icon={SiVuedotjs} hoverColor={"rgb(96,172,128)"} label={"Vue.js"} delay={"780ms"} />
            <SkillIcon icon={SiTailwindcss} hoverColor={"rgb(89,170,163)"} label={"Tailwind"} delay={"840ms"} />
            <SkillIcon icon={SiGit} hoverColor={"rgb(211,87,60)"} label={"Git"} delay={"900ms"} />
            <SkillIcon icon={SiPandas} hoverColor={"rgb(202,42,128)"} label={"Pandas"} delay={"960ms"} />
            <SkillIcon icon={SiMagento} hoverColor={"rgb(229,100,53)"} label={"Magento"} delay={"1020ms"} />
        </HStack>
    </Box>
);

export const NightIcon = createIcon({
  displayName: 'NightIcon',
  viewBox: "0 0 24 24",
  path: [
    (<path 
      stroke="#C1B971" //"#020405"
      strokeWidth={"2"}
      strokeLinecap="round"
      d="M8 20H12M16 20H12M12 20V11"/>),
    (<path 
      stroke="#C1B971" //"#020405" 
      strokeWidth={"2"} 
      strokeLinecap="round"
      d="M17 11V16" />),
    
    (<path 
      stroke="#C1B971" //"#020405" 
      strokeWidth={"2"}
      d="M15 4H9C6.23858 4 4 6.23858 4 9V9.5C4 10.3284 4.67157 11 5.5 11H18.5C19.3284 11 20 10.3284 20 9.5V9C20 6.23858 17.7614 4 15 4Z" />),
    
    (<path 
      d="M3 21L5 12H19L21 21H3Z" 
      fill="url(#paint0_linear_976_2597)"/>),
    
    (<path 
      d="M9 3C5.68629 3 3 5.68629 3 9V9.5C3 10.8807 4.11929 12 5.5 12H18.5C19.8807 12 21 10.8807 21 9.5V9C21 5.68629 18.3137 3 15 3H9Z" 
      fill="url(#paint1_radial_976_2597)"/>),

    (<defs>
      <linearGradient
        id="paint0_linear_976_2597"
        x1={"12"}
        y1={"12"}
        x2={"12"}
        y2={"21"}
        gradientUnits="userSpaceOnUse">

          <stop stopColor="#CAFFC7" stopOpacity={"0.65"}/>
                                  
          <stop offset={"1"} stopColor="#3B3E43" stopOpacity={"0"}/>

      </linearGradient>
      <radialGradient
        id="paint1_radial_976_2597" 
        cx={"0"} 
        cy={"0"} 
        r={"1"} 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(12 5.8125) rotate(90) scale(6.1875 12.375)">

        <stop stopColor="#8CF385"/>
                            
        <stop offset={"1"} stopColor="#397239"/>


      </radialGradient>
    </defs>),

  
  ]
})
export const DayIcon= createIcon({
  displayName: 'DayIcon',
  viewBox: "0 0 24 24",
  path: [
    (<path 
      stroke="#E1E1E1"//"#020405"
      strokeWidth={"2"}
      strokeLinecap="round"
      d="M8 20H12M16 20H12M12 20V11"/>),
    (<path 
      stroke="#E1E1E1"//"#020405" 
      strokeWidth={"2"} 
      strokeLinecap="round"
      d="M17 11V16" />),
    
    (<path 
      stroke="#E1E1E1"//"#020405" 
      strokeWidth={"2"}
      d="M15 4H9C6.23858 4 4 6.23858 4 9V9.5C4 10.3284 4.67157 11 5.5 11H18.5C19.3284 11 20 10.3284 20 9.5V9C20 6.23858 17.7614 4 15 4Z" />),
    
    // (<path 
    //   d="M3 21L5 12H19L21 21H3Z" 
    //   fill="url(#paint0_linear_976_2597)"/>),
    
    // (<path 
    //   d="M9 3C5.68629 3 3 5.68629 3 9V9.5C3 10.8807 4.11929 12 5.5 12H18.5C19.8807 12 21 10.8807 21 9.5V9C21 5.68629 18.3137 3 15 3H9Z" 
    //   fill="url(#paint1_radial_976_2597)"/>),

    (<defs>
      <linearGradient
        id="paint0_linear_976_2597"
        x1={"12"}
        y1={"12"}
        x2={"12"}
        y2={"21"}
        gradientUnits="userSpaceOnUse">

          <stop stopColor="#CAFFC7" stopOpacity={"0.65"}/>
                                  
          <stop offset={"1"} stopColor="#3B3E43" stopOpacity={"0"}/>

      </linearGradient>
      <radialGradient
        id="paint1_radial_976_2597" 
        cx={"0"} 
        cy={"0"} 
        r={"1"} 
        gradientUnits="userSpaceOnUse" 
        gradientTransform="translate(12 5.8125) rotate(90) scale(6.1875 12.375)">

        <stop stopColor="#8CF385"/>
                            
        <stop offset={"1"} stopColor="#397239"/>


      </radialGradient>
    </defs>),

  
  ]
})

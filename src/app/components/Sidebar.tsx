'use client';

import * as React from 'react';
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import styles from './side.module.css'
import { Icon } from '@chakra-ui/react'
import { GrHomeRounded } from "react-icons/gr"
import { FaTerminal, FaBloggerB, FaTools, FaMailBulk, FaReadme} from "react-icons/fa"
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react'

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  
  return(
    <>
      <Button onClick={onOpen} >
        <HamburgerIcon  w={45} h={45} color='#00C484'/>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        
        
      >
        <DrawerOverlay />
      
        <DrawerContent>
          
          <DrawerCloseButton />
          
          <DrawerHeader>

            <Link 
              as={NextLink}
              href="/" 
              className={styles.option} > 

                <Icon as={GrHomeRounded} w={30} h={30} color='#00C484'/>
            </Link>
          
          </DrawerHeader>

          <DrawerBody>

            
            <Link 
              as={NextLink}
              href="/about" 
              className={styles.option}>
              <Icon as={FaTerminal} w={30} h={30} color='#00C484'/>
                  <h2>
                    About Me
                  </h2>
            </Link>


            <Link 
              as={NextLink}
              href="/blog" 
              className={styles.option}>
              <Icon as={FaBloggerB} w={30} h={30} color='#00C484'/>
                <h2>
                  Blog
                </h2>
            </Link>


            <Link 
              as={NextLink}
              href="/projects" 
              className={styles.option}>
                <Icon as={FaTools} w={30} h={30} color='#00C484'/>
                <h2>
                  Projects
                </h2>
            </Link>


            <Link 
              as={NextLink}
              href="/contact" 
              className={styles.option}>
                <Icon as={FaMailBulk} w={30} h={30} color='#00C484'/>
                <h2>
                  Contact
                </h2>
            </Link>

            <Link 
              as={NextLink}
              href="/resume" 
              className={styles.option}>
                <Icon as={FaReadme} w={30} h={30} color='#00C484'/>
                <h2>
                  Resume
                </h2>
            </Link>
          
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    
    </>
  )
}


// import { styled, alpha } from '@mui/material/styles';


// TODO: FORMATTING
// const StyledMenu = styled((props: MenuProps) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: 'bottom',
//       horizontal: 'right',
//     }}
//     transformOrigin={{
//       vertical: 'top',
//       horizontal: 'right',
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   '& .MuiPaper-root': {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color:
//       theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
//     boxShadow:
//       'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
//     '& .MuiMenu-list': {
//       padding: '4px 0',
//     },
//     '& .MuiMenuItem-root': {
//       '& .MuiSvgIcon-root': {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       '&:active': {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity,
//         ),
//       },
//     },
//   },
// }));
// TODO: ANIMATION
//  <Box sx={{ width: `calc(100px + 16px)` }}>
//   <FormControlLabel
//     control={<Switch checked={checked} onChange={handleChange} />}
//     label="Show"
//   />
//   <Slide direction="left" in={checked} mountOnEnter unmountOnExit>
//     {icon}
//   </Slide>
// </Box> 
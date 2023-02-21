'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu, { MenuProps} from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TerminalIcon from '@mui/icons-material/Terminal';
import MenuIcon from '@mui/icons-material/Menu';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import ContactMailSharpIcon from '@mui/icons-material/ContactMailSharp';
import QuestionAnswerTwoToneIcon from '@mui/icons-material/QuestionAnswerTwoTone';
import FeedSharpIcon from '@mui/icons-material/FeedSharp';
import Link from 'next/link'
import styles from './side.module.css'


export default function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <>
    <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
    </Button>
      <Menu
        id={styles.basicmenu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
        <Link href="/"> 
          <HomeSharpIcon />
        </Link>
        </MenuItem>
        
        <MenuItem onClick={handleClose}>
          <Link href="/">
            <TerminalIcon />
            <h2>
              About Me
            </h2>
          </Link>
        </MenuItem>


        <MenuItem onClick={handleClose}>
          <Link href="/blog">
          <QuestionAnswerTwoToneIcon />
          <h2>
            Blog
          </h2>
          </Link>
        </MenuItem>


        <MenuItem onClick={handleClose}>
          <Link href="/projects">
          <ConstructionSharpIcon/>
          <h2>
            Projects
          </h2>
          </Link>
        </MenuItem>


        <MenuItem onClick={handleClose}>
          <Link href="/contact">
          <ContactMailSharpIcon />
          <h2>
            Contact
          </h2>
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Link href="/resume">
          <FeedSharpIcon />
          <h2>
            Resume
          </h2>
          </Link>
        </MenuItem>
        

      </Menu>

    
    </>
  )
}


// import { styled, alpha } from '@mui/material/styles';
// import { Slide } from '@mui/material';

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
//   <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
//     {icon}
//   </Slide>
// </Box> 
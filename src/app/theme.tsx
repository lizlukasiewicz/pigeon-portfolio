// theme.ts

// import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
//import { mode, Styles } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',//'light',
  //useSystemColorMode: false,
}


// const styles: Styles = {
//   global: props => ({
//       body: {
//           bg: mode("linear-gradient(135deg, #E29CB0, #ECD9EA)", "linear-gradient(135deg, #131D30, #020405)")(props),
//       },
//   }),
// };


// 3. extend & export the theme
export const theme = extendTheme({ config })

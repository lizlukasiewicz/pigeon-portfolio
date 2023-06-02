'use client'
import { VStack, useColorModeValue as uCMV } from "@chakra-ui/react";
import { gradient } from "../lib/helpers/animation";
// import { useNavigation } from '../lib/helpers/useNav'

//import {useRef, MutableRefObject} from "react";

// import { useOnScreen } from '../lib/helpers/Loading';
//export const pageRefs = require('react').useRef({});
// export const [y, scrollDir]: [number, string] = require('../lib/helpers/useNav').useNavigation();
// export const [visRef, visible] = require('../lib/helpers/Loading').useOnScreen();



export const HomeContainer = ({children}: {children: React.ReactNode;}) => {
  // const pageRefs: MutableRefObject<{}> = useRef({});
  // const [visRef1, visible1] = useOnScreen();
  // const [y, scrollDir]: [number, string] = useNavigation();
  // const [visRef, visible] = useOnScreen();
  const breatheAnim: string = `${gradient} 6s ease infinite`
  return(
    <VStack 
      spacing={1}
      bgGradient={uCMV("linear(135deg, #FFFDF1, #FFEED5, #ECD9EA)", "linear(135deg, #131D30, #020405)")} //#FFF4E1, #FFEED5, #FFFAF1,   ##FFF4E1,
      bgSize={"400% 400%"}
      bgPosition={"51% 0%"}
      animation={breatheAnim}
      > 

      {children}
      </VStack>
  )

}

// Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

// Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

// Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

// Warning: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
// 1. You might have mismatching versions of React and the renderer (such as React DOM)
// 2. You might be breaking the Rules of Hooks
// 3. You might have more than one copy of React in the same app
// See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.

// TypeError: Cannot read properties of null (reading 'useRef')
//     at Object.useRef (/Users/elizabethlukasiewicz/Desktop/general-assembly/post-cohort/portfolio/webpage2/pigeon_portfolio/node_modules/next/dist/compiled/react/cjs/react.development.js:1761:21)
//     at eval (webpack-internal:///(sc_client)/./src/app/ui/HomeContainer.tsx:17:68)
//     at (sc_client)/./src/app/ui/HomeContainer.tsx (/Users/elizabethlukasiewicz/Desktop/general-assembly/post-cohort/portfolio/webpage2/pigeon_portfolio/.next/server/app/@about/page.js:5901:1)
//     at __webpack_require__ (/Users/elizabethlukasiewicz/Desktop/general-assembly/post-cohort/portfolio/webpage2/pigeon_portfolio/.next/server/webpack-runtime.js:33:43)
//     at eval (webpack-internal:///(sc_client)/./src/app/template.tsx:9:75)
//     at (sc_client)/./src/app/template.tsx (/Users/elizabethlukasiewicz/Desktop/general-assembly/post-cohort/portfolio/webpage2/pigeon_portfolio/.next/server/app/@about/page.js:5879:1)
//     at __webpack_require__ (/Users/elizabethlukasiewicz/Desktop/general-assembly/post-cohort/portfolio/webpage2/pigeon_portfolio/.next/server/webpack-runtime.js:33:43)
//     at /Users/elizabethlukasiewicz/Desktop/general-assembly/post-cohort/portfolio/webpage2/pigeon_portfolio/node_modules/next/dist/compiled/react-server-dom-webpack/client.js:106:27
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
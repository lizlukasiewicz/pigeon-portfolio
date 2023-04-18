import { keyframes } from "@chakra-ui/react";


export const fadeRight: string = keyframes`
from {
  transform: translateX(-40px);
  opacity: 0;
}
to {
  transform: translateX(0px);
  opacity: 1;
}
`;

export const fadeDown: string = keyframes`
from {
  transform: translateY(-20px);
  opacity: 0;
} to {
  transform: translateY(0px);
  opacity: 1;
}
`;
export const growRight: string = keyframes`
  from { 
    width: 0;
    opacity: 0;
  } to {
    width: 32vw;
    opacity: 1;
  }
`;

export const growRightLittle: string = keyframes`
  from {
    width: 0;
    opacity: 0;
  } to {
    width: 2vw;
    opacity: 1;
  }
`
export const sideBob: string = keyframes`
  0% {
    left: -25%;
  } 50% {
    left: -15%;
  } 100% {
    left: -25%
  }
`
export const upDown: string = keyframes`
  0% {
    transform: translateY(0);
  } 50% {
    transform: translateY(1px);
  } 100% {
    transform: translateY(0);
  }
`
import { keyframes } from "@chakra-ui/react";

export const gradient: string = keyframes`
50% {
  background-position: 50% 100%;
}

`;
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
    width: 30vw;
    opacity: 1;
  }
`;

export const dissolve: string = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  } 50% {
    opacity: 0.5;
    transform: scale(1.5);
  } 100% {
    opacity: 0;
    transform: scale(1);
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

export const growRightLong: string = keyframes`
  from {
    width: 0;
    opacity: 0;
  } to {
    width: 45vw;
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

export const openLetter: string = keyframes`
from {
  transform: translateY(0) scaleY(1);
  z-index: 1;
} to {
  transform: translateY(-100%) scaleY(-1);
  z-index: 0;
}
`

export const fadeOut: string = keyframes`
  0% {
    opacity: 1;
    filter: brightness(1);
    transform: scale(1);
  } 50% {
    opacity: 1;
    filter: brightness(2);
    transform: scale(1.5);
  } 85% {
    opacity: 1;
    filter: brightness(1);
    transform: scale(1);
  } 100% {
    opacity: 0;
    filter: brightness(1);
    transform: scale(1);
  }
`

export const shake: string = keyframes`
  0% {
    transform: rotate(0deg);
  } 33% {
    transform: rotate(-5deg);
  } 66% {
    transform: rotate(5deg);
  } 100% {
    transform: rotate(0deg);
  }
`
export const slideUp: string = keyframes`
  from {
    transform: translateY(0);
    height: 90%;
  } to {
    transform: translateY(-50%);
    height: 120%;
  }
`
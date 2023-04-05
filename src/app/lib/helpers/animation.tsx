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
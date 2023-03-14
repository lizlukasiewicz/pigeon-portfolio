'use client';
import { Compartment } from  "@/app/lib/routes";
// import { Icon } as I from "@/app/lib/Icons"
import { Icon, Button } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"

export type I = {
    name: string;
    alt: string;
    icon: React.ComponentType<{ size?: string; }>;
    IconComponent: React.ElementType;
  };

export const Project = ({compartment, icons}: {compartment: Compartment; icons: I[]}) => {
    return(
        <div>


        </div>
    )
}
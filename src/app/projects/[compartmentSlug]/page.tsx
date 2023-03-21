'use client';
import { fetchCompartmentBySlug, Compartment, type PageProps } from "@/app/lib/routes";
import { Icon, Button } from '@chakra-ui/react'
import { FaExternalLinkAlt } from "react-icons/fa"
import { FiGithub } from "react-icons/fi"
import React from "react";


// TODO: Make it pretty
export default function Page({ params }: PageProps) {
    const [data, setData] = React.useState(params.Compartment);
    React.useEffect(() => {
        const project = async () => {
            const response = await fetchCompartmentBySlug(params.compartmentSlug)
            setData(response);
        }; 
        project();
    }, []);
    
    if (!data) return null;
    // console.log(`🌺 compartmentSlug: ${params.compartmentSlug} data: ${data.name}`)
    return(
        <div>
            
            <h2>
                {data.name}
            </h2>
            <Button
                as={"a"}
                target={"_blank"}
                href={`${data.git}`}
                backgroundColor={"transparent"}
            >
                <Icon as={FiGithub} w={7} h={7} color='#00C484' />

            </Button>
            <Button
                as={"a"}
                target={"_blank"}
                href={`${data.active}`}
                backgroundColor={"transparent"}
            >
                <Icon as={FaExternalLinkAlt} w={7} h={7} color='#00C484' />

            </Button>
            
                <div className={data.slug}>
                    <p>{data.description}</p>
                </div>
            
            

            {data.details.map((icons, i) => {
                return(
                    <div key={i}>
                    < icons.IconComponent as={icons.icon} />
                    </div>
                    )
                })}

        </div>
    )
}

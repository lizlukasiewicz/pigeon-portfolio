
import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";


// import * as React from 'react';


export default async function Page({ params }: PageProps) {
    const project = await fetchCompartmentBySlug(params.compartmentSlug)
    if (!project) return null;
    console.log(`🌺 compartmentSlug: ${params.compartmentSlug} project: ${project.name}`)
    return(
        <div>
            
            <h2>
                {project.name}
            </h2>
            <p>{project.active}</p>
            <p>{project.git}</p>
            
                <div className={project.slug}>
                    <p>{project.description}</p>
                </div>

        </div>
    )
}

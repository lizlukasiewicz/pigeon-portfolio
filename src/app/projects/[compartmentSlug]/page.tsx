// 'use client';
import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";
// import CircularProgress from '@mui/material/CircularProgress';


export default async function Page({ params }: PageProps) {
    const project = await fetchCompartmentBySlug(params.compartmentSlug)
    if (!project) return null;

    return(
        <div>
            <h2>
                All {project.name}
            </h2>

            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i}>
                    <p>{project.description}</p>
                    <p>{project.active}</p>
                    <p>{project.git}</p>
                </div>
            ))} 

        </div>
    )
}
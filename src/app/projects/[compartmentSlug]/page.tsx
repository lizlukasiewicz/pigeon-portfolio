// 'use client';
// import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";
// import CircularProgress from '@mui/material/CircularProgress';


export default async function Page({
    children,
  }: {
    children: React.ReactNode;
  }) {
    //{ params }: PageProps
    // const project = await fetchCompartmentBySlug(params.compartmentSlug)
    // if (!project) return null;

    return(
        <div>
            <p>This is from projects/[compartmentSlug]/page.tsx</p>
            {/* <h2>
                All {project.name}
            </h2>

            {Array.from({ length: 1 }).map((_, i) => (
                <div key={i} className={project.name}>
                    <p>{project.description}</p>
                    <p>{project.active}</p>
                    <p>{project.git}</p>
                </div>
             ))} */}

        </div>
    )
}
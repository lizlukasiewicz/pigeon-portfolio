// 'use client';
import { fetchSubCompartment, type PageProps } from "@/app/lib/routes";
// import Card from "@/app/components/Card"
// import CircularProgress from '@mui/material/CircularProgress';

export default async function Page({
    children,
  }: {
    children: React.ReactNode;
  }) {
    //{ params} : PageProps) {
    // const project = await fetchSubCompartment(
    //     params.compartmentSlug,
    //     params.subCompartmentSlug,
    // );
    // if (!project) return null
    return(
        <div>
            <p>This is from projects/[compartmentSlug]/[subCompartmentSlug]/page.tsx</p>
            {/* <h2>{project.name}</h2>
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i}>
                    <p>{project.alt}</p>
                    <p>{project.icon}</p>

                </div>
            ))}  */}
        </div>
    )
}
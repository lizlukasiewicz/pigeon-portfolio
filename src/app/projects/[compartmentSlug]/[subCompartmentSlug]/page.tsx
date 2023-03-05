
import { fetchSubCompartment, type PageProps } from "@/app/lib/routes";

export default async function Page({ params }: PageProps) {

    const project = await fetchSubCompartment(
        params.compartmentSlug,
        params.subCompartmentSlug,
    );
    if (!project) return null
    return(
        <div>
            
            <h2>{project.name}</h2>
            {Array.from({ length: 5 }).map((_, i) => (
                <div key={i}>
                    <p>{project.alt}</p>
                    <p>{project.icon}</p>

                </div>
            ))} 
        </div>
    )
}
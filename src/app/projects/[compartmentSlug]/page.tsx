import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";

export default async function Page({ params }: PageProps) {
    const project = await fetchCompartmentBySlug(params.compartmentSlug)
    if (!project) return null;

    return(
        <div>
            <h2>
                {project.name}
            </h2>
            
                <div className={project.slug}>
                    <p>{project.description}</p>
                    <p>{project.active}</p>
                    <p>{project.git}</p>
                </div>

        </div>
    )
}
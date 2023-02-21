import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";


export default async function Page({ params }: PageProps) {
    const project = await fetchCompartmentBySlug(params.compartmentSlug)
    if (!project) return null;

    return(
        <div>

        </div>
    )
}
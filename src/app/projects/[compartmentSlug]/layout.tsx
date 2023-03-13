import { TabGroup } from '../TabGroup';
import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";



export default async function Layout({ children, params }: PageProps) {
    const projects = await fetchCompartmentBySlug(params.compartmentSlug);
    if (!projects) return null
    console.log(`🪬 compartmentSlug: ${params.compartmentSlug} projects: ${projects.slug}`)
    return (
        <div>
            <div>
                <TabGroup
                    
                    path={`/projects/${projects.slug}`}
                    items={[
                        {
                            text: 'Stack:',
                        },
                        ...projects.details.map((x) => ({
                            text: x.alt,
                            slug: x.name,
                        })),
                    ]}
                />
            </div>
            <div>{children}</div>
        </div>
    )
}
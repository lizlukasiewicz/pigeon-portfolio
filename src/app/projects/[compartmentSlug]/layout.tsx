import { TabGroup } from '../TabGroup';
import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";


export default async function Layout({ children, params }: PageProps) {
    const projects = await fetchCompartmentBySlug(params.compartmentSlug);
    if (!projects) return null;
    return (
        <div>
            <div>
                <TabGroup
                path={`/projects/${projects.slug}`}
                items={[
                    {
                        text: 'All',
                    },
                    ...projects.details.map((x) => ({
                        text: x.name,
                        icon: x.icon,
                    })),
                ]}
                />
            </div>
            <div>{children}</div>
        </div>
    )
}
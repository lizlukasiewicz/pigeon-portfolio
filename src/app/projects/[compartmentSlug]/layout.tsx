
import { type PageProps } from "@/app/lib/routes";
import { fetchProjectBySlug } from "@/app/lib/Icons";
import { ProjectPage } from './ProjectPage';

export default async function Layout({ children, params }: PageProps) {
    const projectPage = await fetchProjectBySlug(params.compartmentSlug)
    if (!projectPage) return null;
    console.log(`🍄  projectPage:${projectPage?.name}`)
    return (
        <div key={params.compartmentSlug}>
            
            <ProjectPage
                project={projectPage}
                />
            
            <div>{children}</div>
        </div>
    )}
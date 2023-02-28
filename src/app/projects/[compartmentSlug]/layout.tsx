// import { TabGroup } from '../TabGroup';
// import { fetchCompartmentBySlug, type PageProps } from "@/app/lib/routes";
// import { useSelectedLayoutSegment } from 'next/navigation';
// import { Link } from '@chakra-ui/next-js'
// import NextLink from 'next/link';



export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    // { children, params }: PageProps
    // const projects = fetchCompartmentBySlug(params.compartmentSlug);
    // if (!projects) return null
    return (
        <div>
            <div>
                <p>This is from projects/[compartmentSlug]/layout.tsx</p>
                {/* <TabGroup
                    
                    path={`/projects/${projects.slug}`}
                    items={[
                        {
                            text: 'Stack:',
                        },
                        ...projects.details.map((x) => ({
                            text: x.name,
                            icon: x.icon,
                        })),
                    ]}
                /> */}
            </div>
            <div>{children}</div>
        </div>
    )
}
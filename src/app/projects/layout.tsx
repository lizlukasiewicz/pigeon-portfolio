// import { fetchCompartmentBySlug, type PageProps } from '../lib/routes';
import Link from 'next/link';
// import { useSelectedLayoutSegment } from 'next/navigation';



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
    // const category = await fetchCompartmentBySlug(params.categorySlug);
    // if (!category) return null;
    // const segment = useSelectedLayoutSegment();
    // const href = item.slug ? path + '/' + item.slug : path;
    // const isActive =
    //   // Example home pages e.g. `/layouts`
    //   (!item.slug && segment === null) ||
    //   segment === item.segment ||
    //   // Nested pages e.g. `/layouts/electronics`
    //   segment === item.slug;
    return (
      // className="space-y-9"
      // className="flex justify-between"
      <div>
        <div >
          <Link
            href="/projects/riderblog">
              Riders Blog

            {/* items={[
              {
                text: 'All',
              },
              ...category.items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
            ]} */}
          </Link>
          <Link
            href="/projects/dispatch">
              Dispatch App

            {/* items={[
              {
                text: 'All',
              },
              ...category.items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
            ]} */}
          </Link>
          <Link
            href="/projects/cal">
              Family calandar 

            {/* items={[
              {
                text: 'All',
              },
              ...category.items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
            ]} */}
          </Link>
          <Link
            href="/projects/noface">
              Escape Noface

            {/* items={[
              {
                text: 'All',
              },
              ...category.items.map((x) => ({
                text: x.name,
                slug: x.slug,
              })),
            ]} */}
          </Link>
  
        </div>
  
        <div>{children}</div>
      </div>
    );
  }
  
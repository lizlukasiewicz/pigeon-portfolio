import { fetchCompartment } from '../lib/routes';
import { TabGroup  } from './TabGroup';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';



export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects= await fetchCompartment();

    return (

      <div>
        <div >
          <TabGroup
          path='/projects'
          items={[
            {
              text: 'All',
            },
            ...projects.map((x) => ({
              text: x.name,
              slug: x.slug,
            })), 
          ]}
          />

  
        </div>
  
        <div>{children}</div>
      </div>
    );
  }
//          <Link
//            href="/projects/riderblog">
//              Riders Blog
//          </Link>
//          <Link
//            href="/projects/dispatch">
//              Dispatch App
//          </Link>
//          <Link
//            href="/projects/cal">
//              Family calandar 
//          </Link>
//          <Link
//            href="/projects/noface">
//              Escape Noface
//          </Link> 


import type { Item } from './TabGroup';
import { Link } from '@chakra-ui/next-js'
import { useSelectedLayoutSegment } from 'next/navigation';


export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const segment = useSelectedLayoutSegment();
  const href = item.slug ? path + '/' + item.slug : path;
  const isActive =
    // Example home pages e.g. `/layouts`
    (!item.slug && segment === null) ||
    segment === item.segment ||
    // Nested pages e.g. `/layouts/electronics`
    segment === item.slug;

  return (
    <Link
      href={href}
      fontFamily={"var(--chakra-fonts-mono)"}
      fontSize={'xl'}
      fontWeight={"bold"}
      color={isActive ? "#FFFFFF" : '#00C484'}
      _hover={{
        color: "#F3BA40"
      }}
    >
      {item.text}
    </Link>
  );
};

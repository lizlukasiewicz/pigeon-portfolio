'use client';
import { Tab } from './Tab';
import { HStack } from '@chakra-ui/react'

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
};

export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <HStack 
      width={"100%"}
      marginTop={5}
      paddingX={5}
      spacing={7}
    >
      {items.map((item) => (
        <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </HStack>
  );
};

import { Tab } from './Tab';
import styles from './tab.module.css'

export type Item = {
  text: string;
  slug?: string;
  segment?: string;
};

// TODO: Style tabGroup or use chakra-ui
export const TabGroup = ({ path, items }: { path: string; items: Item[] }) => {
  return (
    <div className={styles.tabGroup}>
      {items.map((item) => (
        <Tab key={path + item.slug} item={item} path={path} />
      ))}
    </div>
  );
};

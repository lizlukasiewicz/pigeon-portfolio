'use client';
import React from 'react';
import { ExpGroup } from "./ExpGroup";
import { TempContainer } from '../ui/TempContainer';

interface PageProps {
  children?: React.ReactNode,
  pageRefs: React.MutableRefObject<{}>,
  visRef: any,
  visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>,
};
// export type PageProps = {
//   children?: React.ReactNode;
//   pageRefs: React.MutableRefObject<{}>;
//   visRef: any;
//   visible: boolean | React.Dispatch<any> | React.MutableRefObject<any>;
// };

export default function ExperienceLayout({ children, pageRefs, visRef, visible}: PageProps) //pageRefs, visible, visRef }: PageProps)
    {
      const [idx, setIdx] = React.useState<number>(0);
      React.useEffect((): void => {
        idx && setIdx(idx)
      }, [idx]);
  return(
    <TempContainer label={'experience'} title={'My Experience'} pageRefs={pageRefs} refNum={2}>
        <ExpGroup idx={idx} setIdx={setIdx}/>
    </TempContainer>
          

    );
  }
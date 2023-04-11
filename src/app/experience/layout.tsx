import React from 'react';
import { fetchExpArray } from '../lib/experience';
import { ExpGroup } from  './ExpGroup'
import { TempContainer } from '../ui/TempContainer';

export default async function Layout({
      children,
    }: {
      children: React.ReactNode;
    }) {
  const experiences= await fetchExpArray()
  // const [idx, setIdx] = React.useState<number>(0);
  // React.useEffect((): void => {
  //   idx && setIdx(idx)
  // }, [idx]);
  return(
    <TempContainer
      label={'Experience'}>
        <ExpGroup
          items={[
            ...experiences.map((x) => ({
              company: x.company,
              // title: x.title,
              // details: x.details,
              // dates: x.dates,
              // skills: x.skills,
              // companyFull: x.companyFull,
              // companyLink: x.companyLink,
              // color: x.color,
            })),
          ]}/>

        <>{children}</>
    </TempContainer>
    );
  }
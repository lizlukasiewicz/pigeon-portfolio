import React from 'react';
import { fetchExpArray } from '../lib/experience';
import { ExpGroup } from  './ExpGroup'

export default async function Layout({
      children,
    }: {
      children: React.ReactNode;
    }) {
  const experiences= await fetchExpArray()
  return(
    <>
      <ExpGroup
      items={[
        ...experiences.map((x) => ({
          company: x.company,
          title: x.title,
          details: x.details,
          dates: x.dates,
          skills: x.skills,
          companyFull: x.companyFull,
          companyLink: x.companyLink,
          color: x.color,
        })),
      ]}
      />

      <>{children}</>
    </>
    );
  }
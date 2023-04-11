import React from 'react';
import { TempContainer } from '../ui/TempContainer';

export default function Template({ children }: { children: React.ReactNode }) {
  return <TempContainer label={''} >{children}</TempContainer>;
}
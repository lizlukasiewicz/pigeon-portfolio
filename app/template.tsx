'use client';
import { HomeContainer } from 'ui/HomeContainer';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <HomeContainer>

       {children}
       
    </HomeContainer>
)}
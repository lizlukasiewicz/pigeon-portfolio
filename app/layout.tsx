
import { Providers } from "./providers";
import '/styles/globals.css'
import type { Metadata } from 'next';
import BackgroundContain from "ui/BackgroundContain";
 
export const metadata: Metadata = {
  title: 'Lukasiewicz',
  description: 'Welcome to my Portfolio',
  icons: {
    icon: '/Frame_14.png',
    apple: '/Frame_14.png',
  },
};

export default function RootLayout(props: {
  children: React.ReactNode;
  home: React.ReactNode;
  about: React.ReactNode;
  experience: React.ReactNode;
  projects: React.ReactNode;
  contact: React.ReactNode;
}) {//({children,}: {children: React.ReactNode})
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <BackgroundContain>
            {props.home}
            {props.about}
            {props.experience}
            {props.projects}
            {props.contact}
            {props.children}
          </BackgroundContain>
        </Providers>
      </body>
    </html>
  )
}

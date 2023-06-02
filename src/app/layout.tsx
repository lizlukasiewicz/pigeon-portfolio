
import { Providers } from "./providers";
import './globals.css';
import React from "react";



export default function RootLayout(props: {
                                    children: React.ReactNode;
                                    home: React.ReactNode;
                                    about: React.ReactNode;
                                    contact: React.ReactNode;}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          {props.home}
          {props.about}
          {props.children}
          {props.contact}
        </Providers>
      </body>
    </html>
  )
}

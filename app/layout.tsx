
import { Providers } from "./providers";
import 'styles/globals.css';



export default function RootLayout(props: {
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
          {props.contact}
        </Providers>
      </body>
    </html>
  )
}

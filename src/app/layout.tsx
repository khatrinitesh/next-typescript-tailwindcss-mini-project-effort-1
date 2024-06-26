import type { Metadata } from "next";
import '../style/globals.css';


export const metadata: Metadata = {
  title: "Create Next App Typescript",
  description: "Generated by create next app",
};

import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <div className="mainContent">
        {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}

import "~/styles/globals.css";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Providers from "./Providers";
import TopNav from "./_components/TopNav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "GALLERY",
  description: "Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
          <TopNav />
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

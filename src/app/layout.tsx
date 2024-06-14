import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import Providers from "./Providers";
import Button from "components/Button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "GALLERY",
  description: "Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const TopNav = (): JSX.Element => {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Galary</div>

      <Button text="Sign In" />
    </nav>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className={`font-sans ${inter.variable} flex flex-col gap-4`}>
        <TopNav />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

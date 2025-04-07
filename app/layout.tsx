
import "./globals.css";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "@thirdweb-dev/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MYKS Token",
  description: "Invest in MAS YUSWA KREMES SRAGEN via blockchain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThirdwebProvider activeChain="polygon">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}

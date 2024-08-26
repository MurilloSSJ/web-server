import "@/styles/globals.css";
import '@xyflow/react/dist/style.css';
import { Inter as FontSans } from "next/font/google"
import type { AppProps } from "next/app";

import { cn } from "@/lib/utils"
 
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn("min-h-screen bg-background font-sans antialiased flex flex-col items-center justify-between",
    fontSans.variable)}>
      <Component {...pageProps} />
    </main>
  )
}

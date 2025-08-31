import type React from "react"
import type { Metadata } from "next"
// If you want to use Geist fonts, you can import them from @next/font/google or use a custom font loader.
// Example using @next/font/google (Next.js 13+):
import { Inter } from "next/font/google"

const GeistSans = Inter({ subsets: ["latin"], variable: "--font-sans" })
const GeistMono = Inter({ subsets: ["latin"], variable: "--font-mono" })
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "John Developer - Portfolio",
  description: "Full-stack developer passionate about creating beautiful, functional web applications",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Farhad | Full Stack Web Developer",
  description: "Full Stack Web Developer specializing in MERN stack, Generative AI, and Flutter Mobile App Development. Explore my projects, skills, and experience.",
  keywords: [
    "Full Stack Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "Generative AI",
    "Flutter",
    "Mobile Development",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Farhad" }],
  openGraph: {
    title: "Farhad | Full Stack Web Developer",
    description: "Full Stack Web Developer specializing in MERN stack, Generative AI, and Flutter Mobile App Development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

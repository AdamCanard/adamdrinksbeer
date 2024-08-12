import type { Metadata } from "next";

import DynamicBackground from "../components/dynamicbackground";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] bg-red-500 w-full">
        <DynamicBackground>{children}</DynamicBackground>
      </body>
    </html>
  );
}

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
}

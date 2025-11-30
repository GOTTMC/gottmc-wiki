"use client";
import { getTitleFromPathname } from "@/components/PageUtils";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const LayoutContext = createContext({
  title: "",
  setTitle: (v: string) => {},
});

export default function PageLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [title, setTitle] = useState<string>(getTitleFromPathname(pathname));

  return (
    <LayoutContext.Provider value={{ title, setTitle }}>
      <h1 id="firstHeading">
        { title }
      </h1>
      
      <div className="my-2">
        { children }
      </div>
    </LayoutContext.Provider>
  )
}
"use client"

import { getTitleFromPathname } from "@/components/PageUtils";
import SetPageTitle from "@/components/SetPageTitle";
import { usePathname } from "next/navigation"

export default function CatchAll() {
  const pathname = usePathname()
  
  const pageTitle = getTitleFromPathname(pathname);

  return (
    <>
      <SetPageTitle value={pageTitle} />
      このページは存在しません。
    </>
  )
}
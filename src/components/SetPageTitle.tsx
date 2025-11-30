"use client";

import { useContext, useEffect } from "react";
import { LayoutContext } from "@/app/wiki/layout";

export default function SetPageTitle({ value }: { value: string }) {
  const { setTitle } = useContext(LayoutContext);

  useEffect(() => {
    setTitle(value);
  }, [value]);

  return null; // render nothing
}

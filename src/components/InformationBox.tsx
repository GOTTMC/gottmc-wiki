import Image from "next/image";
import { ReactNode } from "react";

export default function InformationBox({
  children,
  title,
}: {
  children: ReactNode,
  title?: string,
}) {
  return (
    <div className="information-box">
      {title && <div className="information-box-title">
        { title }
      </div>}

      { children }
    </div>
  );
}

export function InformationContent({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="information-box-content">
      { children }
    </div>
  );
}

export function InformationTabs({
  children,
}: {
  children: ReactNode,
}) {
  return;
}

export function InformationTab({
  children,
}: {
  children: ReactNode,
}) {
  return ;
}

export async function InformationImageArea({
  children
}: {
  children: ReactNode
}) {
  return (
    <div className="grid w-full items-center justify-center my-4">
      { children }
    </div>
  );
}
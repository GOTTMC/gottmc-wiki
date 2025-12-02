import { ReactNode } from "react";

export default function ColumnList({
  children,
}: {
  children: ReactNode,
}) {
  return (
    <div className="column-list">
      { children }
    </div>
  );
}
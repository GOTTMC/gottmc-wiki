import { ReactNode } from "react";

type MessageColor = "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone";

const colorClasses = {
  "red":     ["bg-red-200", "border-l-red-300"],
  "orange":  ["bg-orange-200", "border-l-orange-300"],
  "amber":   ["bg-amber-200", "border-l-amber-300"],
  "yellow":  ["bg-yellow-200", "border-l-yellow-300"],
  "lime":    ["bg-lime-200", "border-l-lime-300"],
  "green":   ["bg-green-200", "border-l-green-300"],
  "emerald": ["bg-emerald-200", "border-l-emerald-300"],
  "teal":    ["bg-teal-200", "border-l-teal-300"],
  "cyan":    ["bg-cyan-200", "border-l-cyan-300"],
  "sky":     ["bg-sky-200", "border-l-sky-300"],
  "blue":    ["bg-blue-200", "border-l-blue-300"],
  "indigo":  ["bg-indigo-200", "border-l-indigo-300"],
  "violet":  ["bg-violet-200", "border-l-violet-300"],
  "purple":  ["bg-purple-200", "border-l-purple-300"],
  "fuchsia": ["bg-fuchsia-200", "border-l-fuchsia-300"],
  "pink":    ["bg-pink-200", "border-l-pink-300"],
  "rose":    ["bg-rose-200", "border-l-rose-300"],
  "slate":   ["bg-slate-200", "border-l-slate-300"],
  "gray":    ["bg-gray-200", "border-l-gray-300"],
  "zinc":    ["bg-zinc-200", "border-l-zinc-300"],
  "neutral": ["bg-neutral-200", "border-l-neutral-300"],
  "stone":   ["bg-stone-200", "border-l-stone-300"],
};

export default function MessageBox({
  title, children, color
}: {
  title?: string,
  children: ReactNode, 
  color?: MessageColor
}) {
  return (
    <div className={`message-box border-l-4 ${color ? colorClasses[color]?.join(' ') ?? colorClasses.neutral?.join(' ') : colorClasses.neutral?.join(' ')}`}>
      <div className="message-box-title">
        { title }
      </div>

      { children }
    </div>
  );
}
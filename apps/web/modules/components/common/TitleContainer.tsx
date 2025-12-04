import React from "react";

export default function TitleContainer({ title }: { title: string }) {
  const group = () =>
    Array.from({ length: Math.random() > 0.5 ? 2 : 4 })
      .map(() => (Math.random() > 0.5 ? "1" : "0"))
      .join("");

  const sequence = () =>
    Array.from({ length: 4 + Math.floor(Math.random() * 3) })
      .map(group)
      .join(" ");

  return (
    <div className="w-full bg-primary border-y-2 border-white text-white overflow-hidden relative">
      <div className="w-full border-b border-white py-2 flex items-center justify-between px-6 text-[5px] md:text-[10px] opacity-70 tracking-widest">
        <span>►</span>
        {Array.from({ length: 8 }).map((_, i) => (
          <span className="flex items-center gap-4" key={i}>
            {sequence()}
          </span>
        ))}
      </div>

      <div className="w-full flex justify-center text-center items-center py-16">
        <p className="xl:text-[140px] md:text-[110px] text-[60px] sm:text-[70px] 2xl:text-[165px] l font-extrabold uppercase">
          {title}
        </p>
      </div>

      <div className="w-full border-t border-white py-2 flex items-center justify-between px-6 text-[5px] md:text-[10px] opacity-70 tracking-widest">
        <span>►</span>
        {Array.from({ length: 5 }).map((_, i) => (
          <span className="flex items-center gap-4" key={i}>
            {sequence()}
          </span>
        ))}
      </div>
    </div>
  );
}

"use client";
import { Contrast } from "lucide-react";
import React from "react";

export default function ColorSwitcher() {
  const toggleTheme = () => {
    const html = document.documentElement;

    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      html.style.setProperty("--primary", "#160000");
    } else {
      html.style.setProperty("--primary", "#002569");
    }
  };

  return (
    <button onClick={toggleTheme} className="px-4 py-2  text-sm">
      <Contrast />
    </button>
  );
}

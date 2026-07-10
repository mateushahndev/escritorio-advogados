"use client";

import { useEffect, useRef } from "react";
import { useScreenshot } from "@/context/ScreenshotContext";

export function useAnimation(
  selector: string,
  options?: IntersectionObserverInit
) {
  const { isScreenshotMode } = useScreenshot();
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Se estiver em modo screenshot, não ativa as animações
    if (isScreenshotMode) return;

    const elements = document.querySelectorAll(selector);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1, ...options }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isScreenshotMode, selector, options]);

  return ref;
}
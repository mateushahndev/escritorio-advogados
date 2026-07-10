"use client";

import { createContext, useContext, useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface ScreenshotContextType {
  isScreenshotMode: boolean;
}

const ScreenshotContext = createContext<ScreenshotContextType>({
  isScreenshotMode: false,
});

function ScreenshotProviderContent({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const [isScreenshotMode, setIsScreenshotMode] = useState(false);

  useEffect(() => {
    const screenshotParam = searchParams.get("screenshot");
    setIsScreenshotMode(screenshotParam === "true");
  }, [searchParams]);

  return (
    <ScreenshotContext.Provider value={{ isScreenshotMode }}>
      {children}
    </ScreenshotContext.Provider>
  );
}

export function ScreenshotProvider({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<>{children}</>}>
      <ScreenshotProviderContent>{children}</ScreenshotProviderContent>
    </Suspense>
  );
}

export function useScreenshot() {
  const context = useContext(ScreenshotContext);
  if (!context) {
    throw new Error("useScreenshot must be used within a ScreenshotProvider");
  }
  return context;
}
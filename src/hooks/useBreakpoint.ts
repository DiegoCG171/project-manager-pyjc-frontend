import { useEffect, useState } from "react"

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

const getBrekpoint = (width: number): Breakpoint => {
    if(width < 640) return "xs";
    if(width < 768) return "sm";
    if(width < 1024) return "md";
    if(width < 1280) return "lg";
    if(width < 1536) return "xl";
    return "xxl"
}

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(
    typeof window !== "undefined" ? getBrekpoint(window.innerWidth) : "xxl"
  );

  useEffect(() => {
    
    const handleResize = () => {
        setBreakpoint(getBrekpoint(window.innerWidth))
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);

  return breakpoint
}

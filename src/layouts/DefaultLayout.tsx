import { ReactNode } from "react";
import { GlobalHeader } from "../components";

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Default layout component for standard pages
 * FIXES:
 * - Removes overflow-x-hidden (causes layout shift on mobile)
 * - Adds max-w-[1440px] wrapper for content constraint
 * - Consistent responsive padding (px-4 sm:px-6 lg:px-8)
 * - Prevents horizontal scrolling naturally
 */
export const DefaultLayout = ({
  children,
  className = "",
}: DefaultLayoutProps): JSX.Element => {
  return (
    <main className="flex flex-col items-center relative min-h-screen bg-white w-full">
      <GlobalHeader />
      
      {/* Constrained content wrapper - prevents overflow */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-0">
        <div className={className}>{children}</div>
      </div>
    </main>
  );
};

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
 * - Consistent responsive padding: px-4 (mobile) sm:px-6 (small) md:px-8 (tablet) lg:px-10 (desktop)
 * - Prevents horizontal scrolling naturally
 */
export const DefaultLayout = ({
  children,
  className = "",
}: DefaultLayoutProps): JSX.Element => {
  return (
    <main className="flex flex-col items-center relative bg-white w-full">
      <GlobalHeader />

      {/* Constrained content wrapper - prevents overflow */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-0">
        <div className={className}>{children}</div>
      </div>
    </main>
  );
};

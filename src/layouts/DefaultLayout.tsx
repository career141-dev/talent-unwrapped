import { ReactNode } from "react";
import { GlobalHeader } from "../components";

interface DefaultLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Default layout component for standard pages
 * Provides consistent header wrapper for all pages
 * Handles header rendering and main content structure
 */
export const DefaultLayout = ({
  children,
  className = "",
}: DefaultLayoutProps): JSX.Element => {
  return (
    <main
      className={`flex flex-col items-center relative min-h-screen bg-white w-full overflow-x-hidden ${className}`}
    >
      <GlobalHeader />
      {children}
    </main>
  );
};

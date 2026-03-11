import { cn } from "@/utils/helpers";

interface SkeletonProps {
    className?: string;
}

export const Skeleton = ({ className }: SkeletonProps): JSX.Element => {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-neutral-100",
                className
            )}
        />
    );
};

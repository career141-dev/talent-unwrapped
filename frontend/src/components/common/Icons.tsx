import React from "react";
import {
    ChevronDown,
    PlayCircle,
    Play,
    Video,
    ExternalLink,
    X,
    ArrowRight,
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    ClipboardList,
    FileText,
    Linkedin,
    ArrowUp,
    type LucideProps
} from "lucide-react";

/**
 * Branded Red Star / Badge icon used in forms
 */
export const RedStarIcon = ({ className = "", size = 24, fill = "#ED2939", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 26 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.9494 0C5.79418 0 0 5.37604 0 12.0001C0 18.6241 5.79418 24.0002 12.9494 24.0002C20.1176 24.0002 25.9248 18.6241 25.9248 12.0001C25.9248 5.37604 20.1176 0 12.9494 0ZM18.4455 19.2003L12.9624 16.1403L7.47929 19.2003L8.93108 13.4283L4.09611 9.55224L10.4736 9.04824L12.9624 3.6002L15.4512 9.03624L21.8286 9.54024L16.9937 13.4163L18.4455 19.2003Z"
            fill={fill}
        />
    </svg>
);

/**
 * Large Play Button with shadow used in hero/thumbnails
 */
export const LargePlayButton = ({ className = "", size = 84, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 134 134"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        {...props}
    >
        <g filter="url(#filter_large_play)">
            <rect x="25" y="21" width="84" height="84" rx="42" fill="#F5F5F5" />
            <path
                d="M52.3333 62.9999V56.4732C52.3333 48.3699 58.0716 45.0516 65.0933 49.1032L70.7583 52.3666L76.4233 55.6299C83.445 59.6816 83.445 66.3182 76.4233 70.3699L70.7583 73.6332L65.0933 76.8966C58.0716 80.9482 52.3333 77.6299 52.3333 69.5266V62.9999Z"
                fill="#232323"
            />
        </g>
        <defs>
            <filter id="filter_large_play" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="12.5" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
        </defs>
    </svg>
);

/**
 * Simple vertical line used for decoration
 */
export const VerticalLineIcon = ({ className = "", height = 127, color = "#E5E5E5", ...props }: React.SVGProps<SVGSVGElement> & { height?: number | string }) => (
    <svg width="2" height={height} viewBox={`0 0 2 ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d={`M0.75 ${height}V0`} stroke={color} strokeWidth="1.5" />
    </svg>
);

/**
 * Decorative Green Circle with White Arrow pointing up-right
 */
export const DecorativeArrowIcon = ({ className = "", size = 60, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <rect width="60" height="60" rx="30" fill="#7CB403" />
        <path d="M27.4258 23.9891L36.0101 23.9891L36.0101 32.5734" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M23.989 36.0102L35.8896 24.1096" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const PlayCircleFilledIcon = ({ className = "", size = 24, fill = "currentColor", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M11.9697 2C6.44973 2 1.96973 6.48 1.96973 12C1.96973 17.52 6.44973 22 11.9697 22C17.4897 22 21.9697 17.52 21.9697 12C21.9697 6.48 17.4997 2 11.9697 2ZM14.9697 14.23L12.0697 15.9C11.7097 16.11 11.3097 16.21 10.9197 16.21C10.5197 16.21 10.1297 16.11 9.76973 15.9C9.04973 15.48 8.61973 14.74 8.61973 13.9V10.55C8.61973 9.72 9.04973 8.97 9.76973 8.55C10.4897 8.13 11.3497 8.13 12.0797 8.55L14.9797 10.22C15.6997 10.64 16.1297 11.38 16.1297 12.22C16.1297 13.06 15.6997 13.81 14.9697 14.23Z" fill={fill} />
    </svg>
);

export const VideoCircleFilledIcon = ({ className = "", size = 24, fill = "currentColor", ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.66 13.73L13.38 14.47L12.1 15.21C10.45 16.16 9.1 15.38 9.1 13.48V12V10.52C9.1 8.61 10.45 7.84 12.1 8.79L13.38 9.53L14.66 10.27C16.31 11.22 16.31 12.78 14.66 13.73Z" fill={fill} />
    </svg>
);

/**
 * Re-exporting Lucide icons with customized defaults if needed
 */
export const ChevronDownIcon = (props: LucideProps) => <ChevronDown strokeWidth={2.5} {...props} />;
export const ChevronLeftIcon = (props: LucideProps) => <ChevronLeft strokeWidth={2.5} {...props} />;
export const ChevronRightIcon = (props: LucideProps) => <ChevronRight strokeWidth={2.5} {...props} />;
export const PlayCircleIcon = (props: LucideProps) => <PlayCircle fill="currentColor" {...props} />;
export const PlayIcon = (props: LucideProps) => <Play fill="currentColor" {...props} />;
export const VideoIcon = (props: LucideProps) => <Video fill="currentColor" {...props} />;
export const ExportIcon = (props: LucideProps) => <ExternalLink strokeWidth={1.5} {...props} />;
export const CloseIcon = (props: LucideProps) => <X {...props} />;
export const ArrowRightIcon = (props: LucideProps) => <ArrowRight {...props} />;
export const ArrowLeftIcon = (props: LucideProps) => <ArrowLeft {...props} />;
export const AssignmentIndIcon = (props: LucideProps) => <ClipboardList {...props} />;
export const DynamicFormIcon = (props: LucideProps) => <FileText {...props} />;
export const LinkedinIcon = (props: LucideProps) => <Linkedin fill="currentColor" {...props} />;
export const ArrowUpIcon = (props: LucideProps) => <ArrowUp {...props} />;

/**
 * Slide Arrows using Cloudinary images
 */
export const BackArrowIcon = ({ className = "", size = 24, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { size?: number | string }) => (
    <img
        src="https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770615061/Back_e3zqzq.png"
        alt="Back"
        className={className}
        style={{ width: size, height: "auto" }}
        {...props}
    />
);

export const NextArrowIcon = ({ className = "", size = 24, ...props }: React.ImgHTMLAttributes<HTMLImageElement> & { size?: number | string }) => (
    <img
        src="https://res.cloudinary.com/dvhxc6y0z/image/upload/v1770615061/Next_qovxba.png"
        alt="Next"
        className={className}
        style={{ width: size, height: "auto" }}
        {...props}
    />
);

// Mapping object for easy reference
export const AppIcons = {
    ChevronDown: ChevronDownIcon,
    ChevronLeft: ChevronLeftIcon,
    ChevronRight: ChevronRightIcon,
    BackArrow: BackArrowIcon,
    NextArrow: NextArrowIcon,
    PlayCircle: PlayCircleIcon,
    PlayCircleFilled: PlayCircleFilledIcon,
    Play: PlayIcon,
    Video: VideoIcon,
    VideoCircleFilled: VideoCircleFilledIcon,
    Export: ExportIcon,
    Close: CloseIcon,
    ArrowRight: ArrowRightIcon,
    ArrowLeft: ArrowLeftIcon,
    RedStar: RedStarIcon,
    LargePlayButton: LargePlayButton,
    AssignmentInd: AssignmentIndIcon,
    DynamicForm: DynamicFormIcon,
    Linkedin: LinkedinIcon,
    ArrowUp: ArrowUpIcon,
};

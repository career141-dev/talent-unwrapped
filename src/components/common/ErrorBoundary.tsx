import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 text-center">
                    <h1 className="text-4xl font-bold text-[#232323] mb-4">Something went wrong</h1>
                    <p className="text-[#8d8d8d] mb-8">We encountered an unexpected error. Please try refreshing the page.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-[#7bb302] text-white rounded-full font-semibold hover:bg-[#6da002] transition-colors"
                    >
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

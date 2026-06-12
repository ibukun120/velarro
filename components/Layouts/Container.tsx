import React from "react";

interface ContainerProps {
    className?: string;
    children?: React.ReactNode;
}

const Container = ({ className = "", children }: ContainerProps) => {
    return (
        <div className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6 pb-6 ${className}`}>
            {children}
        </div>
    );
};

export default Container;


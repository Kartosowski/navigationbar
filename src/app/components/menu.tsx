'use client';
import { motion } from "motion/react"
import React from "react";

export default function Menu({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (    
        <div
        className={`w-fit m-2 flex flex-col justify-left${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    )
}

export function Navigations({
    children,
    NavigationButtons,
    SetNavigationButtons,
    SetNavigationBodyOpen,
    NavigationBody,
    position,
    className,
}: {
    children: React.ReactNode;
    NavigationButtons: boolean;
    SetNavigationButtons: (state: boolean) => void;
    SetNavigationBodyOpen: (state: boolean) => void;
    NavigationBody: boolean;
    position: { x: number, y: number }
    className?: string;
}) {
    return (
        <div>
            <motion.div
                onHoverStart={() => {
                    SetNavigationButtons(false);
                    SetNavigationBodyOpen(true);
                }}
                onMouseLeave={() => {
                    SetNavigationButtons(false);
                    SetNavigationBodyOpen(false);
                }}
                style={{
                    pointerEvents: NavigationButtons && !NavigationBody ? "none" : "auto",
                }}
                animate={{
                    opacity: NavigationButtons || NavigationBody ? 1 : 0,
                    top: position.y,
                    left: NavigationButtons || NavigationBody ? position.x - 10 : position.x - 100,
                    filter: NavigationButtons || NavigationBody ? "blur(0px)" : "blur(5px)",
                }}
                transition={{
                    duration: 0.16,
                    ease: [0.89, 0.64, 0, 0.89],
                    delay: (NavigationButtons && NavigationBody) ? 0 : (NavigationButtons ? 0 : 0.1),
                }}
                className={`absolute w-fit bg-neutral-950/80 ring-1 ring-neutral-600 p-2 rounded-sm${className ? ` ${className}` : ''}`}
            >
                {children}
            </motion.div>
        </div>
    );
}

export function NavigationButton({
    text,
    id,
    setNavigation,
    setNavigationText,
    setPosition,
    className,
}: {
    text: string;
    id?: string;
    setNavigation?: (navigation: string) => void;
    setNavigationText?: (text: string) => void;
    setPosition?: (pos: { x: number, y: number }) => void;
    className?: string;
}) {
    const ref = React.useRef<HTMLDivElement>(null);

    return (
        <div 
            ref={ref}
            onMouseEnter={() => {
                if (setNavigation) setNavigation(id ? id : "");
                if (setNavigationText) setNavigationText(text);
                if (ref.current && setPosition) {
                    const rect = ref.current.getBoundingClientRect();
                    setPosition({ x: rect.left, y: rect.bottom }); 
                }
            }}
            className={`ring-1 ring-neutral-800 hover:ring-neutral-500 transition-all ease-in cursor-pointer hover:bg-neutral-600 rounded-sm m-1${className ? ` ${className}` : ''}`}>
            <p className="text-sm font-normal p-3 px-5">{text}</p>
        </div>
    );
}

export function NavigationsButtons({
    children,
    SetNavigationButtons,
    setNavigationBodyOpen,
    className,
}: {
    children: React.ReactNode;
    SetNavigationButtons: (state: boolean) => void;
    setNavigationBodyOpen: (state: boolean) => void;
    className?: string;
}) {
    return (    
        <motion.div
            onHoverStart={() => { 
                SetNavigationButtons(true);                     
                setNavigationBodyOpen(false);
            }}
            onHoverEnd={() => { 
                SetNavigationButtons(false);                     
                setNavigationBodyOpen(false);
            }}
            id="navigation-buttons" 
            className={`flex w-fit bg-neutral-800 rounded-md${className ? ` ${className}` : ''}`}>
            {children}
        </motion.div>
    );
}

export function Navigation({
    children,
    id,
    navigation,
    className,
}: Readonly<{
    children: React.ReactNode;
    id: string;
    navigation: string;
    className?: string;
}>) {
    if (navigation !== id) return null;
    return (
        <div className={`flex flex-col${className ? ` ${className}` : ''}`}>
            {children}
        </div>
    );
}

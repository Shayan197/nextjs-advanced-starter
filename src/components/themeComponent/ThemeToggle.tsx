'use client';

import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

export const ThemeToggle = (): React.JSX.Element => {
    const { setTheme, resolvedTheme } = useTheme();
    // Prevent hydration error
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setIsMounted(true), 0);
        return () => clearTimeout(t);
    }, []);

    if (!isMounted) {
        // Do NOT render theme-dependent UI before mount
        return <></>;
    }

    const toggleTheme = () => {
        const next = resolvedTheme === 'dark' ? 'light' : 'dark';
        setTheme(next);
    };

    return (
        <div onClick={toggleTheme} className="absolute right-9 top-9 cursor-pointer z-10">
            <div
                className={`
                    relative w-14 h-7 rounded-full
                    transition-all duration-300
                    ${resolvedTheme === 'dark' ? 'bg-primary-dark' : 'bg-primary-light'}
                `}
            >
                {/* Knob */}
                <span
                    className={`
                        absolute top-1 left-1
                        size-5 rounded-full
                        bg-foreground-primary
                        transition-all duration-300
                        ${resolvedTheme === 'dark' ? 'translate-x-7' : ''}
                    `}
                />
            </div>
        </div>
    );
};

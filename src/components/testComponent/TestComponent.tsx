'use client';
import React from 'react';
import { ThemeToggle } from '@/components';
import { RootState } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { decrement, increment } from '@/store/slices/counterSlice';

export const TestComponent = (): React.JSX.Element => {
    const count = useAppSelector((state: RootState) => state.counter.value);
    const dispatch = useAppDispatch();

    return (
        <div className="flex flex-col gap-20 min-h-screen items-center justify-center">
            <ThemeToggle />
            <h1 className="text-foreground-primary text-heading-lg font-bold">
                Next.js Boilerplate
            </h1>
            <div className="flex">
                <p className="text-foreground-primary text-heading-sm">Count : {count}</p>
                <button
                    onClick={() => dispatch(increment())}
                    className="text-foreground-primary bg-foreground-secondary rounded-xl px-10 py-2 ml-4"
                >
                    Increment
                </button>
                <button
                    onClick={() => dispatch(decrement())}
                    className="text-primary-dark bg-foreground-secondary rounded-xl px-10 py-2 ml-4"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

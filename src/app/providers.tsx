'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

type ProvidersProps = {
    children: ReactNode;
};

const Providers = ({ children }: ProvidersProps) => {
    return (
        <Provider store={store}>
            {/*attribute="data-theme" ensures next-themes toggles `data-theme` on <html>
            defaultTheme="dark" ensures first-time users see dark.
            enableSystem={false} -> do not auto-follow OS. Set true if you want system preference.*/}
            <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
                {children}
            </ThemeProvider>
        </Provider>
    );
};

export default Providers;

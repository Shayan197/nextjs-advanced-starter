import type { Metadata } from 'next';
import './globals.css';
import { Poppins, Figtree } from 'next/font/google';
import { LenisScroll } from '@/components';
import Providers from './providers';

const poppins = Poppins({
    variable: '--font-poppins',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const figtree = Figtree({
    variable: '--font-figtree',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Next.js Boilerplate',
    description:
        'Ready-to-use Next.js boilerplate with TypeScript, Tailwind CSS, and best practices.',
    icons: {
        icon: 'next.svg',
        shortcut: 'next.svg',
        apple: 'next.svg',
    },
    keywords: [
        'Boilerplate',
        'Next.js Boilerplate',
        'TypeScript',
        'Husky',
        'React Developer',
        'Next.js',
        'Tailwind CSS',
        'Redux',
        'Redux-toolkit',
        'Next.js Boilerplate with Tailwind CSS',
        'Best Practices',
        'EsLint',
        'TypeScript',
        'CSS3',
        'HTML5',
        'Next.js Setup with Redux and TypeScript',
    ],
    authors: [{ name: 'Muhammad Shayan Bukhari', url: 'https://shayanbukhari.vercel.app/' }],
    openGraph: {
        title: 'Next.js Boilerplate | TypeScript | Redux | Tailwind CSS | Framer Motion | Lennis | Best Practices',
        description:
            'Ready to use Next.js boilerplate with TypeScript, Tailwind CSS, Redux Toolkit, and best practices.',
        url: 'https://shayanbukhari.vercel.app/',
        siteName: 'Node.js Boilerplate',
        images: [
            {
                url: 'https://shayanbukhari.vercel.app',
                width: 1200,
                height: 630,
                alt: 'Next.js Boilerplate',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
            <body className={`${poppins.variable} ${figtree.variable} antialiased`}>
                <Providers>
                    <LenisScroll />
                    {children}
                </Providers>
            </body>
        </html>
    );
};
export default RootLayout;

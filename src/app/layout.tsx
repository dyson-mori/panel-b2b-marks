"use client";

import '../../envConfig';

import { Montserrat, Montserrat_Alternates } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import Global from '../global';
import theme from '../global/theme';

const montserrat = Montserrat({
  display: 'auto',
  // fallback: [''],
  preload: true,
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat'
});

const montserrat_alternates = Montserrat_Alternates({
  display: 'auto',
  // fallback: [''],
  preload: true,
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat-alternates'
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en" className={`${montserrat.variable} ${montserrat_alternates.variable}`}>
        <body>
          {children}
        </body>
        <Global />
      </html>
    </ThemeProvider>
  )
}
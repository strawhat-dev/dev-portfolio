import '@/static/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { Header } from '@/components/common/Header';

const SafeHydrate = ({ children }: { children: any }) => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  );
};

export default function Portfolio({ Component, pageProps }: AppProps) {
  return (
    <SafeHydrate>
      <Header />
      <CssBaseline />
      <Component {...pageProps} />
    </SafeHydrate>
  );
}

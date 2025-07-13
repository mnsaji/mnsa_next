// pages/_app.tsx
import type { AppProps } from 'next/app';
// Agar aap alias use kar rahe ho to ensure karo tsconfig me defined hai, warna relative path use karo:
import '@/styles/globals.css';  // Must match tsconfig paths
export default function App({ Component, pageProps }: AppProps) {
      console.log("Running _app.tsx");
   return <Component {...pageProps} />;
}

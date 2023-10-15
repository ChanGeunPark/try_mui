import MainLayout from "@/components/common/layout/MainLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Reset } from "styled-reset";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Reset />
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

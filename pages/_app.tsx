import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Neptune Mutual Decentralized Insurance</title>
        <meta
          name="description"
          content="Neptune Mutual protects the Ethereum community from hacks and exploits through its unique parametric DeFi insurance marketplace designed to cover, protect and secure onchain digital assets; power by Ethereum, driven by stablecoins."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

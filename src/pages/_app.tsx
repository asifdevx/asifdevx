import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/Layout/themeProvider";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [ready, setReady] = useState(false);
  const { pathname } = useRouter();
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
          <Head>
        {/* SEO Structured Data for Google Rich Results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Jashedul Asif",
              url: "https://asifdevx.vercel.app/",
              image: "/logo.png", // optional: change to your actual image URL
              jobTitle: "Full Stack Web3 Developer",
              worksFor: {
                "@type": "Organization",
                name: "AsifDevX"
              },
              sameAs: [
                "https://twitter.com/asifdevx",
                "https://github.com/asifdevx",
                "https://www.linkedin.com/in/asifdevx"
              ],
              description:
                "Experienced Web3 & Blockchain developer specializing in ICOs, dApps, and smart contract development.",
            }),
          }}
        />
      </Head>
      {ready ? (
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Layout pathname={pathname}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      ) : null}
    </>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Gowun+Batang:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta Tags */}
        <title>AsifDevX</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="AsifDevX - Web3 Developer & Blockchain Expert" />
        <meta property="og:title" content="AsifDevX" />
        <meta property="og:description" content="Web3 Developer & Blockchain Expert" />
        <meta property="og:image" content="/favicon.ico" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

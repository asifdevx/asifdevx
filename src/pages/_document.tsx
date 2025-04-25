import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bona+Nova+SC:ital,wght@0,400;0,700;1,400&family=Gowun+Batang:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Official portfolio of Jashedul Asif — Full Stack Web3 Developer & Blockchain Expert. Specialized in ICO development, token creation, dApps and smart contracts."
        />
        <meta
          name="keywords"
          content="Web3 Developer, Solidity, ICO Developer, Blockchain Expert, dApp, Ethereum, Smart Contract, EVM, Tokenomics"
        />
        <meta property="og:title" content="AsifDevX - Web3 & ICO Developer" />
        <meta
          property="og:description"
          content="Freelance Web3 Developer specialized in ICOs, dApps, and blockchain projects."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />

        {/* Optional: Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AsifDevX - Web3 & ICO Developer" />
        <meta
          name="twitter:description"
          content="Freelance Web3 Developer specialized in ICOs, dApps, and blockchain projects."
        />
        <meta name="twitter:image" content="/logo.png" />

        {/* Page Title (will be overridden per page ideally) */}
        <title>AsifDevX</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import React from "react";
import Head from "next/head";

import Hero from "@/components/Home/Hero";
import About from "@/components/SECTIONS/About";
import Contact from "@/components/SECTIONS/Contact";
import Project from "@/components/SECTIONS/Project";
import Experience from "@/components/SECTIONS/Experience";

const Home = () => {
  return (
    <>
      <Head>
        <title>AsifDevX | Web3 Developer & ICO Expert</title>
        <meta
          name="description"
          content="Official portfolio of Jashedul Asif — Full Stack Web3 Developer & Blockchain Expert. Specialized in ICO development, token creation, dApps and smart contracts."
        />
        <meta
          name="keywords"
          content="Web3 Developer, Solidity, ICO Developer, Blockchain Expert, dApp, Ethereum, Smart Contract, EVM, Tokenomics"
        />
        <meta name="author" content="Jashedul Asif" />
        <meta property="og:title" content="AsifDevX - Web3 & ICO Developer" />
        <meta
          property="og:description"
          content="Freelance Web3 Developer specialized in ICOs, dApps, and blockchain projects."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AsifDevX - Web3 & ICO Developer" />
        <meta
          name="twitter:description"
          content="Freelance Web3 Developer specialized in ICOs, dApps, and blockchain projects."
        />
        <meta name="twitter:image" content="/preview.png" />
        <link rel="canonical" href="https://asifdevx.vercel.app/" />
      </Head>

      <div className="dark:bg-black dark:text-white bg-white text-black w-full h-full">
        <main className="dark:bg-welcome bg-welcome-l">
          <Hero />
        </main>
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default Home;

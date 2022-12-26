import React, { FC, useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { v1 } from "uuid";

/* Componenet */
import { Card, Section } from "components/assets";
import { TechCard } from "components/card/TechCard";

const Home: FC = () => {
  const { theme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    buttonRef.current?.classList.add("animate__fadeIn");

    setTimeout(() => {
      buttonRef.current?.classList.remove("animate__fadeIn");
    }, 300);
  }, [theme]);

  const themeToggleHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <main className="dark:bg-zinc-900 dark:text-zinc-100 bg-zinc-100 text-black pb-10">
      <div className="relative py-4 sm:py-16 max-w-2xl lg:max-w-3xl w-11/12 sm:w-full m-auto min-h-screen font-[Vitro_core]">
        <button
          ref={buttonRef}
          className="absolute rounded-lg border dark:border-zinc-500 py-2 px-4 top-4 right-0 animate__animated animate__faster font-semibold hover:text-indigo-600 dark:bg-zinc-800 bg-white"
          onClick={themeToggleHandler}
        >
          {theme === "light" ? "Light 🌞" : "Dark 🌙"}
        </button>

        {/* start::Profile */}
        <section className="w-11/12 sm:w-full m-auto pb-12 sm:pb-8">
          <div className="block sm:flex py-0 sm:py-4 items-center">
            <div className="w-40 mr-12 rounded-lg shadow border dark:border-zinc-500 overflow-hidden">
              <div className="relative w-40">
                <img className="" src="images/logo.jpg" alt="logo" />
              </div>
              <div className="bg-white rounded-b-lg dark:bg-zinc-800 p-1 flex justify-center">
                <a
                  className="flex items-center font-semibold transition-colors duration-300 hover:text-indigo-600"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Ferv0r2"
                >
                  <img
                    className="inline w-6 mr-2"
                    src="images/github.svg"
                    alt="Github"
                  />
                  Github
                </a>
              </div>
            </div>
            <div className="self-end mt-8 sm:mt-0">
              <h1 className="text-2xl sm:text-3xl font-bold">Hwang Wontae</h1>
              <h2 className="text-lg mt-2 sm:text-xl">
                👨‍💻 Front-End Developer
              </h2>
              <div className="dark:bg-zinc-800 dark:border-zinc-500 bg-white rounded-lg border p-4 mt-4">
                <code className="text-sm sm:text-base">
                  I'm a developer who can communicate on a large scale. 😊
                </code>
              </div>
            </div>
          </div>
        </section>
        {/* end::Profile */}

        {/* start::Contact */}
        <Section title="🔎 Contact">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 p-4 sm:p-6 mt-3 dark:bg-zinc-800 dark:border-zinc-500 bg-white rounded-lg border">
            <p>📧 E-mail : amlk31255@gmail.com</p>
            <p>📞 Call : 010-7103-2146</p>
          </div>
        </Section>
        {/* end::Contact */}

        {/* start::Tech */}
        <Section title="🔨Tech">
          <div className="mt-3">
            {techData.map((v) => (
              <TechCard key={v1()} lang={v.lang} content={v.content} />
            ))}
          </div>
        </Section>
        {/* end::Tech */}

        {/* start::Project */}
        <Section title="📌 Project">
          <div className="px-6 sm:px-8 py-4 sm:py-6 dark:bg-zinc-800 dark:border-zinc-500 bg-white mt-3 rounded-lg border">
            <div className="pb-4">
              <div className="block sm:flex items-center">
                <h3 className="text-lg font-semibold">
                  On-Chain Project Funding Solution
                </h3>
                <h4 className="ml-0 sm:ml-4 text-sm">2022.11 ~ 2022.12</h4>
              </div>
              <div className="leading-8">
                <div className="py-4 text-sm">
                  <p>Language - TypeScript</p>
                  <p>Framework - ReactJS NextJS, TailwindCSS</p>
                  <p>
                    Link -{" "}
                    <a
                      className="underline underline-offset-2 hover:text-indigo-600"
                      href="http://nfps.metaoneer.club.s3-website.ap-northeast-2.amazonaws.com/"
                      target="_blank"
                    >
                      Website
                    </a>
                  </p>
                </div>
                <Card className="dark:bg-zinc-800 bg-zinc-50">
                  It is a service that combines cloud funding and distributed
                  organization DAO, and sponsors can manage the project through
                  voting depending on the milestone, which is the progress of
                  the project.
                </Card>
              </div>
            </div>
            <div className="py-4">
              <div className="block sm:flex items-center">
                <h3 className="text-lg font-semibold">
                  Blockchain Integrated Marketing System in Klaytn
                </h3>
                <h4 className="ml-0 sm:ml-4 text-sm">2022.10 ~ 2022.12</h4>
              </div>
              <div className="leading-8">
                <div className="py-4 text-sm">
                  <p>Language - TypeScript</p>
                  <p>Framework - ReactJS, BootStrap</p>
                  <p>
                    Link -{" "}
                    <a
                      className="underline underline-offset-2 hover:text-indigo-600"
                      href="https://bims.metaoneer.club/"
                      target="_blank"
                    >
                      Website
                    </a>
                  </p>
                </div>
                <Card className="dark:bg-zinc-800 bg-zinc-50">
                  A solution service that enables NFT project operators to
                  manage and market NFT information simultaneously.
                  <br></br>It was developed with the support of Klaytn Growth
                  Funding and is currently under management.
                </Card>
              </div>
            </div>
            <div className="py-4">
              <div className="block sm:flex items-center">
                <h3 className="text-lg font-semibold">
                  Web3 Payment Module in Binance
                </h3>
                <h4 className="ml-0 sm:ml-4 text-sm">2022.08 ~ 2022.10</h4>
              </div>
              <div className="leading-8">
                <div className="py-4 text-sm">
                  <p>Language - TypeScript, Solidity</p>
                  <p>Framework - ReactJS, NextJS, Styled-Components</p>
                  <p>
                    Link -{" "}
                    <a
                      className="underline underline-offset-2 hover:text-indigo-600"
                      href="https://www.npmjs.com/package/metaoneer-payment"
                      target="_blank"
                    >
                      npm
                    </a>
                  </p>
                </div>
                <Card className="dark:bg-zinc-800 bg-zinc-50">
                  Web3 Payment Module Library that you can use without Web3
                  knowledge.
                </Card>
              </div>
            </div>
            <div className="py-4">
              <div className="block sm:flex items-center">
                <h3 className="text-lg font-semibold">NFT Project in Klaytn</h3>
                <h4 className="ml-0 sm:ml-4 text-sm">2021.10 ~ 2022.06</h4>
              </div>
              <div className="leading-8">
                <div className="py-4 text-sm">
                  <p>Language - JavaScript, Solidity, Python</p>
                  <p>Framework - ReactJS, NextJS, TailwindCSS</p>
                  <p>
                    Link -{" "}
                    <a
                      className="underline underline-offset-2 hover:text-indigo-600"
                      href="https://opensea.io/collection/kepler-452b-official"
                      target="_blank"
                    >
                      Opensea
                    </a>
                  </p>
                </div>
                <Card className="dark:bg-zinc-800 bg-zinc-50">
                  While operating the PFP project in the Klaytn chain, we
                  achieved the sales record of 100 million won as of that time.
                  <br></br>
                  We have deployed smart contracts that meet Ethereum standards
                  and developed web services that can interact with them.
                  <br></br>
                  NFT sales, burns, transactions, governance, etc. have been
                  created various pages.
                  <br></br>I applied and maintained a system that stochastically
                  transformed NFT images every day.
                  <br></br>As a result, it was able to maintain about 2,000
                  holders.
                </Card>
              </div>
            </div>
            <div className="py-4">
              <div className="block sm:flex items-center">
                <h3 className="text-lg font-semibold">
                  Health care app for the elderly with dementia
                </h3>
                <h4 className="ml-0 sm:ml-4 text-sm">2021.04 ~ 2022.10</h4>
              </div>
              <div className="leading-8">
                <div className="py-4 text-sm">
                  <p>Language - Java, Android</p>
                  <p>Database - Firebase</p>
                  <p>
                    Link -{" "}
                    <a
                      className="underline underline-offset-2 hover:text-indigo-600"
                      href="https://www.youtube.com/watch?v=xczP9YPL5qQ"
                      target="_blank"
                    >
                      Youtube
                    </a>
                  </p>
                </div>
                <Card className="dark:bg-zinc-800 bg-zinc-50">
                  We developed an app and won a prize at the Probono Contest
                  hosted by the Ministry of Science and ICT.
                  <br></br>I developed communication skills by developing
                  various functions such as GPS, pedometer, calendar, and simple
                  game by team.
                  <br></br>
                  We developed location tracking and sharing services and
                  foreground functions through GPS.
                  <br></br>Through this course, I understood the concept of the
                  app's access rights and policies and the life cycle of the
                  app.
                </Card>
              </div>
            </div>
          </div>
        </Section>
        {/* start::Project */}

        {/* start::Education */}
        <Section title="💡 Education">
          <div className="p-4 border mt-3 mb-6 rounded-lg bg-white dark:bg-zinc-800 dark:border-zinc-500">
            <div className="block sm:flex items-center py-3">
              <h3 className="text-base font-semibold">
                Department of IT Software at Shingu University
              </h3>
              <h4 className="ml-0 sm:ml-4 text-sm">
                2017.03 - 2023.02 (Bachelor's degree expected)
              </h4>
            </div>
          </div>
        </Section>
        {/* end::Education */}

        {/* start::Certificate & Prize*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8">
          <section>
            <h2 className="text-lg font-[GmarketSansBold]">📑 Certificate</h2>
            <div className="p-4 bg-white rounded-lg border mt-3 dark:bg-zinc-800 dark:border-zinc-500">
              <div className="p-2">
                <div className="items-center">
                  <h3 className="text-base font-semibold">
                    컴퓨터활용능력 1급
                  </h3>
                  <h4 className="text-sm py-3">
                    2021.05 <br></br>Korea Chamber of Commerce and Industry
                  </h4>
                </div>
              </div>
              <div className="p-2">
                <div className="items-center">
                  <h3 className="text-base font-semibold">정보처리산업기사</h3>
                  <h4 className="text-sm py-3">
                    2021.08 <br></br>Korea Industrial Manpower Corporation
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-lg font-[GmarketSansBold]">🏆 Prize</h2>
            <div className="p-4 bg-white rounded-lg border mt-3 dark:bg-zinc-800 dark:border-zinc-500">
              <div className="p-2">
                <h3 className="text-base font-semibold">
                  Winner of the Probono Competition Encouragement Award
                </h3>
                <h4 className="text-sm py-3">
                  2021.12 <br></br>Korea Information Industry Association
                </h4>
              </div>
            </div>
          </section>
        </div>
        {/* end::Certificate & Prize */}
      </div>
    </main>
  );
};

export default Home;

const techData = [
  {
    lang: "TypeScript",
    content: [
      "I understand asynchronous processing such as 'await/async' and 'Promise'.",
      "I have experience in deploying web services using the React framework.",
      "I have experience interacting with the blockchain backend using libraries such as 'web3', 'ethers', and 'caver-js'.",
    ],
  },
  {
    lang: "Python",
    content: [
      "It is easy to implement the function by referring to the reference.",
      "I can troubleshoot basic algorithm problems.",
    ],
  },
  {
    lang: "Solidity",
    content: [
      "Code writing based on smart contract standards such as ERC-20, ERC-721, and ERC-1155 is possible.",
      "Smart contract distribution using hardhat, trouble, Remix, etc. and interaction between multiple contracts are possible.",
    ],
  },
];

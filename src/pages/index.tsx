import React, { FC, useEffect, useRef, useState } from "react";

/* Componenet */
import { Card, Section } from "components/UI";

/* State */
import { useRecoilState } from "recoil";
import { themeState } from "components/State";

const Home: FC = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [darkMode, setDarkMode] = useRecoilState(themeState);

  useEffect(() => {
    buttonRef.current?.classList.add("animate__fadeIn");

    setTimeout(() => {
      buttonRef.current?.classList.remove("animate__fadeIn");
    }, 300);
  }, [darkMode]);

  return (
    <main
      className={
        darkMode ? "bg-black text-zinc-100" : "bg-zinc-100 text-black"
      }>
      <div className="relative py-4 sm:py-16 max-w-2xl lg:max-w-3xl w-11/12 sm:w-full m-auto min-h-screen font-[Vitro_core]">
        <button
          ref={buttonRef}
          className={`absolute rounded  py-2 px-4 top-4 right-0 animate__animated animate__faster font-semibold hover:text-indigo-600 ${
            darkMode ? "bg-zinc-800" : "bg-zinc-200"
          }`}
          onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Dark 🌙" : "Light 🌞"}
        </button>

        {/* start::Profile */}
        <section className="w-11/12 sm:w-full m-auto pb-8">
          <div className="block sm:flex py-0 sm:py-4 items-center">
            <div className="relative w-40 mr-12">
              <img className="rounded-md" src="images/logo.jpg" alt="logo" />
              <div
                className={`${
                  darkMode ? "bg-zinc-800" : "bg-zinc-300"
                } absolute bottom-0 rounded-b-md w-full p-1 flex justify-center`}>
                <a
                  className="flex items-center font-semibold transition-colors duration-300 hover:text-indigo-600"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Ferv0r2">
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
              <div
                className={`${
                  darkMode ? "bg-zinc-800" : "bg-zinc-200"
                } rounded p-4 mt-4`}>
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
          <div className="block sm:flex p-3 border-t-[1px] border-zinc-600">
            <p className="w-full sm:w-5/12">📧 E-mail : amlk31255@gmail.com</p>
            <p className="w-full sm:w-5/12 m-auto">📞 Call : 010-7103-2146</p>
          </div>
        </Section>
        {/* end::Contact */}

        {/* start::Tech */}
        <Section title="🔨Tech">
          <div className="p-3 border-t-[1px] border-zinc-600">
            <div className="py-2">
              <div className="flex items-center">
                <img
                  className="w-8 mr-1"
                  src="images/lang/typescript.svg"
                  alt="Typescript"
                />
                <h3 className="text-lg font-semibold">TypeScript</h3>
              </div>
              <Card className="sm:p-4">
                <li>
                  I understand asynchronous processing such as 'await/async' and
                  'Promise'.
                </li>
                <li>
                  I have experience in deploying web services using the React
                  framework.
                </li>
                <li>
                  I have experience interacting with the blockchain backend
                  using libraries such as 'web3', 'ethers', and 'caver-js'.
                </li>
              </Card>
            </div>
            <div className="py-4">
              <div className="flex items-center">
                <img
                  className="w-8 mr-1"
                  src="images/lang/python.svg"
                  alt="Python"
                />
                <h3 className="text-lg font-semibold">Python</h3>
              </div>
              <Card className="sm:p-4">
                <li>
                  It is easy to implement the function by referring to the
                  reference.
                </li>
                <li>I can troubleshoot basic algorithm problems.</li>
              </Card>
            </div>
            <div className="py-4">
              <div className="flex items-center">
                <img
                  className="w-8 mr-1"
                  src="images/lang/solidity.svg"
                  alt="Solidity"
                />
                <h3 className="text-lg font-semibold">Solidity</h3>
              </div>
              <Card className="sm:p-4">
                <li>
                  Code writing based on smart contract standards such as ERC-20,
                  ERC-721, and ERC-1155 is possible.
                </li>
                <li>
                  Smart contract distribution using hardhat, trouble, Remix,
                  etc. and interaction between multiple contracts are possible.
                </li>
              </Card>
            </div>
          </div>
        </Section>
        {/* end::Tech */}

        {/* start::Project */}
        <Section title="📌 Project">
          <div className="p-3 border-t-[1px] border-zinc-600">
            <div className="py-4">
              <div className="block sm:flex items-center">
                <h3 className="text-lg font-semibold">NFT 프로젝트</h3>
                <h4 className="ml-0 sm:ml-4 text-sm">2021.10 ~ 2022.06</h4>
              </div>
              <div className="leading-8">
                <div className="py-4 text-sm">
                  <p>Language - JavaScript, Solidity, Python</p>
                  <p>Framework - ReactJS, NextJS, TailwindCSS</p>
                  <p>
                    Link -{" "}
                    <a
                      className="underline hover:text-indigo-600"
                      href="https://kepler-452b.net"
                      target="_blank">
                      Official Web,
                    </a>
                    <a
                      className="ml-2 underline hover:text-indigo-600"
                      href="https://contents.kepler-452b.net"
                      target="_blank">
                      DApp Web
                    </a>{" "}
                    (Need to Kaikas Wallet)
                  </p>
                </div>
                <Card className={darkMode ? "bg-zinc-800" : "bg-zinc-200"}>
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
                      className="underline hover:text-indigo-600"
                      href="https://www.youtube.com/watch?v=xczP9YPL5qQ"
                      target="_blank">
                      Youtube
                    </a>
                  </p>
                </div>
                <Card className={darkMode ? "bg-zinc-800" : "bg-zinc-200"}>
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
          <div className="p-3 border-t-[1px] border-zinc-600">
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
        <div className="block sm:flex justify-between pb-8">
          <section className="w-full sm:w-5/12 h-auto sm:h-48">
            <h2 className="text-lg font-[GmarketSansBold]">📑 Certificate</h2>
            <div className="p-3 border-t-[1px] border-zinc-600">
              <div className="py-4">
                <div className="items-center">
                  <h3 className="text-base font-semibold">
                    컴퓨터활용능력 1급
                  </h3>
                  <h4 className="text-sm py-3">
                    2021.05 <br></br>Korea Chamber of Commerce and Industry
                  </h4>
                </div>
              </div>
              <div className="py-4">
                <div className="items-center">
                  <h3 className="text-base font-semibold">정보처리산업기사</h3>
                  <h4 className="text-sm py-3">
                    2021.08 <br></br>Korea Industrial Manpower Corporation
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full sm:w-6/12 h-auto sm:h-48">
            <h2 className="text-lg font-[GmarketSansBold]">🏆 Prize</h2>
            <div className="p-3 border-t-[1px] border-zinc-600">
              <div className="py-4">
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

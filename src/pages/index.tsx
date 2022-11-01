import React, { FC, useEffect, useRef, useState } from "react";
import { Card } from "components/UI";

import { useRecoilState } from "recoil";
import { themeState } from "components/State";

const title = "text-lg font-[GmarketSansBold]";

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
        <section className="w-11/12 sm:w-full m-auto pb-4">
          <div className="block sm:flex py-0 sm:py-4">
            <img className="w-36 rounded-md" src="images/logo.jpg" alt="logo" />
            <div className="ml-auto sm:ml-16">
              <h1 className="text-2xl sm:text-3xl font-bold py-3">황원태</h1>
              <h2 className="text-lg sm:text-xl">
                👨‍💻 Front-End & Web3 Developer
              </h2>
              <h3 className="text-sm sm:text-base">
                대규모 커뮤니케이션이 가능한 개발자 황원태입니다 😊
              </h3>
              <div className="mt-3 font-semibold">
                <a
                  className="hover:text-indigo-600"
                  target="_blank"
                  href="https://github.com/Ferv0r2">
                  Github
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-8">
          <h2 className={title}>🔎 Contact</h2>
          <div className="block sm:flex p-3 border-t-[1px] border-zinc-600">
            <p className="w-full sm:w-5/12">📧 E-mail : amlk31255@gmail.com</p>
            <p className="w-full sm:w-5/12 m-auto">📞 Call : 010-7103-2146</p>
          </div>
        </section>
        <section className="pb-8">
          <h2 className={title}>🔨Tech</h2>
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
                  await/async, Promise 등 비동기 처리에 대해 이해하고 있습니다.
                </li>
                <li>
                  React 프레임워크를 활용한 웹 서비스 배포 경험이 있습니다.
                </li>
                <li>
                  web3, ethers, caver-js 등 라이브러리를 활용하여 블록체인
                  백엔드와 상호작용 경험이 있습니다.
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
                <li>레퍼런스를 참고하여 기능 구현에 무리가 없습니다.</li>
                <li>기본적인 알고리즘 문제를 해결할 수 있습니다.</li>
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
                  ERC-20, ERC-721, ERC-1155 등 스마트 계약 표준을 기반한 코드
                  작성이 가능합니다.
                </li>
                <li>
                  hardhat, truffle, Remix 등을 이용한 스마트 계약 배포 및 여러
                  계약 간의 상호작용이 가능합니다.
                </li>
              </Card>
            </div>
          </div>
        </section>
        <section className="pb-8">
          <h2 className={title}>📌 Project</h2>
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
                  Klaytn 체인에서 PFP 프로젝트를 운영하면서 당시 기준 한화 1억
                  원에 해당하는 판매 기록을 달성하였습니다.
                  <br></br>
                  이더리움 표준 규격에 맞는 스마트 계약을 배포하고 해당 계약과
                  상호작용할 수 있는 웹 서비스를 개발하였습니다.
                  <br></br>
                  NFT 판매, 소각, 거래, 거버넌스 등 다양한 페이지를
                  제작하였습니다.
                  <br></br>
                  매일 확률적으로 NFT 이미지를 변모시키는 시스템을 적용하고
                  유지보수하였습니다.
                </Card>
              </div>
            </div>
            <div className="py-4">
              <div className="block sm:flex items-center">
                <h3 className="text-lg font-semibold">
                  치매 어르신 건강관리 앱
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
                  과학기술정보통신부에서 주최하는 프로보노 공모전에서 앱을
                  개발하여 입상하였습니다.
                  <br></br>팀 단위로 GPS, 만보기, 캘린더, 간단한 게임 등 다양한
                  기능을 개발하여 의사소통 능력을 길렀습니다.
                  <br></br>
                  GPS를 통한 위치 추적 및 공유 서비스와 포그라운드 기능을
                  개발하였습니다.
                  <br></br>이 과정을 통해 앱의 접근 권한과 정책에 대한 개념과
                  앱의 생명주기를 이해하게 되었습니다.
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-8">
          <h2 className={title}>💡 Education</h2>
          <div className="p-3 border-t-[1px] border-zinc-600">
            <div className="block sm:flex items-center">
              <h3 className="text-base font-semibold">
                신구대학 IT소프트웨어과
              </h3>
              <h4 className="ml-0 sm:ml-4 text-sm py-3">
                2017.03 - 2023.02 (학사 졸업예정)
              </h4>
            </div>
          </div>
        </section>
        <div className="block sm:flex justify-between pb-8">
          <section className="w-full sm:w-5/12 h-auto sm:h-48">
            <h2 className={title}>📑 Certificate</h2>
            <div className="p-3 border-t-[1px] border-zinc-600">
              <div className="py-4">
                <div className="items-center">
                  <h3 className="text-base font-semibold">
                    컴퓨터활용능력 1급
                  </h3>
                  <h4 className="text-sm py-3">2021.05 대한상공회의소</h4>
                </div>
              </div>
              <div className="py-4">
                <div className="items-center">
                  <h3 className="text-base font-semibold">정보처리산업기사</h3>
                  <h4 className="text-sm py-3">2021.08 한국산업인력공단</h4>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full sm:w-6/12 h-auto sm:h-48">
            <h2 className={title}>🏆 Prize</h2>
            <div className="p-3 border-t-[1px] border-zinc-600">
              <div className="py-4">
                <h3 className="text-base font-semibold">
                  프로보노 공모전 입선
                </h3>
                <h4 className="text-sm py-3">2021.12 한국정보산업연합회</h4>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Home;

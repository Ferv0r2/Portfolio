import moment from "moment";
import { Wallet, IMilestone } from "stores";

export interface ALink {
  name: string;
  src?: string;
  url: string;
}

export interface Joiner {
  id: number;
  name: string;
  done: boolean;
}

export interface IProjectDetail {
  limitprice: number;
  totalFundamount: number;
  fundingStart: number;
  fundingEnd: number;
  fundingList: any;
  pass: number;
  reject: number;
  owner: string;
}

export interface IMilestoneUser {
  title: string;
  content: Joiner[];
  price: number;
  startDate: Date;
  endDate: Date;
  type: string;
  result: string;
}

export const dummyAccount: Wallet = {
  address: "0x33365f518a0f333365b7ff53beabf1f5b1247b5c",
  balance: 100,
  network: 56,
};

export const projectData: IProject[] = [
  {
    title: "BIMS",
    content: ["SNS 추가하기", "대시보드 추가하기", "oAuth 연결하기"],
    price: 100,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    title: "MTOR",
    content: ["스테이킹 풀 생성하기", "모바일 채굴 앱 릴리즈하기"],
    price: 200,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    title: "Binance Box",
    content: ["공식 SNS 계정 생성하기", "커뮤니티 운영하기"],
    price: 100,
    startDate: new Date(),
    endDate: new Date(),
  },
];

export const milestoneData: IMilestone[] = [
  {
    title: "BIMS",
    content: ["SNS 추가하기", "대시보드 추가하기", "oAuth 연결하기"],
    price: 100,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    title: "MTOR",
    content: ["스테이킹 풀 생성하기", "모바일 채굴 앱 릴리즈하기"],
    price: 200,
    startDate: new Date(),
    endDate: new Date(),
  },
  {
    title: "Binance Box",
    content: ["공식 SNS 계정 생성하기", "커뮤니티 운영하기"],
    price: 100,
    startDate: new Date(),
    endDate: new Date(),
  },
];

export const navItems: ALink[] = [
  {
    name: "홈",
    url: "/",
  },
  {
    name: "펀딩예정",
    url: "/comming",
  },
  {
    name: "펀딩",
    url: "/funding",
  },
];

export const contactItems: ALink[] = [
  {
    name: "이메일",
    src: "email",
    url: "mailto:contact@metaoneer.club",
  },
  {
    name: "텔레그램",
    src: "telegram",
    url: "https://t.me/Metaoneer_Ramp",
  },
  {
    name: "디스코드",
    src: "discord",
    url: "https://discord.gg/zeGnHn6byA",
  },
];

export const otherItems: ALink[] = [
  {
    name: "메인 홈페이지",
    url: "https://wontae.site",
  },
  {
    name: "BIMS",
    url: "https://bims.wontae.site",
  },
  {
    name: "npm 결제 모듈",
    url: "https://www.npmjs.com/package/metaoneer-payment",
  },
];

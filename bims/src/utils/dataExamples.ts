import { Wallet } from "components/auth/WalletModel";
import moment from "moment";
import { SNSItem } from "stores";

export interface NFTBase {
  name: string;
  contract: string;
  thumbnail?: string;
}

export interface Project extends NFTBase {
  id: number;
  chain_id: 1001 | 8217;
  interface: "kip17" | "kip37";
  symbol: string;
  homepage?: string;
  holder_count: number;
  total_supply: number;
  event_count: number;
}

export interface NFT extends NFTBase {
  symbol: string;
  total_supply: number;
}

export interface Event {
  id: number;
  project_id: number;
  title: string;
  content: string;
  user_point?: number;
  total_point?: number;
  metadata?: any;
  start_dt: string;
  end_dt: string;
  updated_at: string;
  created_at: string;
  items: IEventItem[];
}

export interface IEventItem {
  id: number;
  event_id: number;
  title: string;
  content?: string;
  point: number;
  type: string;
  metadata?: any;
  updated_at: string;
  created_at: string;
}

export interface Holders {
  owners: {
    address: string;
    balance: number;
  }[];
}

export interface Joiner {
  address: string;
  user_id: number;
  point: number;
  count: number;
}

export const dummyAccount: Wallet = {
  address: "0x33365f518a0f333365b7ff53beabf1f5b1247b5c",
  balance: 100,
  network: 8217,
};

export const projectDataArray: Project[] = [
  {
    id: 111,
    contract: "0x928267e7db3d173898553ff593a78719bb16929f",
    chain_id: 8217,
    interface: "kip17",
    name: "Kepler-452b",
    symbol: "K452",
    thumbnail:
      "https://i.seadn.io/gae/ViAAKgvW8myVK4OI0unEqIXGTttbHAPLB_A9vXXMXKbF2UagBhgC97ru_7OXtFzA7Q0ULD7UhrEt5yipH0DhunbRXjfqclG0VRo_tg?auto=format&w=256",
    homepage: "https://kepler-452b.net",
    holder_count: 1885,
    total_supply: 58380,
    event_count: 25,
  },
  {
    id: 2,
    contract: "0x13b2ad50813b62e072f37B4E235DfE3395CCb0D3",
    chain_id: 8217,
    interface: "kip17",
    name: "KlayReact",
    symbol: "KR",
    thumbnail:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    homepage: "https://bims.wontae.net",
    holder_count: 1,
    total_supply: 2,
    event_count: 0,
  },
  {
    id: 3,
    contract: "0x0daef816a471d0f276e36a08fa37ec09483cf561",
    chain_id: 8217,
    interface: "kip17",
    name: "KlayWeather",
    symbol: "KW",
    thumbnail: "https://picsum.photos/200",
    homepage: "http://bims.wontae.net",
    holder_count: 1084,
    total_supply: 4964,
    event_count: 4,
  },
];

export const eventDataArray: Event[] = [
  {
    id: 28,
    project_id: 111,
    title: "Galaxy S22 Launch Pre-order Event",
    content: "<p>Huge discounts and exclusive offers for early birds!</p>",
    metadata: null,
    start_dt: moment(new Date()).add(5, "d").add(4, "h").format(),
    end_dt: moment(new Date()).add(10, "d").add(1, "h").format(),
    updated_at: moment(new Date()).add(5, "d").format(),
    created_at: moment(new Date()).add(5, "d").format(),
    items: [],
  },
  {
    id: 29,
    project_id: 111,
    title: "Get Ready for Winter with a Free Jacket!",
    content: "<p>Grab a warm jacket to beat the cold winter!</p>",
    metadata: null,
    start_dt: moment(new Date()).add(-5, "d").add(Math.floor(Math.random() * 1000), "m").format(),
    end_dt: moment(new Date()).add(1, "d").add(3, "h").format(),
    updated_at: moment(new Date()).add(-5, "d").format(),
    created_at: moment(new Date()).add(-5, "d").format(),
    items: [
      {
        id: 22,
        event_id: 29,
        title: "Follow us on Facebook",
        content: "Visit our Facebook page and stay updated!",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
      {
        id: 23,
        event_id: 29,
        title: "Follow us on Instagram",
        content: "Visit our Instagram page and stay updated!",
        point: 3,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
    ],
  },
  {
    id: 54,
    project_id: 111,
    title: "Dress to Impress!",
    content: "<p>Show up in style for this special occasion!</p>",
    metadata: null,
    start_dt: moment(new Date()).add(3, "d").add(Math.floor(Math.random() * 1000), "m").format(),
    end_dt: moment(new Date()).add(7, "d").add(1, "h").format(),
    updated_at: moment(new Date()).add(3, "d").format(),
    created_at: moment(new Date()).add(3, "d").format(),
    items: [
      {
        id: 80,
        event_id: 54,
        title: "Facebook",
        content: "Visit our Facebook page!",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
      {
        id: 81,
        event_id: 54,
        title: "Instagram",
        content: "Visit our Instagram page!",
        point: 1,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
    ],
  },
  {
    id: 58,
    project_id: 111,
    title: "Battle of the Social Networks",
    content: "<p>Facebook vs Instagram - which is your favorite?</p>",
    metadata: null,
    start_dt: moment(new Date()).add(-1, "d").add(Math.floor(Math.random() * 1000), "m").format(),
    end_dt: moment(new Date()).add(4, "d").add(1, "h").format(),
    updated_at: moment(new Date()).add(-1, "d").format(),
    created_at: moment(new Date()).add(-1, "d").format(),
    items: [
      {
        id: 90,
        event_id: 58,
        title: "Facebook",
        content: "I'm for Facebook",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
      {
        id: 91,
        event_id: 58,
        title: "Instagram",
        content: "I'm for Instagram",
        point: 1,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
    ],
  },
  {
    id: 59,
    project_id: 111,
    title: "Special Thursday Event",
    content: "<p>Join us for a special event this Thursday!</p>",
    metadata: null,
    start_dt: moment(new Date()).add(-3, "d").format(),
    end_dt: moment(new Date()).add(-2, "d").add(1, "h").format(),
    updated_at: moment(new Date()).add(-2, "d").format(),
    created_at: moment(new Date()).add(-2, "d").format(),
    items: [
      {
        id: 92,
        event_id: 59,
        title: "Instagram",
        content: "Check out our Instagram!",
        point: 3,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
      {
        id: 93,
        event_id: 59,
        title: "Facebook",
        content: "Don't miss our latest updates on Facebook!",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://bims.wontae.net",
        },
        updated_at: moment(new Date()).add(3, "d").format(),
        created_at: moment(new Date()).add(3, "d").format(),
      },
    ],
  },
];


export const holderData: NFT & Holders = {
  name: "KlayWeather",
  symbol: "KW",
  contract: "0x0daef816a471d0f276e36a08fa37ec09483cf561",
  total_supply: 4964,
  owners: [
    {
      address: "0xfca1a9e5c2efd443d02fa48a72cca7ceb32a2cbe",
      balance: 32,
    },
    {
      address: "0x361b992280cf4558b434bce81bd85711bfcf069f",
      balance: 32,
    },
    {
      address: "0xe9cca41f99e54599ac1938bba7ab1b6be38dd4d5",
      balance: 31,
    },
    {
      address: "0x66daf73d63f6d4929c45b2343c54d99e0fe20b96",
      balance: 31,
    },
    {
      address: "0xe0d6779e93beb51528d6e4b9612374135f30a221",
      balance: 30,
    },
    {
      address: "0xdd7acc2dc93a0557e2bcb184cea9fc27d8093615",
      balance: 29,
    },
    {
      address: "0xb637bcbf6a344b1a3b17daf73bdfdc57e8d8d6bf",
      balance: 27,
    },
    {
      address: "0x314471ac47ce290431fda8bb830300475a4f4d10",
      balance: 26,
    },
    {
      address: "0xde1e3c3cce5d433c12839c3935a62c63586b9bc2",
      balance: 26,
    },
    {
      address: "0xd7e8375fed03e6dcd3237ca53add38f9a70b1a77",
      balance: 26,
    },
    {
      address: "0xc68dddb6c97375cc9acc9baa43253b71807df387",
      balance: 25,
    },
    {
      address: "0xf433cdade4f0693ea1fa441f78825b9f9532bcfb",
      balance: 22,
    },
    {
      address: "0xe1c8d3de5c6b3bc79f84e1677d87a20d32bd87b4",
      balance: 21,
    },
    {
      address: "0x2caee18e702347c8389c945889e49928c0055cec",
      balance: 21,
    },
    {
      address: "0xebc0ea128a8103bc8195c302f5b3d30d30bd260f",
      balance: 20,
    },
  ],
};

export const eventJoinData: Joiner[] = [
  {
    address: "0xebc0ea128a8103bc8195c302f5b3d30d30bd260f",
    user_id: 2,
    point: 3,
    count: 1,
  },
  {
    address: "0xe1c8d3de5c6b3bc79f84e1677d87a20d32bd87b4",
    user_id: 6,
    point: 2,
    count: 1,
  },
];

export const snsArray: SNSItem[] = [
  {
    sns: "Facebook",
    options: ["Link"],
    type: "primary",
  },
  {
    sns: "Instagram",
    options: ["Link"],
    type: "info",
  },
  {
    sns: "Twitter",
    options: ["Link"],
    type: "primary",
  },
  {
    sns: "Youtube",
    options: ["Link"],
    type: "danger",
  },
  {
    sns: "Discord",
    options: ["Link", "Join"],
    type: "info",
  },
  {
    sns: "NFT",
    options: ["Hold"],
    type: "info",
  },
  {
    sns: "ETC",
    options: ["Link"],
    type: "dark",
  },
];

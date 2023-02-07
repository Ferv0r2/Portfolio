import { Wallet } from "components/auth/WalletModel";
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
  items: IEventItem[] | [];
}

export interface IEventItem {
  id: number;
  event_id: number;
  title: string;
  content: string | null;
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
    name: "KlaytnGurim",
    symbol: "KalytnOUT",
    thumbnail:
      "https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
    homepage: "https://bims.wontae.site",
    holder_count: 1,
    total_supply: 2,
    event_count: 0,
  },
  {
    id: 3,
    contract: "0x0daef816a471d0f276e36a08fa37ec09483cf561",
    chain_id: 8217,
    interface: "kip17",
    name: "KlayWeatherGirls",
    symbol: "KWG",
    thumbnail: "https://picsum.photos/200",
    homepage: "http://bims.wontae.site",
    holder_count: 1084,
    total_supply: 4964,
    event_count: 4,
  },
];

export const eventDataArray: Event[] = [
  {
    id: 28,
    project_id: 111,
    title: "Good",
    content: "<p>Nice</p>",
    metadata: null,
    start_dt: "2022-10-10T00:00:00+00:00",
    end_dt: "2022-10-12T00:00:00+00:00",
    updated_at: "2022-10-10T09:23:51.454281+00:00",
    created_at: "2022-10-10T09:23:51.454281+00:00",
    items: [],
  },
  {
    id: 29,
    project_id: 111,
    title: "Test Title",
    content: "<p>Test Content</p>",
    metadata: null,
    start_dt: "2022-10-11T00:00:00+00:00",
    end_dt: "2022-10-18T00:00:00+00:00",
    updated_at: "2022-10-10T16:54:40.116829+00:00",
    created_at: "2022-10-10T16:54:40.116829+00:00",
    items: [
      {
        id: 22,
        event_id: 29,
        title: "Facebook",
        content: null,
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-10T16:54:40.501944+00:00",
        created_at: "2022-10-10T16:54:40.501944+00:00",
      },
      {
        id: 23,
        event_id: 29,
        title: "Instagram",
        content: null,
        point: 3,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-10T16:54:40.501944+00:00",
        created_at: "2022-10-10T16:54:40.501944+00:00",
      },
    ],
  },
  {
    id: 54,
    project_id: 111,
    title: "Title",
    content: "<p>Content</p>",
    metadata: null,
    start_dt: "2022-10-11T00:00:00+00:00",
    end_dt: "2022-10-19T00:00:00+00:00",
    updated_at: "2022-10-11T06:23:19.381893+00:00",
    created_at: "2022-10-11T06:23:19.381893+00:00",
    items: [
      {
        id: 80,
        event_id: 54,
        title: "Facebook",
        content: null,
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-11T06:23:19.435644+00:00",
        created_at: "2022-10-11T06:23:19.435644+00:00",
      },
      {
        id: 81,
        event_id: 54,
        title: "Instagram",
        content: null,
        point: 1,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-11T06:23:19.435644+00:00",
        created_at: "2022-10-11T06:23:19.435644+00:00",
      },
    ],
  },
  {
    id: 55,
    project_id: 111,
    title: "Title",
    content: "<p>Content</p>",
    metadata: null,
    start_dt: "2022-10-11T00:00:00+00:00",
    end_dt: "2022-10-19T00:00:00+00:00",
    updated_at: "2022-10-11T06:25:09.20421+00:00",
    created_at: "2022-10-11T06:25:09.20421+00:00",
    items: [
      {
        id: 82,
        event_id: 55,
        title: "Facebook",
        content: null,
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-11T06:25:09.251325+00:00",
        created_at: "2022-10-11T06:25:09.251325+00:00",
      },
      {
        id: 83,
        event_id: 55,
        title: "Instagram",
        content: null,
        point: 1,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-11T06:25:09.251325+00:00",
        created_at: "2022-10-11T06:25:09.251325+00:00",
      },
    ],
  },
  {
    id: 58,
    project_id: 111,
    title: "Title",
    content: "<p>Content</p>",
    metadata: null,
    start_dt: "2022-10-11T00:00:00+00:00",
    end_dt: "2022-11-01T00:00:00+00:00",
    updated_at: "2022-10-11T06:34:45.418942+00:00",
    created_at: "2022-10-11T06:34:45.418942+00:00",
    items: [
      {
        id: 90,
        event_id: 58,
        title: "Facebook",
        content: "F Content",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-11T06:34:45.46205+00:00",
        created_at: "2022-10-11T06:34:45.46205+00:00",
      },
      {
        id: 91,
        event_id: 58,
        title: "Instagram",
        content: "I Content",
        point: 1,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-11T06:34:45.46205+00:00",
        created_at: "2022-10-11T06:34:45.46205+00:00",
      },
    ],
  },
  {
    id: 59,
    project_id: 111,
    title: "1013",
    content: "<p>목요일</p>",
    metadata: null,
    start_dt: "2022-10-14T04:00:00+00:00",
    end_dt: "2022-10-16T09:00:00+00:00",
    updated_at: "2022-10-13T05:18:17.156884+00:00",
    created_at: "2022-10-13T05:18:17.156884+00:00",
    items: [
      {
        id: 92,
        event_id: 59,
        title: "Instagram",
        content: "인스타",
        point: 3,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-13T05:18:17.538178+00:00",
        created_at: "2022-10-13T05:18:17.538178+00:00",
      },
      {
        id: 93,
        event_id: 59,
        title: "Facebook",
        content: "페북",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-13T05:18:17.538178+00:00",
        created_at: "2022-10-13T05:18:17.538178+00:00",
      },
    ],
  },
  {
    id: 60,
    project_id: 111,
    title: "대망의 에어팟 이벤트",
    content:
      '<h1 class="ql-align-center">고대했던 에어팟 이벤트</h1><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="background-color: rgb(255, 153, 0);">가보자 얻으러 가보자!</span></p>',
    metadata: null,
    start_dt: "2022-10-15T04:41:03.524+00:00",
    end_dt: "2022-10-21T04:41:03+00:00",
    updated_at: "2022-10-15T04:42:46.493083+00:00",
    created_at: "2022-10-15T04:42:46.493083+00:00",
    items: [
      {
        id: 94,
        event_id: 60,
        title: "Instagram",
        content: "알림설정까지",
        point: 1,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-15T04:42:46.870293+00:00",
        created_at: "2022-10-15T04:42:46.870293+00:00",
      },
      {
        id: 95,
        event_id: 60,
        title: "Youtube",
        content: "구독과 좋아요",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-15T04:42:46.870293+00:00",
        created_at: "2022-10-15T04:42:46.870293+00:00",
      },
    ],
  },
  {
    id: 61,
    project_id: 111,
    title: "내용이 많은 이벤트",
    content:
      '<p class="ql-align-center"><span style="color: rgb(94, 98, 120);">엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 내용 엄청난 내용 엄청난 내용 엄청난 내용 엄청난 내용 </span></p>',
    metadata: null,
    start_dt: "2022-10-18T05:00:00+00:00",
    end_dt: "2022-10-20T05:00:00+00:00",
    updated_at: "2022-10-16T05:31:02.653184+00:00",
    created_at: "2022-10-16T05:31:02.653184+00:00",
    items: [
      {
        id: 96,
        event_id: 61,
        title: "Instagram",
        content:
          "4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 4줄 정도 텍스트 ",
        point: 4,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-16T05:31:02.713371+00:00",
        created_at: "2022-10-16T05:31:02.713371+00:00",
      },
      {
        id: 97,
        event_id: 61,
        title: "Facebook",
        content:
          "3줄 정도 될 것 같은 텍스트 3줄 정도 될 것 같은 텍스트 3줄 정도 될 것 같은 텍스트 3줄 정도 될 것 같은 텍스트 3줄 정도 될 것 같은 텍스트 ",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-16T05:31:02.713371+00:00",
        created_at: "2022-10-16T05:31:02.713371+00:00",
      },
    ],
  },
  {
    id: 62,
    project_id: 111,
    title: "퍼블리싱 테스트",
    content: "<p>UI 굿</p>",
    metadata: null,
    start_dt: "2022-10-16T09:00:00.154+00:00",
    end_dt: "2022-10-16T14:00:00.154+00:00",
    updated_at: "2022-10-16T05:50:18.849838+00:00",
    created_at: "2022-10-16T05:50:18.849838+00:00",
    items: [
      {
        id: 98,
        event_id: 62,
        title: "Facebook",
        content: "페북",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-16T05:50:19.215164+00:00",
        created_at: "2022-10-16T05:50:19.215164+00:00",
      },
      {
        id: 99,
        event_id: 62,
        title: "Twitter",
        content: "해로운 새",
        point: 1,
        type: "Like",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-16T05:50:19.215164+00:00",
        created_at: "2022-10-16T05:50:19.215164+00:00",
      },
    ],
  },
  {
    id: 63,
    project_id: 111,
    title: "링크 메타데이터 테스트",
    content: "<p>링크 메타데이터 ,, 잘 될까요?!</p>",
    metadata: null,
    start_dt: "2022-10-17T04:00:00.669+00:00",
    end_dt: "2022-10-21T04:00:00+00:00",
    updated_at: "2022-10-17T04:22:58.475139+00:00",
    created_at: "2022-10-17T04:22:58.475139+00:00",
    items: [
      {
        id: 101,
        event_id: 63,
        title: "Instagram",
        content: "여기는 https://kepler-452b.net",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-17T04:22:58.913746+00:00",
        created_at: "2022-10-17T04:22:58.913746+00:00",
      },
    ],
  },
  {
    id: 64,
    project_id: 111,
    title: "TEST",
    content: "<p>TEST</p>",
    metadata: null,
    start_dt: "2022-10-17T19:00:00.436+00:00",
    end_dt: "2022-10-18T16:00:00+00:00",
    updated_at: "2022-10-17T19:57:38.581162+00:00",
    created_at: "2022-10-17T19:57:38.581162+00:00",
    items: [],
  },
  {
    id: 65,
    project_id: 111,
    title: "TEST 10-18",
    content:
      '<h2 class="ql-align-center">TEST 10-18 Content</h2><p class="ql-align-center"><br></p><p class="ql-align-center"><strong style="background-color: rgb(255, 194, 102);">Good</strong></p>',
    metadata: null,
    start_dt: "2022-10-17T16:00:00.755+00:00",
    end_dt: "2022-10-19T21:00:00+00:00",
    updated_at: "2022-10-17T20:03:09.057264+00:00",
    created_at: "2022-10-17T20:03:09.057264+00:00",
    items: [
      {
        id: 104,
        event_id: 65,
        title: "Facebook",
        content: "Facebook Content",
        point: 1,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-17T20:03:09.11114+00:00",
        created_at: "2022-10-17T20:03:09.11114+00:00",
      },
      {
        id: 105,
        event_id: 65,
        title: "Instagram",
        content: "Instagram Content",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-17T20:03:09.11114+00:00",
        created_at: "2022-10-17T20:03:09.11114+00:00",
      },
    ],
  },
  {
    id: 66,
    project_id: 111,
    title: "Example Title 10-18",
    content:
      '<h2 class="ql-align-center"><strong>Example Content 10-18</strong></h2><p class="ql-align-center"><br></p><p class="ql-align-center"><span style="background-color: rgb(230, 0, 0);">10-18</span></p>',
    metadata: null,
    start_dt: "2022-10-17T20:00:00.972+00:00",
    end_dt: "2022-10-20T03:00:00+00:00",
    updated_at: "2022-10-17T20:13:01.246497+00:00",
    created_at: "2022-10-17T20:13:01.246497+00:00",
    items: [
      {
        id: 106,
        event_id: 66,
        title: "Facebook",
        content: "FB content",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-17T20:13:01.319328+00:00",
        created_at: "2022-10-17T20:13:01.319328+00:00",
      },
      {
        id: 107,
        event_id: 66,
        title: "Instagram",
        content: "IS content",
        point: 2,
        type: "Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-17T20:13:01.319328+00:00",
        created_at: "2022-10-17T20:13:01.319328+00:00",
      },
    ],
  },
  {
    id: 68,
    project_id: 111,
    title: "링크 적용",
    content: "<p>테스트</p>",
    metadata: null,
    start_dt: "2022-10-20T13:00:00.585+00:00",
    end_dt: "2022-10-21T13:00:00+00:00",
    updated_at: "2022-10-20T14:37:08.976699+00:00",
    created_at: "2022-10-20T14:37:08.976699+00:00",
    items: [
      {
        id: 110,
        event_id: 68,
        title: "ETC",
        content: "여기도 방문해주세용 ㅎ",
        point: 2,
        type: "link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-20T14:37:09.037277+00:00",
        created_at: "2022-10-20T14:37:09.037277+00:00",
      },
      {
        id: 109,
        event_id: 68,
        title: "NFT",
        content: "홀드 갯수",
        point: 1,
        type: "nft.hold",
        metadata: {
          url: "",
          count: 1,
          contract: "0xf4992592f0c5453af33bb42507058a079d2ee231",
          chain_id: 8217,
        },
        updated_at: "2022-10-20T14:37:09.037277+00:00",
        created_at: "2022-10-20T14:37:09.037277+00:00",
      },
      {
        id: 111,
        event_id: 68,
        title: "Youtube",
        content: "구독, 좋아요도 해주시면 감사욥",
        point: 3,
        type: "youtube.Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-20T14:37:09.037277+00:00",
        created_at: "2022-10-20T14:37:09.037277+00:00",
      },
      {
        id: 112,
        event_id: 68,
        title: "Twitter",
        content: "새 트윗 나왔어요!",
        point: 1,
        type: "twitter.Link",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-20T14:37:09.037277+00:00",
        created_at: "2022-10-20T14:37:09.037277+00:00",
      },
      {
        id: 113,
        event_id: 68,
        title: "Discord",
        content: "아직도 서버에 없으세요?!",
        point: 4,
        type: "discord.invite",
        metadata: {
          url: "http://metaoneer.club",
        },
        updated_at: "2022-10-20T14:37:09.037277+00:00",
        created_at: "2022-10-20T14:37:09.037277+00:00",
      },
    ],
  },
  {
    id: 91,
    project_id: 111,
    title: "테스트",
    content: "<p>테스트</p>",
    metadata: null,
    start_dt: "2022-11-05T12:00:00.583+00:00",
    end_dt: "2022-11-12T12:30:00+00:00",
    updated_at: "2022-11-05T13:54:16.153491+00:00",
    created_at: "2022-11-05T13:54:16.153491+00:00",
    items: [
      {
        id: 168,
        event_id: 91,
        title: "Discord",
        content: "테스트",
        point: 2,
        type: "Discord.invite",
        metadata: {
          url: "https://discord.gg/8q4UWvQ",
        },
        updated_at: "2022-11-05T13:54:16.227593+00:00",
        created_at: "2022-11-05T13:54:16.227593+00:00",
      },
    ],
  },
  {
    id: 92,
    project_id: 111,
    title: "wddw",
    content: "<p>dwdw</p>",
    metadata: null,
    start_dt: "2022-11-05T14:19:32.831+00:00",
    end_dt: "2022-11-05T14:19:32.831+00:00",
    updated_at: "2022-11-05T14:19:31.930808+00:00",
    created_at: "2022-11-05T14:19:31.930808+00:00",
    items: [
      {
        id: 169,
        event_id: 92,
        title: "Youtube",
        content: "wq",
        point: 1,
        type: "Youtube.Link",
        metadata: {
          url: "wq",
        },
        updated_at: "2022-11-05T14:19:31.994289+00:00",
        created_at: "2022-11-05T14:19:31.994289+00:00",
      },
    ],
  },
];

export const holderData: NFT & Holders = {
  name: "KlayWeatherGirls",
  symbol: "KWG",
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

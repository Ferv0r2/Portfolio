import { IPortfolio, IPortfolioDetail } from '@/types'

export const mockPortfolio: IPortfolio[] = [
  {
    id: 1,
    bannerImage:
      'https://3862006867-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4guwNwEyMT5O6xqKJ77D%2Fuploads%2FEmV0VMgE0jCl7772Jo26%2F%EC%84%B8%EA%B3%84%EA%B4%80.png?alt=media&token=5dcf30a5-1c7e-4844-99e9-47eefd791cad',
    title: 'Kepler-452b',
    description:
      '성장하는 우주 식물 NFT 콘텐츠를 운영했습니다. Klaytn 네트워크에서 ERC-20 및 ERC-1155 표준의 스마트 계약 개발 및 블록체인 상호작업 웹사이트를 개발하였습니다. 날씨 데이터를 활용하여 확률적으로 온체인 데이터를 업데이트하고 토큰을 소모하여 NFT를 업그레이드할 수 있습니다.',
    name: 'kepler',
  },
  {
    id: 2,
    bannerImage: 'media/banner/bims.png',
    title: 'BIMS',
    description:
      'Web3 이벤트 콘텐츠를 생성하는 마케팅 플랫폼입니다. 토큰 보유 수량 또는 SNS 팔로우 여부 그리고 디스코드 Role 등의 특정한 조건의 이벤트를 생성하고 링크를 공유하여 사용자의 참여를 유도할 수 있습니다. 참여한 사용자의 데이터를 수집하고 순위에 따른 차등 보상을 제공할 수 있습니다.',
    name: 'bims',
  },
  {
    id: 3,
    bannerImage: 'media/banner/metaoneer.png',
    title: 'OFPS',
    description:
      '클라우드 펀딩과 블록체인을 결합한 솔루션입니다. 생성한 클라우드 펀딩 프로젝트는 SBT 토큰으로 발행되고, 펀딩 자금은 스마트 계약에 귀속되어 생성자 및 투자자가 프로젝트 진행 여부에 따라 출금이 가능하도록 합니다. 각 마일스톤마다 투자자가 투표를 통해 프로젝트의 진행 여부를 관리하는 DAO 시스템을 결합하였습니다.',
    name: 'ofps',
  },
]

export const mockKeplerDetail: IPortfolioDetail = {
  id: 1,
  bannerImage:
    'https://3862006867-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F4guwNwEyMT5O6xqKJ77D%2Fuploads%2FEmV0VMgE0jCl7772Jo26%2F%EC%84%B8%EA%B3%84%EA%B4%80.png?alt=media&token=5dcf30a5-1c7e-4844-99e9-47eefd791cad',
  title: 'Kepler-452b',
  description:
    '성장하는 우주 식물 NFT 콘텐츠를 운영했습니다. Klaytn 네트워크에서 ERC-20 및 ERC-1155 표준의 스마트 계약 개발 및 블록체인 상호작업 웹사이트를 개발하였습니다. 날씨 데이터를 활용하여 확률적으로 온체인 데이터를 업데이트하고 토큰을 소모하여 NFT를 업그레이드할 수 있습니다.',
  website: {
    default: 'https://kepler.wontae.net',
    docs: 'https://docs.kepler.wontae.net',
    blog: 'https://medium.com/@Kepler-452b',
  },
}

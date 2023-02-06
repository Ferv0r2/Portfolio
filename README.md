# Portfolio

- Web3 관련하여 개발을 진행해 왔으며 해당 결과물들을 조회할 수 있도록 Wallet의 의존성을 제거하고 포트폴리오를 확인할 수 있도록 수정합니다.
- 현재는 Web3에 국한된 것이 아닌 React-Native 기술을 체득하여 Web/App을 불문하고 개발할 수 있는 프론트엔드 개발자를 목표합니다.

## BIMS ( Blockchain Integrated Management Service )

- 블록체인 내의 NFT를 통합관리할 수 있는 서비스입니다.
- 개별 NFT 홀더 수 조회, 이벤트 생성을 통한 마케팅 서비스 등이 지원되며 개별 페이지를 제공합니다.
- 현재 Wallet 분리작업 및 리팩토링 중에 있으며 업데이트 이후 `https://bims.wontae.site`에 업로드될 예정입니다.
- 기존의 Wallet을 이용한 실제 페이지는 `https://bims.metaoneer.club`에서 확인 가능합니다. ( 지원 체인 : 1001, 8217 )

## NFPS ( NFT Funding Payment Service )

- 기존 클라우드 펀딩 서비스에서 스마트 컨트랙트를 융합한 Web3 펀딩 페이지입니다.
- 펀딩을 생성하고 각 단계별로 DAO 시스템을 통해 투표하고 프로젝트 진행 여부를 투자자가 판단할 수 있게 합니다.
- BIMS 작업 이후 Wallet 분리작업이 진행될 예정이며 업데이트 이후 `https://nfps.wontae.site`에 업로드될 예정입니다.
- 기존 실제 페이지는 API가 중단되어 메인 및 탭 화면만 조회가 가능합니다. `http://nfps.metaoneer.club.s3-website.ap-northeast-2.amazonaws.com/` ( 지원 체인 : 56, 97 )

## Payment Module

- 스마트 컨트랙트를 다루지 않더라도 결제 시스템을 도입할 수 있는 모듈입니다.
- npm 홈페이지를 통해 확인할 수 있습니다. `https://www.npmjs.com/package/metaoneer-payment`
- 아래와 같은 방법으로 Quick Start가 가능합니다. ( 지원 체인 : 97 )

```
npx create-react-app my-app
cd my-app
npm install metaoneer-payment
npm start
```

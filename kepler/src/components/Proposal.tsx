import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { NFTBox } from "@/components/NFTBox";
import { web3, nftContract, govContract } from "@/blockchain";
import { accountState, balanceState } from "@/stores";
import { v1 } from "uuid";

interface IProposal {
  title: string;
  content: string;
  summary: string;
  blockNumber: number;
}

interface IVote {
  voteAgree: number;
  voteDegree: number;
}

export const Proposal = () => {
  const account = useRecoilValue(accountState);
  const balance = useRecoilValue(balanceState);
  const [isLoading, setLoading] = useState(true);
  const [status, setStatus] = useState(0);
  const [proposal, setProposal] = useState<IProposal>({
    title: "",
    content: "",
    summary: "",
    blockNumber: 0,
  });
  const [vote, setVote] = useState<IVote>({
    voteAgree: 0,
    voteDegree: 0,
  });
  const [blockNum, setBlockNumber] = useState("0");
  const [times, setTimer] = useState("0");
  const [tkURI, setTokenURIs] = useState([]);
  const router = useRouter();
  const proposal_id = parseInt(router.query.id as string) - 1;

  useEffect(() => {
    const setProposalInfo = async () => {
      const stat = await govContract.methods.status(proposal_id).call();
      const propose = await govContract.methods.proposals(proposal_id).call();

      setStatus(stat);
      setProposal(propose);
    };

    setProposalInfo();
  }, []);

  return (
    <div className="container">
      <div className="Proposal__before">
        <Link href="/governance">
          <div className="prev">
            <img src="media/icons/gov_back.png" />
            <p>목록으로 돌아가기</p>
          </div>
        </Link>
      </div>
      <div className="Proposal__contents">
        <div className="Proposal__title">{proposal.title}</div>
        <div className="Proposal__status">
          <div className="Proposal__period">
            <div className="blockNumber_label">
              <p>시작 블록넘버</p>
              <p>남은 블록넘버</p>
            </div>
            <div className="blockNumber">
              <p>{proposal.blockNumber}</p>
              <p>{blockNum}</p>
            </div>
          </div>
          <div className="Proposal__vote">
            <div className="vote__type">
              <ul>
                <li>찬성</li>
                <li>반대</li>
              </ul>
            </div>
            <div className="vote__count">
              <ul>
                <li>{vote.voteAgree}</li>
                <li>{vote.voteDegree}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="Proposal__info">
          블록이 밀리지 않았다는 가정 하에 {times} 만큼 남았습니다.
        </div>
        <div className="Proposal__proposer">
          <h2 className="sub_title">작성자</h2>
          <p>{account}</p>
        </div>
        <div className="Proposal__detail">
          <h2 className="sub_title">세부 내용</h2>
          <p>{proposal.content}</p>
        </div>
        <div className="Proposal__detail">
          <h2 className="sub_title">요약</h2>
          <p>{proposal.summary}</p>
        </div>
        <div className="Proposal__btn">
          <button className="btn-suggest" onClick={() => {}}>
            찬성하기
          </button>
          <button className="btn-suggest" onClick={() => {}}>
            반대하기
          </button>
        </div>
        <div className="Vote__nft">
          <h2 className="sub_title">MY NFT</h2>
          <div className="nft__count">
            <p>수량: {balance}개</p>
          </div>
          <div className="nft">
            {tkURI.length != 0 ? (
              tkURI.map((k, i) => <NFTBox key={v1()} tokenURI={tkURI[i]} />)
            ) : (
              <h2>NFT가 없습니다. 투표할 수 없습니다.</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;

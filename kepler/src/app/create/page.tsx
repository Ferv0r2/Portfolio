"use client";

import React, { useState } from "react";
import Link from "next/link";

import { useRecoilValue } from "recoil";
import { accountState } from "@/stores";

const Create = () => {
  const account = useRecoilValue(accountState);
  const [title, setTitle] = useState("");
  const [period, setPeriod] = useState("");
  const [content, setContent] = useState("");
  const [summary, setSummary] = useState("");

  const onEventTitleChange = async (e: any) => {
    setTitle(e.target.value);
  };

  const onEventPeriodChange = async (e: any) => {
    setPeriod(e.target.value);
  };

  const onEventContentChange = async (e: any) => {
    setContent(e.target.value);
  };

  const onEventSummaryChange = async (e: any) => {
    setSummary(e.target.value);
  };

  return (
    <div className="max-w-4xl m-auto pb-20">
      <div className="mt-10 p-10 m-auto rounded-md text-gray-800 text-center">
        <div className="relative p-4 mb-10 border-b-4 border-gray-800">
          <p className="font-serif text-5xl ">Create Proposal</p>
          <Link href="/">
            <p className="absolute top-0 right-0 text-lg py-1 px-2 font-bold rounded-md bg-gray-800 text-light cursor-pointer">
              Back
            </p>
          </Link>
        </div>
        <form>
          <div className="flex w-full m-auto rounded-md">
            <div className="w-7/12 p-4 m-auto">
              <p className="p-2 font-bold text-xl">Title</p>
              <input
                type="text"
                className="m-5 p-2 w-10/12 rounded-md"
                onChange={onEventTitleChange}
                placeholder="Sample Title"
              />
            </div>
            <div className="w-5/12 p-4 m-auto">
              <p className="p-2 font-bold text-xl">Period</p>
              <input
                type="text"
                className="m-5 p-2 w-10/12 rounded-md"
                onChange={onEventPeriodChange}
                placeholder="Sample BlockNumber"
              />
            </div>
          </div>
          <div className="w-11/12 p-4 m-auto">
            <p className="font-bold py-5 text-2xl">Contents</p>
            <textarea
              className="p-2 w-full min-h-md rounded-md"
              onChange={onEventContentChange}
              placeholder="Sample Contents"
            />
          </div>
          <div className="w-11/12 p-4 m-auto">
            <p className="font-bold py-5 text-2xl">Summary</p>
            <textarea
              className="p-2 w-full min-h-sm rounded-md"
              onChange={onEventSummaryChange}
              placeholder="Sample Summary"
            />
          </div>
          <div className="w-11/12 p-4 pb-16 m-auto">
            <p className="font-bold py-5 text-2xl">Proposer</p>
            <p className="font-base">{account.account}</p>
          </div>

          <div className="p-16 border-t-2">
            <button
              type="submit"
              className="w-48 m-auto text-2xl border-2 border-black rounded-md text-center font-bold px-4 py-3 cursor-pointer hover:bg-black hover:text-light"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;

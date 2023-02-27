import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

/* Component */
import { Button } from "components/asset/button";

const Custom404: NextPage = () => {
  const router = useRouter();
  return (
    <div className="min-h-screen grid place-items-center bg-slate-50">
      <div className="-mt-56 text-center">
        <div>
          <h2 className="font-bold text-8xl animate-pulse">4 0 4</h2>
          <h3 className="mt-8 text-xl text-gray-600">
            Oops. This page could not founded.
          </h3>
        </div>
        <Button
          onClick={() => router.push("/")}
          className="mt-12 w-40 mx-auto p-4 rounded-xl border bg-primary hover:bg-primary-active text-white font-bold"
        >
          <span>Return Home</span>
        </Button>
      </div>
    </div>
  );
};

export default Custom404;

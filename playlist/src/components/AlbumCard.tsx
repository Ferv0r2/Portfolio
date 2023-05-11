import React from "react";

export const AlbumCard = () => {
  return (
    <div className="group px-4 py-8 cursor-pointer transform hover:translate-x-2 hover:translate-y-2 hover:shadow-lg hover:shadow-orange-600 border border-slate-300 hover:border-orange-500 rounded-lg">
      <div className="w-64 h-64 mx-auto bg-slate-500 group-hover:bg-orange-300"></div>
      <div className="px-8 py-4">
        <h2 className="text-slate-300">Test</h2>
        <p className="pt-2 text-gray-400">#BlockChain #Platform</p>
      </div>
    </div>
  );
};

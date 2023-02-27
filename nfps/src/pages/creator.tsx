import React from "react";
import { NextPage } from "next";

/* Component */
import { AutoImage, shortAddress } from "utils";

const Creator: NextPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="max-w-[1200px] mx-auto text-gray-600 pt-12 pb-40">
        <div>
          <div className="px-4 md:px-10 py-4 md:py-7 border shadow bg-white rounded-xl">
            <div className="flex items-center justify-between">
              <p
                tabIndex={0}
                className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800"
              >
                Creator
              </p>
              <div className="py-3 px-4 flex items-center text-sm font-medium leading-nonecursor-pointer rounded">
                <p className="mr-2">Sort By:</p>
                <select className="rounded focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
                  <option className="text-sm text-indigo-800">Hotest</option>
                  <option className="text-sm text-indigo-800">
                    Product Count
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="mt-8 bg-white border shadow rounded-xl">
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Wallet</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">
                          Product Count
                        </div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-center">Sales</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {members.map((v, i) => (
                      <tr key={v.name}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="relative w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <AutoImage
                                className="rounded-full"
                                src={`/team/${v.name}.png`}
                                alt={v.name || "title"}
                              />
                            </div>
                            <div className="font-medium text-gray-800">
                              {v.name}
                            </div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{v.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-sm text-left">
                            {shortAddress(
                              "0x12A60872B053C009452cdb95178144c8fFbDeA4D"
                            )}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center font-medium text-indigo-600">
                            {(i * 7) % 4}
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-center font-medium text-indigo-600">
                            {((i * 7) % 4) * 11}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const members = [
  {
    name: "Ramp",
    email: "ksyi@metaoneer.club",
  },
  {
    name: "SungBae",
    email: "scpark@metaoneer.club",
  },
  {
    name: "Ursla",
    email: "jhlee@metaoneer.club",
  },
  {
    name: "Orbit",
    email: "wthwang@metaoneer.club",
  },
];

export default Creator;

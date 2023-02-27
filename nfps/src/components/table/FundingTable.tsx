import React, { FC, useState } from "react";
import { useQuery } from "react-query";

/* API */
import { CheckProfileAPI } from "api";

/* Component */
import { AutoImage, replaceBalance, shortAddress, zeroCount } from "utils";

interface Props {
  fundingList: any;
}

const FundingTable: FC<Props> = ({ fundingList }) => {
  const { isSuccess } = useQuery(["ProfileAry"], async () => {
    const promises: Promise<void>[] = [];
    const profiles: any = [];
    const ary = Object.keys(fundingList);
    const vals = Object.values(fundingList);
    for (let id = 0; id < ary.length; id++) {
      const promise = async (index: number) => {
        const profile = await CheckProfileAPI({
          address: ary[index],
          chain_id: 97,
        });
        const val = vals[index];
        profiles.push({
          ...profile,
          val,
        });
      };
      promises.push(promise(id));
    }

    await Promise.all(promises);

    setProfileData(profiles);
    return profiles;
  });
  const [profilesData, setProfileData] = useState([]);

  return (
    <div className="mt-2 dark:bg-dark-700 overflow-x-auto">
      <table className="table-auto w-full">
        <thead className="text-xs font-semibold uppercase text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-dark-600">
          <tr className="font-medium text-left">
            <th className="p-2 pr-4 whitespace-nowrap">
              <div>순위</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div>이름</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div>지갑주소</div>
            </th>
            <th className="p-2 whitespace-nowrap">
              <div>펀딩 금액</div>
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-gray-100 dark:divide-dark-300">
          {profilesData.length > 0 && isSuccess ? (
            profilesData.map((v: any, i) => (
              <tr key={v}>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-sm px-1">{i + 1}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="relative w-10 h-10 mr-2">
                      <AutoImage
                        className="rounded-full object-cover"
                        src={v.image_url || `/media/avatars/blank.svg`}
                        alt={"icon"}
                      />
                    </div>
                    <div className="font-medium dark:text-gray-300 text-gray-800">
                      {v.nickname || "이름없음"}
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-sm">{shortAddress(v.address)}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="font-medium text-indigo-600">
                    {zeroCount(replaceBalance(v.val))} BNB
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr className="bg-white dark:bg-dark  p-4 rounded flex items-center">
              <td className="flex items-center">
                <span className="w-1 h-5 mr-2 bg-dark rounded-sm" />
                <p>후원자가 없습니다...</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export { FundingTable };

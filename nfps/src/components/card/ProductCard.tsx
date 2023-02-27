import React, { FC } from "react";
import { useRouter } from "next/router";

/* Component */
import { Card } from "components/asset/card";
import { AutoImage, shortAddress, toDate, toHours, zeroCount } from "utils";

export interface Product {
  keyID?: number;
  name: string;
  title: string;
  content: string;
  imgURI: string;
  creator: string;
  progress: number;
  amount: number;
  expired: number;
}

const ProductCard: FC<Product> = ({
  keyID,
  name,
  title,
  content,
  imgURI,
  creator,
  progress,
  amount,
  expired,
}) => {
  const router = useRouter();

  return (
    <div>
      <div
        className="group cursor-pointer"
        onClick={() =>
          Number.isInteger(keyID) && router.push(`/funding/${keyID}`)
        }
      >
        <Card className="border dark:border-dark rounded-lg min-h-96 bg-white dark:bg-dark-500 dark:text-gray-300 group-hover:shadow-lg">
          <div className="relative h-56 rounded-t-lg overflow-hidden">
            <AutoImage
              src={imgURI}
              alt={title || "title"}
              className="object-cover transition group-hover:scale-110"
            />
          </div>
          <div className="mt-2 px-4 pb-4">
            <label className="text-gray-600 text-xs">
              <span>{name}</span>
              <span className="mx-1">|</span>
              <span>{shortAddress(creator)}</span>
            </label>
            <h2 className="mt-1 truncate">{title}</h2>
            <p className="mt-2 text-gray-500 text-xs break-words truncate-3-lines h-12">
              {content}
            </p>
            <div className="mt-3 mx-1 flex items-center justify-between text-sm">
              <div>
                <strong className="text-lg mr-2 text-indigo-600">
                  {progress}%
                </strong>
                <span>{amount} BUSD</span>
              </div>
              {expired <= 0 ? (
                <strong className="text-gray-500">펀딩 종료됨</strong>
              ) : toDate(expired) >= 1 ? (
                <strong className="text-gray-500">
                  {zeroCount(toDate(expired))}일 남음
                </strong>
              ) : (
                <strong className="text-gray-500">
                  {zeroCount(toHours(expired))}시간 남음
                </strong>
              )}
            </div>
            <div className="mt-1 flex items-center">
              <div className="w-full h-2 bg-blue-200 rounded-sm">
                <div
                  style={{
                    width: progress >= 100 ? "100%" : `${progress}%`,
                  }}
                  className="h-full text-center text-xs text-white bg-blue-600 rounded-sm"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export { ProductCard };

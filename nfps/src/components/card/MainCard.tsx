import React, { FC } from "react";
import { useRouter } from "next/router";

/* Component */
import { Button } from "components/asset/button";
import { Product } from "components/card/ProductCard";
import { AutoImage, toDate, toHours, zeroCount } from "utils";

const MainCard: FC<Product> = ({
  title,
  content,
  imgURI,
  progress,
  amount,
  expired,
}) => {
  const router = useRouter();
  return (
    <div className="group flex bg-dark text-center text-white h-56 border border-gray-300 dark:border-dark-300 rounded-2xl overflow-hidden">
      <div className="relative w-1/2 h-full">
        <AutoImage
          src={imgURI}
          alt={title || "title"}
          className="object-cover"
        />
      </div>
      <div className="w-1/2 p-6">
        <h2 className="font-bold text-base">{title}</h2>
        <p className="mt-2 text-gray-400 text-xs break-words h-12 truncate-3-lines">
          {content}
        </p>
        <div className="mt-3 mx-1 flex items-center justify-between text-xs">
          <div>
            <strong className="text-sm mr-2 text-danger-active">
              {progress} %
            </strong>
            <span>{amount} BUSD</span>
          </div>

          {expired <= 0 ? (
            <strong className="text-gray-300">펀딩 종료됨</strong>
          ) : toDate(expired) >= 1 ? (
            <strong className="text-gray-300">
              {zeroCount(toDate(expired))}일 남음
            </strong>
          ) : (
            <strong className="text-gray-300">
              {zeroCount(toHours(expired))}시간 남음
            </strong>
          )}
        </div>
        <div className="mt-1 flex items-center">
          <div className="w-full h-2 bg-danger-light rounded-sm">
            <div
              style={{
                width: progress >= 100 ? "100%" : `${progress}%`,
              }}
              className="h-full text-center text-xs text-white bg-danger rounded-sm"
            />
          </div>
        </div>
        <Button
          className="mt-3 w-full border dark:border-dark-300 text-sm group-hover:border-danger group-hover:text-danger"
          onClick={() => router.push(`/comming`)}
        >
          See More
        </Button>
      </div>
    </div>
  );
};

export { MainCard };

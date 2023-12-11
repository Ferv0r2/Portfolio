"use client";

import { ArticleSection } from "@/components/ArticleSection";
import { portfolioData } from "@/const";
import { MasterLayout } from "@/layout";

export default function Kepler() {
  return (
    <>
      <MasterLayout>
        <ArticleSection title="Portfolio" data={portfolioData} />
      </MasterLayout>
    </>
  );
}

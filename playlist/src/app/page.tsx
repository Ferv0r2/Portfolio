"use client";

import { IntroBanner, ArticleSection, Skills } from "@/components";
import { portfolioData } from "@/const";
import { MasterLayout } from "@/layout";

export default function Home() {
  return (
    <>
      <MasterLayout>
        <IntroBanner />
        <ArticleSection title="Portfolio" data={portfolioData} />
        <Skills />
      </MasterLayout>
    </>
  );
}

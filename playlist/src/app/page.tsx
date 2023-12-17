"use client";

import { IntroBanner, ArticleSection, Skills } from "@/components";
import { MasterLayout } from "@/layout";

export default function Home() {
  return (
    <>
      <MasterLayout>
        <IntroBanner />
        <ArticleSection />
        <Skills />
      </MasterLayout>
    </>
  );
}

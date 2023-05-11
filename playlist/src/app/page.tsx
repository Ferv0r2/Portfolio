"use client";

import { AlbumCard } from "@/components/AlbumCard";
import { MasterLayout } from "@/layout";
0;
export default function Home() {
  return (
    <MasterLayout>
      <main className="max-w-[1480px] mx-auto">
        <section className="pt-12">
          <h2 className="text-2xl text-white font-bold py-4">포트폴리오</h2>
          <div className="grid grid-cols-4 gap-8 items-center">
            <AlbumCard />
            <AlbumCard />
            <AlbumCard />
          </div>
        </section>
      </main>
    </MasterLayout>
  );
}

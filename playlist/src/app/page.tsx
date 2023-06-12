"use client";

import { AlbumCard } from "@/components/AlbumCard";
import { MasterLayout } from "@/layout";

export default function Home() {
  return (
    <MasterLayout>
      <main className="max-w-[1480px] mx-auto">
        <section className="pt-12">
          <h2 className="text-2xl text-white font-bold py-4">포트폴리오</h2>
          <div className="grid grid-cols-5 items-center">
            <AlbumCard
              img="kepler"
              title="Kepler-452b"
              keyword={["NFT", "Space", "Plant", "Environment"]}
            />
            <AlbumCard
              img="bims"
              title="BIMS"
              keyword={["Marketing", "Platform"]}
            />
            <AlbumCard
              img="nfps"
              title="NFPS"
              keyword={["Platform", "Cloud_Funding"]}
            />
          </div>
        </section>
      </main>
    </MasterLayout>
  );
}

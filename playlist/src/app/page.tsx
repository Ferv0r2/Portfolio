'use client'

import { MasterLayout } from '@/layout'

export default function Home() {
  return (
    <>
      <MasterLayout>
        <main className="w-full bg-bg_main/10">
          <div className="border-b-2">
            <div className="w-[1200px] mx-auto grid grid-cols-2 place-content-center">
              <div className="pt-16 pb-8">글 영역</div>
              <div className="relative flex justify-start mt-32">
                <img
                  className="drop-shadow-2xl"
                  src="/media/img/me.png"
                  alt="me"
                />
                <img
                  className="absolute w-16 h-16 rounded-3xl bg-[#222] p-1.5 -rotate-12"
                  src="/media/logos/react.svg"
                />
                <figure className="absolute top-4 right-0 w-16 h-16 p-3 pt-4 bg-white rounded-3xl rotate-12">
                  <img className="w-16 h-16" src="/media/logos/vue.svg" />
                </figure>
              </div>
            </div>
          </div>
        </main>
        <div className="h-96"></div>
      </MasterLayout>
    </>
  )
}

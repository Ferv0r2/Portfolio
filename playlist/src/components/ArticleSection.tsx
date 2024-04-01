import React from 'react'
import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'
import { ArticleCard } from '@/components/cards/ArticleCard'
import { portfolioData } from '@/const'

const delays = ['', 'delay-150', 'delay-300']

export const ArticleSection = () => {
  const [titleRef, isTitleView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section id="project" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div
              ref={titleRef}
              className={clsx(
                'space-y-4 text-center transition-all duration-1000',
                isTitleView
                  ? 'animate-fade-in-up'
                  : 'translate-y-20 opacity-20',
              )}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-500">
                Project
              </h1>
              <p className="max-w-[600px] text-black md:text-xl mx-auto">
                My features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.map((article, index) => (
                <div
                  ref={ref}
                  key={article.title}
                  className={clsx(
                    'transition-all duration-1000 cursor-pointer',
                    delays[index],
                    inView ? 'animate-fade-in-up' : 'translate-y-20 opacity-20',
                  )}
                >
                  <ArticleCard
                    img={article.img}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

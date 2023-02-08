import React from 'react'
import BottomLead from '../components/BottomLead'
import Hero from '../components/Hero'
import Step from '../components/Step'

const Home = ({ data }) => {
  return (


    <div>

      <Hero
        appType={data.hero.appType}
        tagLine={data.hero.tagLine}
        description={data.hero.description}
        mainActionText={data.hero.mainActionText}
        extraActionText={data.hero.extraActionText}
      />

      <div id="divider" className="rounded-full ring-2 ring-gray-200 lg:w-1/2 lg:mx-auto "></div>

      <div id="faq" className="pt-20 mb-20 text-3xl font-semibold text-center text-blue-800 lg:font-bold">How the app works </div>

      <Step
        title={data.step1.title}
        heading={data.step1.heading}
        description={data.step1.description}
        img={data.step1.img}
        alternate={data.step1.alternate}
      />
      <Step
        title={data.step2.title}
        heading={data.step2.heading}
        description={data.step2.description}
        img={data.step2.img}
        alternate={data.step2.alternate}
      />
      <Step
        title={data.step3.title}
        heading={data.step3.heading}
        description={data.step3.description}
        img={data.step3.img}
        alternate={data.step3.alternate}
      />

      <BottomLead
        actionText={data.bottomLead.actionText}
        description={data.bottomLead.description}
        mainActionText={data.bottomLead.mainActionText}
        extraActionText={data.bottomLead.extraActionText}
      />


    </div>
  )
}

export default Home
import React from 'react'
import Step from '../components/Step'

const Faq = ({ data }) => {
  return (
    <div>
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


    </div>
  )
}

export default Faq
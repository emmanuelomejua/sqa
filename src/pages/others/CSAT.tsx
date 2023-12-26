import './style.scss'
import { Inputs, Question, Result, Text } from '../../comps'
import { useState } from 'react'

const CSAT = () => {

  const [csat, setCsat] = useState<number>(0)
  return (
    <div className='styles'>
      <Text p='Please provide information about your the customers satisfaction' h4='Customers satisfaction calculator'/>
      <Question
        q1='How satisfied are you with the overall performance of the system?'
        q2='Are there many dissatifying features?'
        q3='Are you okay with the system responsiveness?'
      />
      <Inputs
        text1='Enter User Rating on Scale 1-5'
        text2='No of Times of System Usage'
        setResult={() => {}}
        setCodeChrun={() => {}}
        setCodeCoverage={() => {}}
        setCsat={setCsat}
        setMtbf={() => {}}
        setDefectDensity={() => {}}
        setCrashRate={() => {}}
      />

      <Result result={csat} msg={csat ? `The MTTD is ${csat}` : ''}/>
    </div>
  )
}

export default CSAT

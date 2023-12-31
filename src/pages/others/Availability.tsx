import './style.scss'
import { useState } from 'react'
import { Inputs, Question, Result, Text } from '../../comps'

const Availability = () => {

  const [result, setResult] = useState<number>(0);


  return (
    <div className='styles'>
      <Text 
        p='Please provide Information about System Availability' 
        h4='System availability checker'
      />

      <Question
        q1='How often do you encounter system downtime or unavailability?'
        q2='Do system unavailability encoutered impact workflow?'
        q3='Does 1 and 2 occur at specific times'
      />
      <Inputs
        text1='Total Time in a month'
        text2='Downtime Observed'
        setCodeChrun={() => {}}
        setResult={setResult}
        setCodeCoverage={() => {}}
        setCsat={() => {}}
        setMtbf={() => {}}
        setDefectDensity={() => {}}
        setCrashRate={() => {}}
      />
        {result &&
        <Result result={result} msg={result >= 90 ? `The System Availabilty is ${result}, meeting the required threshold` : 'This is not okay, pls optimize system availability'}/>}
    </div>
  )
}

export default Availability

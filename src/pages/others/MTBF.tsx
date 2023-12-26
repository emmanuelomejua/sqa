import './style.scss'
import { Inputs, Question, Result, Text } from '../../comps'
import { useState } from 'react'

const MTBF = () => {

  const [mtbf, setMtbf] = useState<number>(0)
  return (
    <div className='styles'>
      <Text p='Please provide information about the system Mean Time Between Failures' h4='MTBF CALCULATOR'/>
      <Question
        q1='How often do the system experience failure or disruption?'
        q2='Are there common causes of system failures?'
        q3='How quickly are issues resolved once detected?'
      />
      <Inputs
        text1='Total hours in a month'
        text2='No of Failures Observed'
        setResult={() => {}}
        setCodeChrun={() => {}}
        setCodeCoverage={() => {}}
        setCsat={() => {}}
        setMtbf={setMtbf}
        setDefectDensity={() => {}}
        setCrashRate={() => {}}
      />

    { mtbf &&
     <Result result={mtbf} msg={mtbf > 500 ? `The MTBF is ${mtbf}, meeting the required threshold` : 'This is not okay, pls improve system dependability to minimize failures'}/>}
    </div>
  )
}

export default MTBF

import './style.scss'
import { Inputs, Question, Result, Text } from '../../comps'
import { useState } from 'react'

const DefectDensity = () => {

  const [defectDensity, setDefectDensity] = useState<number>(0)
  return (
    <div className='styles'>
      <Text p='Please provide information about the system defects density' h4='DEFECT DENSITY CALCULATOR'/>
      <Question
        q1='How frequent do you identify defects during development?'
        q2='Are there specific modules or components with higher defects?'
        q3='How effective are the processes in place?'
      />
      <Inputs
        text1='Total Defects Idenified'
        text2='Total Lines of Code'
        setResult={() => {}}
        setCodeChrun={() => {}}
        setCodeCoverage={() => {}}
        setCsat={() => {}}
        setDefectDensity={setDefectDensity}
        setMtbf={() => {}}
        setCrashRate={() => {}}
      />

      <Result result={defectDensity} msg={defectDensity < 1 ? `The quailty defect is ${defectDensity}, meeting the required threshold` : 'This is not okay, pls optimize system dependability to minimize defects'}/>
    </div>
  )
}

export default DefectDensity

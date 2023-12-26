import './style.scss'
import { useState } from 'react'
import { Inputs, Question, Result, Text } from '../../comps'

const CodeChurn = () => {

  const [codeChrun, setCodeChrun] = useState<number>(0)


  // let message = ''
  return (
    <div className='styles'>
      <Text p='Please provide information about the code chrun' h4='Code chrun calculator'/>
      <Question
        q1='How frequent are code changes made in the system?'
        q2='Do many factors contribute to code changes?'
        q3='Are there specific modules or components with higher code chrun'
      />
      <Inputs
        text1='Total Lines of Code in the system'
        text2='Changes in a release'
        setResult={() => {}}
        setCodeChrun={setCodeChrun}
        setCodeCoverage={() => {}}
        setCsat={() => {}}
        setMtbf={() => {}}
        setDefectDensity={() => {}}
        setCrashRate={() => {}}
      />

     { codeChrun &&
     <Result result={codeChrun} msg={codeChrun >= 80 ? `The System Availabilty is ${codeChrun}, meeting the required threshold` : 'This is not okay, pls optimize code chrun'}/>
     }
    </div>
  )
}

export default CodeChurn

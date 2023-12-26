import './style.scss'
import { useState } from 'react'
import { Inputs, Question, Result, Text } from '../../comps'

const CodeChurn = () => {

  const [codeChrun, setCodeChrun] = useState<number>(0)
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

      <Result result={codeChrun} msg=''/>
    </div>
  )
}

export default CodeChurn

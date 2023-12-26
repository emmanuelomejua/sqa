import './style.scss'
import { Inputs, Question, Result, Text } from '../../comps'
import { useState } from 'react'

const CodeCoverage = () => {

  const [codeCoverage, setCodeCoverage] = useState(0)
  return (
    <div className='styles'>
      <Text p='Please provide information about systems code coverage' h4='Code coverage calculator'/>
      <Question
        q1='How effective are the unit tests conducted for code changes?'
        q2='Are there many components with low test coverage?'
        q3='Are numerous tools required to ensure comprehensive code coverage?'
      />
      <Inputs
        text1='LOC covered by unit tests'
        text2='Total Lines of Code'
        setResult={() => {}}
        setCodeChrun={() => {}}
        setCsat={() => {}}
        setCodeCoverage={setCodeCoverage}
      />

      <Result result={codeCoverage} msg=''/>
    </div>
  )
}

export default CodeCoverage

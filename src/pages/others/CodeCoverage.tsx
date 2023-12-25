import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const CodeCoverage = () => {
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
      />
    </div>
  )
}

export default CodeCoverage

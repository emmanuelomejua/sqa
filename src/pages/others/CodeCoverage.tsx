import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const CodeCoverage = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about systems code coverage' h4='Code coverage calculator'/>
      <Question
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default CodeCoverage

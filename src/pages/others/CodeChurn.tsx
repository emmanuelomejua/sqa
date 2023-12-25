import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const CodeChurn = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the code chrun' h4='Code chrun calculator'/>
      <Question
        q1='How frequent are code changes made in the system?'
        q2='Do many factors contribute to code changes?'
        q3='Are there specific modules or components with higher code chrun'
      />
      <Inputs/>
    </div>
  )
}

export default CodeChurn

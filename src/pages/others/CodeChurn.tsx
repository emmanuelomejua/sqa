import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const CodeChurn = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the code chrun' h4='Code chrun calculator'/>
      <Question
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default CodeChurn

import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const MTBF = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the system Mean Time Between Failures' h4='MTBF CALCULATOR'/>
      <Question
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default MTBF

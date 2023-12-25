import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const MTBF = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the system Mean Time Between Failures' h4='MTBF CALCULATOR'/>
      <Question
        q1='How often do the system experience failure or disruption?'
        q2='Are there common causes of system failures?'
        q3='How quickly are issues resolved once detected?'
      />
      <Inputs
        text1=''
        text2=''
      />
    </div>
  )
}

export default MTBF

import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const MTTD = () => {
  return (
    <div className='styles'>
    <Text p='Please provide information about the system Mean Time To Detect faults' h4='MTTD CALCULATOR'/>
    <Question
      q1=''
      q2=''
      q3=''
    />
    <Inputs/>
  </div>
  )
}

export default MTTD

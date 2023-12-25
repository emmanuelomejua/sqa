import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const MTTD = () => {
  return (
    <div className='styles'>
    <Text p='Please provide information about the system Mean Time To Detect faults' h4='MTTD CALCULATOR'/>
    <Question
      q1='How quickly are issues or defects identified?'
      q2='Are there automated processes for in place for early detection'
      q3='How effective is collaboration between development and testing team in identifying defects?'
    />
    <Inputs
      text1=''
      text2=''
    />
  </div>
  )
}

export default MTTD

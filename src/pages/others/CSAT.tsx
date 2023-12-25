import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const CSAT = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about your the customers satisfaction' h4='Customers satisfaction calculator'/>
      <Question
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default CSAT

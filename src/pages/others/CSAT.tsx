import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const CSAT = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about your the customers satisfaction' h4='Customers satisfaction calculator'/>
      <Question
        q1='How satisfied are you with the overall performance of the system?'
        q2='Are there many dissatifying features?'
        q3='Are you okay with the system responsiveness?'
      />
      <Inputs
        text1='Enter User Rating on Scale 1-5'
        text2='No of Times of System Usage'
      />
    </div>
  )
}

export default CSAT

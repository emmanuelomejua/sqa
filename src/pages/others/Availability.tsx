import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const Availability = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about system availability' h4='System availability checker'/>
      <Question
        q1='How often do you encounter system downtime or unavailability?'
        q2='Do system unavailability encoutered impact workflow?'
        q3='Does 1 and 2 occur at specific times'
      />
      <Inputs/>
    </div>
  )
}

export default Availability

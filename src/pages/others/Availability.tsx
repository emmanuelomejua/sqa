import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const Availability = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about system availability' h4='System availability checker'/>
      <Question
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default Availability

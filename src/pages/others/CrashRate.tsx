import './style.scss'
import { Inputs, Question, Text } from '../../comps'


const CrashRate: React.FC = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about your system crashes' h4='CRASH RATE INSPECTOR'/>
      <Question 
        q1='How often do you experience crashes or unexpected termination?'
        q2='How many scenerios do you think can lead to crashes?'
        q3=' How severe is the impact of crashes on your experience?'
      />
      <Inputs/>
    </div>
  )
}

export default CrashRate

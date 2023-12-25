import './style.scss'
import { Inputs, Question, Text } from '../../comps'


const CrashRate: React.FC = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about your system crashes' h4='CRASH RATE INSPECTOR'/>
      <Question 
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default CrashRate

import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const MTTR = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the system Mean Time To Resolve issues' h4='MTTR ALCULATOR'/>
      <Question
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default MTTR

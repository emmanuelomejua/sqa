import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const MTTR = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the system Mean Time To Resolve issues' h4='MTTR ALCULATOR'/>
      <Question
        q1='How quickly are issues resolved when they are detected?'
        q2='Are there specific challenges or bottleneck in the resolution process?'
        q3='Do downtime often occur during resolution?'
      />
      <Inputs/>
    </div>
  )
}

export default MTTR

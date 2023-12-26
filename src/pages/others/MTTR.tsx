import './style.scss'
import { Input1, Question, Result, Text } from '../../comps'

const MTTR = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the system Mean Time To Resolve issues' h4='MTTR CALCULATOR'/>
      <Question
        q1='How quickly are issues resolved when they are detected?'
        q2='Are there specific challenges or bottleneck in the resolution process?'
        q3='Do downtime often occur during resolution?'
      />
      <Input1
        text='Time Taken to Resolve Issues'
      />

      <Result result={0} msg=''/>
    </div>
  )
}

export default MTTR

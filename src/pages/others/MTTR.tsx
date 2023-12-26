import './style.scss'
import { Input1, Question, Result, Text } from '../../comps'
import { useState } from 'react'

const MTTR = () => {

  const [mttr, setMttr] = useState<number>(0)
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
        setMttr={setMttr}
        setMttd={() => {}}
      />

      <Result result={mttr} msg={mttr <= 2 ? `The MTTR is ${mttr}, meeting the required threshold` : 'This is not okay, pls improve on this!'}/>
    </div>
  )
}

export default MTTR

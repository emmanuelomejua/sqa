import './style.scss'
import { Input1, Question, Result, Text } from '../../comps'
import { useState } from 'react'

const MTTD = () => {

  const [mttd, setMttd] = useState<number>(0)
  return (
    <div className='styles'>
    <Text p='Please provide information about the system Mean Time To Detect faults' h4='MTTD CALCULATOR'/>
    <Question
      q1='How quickly are issues or defects identified?'
      q2='Are there automated processes for in place for early detection'
      q3='How effective is collaboration between development and testing team in identifying defects?'
    />
    <Input1
      text='Time from code change to issue detection'
      setMttd={setMttd}
      setMttr={() => {}}
    />

    <Result result={mttd} msg={mttd ? `The MTTD is ${mttd}` : ''}/>
  </div>
  )
}

export default MTTD

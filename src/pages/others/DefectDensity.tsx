import './style.scss'
import { Inputs, Question, Result, Text } from '../../comps'

const DefectDensity = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the system defects density' h4='DEFECT DENSITY CALCULATOR'/>
      <Question
        q1='How frequent do you identify defects during development?'
        q2='Are there specific modules or components with higher defects?'
        q3='How effective are the processes in place?'
      />
      <Inputs
        text1='Total Defects Idenified'
        text2='Total Lines of Code'
        setResult={() => {}}
        setCodeChrun={() => {}}
        setCodeCoverage={() => {}}
        setCsat={() => {}}
      />

      <Result result={0} msg=''/>
    </div>
  )
}

export default DefectDensity

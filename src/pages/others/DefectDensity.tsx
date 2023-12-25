import './style.scss'
import { Inputs, Question, Text } from '../../comps'

const DefectDensity = () => {
  return (
    <div className='styles'>
      <Text p='Please provide information about the system defects density' h4='DEFECT DENSITY CALCULATOR'/>
      <Question
        q1=''
        q2=''
        q3=''
      />
      <Inputs/>
    </div>
  )
}

export default DefectDensity

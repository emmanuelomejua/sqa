import './input.scss';
import { Botton } from '../index'
import { useState,  Dispatch, SetStateAction } from 'react';

interface inputProps {
  text1: string;
  text2: string;
  setResult: Dispatch<SetStateAction<number>>;
  setCodeChrun: Dispatch<SetStateAction<number>>;
  setCodeCoverage:Dispatch<SetStateAction<number>>;
  setCsat:Dispatch<SetStateAction<number>>;
  setCrashRate:Dispatch<SetStateAction<number>>;
  setDefectDensity:Dispatch<SetStateAction<number>>;
  setMtbf:Dispatch<SetStateAction<number>>;
}

const Inputs: React.FC<inputProps> = ({ text1, text2, setResult, setCodeChrun, setCodeCoverage, setCsat, setCrashRate, setDefectDensity, setMtbf }) => {
  
  const [firstInput, setFirstInput] = useState<number>(0)
  const [secondInput, setSecondInnput] = useState<number>(0)


  let availability = Math.round(((firstInput - secondInput)/secondInput) * 100);
  let codechrunValue = Math.round(firstInput/secondInput) * 100;
  let csatValue = (firstInput * secondInput)/5;
  let codeCoverageValue = (firstInput/secondInput) * 100;
  let crashRateValue = Math.round((firstInput/secondInput) * 100);
  let defectValue = Math.round(firstInput/secondInput);
  let mtbfValue = Math.round(firstInput/secondInput);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setResult(availability);
    setCodeChrun(codechrunValue);
    setCsat(csatValue);
    setCodeCoverage(codeCoverageValue);
    setCrashRate(crashRateValue)
    setDefectDensity(defectValue);
    setMtbf(mtbfValue)
  }




  return (  
    <form className='inputs'>
      <section>
        <label htmlFor="id1">{text1}:</label>
        <input 
          type="number" 
          name='id1' 
          min={0} 
          required 
          onChange={(e) => setFirstInput(parseInt(e.target.value, 10) || 0)}
          placeholder='Enter Valid Integer'/>
      </section>

      <section>
        <label htmlFor="id">{text2}:</label>
        <input 
          type="number" 
          name='id' 
          min={0} 
          required 
          onChange={(e) => setSecondInnput(parseInt(e.target.value, 10) || 0)}
          placeholder='Enter Valid Integer'/>
      </section>

      <Botton text='CALCULATE' onClick={handleClick}/>
    </form>
  )
}

export default Inputs

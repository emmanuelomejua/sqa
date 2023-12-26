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
}

const Inputs: React.FC<inputProps> = ({ text1, text2, setResult, setCodeChrun, setCodeCoverage, setCsat }) => {
  
  const [firstInput, setFirstInput] = useState<number>(0)
  const [secondInput, setSecondInnput] = useState<number>(0)


  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setResult(firstInput * secondInput);
    setCodeChrun(firstInput + secondInput);
    setCsat(firstInput + secondInput);
    setCodeCoverage(firstInput * secondInput);
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

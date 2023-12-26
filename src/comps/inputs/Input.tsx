import './input.scss';
import { Botton } from '../index'
import { useState } from 'react';

interface inputProps {
  text1: string;
  text2: string;
}

const Inputs:React.FC<inputProps> = ({text1, text2}) => {

  const [firstInput, setFirstInput] = useState(0)
  const [secondIput, setSecondInput] = useState(0)

  const handleClick = (e:any) => {
    e.preventDefault()
    console.log(firstInput * secondIput)
  }

  console.log(firstInput, secondIput)

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
          onChange={(e) => setSecondInput(parseInt(e.target.value, 10) || 0)}
          placeholder='Enter Valid Integer'/>
      </section>

      <Botton text='CALCULATE' onClick={handleClick}/>
    </form>
  )
}

export default Inputs

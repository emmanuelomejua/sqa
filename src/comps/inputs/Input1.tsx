import './input.scss'
import { Botton } from '../index'
import { useState, Dispatch, SetStateAction } from 'react'


interface iProp {
    text: string;
    setMttr: Dispatch<SetStateAction<number>>;
    setMttd: Dispatch<SetStateAction<number>>;
}


const Input1: React.FC<iProp> = ({text, setMttd, setMttr}) => {
  const [inputs, setInputs] = useState(0)

  const handleClick = (e:any) => {
    e.preventDefault()
    setMttr(inputs);
    setMttd(inputs)
  }

  return (
    <form className='input1'>
        <section>
            <label>{text}:</label>
            <input 
              type="number" 
              min={0} 
              required 
              onChange={(e) => setInputs(parseInt(e.target.value, 10) || 0)}
              placeholder='Enter Positive Integer'/>
        </section>
        <Botton text='SUBMIT' onClick={handleClick}/>
    </form>
  )
}

export default Input1

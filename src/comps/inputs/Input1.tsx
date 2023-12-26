import './input.scss'
import { Botton } from '../index'
import { useState } from 'react'


interface iProp {
    text: string
}


const Input1: React.FC<iProp> = ({text}) => {
  const [inputs, setInputs] = useState(0)

  const handleClick = (e:any) => {
    e.preventDefault()
    console.log(inputs)
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

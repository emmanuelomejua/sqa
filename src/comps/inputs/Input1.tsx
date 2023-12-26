import './input.scss'
import { Botton } from '../index'

interface iProp {
    text: string
}

const Input1: React.FC<iProp> = ({text}) => {
  return (
    <form className='input1'>
        <section>
            <label>{text}:</label>
            <input type="number" min={0} required placeholder='Enter Positive Integer'/>
        </section>
        <Botton text='SUBMIT' />
    </form>
  )
}

export default Input1

import './botton.scss'
import { FC, ButtonHTMLAttributes } from 'react'

type btn = {
    text: string
}& ButtonHTMLAttributes<HTMLButtonElement>

const Botton:FC<btn> = ({text, onClick}) => {
  return (
    <button className='botton'  onClick={onClick}>{text}</button>
  )
}

export default Botton

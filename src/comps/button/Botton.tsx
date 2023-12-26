import './botton.scss'
import { FC } from 'react'

type btn = {
    text: string
}

const Botton:FC<btn> = ({text}) => {
  return (
    <button className='botton'>{text}</button>
  )
}

export default Botton

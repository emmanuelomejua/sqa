import './text.scss'

interface TextProps {
  h4: string;
  p: string;
}


const Text: React.FC<TextProps> = ({ h4, p }) => {
  return (
    <div className='text'>
      <h4>{h4}</h4>
      <p>{p}</p>
    </div>
  )
}

export default Text

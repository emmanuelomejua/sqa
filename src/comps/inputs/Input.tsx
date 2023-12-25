import './input.scss'

interface inputProps {
  text1: string;
  text2: string;
}

const Inputs:React.FC<inputProps> = ({text1, text2}) => {
  return (
    <form className='inputs'>
      <section>
        <label htmlFor="id1">{text1}:</label>
        <input type="number" name='id1' min={0} placeholder='Enter Valid Integer'/>
      </section>

      <section>
        <label htmlFor="id">{text2}:</label>
        <input type="number" name='id' min={0} placeholder='Enter Valid Integer'/>
      </section>

      <button>SUBMIT</button>
    </form>
  )
}

export default Inputs

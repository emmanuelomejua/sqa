import './input.scss'

const Inputs = () => {
  return (
    <form className='inputs'>
      <section>
        <label htmlFor="id1">Total Session:</label>
        <input type="number" name='id1' min={0} placeholder='Enter Valid Integer'/>
      </section>

      <section>
        <label htmlFor="id">Crashes Observed:</label>
        <input type="number" name='id' min={0} placeholder='Enter Valid Integer'/>
      </section>

      <button>SUBMIT</button>
    </form>
  )
}

export default Inputs

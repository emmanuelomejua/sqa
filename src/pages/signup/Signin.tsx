import './signup.scss'
import { Link } from 'react-router-dom'


const Signin = () => {

    return (
    <main className='signup'>
      <section className="r-signup">
        <img src='/logo.webp' alt=''/>
        <h2>Welcome!</h2>
        <h5>SQA checker</h5>
        <span>Assuring software quality using performance metrics</span>
      </section>
      <section className="l-signup">
        <h4>Login!</h4>

        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>

        <button>Sign Up</button>

        <p>Do not have an account? <Link to='/signup' className='link'>Sign Up</Link> </p>
      </section>
    </main>
  )
}

export default Signin

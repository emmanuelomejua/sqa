import './navbar.scss'
import { Botton } from '../index'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <nav className='navbar'>
      <section className='navbar-cont'>
        <div className="navbar-left">
          <img src='/logo.webp' alt='logo'/>
        </div>

        <div className="navbar-right">
          <h2>SQA CHECKER</h2>
          <div>
            <Link to='/login' className='n-link'>
               <Botton text='LOGIN' />
            </Link>

            <Link to='/signup' className='n-link'>
               <Botton text='SIGN UP'/>
            </Link>
            <img src='/person.jpg' alt='person' height='50px' className='n-img'/>
            <span>Okojie Michael</span>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default navbar

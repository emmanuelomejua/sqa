import './navbar.scss'

const navbar = () => {
  return (
    <nav className='navbar'>
      <section className='navbar-cont'>
        <div className="navbar-left">
          <img src='/logo.webp' alt='logo'/>
        </div>

        <div className="navbar-right">
          <h2>SQA CHECKER</h2>
          <div className="">
            <img src='/person.jpg' alt='person' height='50px' className='n-img'/>
            <span>Okojie Michael</span>
          </div>
        </div>
      </section>
    </nav>
  )
}

export default navbar

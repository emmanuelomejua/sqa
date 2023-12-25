import { Blog } from '../../comps'
import './home.scss'

const Home = () => {
  return (
    <main className='home'>
     <h4>READ OUR BLOGS</h4>

     <section>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
      <Blog/>
     </section>

    </main>
  )
}

export default Home

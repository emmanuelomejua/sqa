import { FC } from 'react'
import { Blog } from '../../comps'
import './home.scss'
import { blogItems } from '../../data'

const Home:FC = () => {
  return (
    <main className='home'>
     <h4>READ OUR BLOGS</h4>

     <section>
      {
        blogItems.map((blog) => (
          <Blog key={blog.id} blog={blog}/>
        ))
      }
     </section>

    </main>
  )
}

export default Home

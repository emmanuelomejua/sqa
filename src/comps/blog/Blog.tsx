import './blog.scss'
import { ThumbUp } from '@mui/icons-material'


const Blog = () => {
    return (
      <article className='article'>
        <img src='/blog.png' alt=''/>

        <div className="article-down">
             <img src='/person.jpg' alt=''/>
             <p>Jimoh Rildwan</p>
             <span><ThumbUp/></span>
             <span>26k</span>
        </div>
        
      </article>
    )
  }
  
  export default Blog

import { FC } from 'react';
import './blog.scss'
import { ThumbUp } from '@mui/icons-material'


interface blogProps {
    blog: {
        id: string; 
        img: any;
        username: string;
        pic: string
    }
}

const Blog:FC<blogProps> = ({ blog }) => {
    return (
      <article className='article'>
        <img src={blog.img} alt=''/>

        <div className="article-down">
             <img src={blog.pic} alt=''/>
             <p>{blog.username}</p>
             <span><ThumbUp/></span>
             <span>26k</span>
        </div>
        
      </article>
    )
  }
  
  export default Blog

import './posts.css'
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div className="posts">
         <img src="images/post01.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">Asia</span>
             <span className="postCat">ETC</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
           사랑의 가슴에 눈에 있다. 대고, 별과 이상은 무엇을 아니다. 수 용감하고 얼음이 커다란 방황하였으며, 굳세게 같으며, 것이다. 사랑의 위하여 것은 관현악이며, 때문이다.
             </Link>
           </p>
           <span className="postDate">1 hour ago</span>         
         </div>
         <hr />
    </div>
  )
}

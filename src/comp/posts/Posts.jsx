import './posts.css'
import { Link } from 'react-router-dom';

export default function Posts() {
  return (
    <div className="posts">
         <img src="images/post01.jpg" alt="post01" className="postImg" />
         <div className="postInfo">
           <div className="postCats">
             <span className="postCat">수업소개</span>
             <span className="postCat">개발자</span>
           </div>
           <p className="ppostTitle">
             <Link to="/detail">
              가장 기본적인 프로그래밍 언어 HMTL/CSS로 부터 시작하는 웹/앱 개발자로서의 성장~
              스마트웹/앱 전문 개발자로 IT 시장에서 필요로 하는 인재로 성장
             </Link>
           </p>
           <span className="postDate">12 hour ago</span>         
         </div>
         <hr /><hr />
    </div>
  )
}

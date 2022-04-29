import './sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
         <div className="sidebarItem">
              <span className="sidebarTitle">
                  EZEN    
              </span>
              <img src="images/about01.jpg" alt="about" />
              <p>
              UI 컴포넌트 개발에 대한 새로운 관점으로 주목받고 있는 리액트(React)는
프론트엔드 개발자가 되기 위해 꼭 알아야 할 필수 요소로 자리 잡고 있습니다.
자바스크립트 프레임 워크의 혁신 리액트!
              </p>
          </div>

          <div className="sidebarItem">
              <span className="sidebarTitle">
                  CATEGORIES   
              </span>
              <ul className="sidebarList">
                <li className="sidebarListItem">HTML</li>
                <li className="sidebarListItem">CSS</li>
                <li className="sidebarListItem">JAVASCRIPT</li>
                <li className="sidebarListItem">React</li>
                <li className="sidebarListItem">Node.js</li>
                <li className="sidebarListItem">Next.js</li>
                <li className="sidebarListItem">Vue</li>
                <li className="sidebarListItem">Cordova</li>
              </ul>
          </div>


          <div className="sidebarItem">
              <span className="sidebarTitle">
                  TAG  
              </span>
              <div className="tagList">
                <span className="tagListItem">개발</span>
                <span className="tagListItem">웹개발</span>
                <span className="tagListItem">개발자</span>
                <span className="tagListItem">HTML</span>
                <span className="tagListItem">CSS</span>
                <span className="tagListItem">JAVASCRIPT</span>
                <span className="tagListItem">React</span>
                <span className="tagListItem">Node.js</span>
              </div>
          </div>

          <div className="sidebarItem">
              <span className="sidebarTitle">
                  FOLLOW ME 
              </span>
              <div className="socialList">
                  <i className="socialItem fa-brands fa-facebook-square"></i>
                  <i className="socialItem fa-brands fa-twitter-square"></i>
                  <i className="socialItem fa-brands fa-pinterest-square"></i>
                  <i className="socialItem fa-brands fa-instagram-square"></i>
              </div>
          </div>
    </div>
  )
}

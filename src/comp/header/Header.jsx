import './header.css';

export default function Header() {
  return (
    <div className="header">
         <div className="headerTitles">
             <span className="headerTitleSm"></span>
             <span className="headerTitleLg"></span>
         </div>
         <img className="headerImg" 
              src="images/banner.jpg" alt="banner" />
    </div>
  )
}

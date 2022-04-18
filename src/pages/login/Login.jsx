import './login.css';
import { Link } from 'react-router-dom';
import Sidebar from '../../comp/sidebar/Sidebar';

export default function Login() {
  return (
    <div className="login container">
            <form action="./" className="loginForm"  style={{
        backgroundImage: 'linear-gradient(rgba(255,255, 255, 0.5), rgba(255,255,255,0.5))', 
        backgroundImage: 'url(./images/tod.jpg)',
        backgroundSize: 'cover'
    }}>
        <h1 className="loginTitle">Login</h1>
                 <label>Email</label>
                 <input type="email" placeholder="이메일을 입력하세요." />           

                 <label>Password</label>
                 <input type="password" placeholder="비밀번호를 입력하세요." />     
                 <div className="loginBtnbox">
                      <button className="loginSubmit">로그인</button>
                      <hr />
                      <button className="loginRegisterButton">
                        <Link to="/Settings">회원가입</Link>
                      </button>
                 </div>
            </form>
            
        <Sidebar />
    </div>
  )
}

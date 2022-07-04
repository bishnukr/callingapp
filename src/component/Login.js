import { NavLink } from 'react-router-dom';
import '../App.css';
import email from '../image/email.jpg';
import pass from '../image/pass.png';
import profile from '../image/profile.png';

function Login() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             <img src={email} alt="email" className="email"/>
             <input type="text" placeholder="Enter Email Id" className="name"/>
           </div>
           <div className="second-input">
             <img src={pass} alt="pass" className="email"/>
             <input type="password" placeholder="Enter password" className="name"/>
           </div>
          <div className="login-button">
         <button><NavLink to='/home' className='to'>Login</NavLink></button>
          </div>

       </div>
       </div>
       

     </div>
    </div>
  );
}

export default Login;
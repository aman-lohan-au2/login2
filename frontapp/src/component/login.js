import React from 'react';
import {loginstudent} from '../api/index';

function Login(){

  const handleClick = async(e) => {
   e.preventDefault();
     const loginId = document.getElementById('loginId').value;
     const password = document.getElementById('password').value;
     const loginID= await loginstudent(loginId, password)

     alert(JSON.stringify(loginID))
     localStorage.setItem("userId", loginID.msg);
     window.location.href = '/'

  }

    const ele = 
(<>
    <div className="sidenav">
              <div className="login-main-text">
                 <h2>ApplicationLogin Page</h2>
                 <p>Login or register from here to access</p>
              </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form>
                  <div className="form-group">
                     <label>Login ID</label>
                     <input type="text" id="loginId" className="form-control" placeholder="User Name"/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" id="password" className="form-control" placeholder="Password"/>
                  </div>
                  <button type="submit" href="/Home" onClick={handleClick} className="btn btn-black">Login</button>
                  <a type="submit" href="/signup" className="btn btn-secondary">Register</a>
               </form>
            </div>
         </div>
      </div>
      </>
      );
      return ele;
}

export default Login
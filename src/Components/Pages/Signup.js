import '../../App.css'
import React from 'react'

function Signup() {
  return (
    <div classNameName="sign-up">
      <div className="form"  >
        <form className="login-form" action="/login" method="post" >
        <h2>WELCOME</h2>
        <input type="text" required placeholder="Emailaddress" />
        <input type="password" required placeholder="Password"  />
        <button>login</button>
        <p className="message">Not registered?  
        <a href="/">Create New Account..</a></p>
      </form>
    </div>
  </div>
  )
}

export default Signup
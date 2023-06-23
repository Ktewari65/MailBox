import React from "react"
import "./LoginForm.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () =>{
    const [login,setLogin] = useState(false)
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[signup,setSignUp] = useState(false)
    const navigate = useNavigate()


    const toggleHandler = (event) =>{
        event.preventDefault()
        setLogin( (login) => !login)
    }

    const emailHandler = (event) =>{
       event.preventDefault()
       setEmail(event.target.value)
    }

    const passwordHandler = (event) =>{
        event.preventDefault()
        setPassword(event.target.value)
    }

    const formHandler = (event) =>{
         event.preventDefault()
         const obj = {
            email:email,
           password:password
         }
         let url = ""
         if(login){
           url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyClKnHUU9IezqseksSfPcyZUSz59M5-9G8"
         }

         else{
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyClKnHUU9IezqseksSfPcyZUSz59M5-9G8"
         }
         fetch(url,{
              method:"POST",
              body :JSON.stringify(obj),
              returnSecureToken:true,
              header: {
                "Content-Type": "Application/json"
              }
         }).then((response)=>{
              response.json()
          .then((data)=>{
            setSignUp(true)
            
        }).catch((error)=>{
           alert(error)
        })
         }).then((data)=>{
            // navigate("/home")
         })

         
         
        
    }

return(
    <div className="container">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={formHandler}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input" placeholder="User name / Email"  onChange={emailHandler}/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input" placeholder="Password"  onChange={passwordHandler}/>
				</div>
				<button className="button login__submit">
					<span className="button__text">{login ?  "SignUp" : "Login"}</span>
                    <i className="button__icon fas fa-chevron-right"></i>
				</button>	
              
                <button className="button login__submit" onClick={toggleHandler} >
					<span className="button__text">{login ?  "Login" :"Create Account" }</span>
                    <i className="button__icon fas fa-chevron-right"></i>
				</button>			
                {signup ? "Signup successfull...." : ""}
			</form>
			<div className="social-login">
			<div className="social-icons">
				</div>
			</div>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
)
}

export default LoginForm
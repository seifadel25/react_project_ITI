import React,{useState,setState, Component,useNavigate} from 'react'
import  { Link  } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'

class SignUp extends Component{

    // // const [firstName, FName] = useState('');
    // // const [lastName, LName] = useState('');
    // // const [email, EMail1] = useState('');
    // // const [password,Pswd] = useState('');
    // // const [confirmPassword,CPswd] = useState('');

    // // const handleInputChange = (e) => {
    // //     const {id , value} = e.target;
    // //     if(id === "firstName"){
    // //         FName(value);
    // //     }
    // //     if(id === "lastName"){
    // //         LName(value);
    // //     }
    // //     if(id === "email"){
    // //         EMail1(value);
    // //     }
    // //     if(id === "password"){
    // //         Pswd(value);
    // //     }
    // //     if(id === "confirmPassword"){
    // //         CPswd(value);
    // //     }

    // // }
    // // const handleSubmit = () =>{
    // //     if (FName.value==null||FName.value==" "){
    // //         alert("Please Enter Your First Name!")
    // //     }
    // //     else if(LName.value==null || LName.value==" ")
    // //     {
    // //         alert("Please Enter Your Last Name!")
    // //     }
    // //     else if(Pswd.length<6)
    // //     {
    // //         alert("Please Enter A Password Longer Than 6 Charachters!")
    // //     }
    // //     else if (Pswd.value!=CPswd.value){
    // //         alert("Password And Confirm Password Don't match!")
    // //     }
    // //     console.log(firstName,lastName,email,password,confirmPassword);
    // //     let obj = {
    // //             firstName : firstName,
    // //             lastName:lastName,
    // //             email:email,
    // //             password:password,
    // //             confirmPassword:confirmPassword,
    // //         }       
    // // }

    // // return(
    // //     <div className='bg-dark main'>
    // //         <nav className="bg-dark navbar-dark navbar">
    // //             <div className="row col-12 d-flex justify-content-center text-white">
    // //                 <h3>Registration</h3>
    // //             </div>
    // //         </nav>
    // //         <div className="form">
    // //         <div className="form">
    // //         <div className="form-body">
    // //             <div className="username">
    // //                 <label className="form__label" htmlFor="firstName">First Name </label>
    // //                 <input className="form__input" type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
    // //             </div>
    // //             <div className="lastname">
    // //                 <label className="form__label" htmlFor="lastName">Last Name </label>
    // //                 <input  type="text" name="" id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
    // //             </div>
    // //             <div className="email">
    // //                 <label className="form__label" htmlFor="email">Email </label>
    // //                 <input  type="email" id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
    // //             </div>
    // //             <div className="password">
    // //                 <label className="form__label" htmlFor="password">Password </label>
    // //                 <input className="form__input" type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
    // //             </div>
    // //             <div className="confirm-password">
    // //                 <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
    // //                 <input className="form__input" type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
    // //             </div>
    // //         </div>
    // //         <div className="footer">
    // //             <button onClick={()=>handleSubmit()} type="submit" className="btn">Register</button>
    // //         </div>
    // //     </div>

    // //     </div>
    // //     </div>
    // )

    handleSub = (e)=>{
        e.preventDefault();//to prevent refresh on form submit
        return <redirect to='/Contact'  />
        // if(firstname.value==null||firstname==" "){
            
        // }
    }
render(){

    return(
        <div className='bg-dark Fmain'>
                <nav className="bg-dark navbar-dark navbar">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <h3>Registration</h3>
                </div>
                </nav>
                <form className="form bg-dark" onSubmit={this.handleSub}>
          <div className="form-body ">
              <div className="username">
                  <label className="form__label " htmlFor="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
              </div>
              <div className="password">
                  <label className="form__label" htmlFor="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
              </div>
              <div className="confirm-password">
                  <label className="form__label" htmlFor="confirmPassword">Confirm Password </label>
                  <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
              </div>
          </div>
          <div className="footer">
          <Link to={'../Contact'} activeClassName="current">{SignUp}<button type="submit" className="btn">Register</button>
</Link>
          </div>
      </form>      
        </div>
    )
}
   
}

export default SignUp
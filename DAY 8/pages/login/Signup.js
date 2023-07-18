import React,{useState} from 'react'
import './Signup.css'
import ReactDOM  from 'react-dom';
import { useNavigate,Link} from "react-router-dom";

function Signup() {
    const [formValues,setFormValues]=useState("");
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(event)=>{
        const{id,value}=event.target;
        setFormValues({...formValues,[id]:value});
        console.log(formValues);
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        setFormErrors(validate(formValues));
        if(formErrors.check === true){
            setIsSubmit(true);
        }
        else{
            setIsSubmit(false);
        }
    }
    
    const validate=(values)=>{
        const errors={};
        const reg=new RegExp("[0-9]")
        const preg=new RegExp("[A-Z][A-za-z0-9$_]+") 
        errors.check= true;
        if(!values.username)
        errors.username="Please Fill the column";
        else if(values.username.length<5){
            errors.check= false;
            errors.username="Username must have minimum 5 characters";
        }
        else if(reg.test(values.username)){
            errors.username="Username must contain only alphabets";
        }
        else if(preg.test(values.mobileno)){
            errors.check=false;
            errors.mobileno="Mobileno must contain only numbers";
        }
        if(!values.email){
        errors.check= false;
        errors.email="Please Fill the email";
    }
    
    if(!values.password){
        errors.check= false;
        errors.password="Please Fill the password";
    }
    else if(values.password.length<5){
        errors.check= false;
        errors.password="Password is Weak";
    }
        return errors;
    }
    // const navigate=useNavigate()
    // navigate('/Home');
const renderSignup = 
(
    <div className='form'>
        <form onSubmit={handleSubmit}> 
                <div className='input-container1'>
                    <label>Username</label>
                    <input type="text" id='username' value={formValues.username}
                        onChange={handleChange} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.username}</p>

                <div className='input-container1'>
                    <label>Email</label>
                    <input type="email" id='email' value={formValues.email}
                        onChange={handleChange} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.email}</p>

                <div className='input-container1'>
                    <label>Mobile Number</label>
                    <input type="mobileno" id='mobileno' value={formValues.mobileno}
                        onChange={handleChange} required/>
                </div>
                <div className='input-container1'>
                    <label>Password</label>
                    <input type="password" id='password' value={formValues.password}
                        onChange={handleChange} required/>
                </div>
                <p  style={{color:"red", fontWeight: "bold"}}>{formErrors.password}</p>

                <div className='button-container'>
                  <input type='submit'/>
                </div>
                <div className="register">
            <Link to="/">Already have an Account</Link>
        </div>
        </form>
    </div>
  );
  return(
    <div className="login">
    <div className="login-form">  <center>
                <div className='titlereg'>REGISTER</div></center>  
                {isSubmit ? <Link to="/login"></Link> : renderSignup}
    </div>
  </div>
  );
}

export default Signup;
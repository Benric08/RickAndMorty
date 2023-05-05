import React from 'react'
import { useState } from 'react'
import validation from '../utils/validation';

export default function Form(props) {
const [inputs,setInputs] = useState({
    email:"",
    password:""
});
const [errors,setErrors] = useState({});    
const handleChange =(event)=>{
    const {name,value} = event.target;
    setInputs({...inputs,[name]:value});
    setErrors(validation({...inputs,[name]:value}));
}
const handleSubmit =(event)=>{
    event.preventDefault();
    if (Object.values(errors).length===0) {
        props.login(inputs);
    }else{

        window.alert("Debe Completar todos los campos"+Object.values(errors).length);
    }
        
}    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" name='email' onChange={handleChange} value={inputs.email} className={inputs.email && "warning"}/>
        {errors.email && errors.email.map(err=><span>{err}</span>)}
        <br />
        <label htmlFor="password">Password:</label>
        <input type="text" name='password' onChange={handleChange} value={inputs.password} className={inputs.password && "warning"}/>
        {errors.password && errors.password.map(err=><span>{err}</span>)}
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

import React from 'react'
import SignupForm from './SignupForm';
import { useNavigate } from 'react-router';

function Signup() {
  const navigate = useNavigate();

  function onSubmit(data){
    console.log(data);

    fetch('http://localhost:8080/signup', {
      method : "POST",
      headers : {
        "content-type" : "application/json"},
      body : JSON.stringify(data)
      }).then((res)=> res.json())
      .then((data)=>{
        console.log(data);
        navigate('/login', {replace: true})
      }).catch((err)=>{
        console.log(err);
      });
  }

  return (
    <div>
      <SignupForm onSubmit={onSubmit}/>
    </div>
  )
}


export default Signup

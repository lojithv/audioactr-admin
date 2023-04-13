import React from 'react'
import localForage from "localforage";
import { useNavigate } from 'react-router-dom';

type Props = {}

const SignIn = (props: Props) => {
  const navigate = useNavigate();

  const handleLogin = () =>{
    localForage.setItem('token', true, function(result) {
      console.log(result);
      navigate("/dashboard");
  });
  }

  return (
    <div>SignIn
      <div onClick={handleLogin}>Login</div>
    </div>
  )
}

export default SignIn
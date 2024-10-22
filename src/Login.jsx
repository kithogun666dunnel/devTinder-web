import  { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [emailId, setEmailId] = useState("pankaj@yahoo.com");
  const [password, setPassword] = useState("12324@asda5SDF5");


  const handleLogin = async (event) => {
    event.preventDefault(); // Prevents default form submission behavior
    try {
      const res = await axios.post('https://localhost:7777/login', {
        emailId,
        password
      });
      console.log(res.data); // Handle the response here
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="bg-base-200 min-h-screen hero">
      <div className="lg:flex-row-reverse flex-col hero-content">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-5xl">Login now!</h1>
        </div>
        <div className="bg-base-100 shadow-2xl w-full max-w-sm card shrink-0">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} placeholder="email" className="input-bordered input" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" className="input-bordered input" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}> Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;
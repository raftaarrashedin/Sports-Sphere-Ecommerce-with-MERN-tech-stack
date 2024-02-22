import { useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout/Layout";


const Login = ()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
        const res = await axios.post("http://localhost:8080/api/v1/user/login", {
         
          email,
          password,
          
        });
  
        if (res.data.success) {
          toast.success("Login successfully!");
          navigate("/");
        } else {
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
  
  }

    return(
        <>


<Layout title={"Login - Sport Sphere App"}>
        <div className="register">
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            

            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </Layout>

        </>
    )
}

export default Login;
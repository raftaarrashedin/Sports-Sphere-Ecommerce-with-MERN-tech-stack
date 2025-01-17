import { useState } from "react";
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import Layout from "../../components/Layout/Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/v1/user/register", {
        name,
        email,
        password,
        phone,
        address,
        answer
      });

      if (res.data.success) {
        toast.success("Register successfully!");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <Layout title={"Register - Sport Sphere App"}>
        <div className="register">
          <form onSubmit={handleSubmit}>
          <h1>Register Form</h1>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your Name"
                required
                value = {name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your Phone No"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter your Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="answer"
                placeholder="What is your birth place"
                required
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </div>


            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
};

export default Register;

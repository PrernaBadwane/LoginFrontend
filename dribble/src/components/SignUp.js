import React, { useState ,useEffect } from "react";
import web3D from "../images/website3drender.png";
import logo from "../images/logo.png";
import erroricon from '../images/error.svg'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const onClickSignUpHandler = () => navigate(`/createprofile`);

  

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const handleUsernameInputChange = (event) => {
    setUsername(event.target.value);
    // Check if username exists (you need to implement this logic)
    // For example, you might check against an array of existing usernames
    setUsernameExists(existingUsernames.includes(event.target.value));
  };

  useEffect(() => {
    if (usernameExists) {
      setError("Username is already taken");
    } else {
      setError("");
    }
  }, [usernameExists]);
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");

  const [corretFormatPassword, setCorretFormatPassword] = useState(false);
  const handlePassInputChange = (event) => {
    setPassword(event.target.value);
    // Check if username exists (you need to implement this logic)
    // For example, you might check against an array of existing usernames
    setCorretFormatPassword(password.length<6);
  };

  useEffect(() => {
    if (corretFormatPassword) {
      setError("Give strong Password");
    } else {
      setError("");
    }
  }, [corretFormatPassword]);
 

  return (
    <div className="m-0 p-0 lg:flex lg:justify-items-start md:h-screen">
      <div className="bg-amber-200 p-11 w-full  lg:w-[40%] ">
        <div className="">
          <img className="h-16 w-16 md:h-24 md:w-24" src={logo} />
        </div>
        <div className="my-[2%]">
          <p className="text-amber-800  text-3xl font-bold  ">
            Discover the world's top
          </p>
          <p className="text-amber-800 text-3xl  font-bold   ">
            Designers & Creatives
          </p>
        </div>
        <div className="my-8 mx-0 w-full flex justify-center ">
          <img className="h-[100%] w-[100%]" src={web3D} />
        </div>
      </div>
      <div className="p-8 m-0 lg:w-[60%]">
        <div className=" text-xs flex justify-end my-2">
          Already a member?
          <span>
            <a href="#" className=" text-blue-700 ">
              &nbsp; Sign In
            </a>
          </span>
        </div>
        <div className="my-[5%] md:px-[20%] sm:px-[10%]   block justify-start">
          <div>
            <h1 className=" text-2xl font-extrabold text-center sm:text-start my-[5%]">
              Sign Up to Dribbble
            </h1>
          </div>
          <div className="px-3">
            {error && (
              <li className="text-red-400 font-semibold text-md "> {error}</li>
            )}
          </div>
          <div className=" flex justify-center sm:justify-start  ">
            <form className="my-[5%]">
              <div className="sm:grid gap-[10%] grid-cols-2 w-[100%]">
                <div>
                  <label className=" block font-bold" htmlFor="name">
                    <img></img>
                    Name
                  </label>
                  <input
                    className=" block bg-gray-100  h-8 w-[100%] rounded-md p-2 mb-6 mt-1 focus:outline-none  "
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="John"
                    onChange={(e) => setName(e.target.value)}
                    
                    required
                  ></input>
                </div>
                <div>
                  <div className="flex justify-start">
                    <img className={`h-4 w-4 mt-1 mr-1 ${
                      usernameExists ? "block" : "hidden"
                    }`} src={erroricon}></img>
                    <label className={` block font-bold `} htmlFor="username">
                      Username
                    </label>
                  </div>
                  <input
                    className={` block ${
                      usernameExists ? " bg-red-100 text-red-500 placeholder:text-red-500" : "bg-gray-100" 
                    }  h-8 w-[100%] rounded-md p-2 mb-6 mt-1 focus:outline-none `}
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  ></input>
                </div>
              </div>
              <label className=" block font-bold" htmlFor="useremail">
                Email
              </label>
              <input
                className=" block bg-gray-100  h-8 w-[100%] rounded-md p-2 mb-6 mt-1 focus:outline-none "
                type="email"
                id="useremail"
                name="useremail"
                value={email}
                placeholder="email@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <div className="flex justify-start">
                    <img className={`h-4 w-4 mt-1 mr-1 ${
                      corretFormatPassword ? "block" : "hidden"
                    }`} src={erroricon}></img>
                    <label className={` block font-bold `} htmlFor="username">
                      Password
                    </label>
                  </div>
              <input
                className= {`block  bg-gray-100 h-8 w-[100%] rounded-md p-2 mb-6 mt-1 focus:outline-none ${corretFormatPassword? " bg-red-100 text-red-500 placeholder:text-red-500" : "bg-gray-100" 
              } `}
                type="password"
                id="pass"
                name="pass"
                value={password}
                placeholder="6+ characters"
                onChange={handlePassInputChange}
                required
              ></input>
              <div className="flex p-1">
                <label className="mr-1 h-4 w-4">
                  <input
                    type="checkbox"
                    id="coding"
                    name="interest"
                    value="coding"
                    required
                  />
                </label>
                <p>
                  Creating an account means your'er okay with our
                  <span className=" text-violet-900">Terms of Service</span>.
                  <span className=" text-violet-900">Privacy Policy</span> and
                  our default
                  <span className=" text-violet-900">
                    Notification Settings
                  </span>
                  .
                </p>
              </div>
              <div className="flex justify-start mt-4">
                <button className="bg-pink-600 h-10 w-44 rounded-lg text-white font-bold drop-shadow-lg  shadow-stone-700 "
                onClick={onClickSignUpHandler}>
              
                  SignUp
                </button>
              </div>
            </form>
          </div>
          <div className=" w-[70%]">
            <p className=" text-xs ">
              This site is protected by reCAPTCHA and the Google
              <span className=" text-violet-900">Privacy Policy</span> and
              <span className=" text-violet-900">Terms of Service</span> apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

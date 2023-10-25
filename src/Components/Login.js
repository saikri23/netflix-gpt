import React, { useRef, useState } from "react";
import Header from "./Header";
import Validate from "../Utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg,setErrorMsg]=useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmit=()=>{
    const msg=Validate(email.current.value,password.current.value);
    setErrorMsg(msg);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="brightness-50 z-0"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="Login BG"
        />
      </div>

      <form
        action=""
        onSubmit={(e)=>e.preventDefault(e)}
        className=" left-0 right-0 my-36 mx-auto w-3/12 absolute p-12 text-white bg-black rounded-lg bg-opacity-80"
      >
        <h1 className="text-xl font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email or Username"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />
        <p className="text-red-700">{errorMsg}</p>
        <button type="submit" onClick={handleSubmit} className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <h1 onClick={toggleSignInForm} className="cursor-pointer">
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Existing User? Sign In now."}
        </h1>
      </form>
    </div>
  );
};

export default Login;

import { addAccessToken, getAccessToken } from "../utils/local-storage";
import axios from "../config/axios";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";

export default function LoginFeat() {
  const [isError, setIsError] =useState(null)
  const [input, setInput] = useState({
    emailOrMobile: "",
    password: "",
  });

  
  const handleChangeInput = (e) => {
    console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const { login } = useAuth()
  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err)=> {
      if(err.message == "Request failed with status code 400")
      {

        setIsError("Your e-mail or number does not match ")
      }
      if(err.message == "Request failed with status code 500")
      {

        setIsError("This field can't be empty")
      }
  
    })
    // toas
    const handleLogin = async (registerInputObject) => {
      const res = await axios.post("/auth/login", registerInputObject).catch((err)=>console.log(err))
      addAccessToken(res.data.accessToken);
    };
    
  };
  return (
    <form
      className="flex justify-center items-center flex-col gap-5 h-screen  p-10 rounded-lg bg-yellow-100"
      onSubmit={handleSubmitForm}
    >
      
      <input
        type="text"
        placeholder="e-mail or phone number "
        className="w-auto border rounded-lg outline-none px-5 py-1.5 text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={input.emailOrMobile}
        name="emailOrMobile"
        onChange={handleChangeInput}
      />
      <div className="text-red-500">{isError ? isError : ""}</div>
      <input
        type="password"

        placeholder="password"
        className="w-auto border rounded-lg outline-none px-5 py-1.5 text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={input.password}
        name="password"
        onChange={handleChangeInput}
      />
        <div className="text-red-500">{isError ? isError : ""}</div>
      <button className="bg-green-500 p-3 rounded-lg font-semibold text-white">SUBMIT</button>
    </form>
  );
}

import { createContext, useEffect, useState } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken, removeAccessToken } from "../utils/local-storage";
export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);
  const [input, setInput] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productItem,setProductItem] = useState([])
const [order, setOrder] =useState(null)
  
  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
  };
  
  
  
  
  const register = async (registerInputObject) => {
    console.log("use Auth", registerInputObject)
    const res = await axios.post('/auth/register', registerInputObject)
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user);
    
    
  }
  const logout = () => {
    removeAccessToken()
    setAuthUser(null)
  }
  
  useEffect(() => {
    axios
    .get("/admin/readProduct")
    .then((res) => {
      console.log(res.data, "at context")
      setProductItem(res.data); 
    //  return console.log(res)
    })
    
  }, []);
  // useEffect(() => {
  //   axios.post("user/readOrder", authUser).then((res) => {
  //     // setOrder([res.data])
  
  //     setOrder(res.data);
  //   });
  // }, []);
  useEffect(() => {


    if (getAccessToken) {
      axios.get("/auth/me").then((res) => {
        setAuthUser(res.data.user);
      });
    } else {
      setLoading(false);
    }
    
  }, []);

  return (
    <AuthContext.Provider value={{ login, authUser, input, loading , register,productItem ,logout,order}}>
      {children}
    </AuthContext.Provider>
  );
}

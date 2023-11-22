import { useState, useEffect } from "react";
import { addAccessToken, getAccessToken } from "../utils/local-storage";
import axios from "../config/axios";

export default function ReadUserFeat() {
    const [input, setInput] = useState([]);

    useEffect(() => {
      axios.get("/admin/readUser").then((res) => {
        setInput(res.data.message);
      });
    }, []);

  return (
        <>
      <div className="text-gray-900 ml-10 text-5xl flex font-extrabold justify-start animate- ">
        All users
      </div>
    <div className="flex flex-col overflow-y-scroll h-96 w-2/4 bg-gray-400 rounded-md p-10 m-10">
      {input.map((data, i) => {
        return (
          <div
            className="bg-gray-200 p-1 rounded-md max-w-2xl text-black flex justify-start flex-col text-xl m-5 hover:translate-x-5 hover:text- hover:font-extrabold"
            key={i}
          >
            
           <div>
           USER ID## {data.id}
           </div>
           <div>
           FIRSTNAME: {data.firstName} LASTNAME: {data.lastName}
           </div>
           <div>
           E-MAIL: {data.email} PHONE NUMBER: {data.mobile}
           </div>
          </div>
        );
      })}
    </div>
    </>
  )
}
// USER ID {data.id} FIRSTNAME {data.firstName} LASTNAME {data.lastName} E-MAIL: {data.email}
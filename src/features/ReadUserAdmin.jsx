import axios from "axios";
import { useEffect, useState } from "react";

export default function ReadUserAdmin() {



    const [adminReadUser, setAdminReadUser] =useState(null)
    useEffect(() => {
        axios.get("/admin/readUserAdmin").then((res) => {
            setAdminReadUser(res.data);
        });
      }, []);
  return (
    <>
          <div className="text-gray-900 ml- text-5xl flex font-extrabold justify-start  ">
        All Users
      </div>
    <div className="m-10 overflow-y-scroll h-72 w-96 bg-gray-200">
        <table className="border-4  ">
            <thead className="border-4  ">
                <tr>

                <th className="border-4 bg-yellow-500">ID</th>
                <th className="border-4 bg-yellow-500">First name</th>
                <th className="border-4 bg-yellow-500">Last name</th>
                <th className="border-4 bg-yellow-500">Mobile</th>
                <th className="border-4 bg-yellow-500">Is admin ?</th>
                </tr>
            </thead>
            {adminReadUser?.map((data,i)=>{

                return(

            <tbody key={i}>
                <tr>
                    <td className="border-4">{data.id}</td>
                    <td className="border-4">{data.firstName}</td>
                    <td className="border-4">{data.lastName}</td>
                    <td className="border-4">{data.mobile ? data.mobile : "---"}</td>
                    <td className="border-4">{data.role? "YES": "NO"}</td>
                </tr>
            </tbody>

                )
            })}
        </table>
    </div>
    </>
  )
}

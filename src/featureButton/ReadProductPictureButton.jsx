import { useState } from "react";

export default function ReadProductPictureButton({ data ,onClose}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
    onClick={()=>setIsOpen(!isOpen)}
      className="cursor-pointer
      
     p-1 rounded-md max-w-2xl  text-black flex justify-start text-3xl m-
     "
    >click
   {isOpen && (
        <>
          <div className="fixed inset-0 bg-white opacity-10 z-20"></div>
          <div className="fixed inset-0 z-30 mb- w-full ">
            <div className="flex justify-center items-center min-h-full p-4">
              <div
                className="rounded-lg w- bg-white shadow-2xl border h-96"
                
              >
                <div className="flex justify-between p-4 text-xl border-b bg-yellow-500 ">
                  <div className="invisible">X</div>
                  <div className="font-bold ">{data.name}</div>
                  <div
                    className=" cursor-pointer text-black"
                    onClick={()=>setIsOpen(!isOpen)}
                  >
                    X
                  </div>
                </div>
                <div className="flex ">
                  <img
                    className=" h-72 w-72    rounded-xl p-5 "
                    src={data.productPicture}
                    alt=""
                  ></img>

                  <span className=" bg-red-2 mt-5 w-72 text-sm   ">
                    {data.productInfo}
                
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
   
      
    </div>
  );
}
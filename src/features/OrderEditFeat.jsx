import axios from "../config/axios";
import { useState } from "react";


export default function OrderEditFeat({ targetId, onClose }) {
  let oldTargetId = targetId;
  const { id } = oldTargetId;
  const [input, setInput] = useState({
    id: "",
    status: "",
    payment: "",
    note: "",
    scrapPicture:""
  });

  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [newPayment, setPayment] = useState({
    newPayment: "",
  });

  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [newStatus, setStatus] = useState({
    newStatus: "",
  });

  const [isOpenNote, setIsOpenNote] = useState(false);
  const [newNote, setNewNote] = useState({
    newNote: "",
  });
  const [isOpenPic, setIsOpenPic] = useState(false);
  const [newPic, setNewPic] = useState({
    
  });

  const handleChangeInput = (e) => {
    console.log(e.target);

    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const editOrder = async () => {
      await axios.put("/admin/updateSingleOrder", input);
    };
    editOrder(input);
  };
let picc = newPic[0]
  console.log("success !!", input);
  return (
    <div className="">
      <div
        onClick={() => {
          console.log(input);
          // console.log("newpic", newPic.name);
          console.log("newpic", picc);
          // console.log("newpic", newPayment.newPayment);
          // console.log("newpic", newPayment);
          // console.log(e.target.files);
          return;
        }}
      >
        เทส
      </div>
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col justify-start gap-1 w-64"
        action=""
      >
        {" "}
        <div className="font-extrabold bg-gray-200 w-96 p-2 rounded-md">
          ORDER ID : {targetId.id} ## {" "}
           
        </div>
        <div className="font-extrabold bg-gray-200 w-96 p-2 rounded-md">CREATED AT :{targetId.createdAt}</div>
        <div className="font-extrabold bg-gray-200 w-96 p-2 rounded-md">USER ID : {targetId.userId}</div>
        <div className="font-extrabold bg-gray-200 w-96 p-2 rounded-md">TRANSACTION ID : {targetId.transactionId}</div>
        <div className="bg-gray-200 w-96 p-2 rounded-md font-extrabold">SCRAP ID : {targetId.productId}</div>
        <div className="font-extrabold bg-gray-200 w-96 p-2 rounded-md">
          {" "}
          EXPECTED WEIGHT :{targetId.expectedWeight} TONS
        </div>
        <div
          onClick={() => setIsOpenNote(!isOpenNote)}
          className="font-extrabold bg-gray-200 w-96 p-2 rounded-md"
        >
          NOTE : {newNote.newNote ? newNote.newNote : targetId.note}
        </div>
        {isOpenNote && (
          <div
            className="flex
          "
          >
            <textarea
              onChange={handleChangeInput}
              placeholder="Write here..."
              className="w-96 relative"
              value={newNote.newNote}
              name="newNote"
            ></textarea>
            <div
              onClick={() => setIsOpenNote(!isOpenNote)}
              className="bg-green-400 rounded-md text-white p-1"
            >
              SAVE
            </div>
          </div>
        )}
        <div
          onClick={() => setIsOpenPayment(!isOpenPayment)}
          className="text-white border  bg-blue-500 w-auto rounded-md hover:bg-blue-700"
        >
          PAYMENT : {" "}
           {newPayment.newPayment ? newPayment.newPayment : targetId.payment}
        </div>
        <div>
          {isOpenPayment && (
            <ul className="absolute bg-blue-300 text-white border w-36 rounded-md my--1">
              <li
                onClick={() => {
                  setPayment({ newPayment: "CASH" });

                  return setIsOpenPayment(!isOpenPayment);
                }}
                className="hover:bg-gray-900 border rounded-md"
              >
                CASH
              </li>
              <li
                onClick={() => {
                  setPayment({ newPayment: "MOBILE BANKING" });

                  return setIsOpenPayment(!isOpenPayment);
                }}
                className="hover:bg-gray-900 border rounded-md"
              >
                MOBILE BANKING
              </li>
              <li
                onClick={() => {
                  setPayment({ newPayment: "PROMPT PAY" });

                  return setIsOpenPayment(!isOpenPayment);
                }}
                className="hover:bg-gray-900 border rounded-md"
              >
                PROMPT PAY
              </li>
            </ul>
          )}
        </div>
        <div className="text-white border  bg-blue-500 w-auto rounded-md">
          ACTUAL WEIGHT: {targetId.actualWeight} TONS
        </div>
        <div>

        <input className="rounded-md w-52" type="text" />
        <span className="bg-green-400 text-white p-1 rounded-md">SAVE</span>
        </div>
        <div className="text-white border  bg-blue-500 w-auto rounded-md">
          TOTAL PRICE: {targetId.totalPrice} BAHT
        </div>
        <div 
        className="text-white border  bg-blue-500 w-auto rounded-md"
        onClick={() => setIsOpenPic(!isOpenPic)}>
          SCRAP PICTURE : Click here {newPic.name ? newPic.name : targetId.scrapPicture}
         
        </div>
        {isOpenPic && (
          <div className="absolute mb-96 ml-80">
            <div
              onClick={() => setIsOpenPic(!isOpenPic)}
              className="ml-96 font-extrabold "
            >
              X
            </div>
            <img
              className="absolute h-96 w-96 rounded-lg mb-96 "
              src={targetId.scrapPicture}
              alt=""
            />
            <input 
            onChange={(e)=> setNewPic(e.target.files)}
            className="absolute  rounded-lg mb-96 " type="file"></input>  
          </div>
        )}
        <div
          type=""
          onClick={() => setIsOpenStatus(!isOpenStatus)}
          className="text-white border  bg-blue-500 w-auto rounded-md"
        >
          STATUS : {newStatus.newStatus ? newStatus.newStatus : targetId.status}    
        </div>
        <div>
          {isOpenStatus && (
            <ul className="absolute bg-blue-300 text-white border w-auto  rounded-md ">
              <li
                onClick={() => {
                  setStatus({ newStatus: "PENDING" });

                  return setIsOpenStatus(!isOpenStatus);
                }}
                className="hover:bg-gray-900 border rounded-md"
              >
                PENDING
              </li>
              <li
                onClick={() => {
                  setStatus({ newStatus: "COMPLETED" });

                  return setIsOpenStatus(!isOpenStatus);
                }}
                className="hover:bg-gray-900 border w-36 rounded-md"
              >
                COMPLETED
              </li>
              <li
                onClick={() => {
                  setStatus({ newStatus: "REJECTED" });

                  return setIsOpenStatus(!isOpenStatus);
                }}
                className="hover:bg-gray-900 border w-auto rounded-md"
              >
                REJECTED
              </li>
            </ul>
          )}
        </div>
        <button
          onClick={() => {
  

            return setInput({ ...input, newPayment, newStatus, id, newNote ,newPic });
          }}
          className="bg-green-500 rounded-lg text-white p-2 m-1 font-semibold"
        >
          SUBMIT
        </button>
      </form>
      
    </div>
  );
}

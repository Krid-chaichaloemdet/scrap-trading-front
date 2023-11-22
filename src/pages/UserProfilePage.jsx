import  { useEffect, useState } from "react";
// import CreateOrderFeat from "../features/CreateOrderFeat";
import { useAuth } from "../hooks/use-auth";
import axios from "axios";
import { IoMdArrowDropdown } from "react-icons/io";

export default function UserProfilePage() {
  const [isOpenCreate, setIsOpenCreate] = useState(false);

  const [isOpenEditOrder, setIsOpenEdit] = useState(false);
  const [editData, setEditData] = useState(null);

  const [delId, setDelId] = useState(null);
  const [isOpenDel, setIsOpenDel] = useState(false);

  const [buyOrSell, setBuyOrSell] = useState(null);
  const [isOpenBuyOrSell, setIsOpenBuyOrSell] = useState(null);

  const [payment, setPayment] = useState(null);
  const [isOpenPayment, setIsOpenPayment] = useState(null);

  const [expectedWeight, setExpectedWeight] = useState(false);

  const [scrap, setScrap] = useState(null);
  const [isOpenScrap, setIsOpenScrap] = useState(false);

  const [phoneNumber, setPhonenumber] = useState(null);

  const [scrapPicture, setScrapPicture] = useState(null);

  const [note, setNote] = useState(null);

  const { authUser, productItem } = useAuth();
  const [order, setOrder] = useState();
// const
  // let createOrder=
  const amounts = [
    { id: 1, amount: "5" },
    { id: 2, amount: "10" },
    { id: 3, amount: "20" },
    { id: 4, amount: "50" },
    { id: 5, amount: "100" },
    { id: 6, amount: "500" },
  ];

  const [isOpenCreateOrderScrap, setIsOpenCreateOrderScrap] = useState(false);
  const [createOrderScrap, setCreateOrderScrap] = useState(null);

  const [createOrderNote, setCreateOrderNote] = useState(null);
  const [CreateOrderPhoneNumber, setCreateOrderPhoneNumber] = useState(null);
  const [createOrderExpectedWeight, setCreateOrderExpectedWeight] = useState(null);
  const [isOpenCreateOrderExpextedW, setIsOpenCreateOrderExpextedW] = useState(false);

  const [isOpenCreateOrderPayment, setIsOpenCreateOrderPayment] = useState(false);
  const [createOrderPayment, setCreateOrderPayment] = useState(null);

  const [CreateOrderBuyOrSell, setCreateOrderBuyOrSell] = useState(null);
  const [isOpenCreateOrderBuyOrSell, setIsOpenCreateOrderBuyOrSell] = useState(false);
  const [CreateOrderScrapPicture, setCreateOrderScrapPicture] = useState(null);

  const [IsErrorCreateOrder, setIsErrorCreateOrder] =useState(null)
  const handleCreateOrder = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if(CreateOrderBuyOrSell == null){
      return setIsErrorCreateOrder("This field can't be empaty")
    }
    if(CreateOrderScrapPicture == null){
      return setIsErrorCreateOrder("This field can't be empaty")
    }
    if(createOrderScrap == null){
      return setIsErrorCreateOrder("This field can't be empaty")
    }
    if(createOrderExpectedWeight == null){
      return setIsErrorCreateOrder("This field can't be empaty")
    }
    if(createOrderPayment == null){
      return setIsErrorCreateOrder("This field can't be empaty")
    }
    if(createOrderNote == null){
      return setIsErrorCreateOrder("This field can't be empaty")
    }
    if(CreateOrderPhoneNumber == null){
      return setIsErrorCreateOrder("This field can't be empaty")
    }
    formData.append("scrapPicture", CreateOrderScrapPicture);
    formData.append("buyOrSell", CreateOrderBuyOrSell);
    formData.append("scrap", createOrderScrap.id);
    formData.append("expectedWeight", createOrderExpectedWeight);
    formData.append("newPayment", createOrderPayment);
    formData.append("note", createOrderNote);
    formData.append("phoneNumber", CreateOrderPhoneNumber);
    formData.append("userId", authUser.id);
     await axios.post("/user/createFullOrder", formData).then((res)=>{
        order.push(res.data.message)
        console.log(res)
        console.log("order",order)
       return  setIsOpenCreate(false)
     }

    )
  };

console.log("finish",order)
  const handleSubmitForm = async () => {
    const formData = new FormData();
    if (scrapPicture !== null) {
      formData.append("scrapPicture", scrapPicture);
    }
    if (buyOrSell !== null) {
      formData.append("buyOrSell", buyOrSell);
    }
    if (scrap !== null) {
      formData.append("scrap", scrap);
    }
    if (expectedWeight !== null) {
      formData.append("expectedWeight", expectedWeight);
    }
    if (payment !== null) {
      formData.append("newPayment", payment);
    }
    if (note !== null) {
      formData.append("note", note);
    }
    if (phoneNumber !== null) {
      formData.append("phoneNumber", phoneNumber);
    }
    formData.append("userId", authUser.id);
    formData.append("orderId", editData.id);

    await axios
      .patch("/user/updateOrder", formData)
      .then((res) => {
        const afterEditSave = order.findIndex((el)=>{
            return el.id == res.data.id
        })
        order[afterEditSave] = res.data
        return setIsOpenEdit(!isOpenEditOrder)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.post("user/readOrder", authUser).then((res) => {

      setOrder(res.data);
    });
  }, []);

  const handleDeleteOrder = async () => {
    console.log("insilde del", delId);
    await axios.post(`user/deleteOrder/`, delId).then((res) => {
      const afterDeleteOrder = order.findIndex((el) => {
        return el.id == res.data.id;
      });
      order.splice(afterDeleteOrder, 1);
      return setIsOpenDel(!isOpenDel);
    });
  };


  return (
    <div className="p-10 h-full relative ">
      <div
        className="bg-blue-500 w-56 p- rounded-sm text-white hover:bg-blue-600 cursor-pointer  "
        onClick={() => setIsOpenCreate(!isOpenCreate)}
      >
        let's create your order
        
      </div>
                    {/* <div>crateeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div> */}
                    {isOpenCreate && 
      (<div
      action=""
      className="cursor-pointer justify-center items-center  flex-col gap-2 w-auto fixed p-5 z-50 -my-14  mx-96 translate-x-7 rounded-lg grid grid-flow-row bg-gray-400 "
    >
      <div
        onClick={() => setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell)}
        type="text"
        className="w-auto border-2 rounded-lg  text-lg   border-black p-1 hover:bg-gray-300"
      >
        {CreateOrderBuyOrSell ? CreateOrderBuyOrSell : "SELL ,BUY OR OFFER US AN AUCTION"}
      </div>
     {IsErrorCreateOrder ? <div className="text-red-700">{IsErrorCreateOrder}</div> : ""}
      {isOpenCreateOrderBuyOrSell && (
        <ul className="flex gap-5">
          <li
            onClick={() => {
              setIsErrorCreateOrder("")
              setCreateOrderBuyOrSell("SELLING");

              return setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell);
            }}
            className="hover:bg-gray-200 border rounded-md p-1"
          >
            SELLING
          </li>
          <li
            onClick={() => {
              setIsErrorCreateOrder("")
              setCreateOrderBuyOrSell("BUYING");

              return setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell);
            }}
            className="hover:bg-gray-200 border rounded-md p-1"
          >
            BUYING
          </li>
          <li
            onClick={() => {
              setIsErrorCreateOrder("")
              setCreateOrderBuyOrSell("AUCTION");

              return setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell);
            }}
            className="hover:bg-gray-200 border rounded-md p-1"
          >
            AUCTION
          </li>
        </ul>
      )}

      <div
        onClick={() => setIsOpenCreateOrderScrap(!isOpenCreateOrderScrap)}
        type="text"
        placeholder="Your scrap"
        className="w-auto border-2 rounded-lg outline-none  text-lg border-black p-1 hover:bg-gray-300"
      >
        {" "}
        {createOrderScrap?.name ? createOrderScrap.name : "SELECT YOUR KIND OF SCRAP"}
      </div>
      {IsErrorCreateOrder ? <div className="text-red-700">{IsErrorCreateOrder}</div> : ""}
      {isOpenCreateOrderScrap &&
        productItem.map((data, i) => {
          return (
            <div
              className=" hover:bg-gray-200 border-white border rounded-md p-1"
              key={i}
            >
              <div
                onClick={() => {
                  setIsErrorCreateOrder("")
                  setCreateOrderScrap(data);
                  return setIsOpenCreateOrderScrap(!isOpenCreateOrderScrap);
                }}
                className=" hover:bg-gray-200 border-black rounded-md"
              >
                {data.name}
              </div>
            </div>
          );
        })}

      <div
        type="text"
        placeholder="Your expected weight"
        className="w-auto border-2 rounded-lg outline-none  text-lg border-black p-1 hover:bg-gray-300"
        onClick={() => setIsOpenCreateOrderExpextedW(!isOpenCreateOrderExpextedW)}
        value={createOrderExpectedWeight ? createOrderExpectedWeight : "Your expected weight?"}
        name="expectedWeight"
      >
        {createOrderExpectedWeight} TONS
      </div>
      {IsErrorCreateOrder ? <div className="text-red-700">{IsErrorCreateOrder}</div> : ""}
      {isOpenCreateOrderExpextedW && (
        <div>
          {amounts.map((data, i) => {
            return (
              <div className=" " key={i}>
                <div
                  onClick={() => {
                    setIsErrorCreateOrder("")
                    setCreateOrderExpectedWeight(data.amount);

                    return setIsOpenCreateOrderExpextedW(!isOpenCreateOrderExpextedW);
                  }}
                  className=" hover:bg-gray-200 border border-white rounded-md p-1 m-1"
                  key={i}
                >
                  {data.amount} TONS
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div
        onClick={() => setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment)}
        type="text"
        placeholder="Your payment"
        className="w-auto border-2 rounded-lg  text-lg border-black p-1 hover:bg-gray-300"
      >
        {createOrderPayment ? createOrderPayment : "SELECT YOUR PAYMENT "}
      </div>
      {IsErrorCreateOrder ? <div className="text-red-700">{IsErrorCreateOrder}</div> : ""}
      <div>
        {isOpenCreateOrderPayment && (
          <ul className="w-auto  rounded-lg outline-none  text-lg flex gap-4">
            <li
              onClick={() => {
                setIsErrorCreateOrder("")
                setCreateOrderPayment("CASH");

                return setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment);
              }}
              className="hover:bg-gray-200 border rounded-md p-1"
            >
              CASH
            </li>
            <li
              onClick={() => {
                setIsErrorCreateOrder("")
                setCreateOrderPayment("MOBILE BANKING");

                return setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment);
              }}
              className="hover:bg-gray-200 border rounded-md p-1"
            >
              MOBILE BANKING
            </li>
            <li
              onClick={() => {
                setIsErrorCreateOrder("")
                setCreateOrderPayment("PROMPT PAY");

                return setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment);
              }}
              className="hover:bg-gray-200 border rounded-md p-1"
            >
              PROMPT PAY
            </li>
          </ul>
        )}
      </div>

      <input
        onChange={(e) =>{ 
          setIsErrorCreateOrder("")
          setCreateOrderPhoneNumber(e.target.value)}}
        placeholder="Your phone number"
        className="w-auto border rounded-lg outline-none  text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
        value={CreateOrderPhoneNumber}
        name="phoneNumber"
      />
      {IsErrorCreateOrder ? <div className="text-red-700">{IsErrorCreateOrder}</div> : ""}
      {CreateOrderScrapPicture ? (
        <img
          className="w-20 h-20 rounded-md"
          src={CreateOrderScrapPicture ? URL.createObjectURL(CreateOrderScrapPicture) : "---"}
          alt=""
        />
      ) : (
        <div>Please add your scrap image</div>
      )}
      <input
        type="file"
        className=" rounded-lg w-60"
        onChange={(e) => {
          if (e.target.files[0]) {
            setIsErrorCreateOrder("")
            setCreateOrderScrapPicture(e.target.files[0]);
          }
        }}
        name="scrapPicture"
      />
      {IsErrorCreateOrder ? <div className="text-red-700">{IsErrorCreateOrder}</div> : ""}

      <textarea
        onChange={(e) => setCreateOrderNote(e.target.value)}
        placeholder="Write here..."
        className="w-96 relative"
        value={createOrderNote}
        name="note"
      />
      <div className="flex gap-5">
        <button
          onClick={handleCreateOrder}

          className="bg-green-400 hover:bg-green-500 w-60 text-white rounded-lg"
        >
          SUBMIT
        </button>
        <button
          onClick={() =>setIsOpenCreate(!isOpenCreate)}
          className="bg-red-400  hover:bg-red-500 w-60 text-white rounded-lg"
        >
          CANCEL
        </button>
      </div>
    </div> )}
    {isOpenEditOrder && (
            <table className="bg-gray-300 h-96 w-9/12 fixed mx-20  -my-36  items-center justify-center ">
              <thead className="">
            
              </thead>
              <tbody className="border-2 ">
                <tr>
                  <td className="bg-yellow-600 text-white p-2">EDIT ORDER</td>
                  <td className="bg-yellow-600 text-white p-2"></td>
                  <td className="bg-yellow-600 text-white p-2"></td>
                  <td className="bg-yellow-600 text-white p-2"></td>
                  </tr>
                <tr className="border-2 ">
                  <td className="border-2 p-2 bg-yellow-600 text-white">Id</td>
                  <td className="border-2">{editData.id}</td>
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 p-2 bg-yellow-600 text-white">Order type</td>
                  <td
                    onClick={() => setIsOpenBuyOrSell(!isOpenBuyOrSell)}
                    className="border-2 cursor-pointer hover:bg-gray-300"
                  >
                    {buyOrSell ? buyOrSell : editData.buyOrSell}
                    {isOpenBuyOrSell ? 
                  <IoMdArrowDropdown className="rotate-180 transition-transform duration-300  translate-x-16 -translate-y-5 text-xl" /> :
                  <IoMdArrowDropdown className="transition-transform duration-300 text-lg translate-x-16 -translate-y-5 " />}
                  </td>
                  {isOpenBuyOrSell && (
                    <div className="border- fixed flex flex-col  my-10 -translate-x-96 -mx-72 z-50 bg-gray-600">
                      <div
                      className="border-2 p-2 bg-gray-400 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setBuyOrSell("SELLING");

                          return setIsOpenBuyOrSell(!isOpenBuyOrSell);
                        }}
                      >
                        SELLING
                      </div>
                      <div
                      className="border-2 p-2 bg-gray-400 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setBuyOrSell("BUYING");

                          return setIsOpenBuyOrSell(!isOpenBuyOrSell);
                        }}
                      >
                        BUYING
                      </div>
                      <div
                      className="border-2 p-2 bg-gray-400 hover:bg-gray-300 cursor-pointer"
                        onClick={() => {
                          setBuyOrSell("AUCTION");

                          return setIsOpenBuyOrSell(!isOpenBuyOrSell);
                        }}
                      >
                        AUCTION
                      </div>
                    </div>
                  )}
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 p-2 bg-yellow-600 text-white">Kind of scrap</td>
                  {isOpenScrap &&
                    productItem.map((data, i) => {
                      return (
                        <div
                        
                          className=" hover:bg-gray-100  z-50 rounded-md"
                          key={i}
                        >
                          <div
                            onClick={() => {
                              setScrap(data.name);
                                
                              return setIsOpenScrap(!isOpenScrap);
                            }}
                            
                            className=" hover:bg-gray-100 border-black border-2 rounded-md cursor-pointer"
                          >
                            {data.name}
                          </div>
                        </div>
                      );
                    })}
                  {scrap ? (
                    <td 
                    className="hover:bg-gray-300 cursor-pointer"
                    onClick={() => setIsOpenScrap(!isOpenScrap)}>
                      {scrap}
                      {isOpenScrap ? 
                  <IoMdArrowDropdown className="rotate-180 transition-transform duration-300  translate-x-24 -translate-y-40 text-xl" /> :
                  <IoMdArrowDropdown className="transition-transform duration-300 text-lg translate-x-24 -translate-y-5 " />}
                    </td>
                  ) : (
                    <td
                      onClick={() => setIsOpenScrap(!isOpenScrap)}
                      className="border-2 "
                    >
                      {productItem.map((el) => {
                        if (el.id == editData.productId)
                          return <div className="hover:bg-gray-300 cursor-pointer">  {el.name}
                           {isOpenScrap ? 
                  <IoMdArrowDropdown className="rotate-180 transition-transform duration-300  translate-x-24 -translate-y-5 text-xl" /> :
                  <IoMdArrowDropdown className="transition-transform duration-300 text-lg translate-x-24 -translate-y-5 " />}
                          </div>;
                      })}
                    </td>
                  )}

                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 p-2 text-white">Created at</td>
                  <td className="border-2 ">{editData.createdAt.slice(0, 10)}</td>
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 p-2 text-white">Payment</td>
                  <td
                    onClick={() => setIsOpenPayment(!isOpenPayment)}
                    className="border-2 cursor-pointer hover:bg-gray-300"
                  >
                    {payment ? payment : editData.payment}
                    {isOpenPayment ? 
                  <IoMdArrowDropdown className="rotate-180 transition-transform duration-300  translate-x-32 -translate-y-5 text-xl" /> :
                  <IoMdArrowDropdown className="transition-transform duration-300 text-lg translate-x-32 -translate-y-5 " />}
                  </td>
                  {isOpenPayment && (
                    <td className="absolute flex flex-col -mx-96 -translate-x-72 my-7 z-50 bg-gray-600 ">
                      <td
                      className="cursor-pointer border border-black bg-gray-300 hover:bg-gray-100 p-2"
                        onClick={() => {
                          setPayment("CASH");

                          return setIsOpenPayment(!isOpenPayment);
                        }}
                      >
                        CASH
                      </td>
                      <td
                                            className="cursor-pointer border border-black bg-gray-300 hover:bg-gray-100 p-2"
                        onClick={() => {
                          setPayment("MOBILE BANKING");

                          return setIsOpenPayment(!isOpenPayment);
                        }}
                      >
                        MOBILE BANKING
                      </td>
                      <td
                                            className="cursor-pointer border border-black bg-gray-300 hover:bg-gray-100 p-2"
                        onClick={() => {
                          setPayment("PROMPT PAY");

                          return setIsOpenPayment(!isOpenPayment);
                        }}
                      >
                        PROMPT PAY
                      </td>
                    </td>
                  )}
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600  text-white ">Note</td>
                  {note ? (
                    <textarea
                      onChange={(e) => setNote(e.target.value)}
                      placeholder={"Write here..."}
                      className="w-96 h-10"
                      value={note}
                      name="note"
                    ></textarea>
                  ) : (
                    <textarea
                      onChange={(e) => setNote(e.target.value)}
                      placeholder={"Write here..."}
                      className="w-96 h-10"
                      value={note == "" ? note : editData.note}
                      name="note"
                    ></textarea>
                  )}
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 p-2 text-white">Expected weight</td>
                  {expectedWeight ? (
                    <input
                      onChange={(e) => setExpectedWeight(e.target.value)}
                      // value={expectedWeight ? expectedWeight : "0" }
                      className=" w-16"
                    ></input>
                  ) : (
                    <input
                      onChange={(e) => setExpectedWeight(e.target.value)}
                      // value={
                      //   expectedWeight == ""
                      //     ? expectedWeight
                      //     : editData.expectedWeight
                      // }
                      className=" w-16"
                    ></input>
                  )}
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 text-white p-2">Actual weight</td>
                  <td className="border-2 ">
                    {editData.actualWeight ? editData.actualWeight : "0"}
                  </td>
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 text-white p-2">Total price</td>
                  <td className="border-2 ">
                    {editData.totalPrice ? editData.totalPrice : "0"}
                  </td>
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 text-white">Your scrap image</td>
                  {scrapPicture ? (
                    <img
                      className="h-20 w-20"
                      src={
                        scrapPicture ? URL.createObjectURL(scrapPicture) : "---"
                      }
                      alt=""
                    />
                  ) : (
                    <img
                      className="h-20 w-20"
                      src={editData.scrapPicture}
                      alt=""
                    />
                  )}

                  <input
                    type="file"
                    className="p-2 rounded-lg w-60"
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setScrapPicture(e.target.files[0]);
                      }
                    }}
                    name="scrapPicture"
                  />
                  {/* <div
                    className="bg-gray-100 w-10 m-1 rounded-sm hover:bg-gray-200 cursor-pointer"
                    onClick={() => setScrapPicture(null)}
                  >
                    reset
                  </div> */}
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 text-white p-2">Your phone number</td>
                  {phoneNumber ? (
                    <input
                      onChange={(e) => setPhonenumber(e.target.value)}
                      type="text"
                      value={phoneNumber}
                      className=" "
                    ></input>
                  ) : (
                    <input
                      onChange={(e) => setPhonenumber(e.target.value)}
                      type="text"
                      value={
                        phoneNumber ==""
                          ? phoneNumber 
                          : editData.phoneNumber
                          ? editData.phoneNumber
                          : "---"
                      }
                      className=" "
                    ></input>
                  )}
                </tr>
                <tr className="border-2 ">
                  <td className="border-2 bg-yellow-600 text-white p-2">Status</td>
                  <td className="border-2 ">{editData.status}</td>
                </tr>
                <tr className="border-2 bg-white ">
                  <td
                  >
                  </td>
                  <td
                  >
                  </td>
                  <td
                    onClick={handleSubmitForm}
                    className="border-2 bg-green-500 cursor-pointer text-white hover:bg-green-600"
                  >
                    SAVE
                  </td>
                  <td
                    onClick={() => setIsOpenEdit(!isOpenEditOrder)}
                    className="border-2 bg-gray-400 cursor-pointer text-white hover:bg-gray-600"
                  >
                    CANCEL
                  </td>
                </tr>
              </tbody>
            </table>
          )}
             {isOpenDel && (
            <div className="bg-yellow-600 h-96 w-11/12 fixed rounded-lg -my-20 flex flex-col items-center justify-center gap-5">
              <div className="text-3xl">Do you want to delete this order ?</div>
              <div className="flex gap-5">
                <div
                  className="bg-red-500 hover:bg-red-400 rounded-lg  p-5 pr-10 pl-10 text-white text-2xl cursor-pointer"
                  onClick={handleDeleteOrder}
                >
                  ok
                </div>
                <div
                  className="bg-gray-400 hover:bg-gray-300 p-5  rounded-lg  pr-10 pl-10 text-white  text-2xl cursor-pointer"
                  onClick={() => setIsOpenDel(!isOpenDel)}
                >
                  cancel
                </div>
              </div>
            </div>
          )}
      <div onClick={() => console.log(authUser)}>Your transactions</div>
      {/* { isOpenReadOrder && <ReadOrderUser order={order} />} */}
      <div className="overflow-scroll">
        <table className=" ">
          <thead>
            <tr className="border-2 p-1">
              <th className="border-2 p-1 bg-yellow-500">Id</th>
              <th className="border-2 p-1 bg-yellow-500">Order type</th>
              <th className="border-2 p-1 bg-yellow-500">Kind of scrap</th>
              <th className="border-2 p-1 bg-yellow-500">Created time</th>
              <th className="border-2 p-1 bg-yellow-500">Payment</th>
              <th className="border-2 p-1 bg-yellow-500">Note</th>
              <th className="border-2 p-1 bg-yellow-500">Expected weight</th>
              <th className="border-2 p-1 bg-yellow-500">Actual weight</th>
              <th className="border-2 p-1 bg-yellow-500">Total price</th>
              <th className="border-2 p-1 bg-yellow-500">Your scrap image</th>
              <th className="border-2 p-1 bg-yellow-500">Your phone number</th>
              <th className="border-2 p-1 bg-yellow-500">Status</th>
              <th className="border-2 p-1 bg-yellow-500">edit</th>
            </tr>
          </thead>
          {order?.map((data, i) => {
            return (
              <tbody key={i}>
                <tr className="border-2">
                  <td className="border-2 p-2">{data.id}</td>
                  <td className="border-2">{data.buyOrSell}</td>
                  <td className="border-2">
                    {productItem.map((el, i) => {
                      if (el.id == data.productId)
                        return <div key={i}> {el.name}</div>;
                    })}
                  </td>
                  <td className="border-2">{data.createdAt}</td>
                  <td className="border-2">{data.payment ? data.payment : "---"}</td>
                  <td className="border-2">{data.note ? data.note : "---"}</td>
                  <td className="border-2">{data.expectedWeight ? data.expectedWeight : "0"}</td>
                  <td className="border-2">{data.actualWeight ? data.actualWeight : "0"}</td>
                  <td className="border-2">{data.totalPrice ? data.totalPrice: "0"}</td>
                  <td className="border-2">
                    <img src={data.scrapPicture} className="h-20 w-20" alt="" />
                  </td>
                  <td className="border-2">{data.phoneNumber ? data.phoneNumber : "---"}</td>
                  <td className="border-2">{data.status}</td>

                  {data.status == "PENDING" && (
                    <td className="flex gap-2 items-center">
                      <td
                        onClick={() => {
                          setEditData(data);
                          setIsOpenEdit(!isOpenEditOrder);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white p-1 rounded-sm border-2 cursor-pointer"
                      >
                        edit
                      </td>
                      <td
                        onClick={() => {
                          setDelId(data);
                          setIsOpenDel(!isOpenDel);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white p-1 rounded-sm border-2 cursor-pointer"
                      >
                        delete
                      </td>
                    </td>
                  )}
                </tr>
              </tbody>
            );
          })}
       

        </table>

      </div>



    </div>
    
  );
}

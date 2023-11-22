import { useState, useEffect } from "react";
import axios from "../config/axios";
import { FiPlusCircle } from "react-icons/fi";
import { useAuth } from "../hooks/use-auth";

export default function ReadOrderFeat() {
  
  const { productItem, authUser } = useAuth();
  const [input, setInput] = useState([]);
  const [test, setTest] = useState(0);
  const [test2, setTest2] = useState(0);
  const [isOpenEditOrder, setIsOpenEditOrder] = useState(false);
  const [editOrderData, setEditOrderData] = useState(null);

  const [editOrderActualWeight, setEditOrderActualWeight] = useState(null);

  const [noteAdmin, setNoteAdmin] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [paymentPic, setPaymentPic] = useState(null);
  const [status, setStatus] = useState(null);
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenCheckScrapImage, setIsOpenCheckScrapImage] = useState(false);

  const [isOpenCreateOrder, setIsOpenCreateOrder] = useState(false);

  // let Orderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
  const [isOpenBuyOrSell, setIsOpenBuyOrsell] = useState(false);
  const [buyOrSell, setBuyOrSell] = useState(null);

  const [isOpenScrap, setIsOpenScrap] = useState(false);
  const [scrap, setScrap] = useState(null);

  const [scrapPicture, setScrapPicture] = useState(null);

  const [expextedWeightCreateOrder, setExpextedWeightCreateOrder] =
    useState(null);

  const [actualWeightCreateOrder, setActualWeightCreateOrder] = useState(null);

  const [noteUserCreateOrder, setNoteUserCreateOrder] = useState(null);

  const [phoneNumberCreateOrder, setPhoneNumberCreateOrder] = useState(null);

  const [noteAdminCreateOeder, setNoteAdminCreateOeder] = useState(null);

  const [totalPriceCreateOrder, setTotalPriceCreateOrder] = useState(null);
  const [statusCreateOrder, setStatusCreateOrder] = useState(null);
  const [isOpenStatusCreateOrder, setIsOpenStatusCreateOrder] = useState(false);

  const [paymentPictureCreateOrder, setPaymentPictureCreateOrder] =
    useState(null);

  const [paymentCreateOeder, setPaymentCreateOrder] = useState(null);
  const [isOpenPaymentCreateOrder, setIsOpenPaymentCreateOrder] =
    useState(false);

    const [isOpenOrderDel, setIsOpenOrderDel] =useState(false)
    const [delOrderId, setDelOrderId] =useState(null)
const handleDeleteOrder = async () => {
  await axios.post("admin/deleteOrderAdmin", delOrderId).then((res) => {
    const afterOrderDel = productItem.findIndex((el) => {
      return el.id == res.data.id;
    });
    input.splice(afterOrderDel, 1);
    return setIsOpenOrderDel(false);
  });
}
    const handleCreateOrder = async () => {
      console.log("kuy")
      const formData = new FormData();
      if ( buyOrSell !== null) {
        formData.append("buyOrSell",buyOrSell)
      }
      if ( scrap !== null) {
        formData.append("scrap",scrap.id)
      }
      if ( scrapPicture !== null) {
        formData.append("scrapPicture",scrapPicture)
      }
      if ( expextedWeightCreateOrder !== null) {
        formData.append("expextedWeightCreateOrder",expextedWeightCreateOrder)
      }
      if ( actualWeightCreateOrder !== null) {
        formData.append("actualWeightCreateOrder",actualWeightCreateOrder)
      }


      if ( noteUserCreateOrder !== null) {
        formData.append("noteUserCreateOrder",noteUserCreateOrder)
      }
      if ( phoneNumberCreateOrder !== null) {
        formData.append("phoneNumberCreateOrder",phoneNumberCreateOrder)
      }
      if ( noteAdminCreateOeder !== null) {
        formData.append("noteAdminCreateOeder",noteAdminCreateOeder)
      }
      if ( totalPriceCreateOrder !== null) {
        formData.append("totalPriceCreateOrder",totalPriceCreateOrder)
      }
      if ( statusCreateOrder !== null) {
        formData.append("statusCreateOrder",statusCreateOrder)
      }
      if ( paymentPictureCreateOrder !== null) {
        formData.append("paymentPictureCreateOrder",paymentPictureCreateOrder)
      }
      if ( paymentCreateOeder !== null) {
        formData.append("paymentCreateOeder",paymentCreateOeder)
      }
      formData.append("userId",authUser.id)
      await axios.post("admin/createOrderAdmin", formData).then((res) =>{
        input.push(res.data)
        console.log(res)
        // return (false)
    });
    }

  const handleEditOrder = () => {
    const formData = new FormData();

    if (editOrderActualWeight !== null) {
      formData.append("editOrderActualWeight", editOrderActualWeight);
    }
    if (noteAdmin !== null) {
      formData.append("noteAdmin", noteAdmin);
    }
    if (totalPrice !== null) {
      formData.append("totalPrice", totalPrice);
    }
    if (status !== null) {
      formData.append("status", status);
    }
    if (paymentPic !== null) {
      formData.append("paymentPicture", paymentPic);
    }
    formData.append("orderId", editOrderData.id);
    axios.patch("admin/editOrderAdmin", formData).then((res) => {
      const afterEditOrder = input.findIndex((el) => {
        return el.id == res.data.id;
      });
      input[afterEditOrder] = res.data;
      return setIsOpenEditOrder(false);
    });
  };

  useEffect(() => {
    axios.get("/admin/readOrder").then((res) => {
      setInput(res.data);
    });
  }, []);

  const defaultPic =
    "https://1000marcas.net/wp-content/uploads/2020/10/iCloud-Logo.png";
  return (
    <div className="relative flex flex-col">
  
      <div className="text-gray-900 ml-10 text-5xl flex font-extrabold justify-start pb-10 ">
        All transactions
      </div>
   { isOpenCreateOrder &&  <div className=" w-11/12 h-auto fixed -my-96 -translate-y-96 px-56 z-50  ">
        <table className="border-2 translate-x- bg-yellow-500">
          <thead>
            <th>CREATE ORDER</th>
            <tr className="boder-2">
              <th className="border-2">Type of order</th>
              {!isOpenBuyOrSell && (
                <th
                  onClick={() => setIsOpenBuyOrsell(!isOpenBuyOrSell)}
                  className="border-2"
                >
                  {buyOrSell ? buyOrSell : "Select"}
                </th>
              )}
              {isOpenBuyOrSell && (
                <div className="absolute bg-gray-400 mx-1 my-10">
                  <div
                    onClick={() => {
                      setIsOpenBuyOrsell(!isOpenBuyOrSell);
                      setBuyOrSell("BUYING");
                    }}
                  >
                    BUYING
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenBuyOrsell(!isOpenBuyOrSell);
                      setBuyOrSell("SELLING");
                    }}
                  >
                    SELLING
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenBuyOrsell(!isOpenBuyOrSell);
                      setBuyOrSell("AUCTION");
                    }}
                  >
                    AUCTION
                  </div>
                </div>
              )}
              <th className="border-2">Product </th>
              <th
                onClick={() => setIsOpenScrap(!isOpenScrap)}
                className="border-2"
              >
                {scrap?.name ? scrap.name : "Select"}
                {isOpenScrap &&
                  productItem.map((data, i) => {
                    return (
                      <div
                        key={i}
                        className="p-1 hover:bg-gray-400 cursor-pointer"
                      >
                        <div
                          onClick={() => {
                            setScrap(data);
                            setIsOpenScrap(!isOpenScrap);
                          }}
                        >
                          {data.name}
                        </div>
                      </div>
                    );
                  })}
              </th>
              <th className="border-2">Scrap image</th>
              <th className="border-2">
                <img
                  src={scrapPicture ? URL.createObjectURL(scrapPicture) : defaultPic}
                  alt=""
                  className="w-20 h-20"
                />
                <input
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setScrapPicture(e.target.files[0]);
                    }
                  }}
                  type="file"
                  className="w-40"
                />
              </th>
              <th className="border-2">Expected Weight</th>
              <th className="border-2">
                <input
                  className="w-10"
                  onChange={(e) => setExpextedWeightCreateOrder(e.target.value)}
                  type="text"
                />
                Tons
              </th>
            </tr>
            <tr>
              <th className="border-2">Actual Weight</th>
              <th className="border-2">
                <input
                  className="w-10"
                  onChange={(e) => setActualWeightCreateOrder(e.target.value)}
                  type="text"
                />
                Tons
              </th>
              <th className="border-2">User note</th>
              <th className="border-2">
                <textarea
                  className="w-20"
                  onChange={(e) => setNoteUserCreateOrder(e.target.value)}
                  type="text"
                />
              </th>
              <th className="border-2">Payment</th>
              {!isOpenPaymentCreateOrder && (
                <th
                  onClick={() =>
                    setIsOpenPaymentCreateOrder(!isOpenPaymentCreateOrder)
                  }
                  className="border-2"
                >
                  {paymentCreateOeder ? paymentCreateOeder : "Select"}
                </th>
              )}
              {isOpenPaymentCreateOrder && (
                <div className="absolute bg-gray-400 mx-2 my-10">
                  <div
                    onClick={() => {
                      setIsOpenPaymentCreateOrder(!isOpenPaymentCreateOrder);
                      setPaymentCreateOrder("CASH");
                    }}
                  >
                    CASH
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenPaymentCreateOrder(!isOpenPaymentCreateOrder);
                      setPaymentCreateOrder("MObile BANKING");
                    }}
                  >
                    MObile BANKING
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenPaymentCreateOrder(!isOpenPaymentCreateOrder);
                      setPaymentCreateOrder("PROMPT PAY");
                    }}
                  >
                    PROMPT PAY
                  </div>
                </div>
              )}
              <th className="border-2">Payment Image</th>
              <th className="border-2">
                <img
                  className="h-20 w-20"
                  src={
                    paymentPictureCreateOrder
                      ? URL.createObjectURL(paymentPictureCreateOrder)
                      : defaultPic
                  }
                  alt=""
                />
                <input
                  className="w-20"
                  onChange={(e) => {
                    if (e.target.files[0]) {
                      setPaymentPictureCreateOrder(e.target.files[0]);
                    }
                  }}
                  type="file"
                />
              </th>
            </tr>
            <tr>
              <th className="border-2">Phone number</th>
              <th className="border-2">
                <input
                  onChange={(e) => setPhoneNumberCreateOrder(e.target.value)}
                  className="w-20"
                  type="text"
                />
              </th>
              <th className="border-2">Admin note</th>
              <th className="border-2">
                <textarea
                  onChange={(e) => setNoteAdminCreateOeder(e.target.value)}
                  name=""
                  id=""
                  className="w-20"
                ></textarea>
              </th>
              <th className="border-2">Total price</th>
              <th className="border-2">
                <input
                  className="w-20"
                  onChange={(e) => setTotalPriceCreateOrder(e.target.value)}
                  type="text"
                />
              </th>
              <th className="border-2">Status</th>
              <th
                onClick={() =>
                  setIsOpenStatusCreateOrder(!isOpenStatusCreateOrder)
                }
                className="border-2"
              >
                {statusCreateOrder ? statusCreateOrder : "Status"}
              </th>
              {isOpenStatusCreateOrder && (
                <div className="absolute bg-gray-400 -mx-20 my-10">
                  <div
                    onClick={() => {
                      setIsOpenStatusCreateOrder(!isOpenStatusCreateOrder);
                      setStatusCreateOrder("REJECTED");
                    }}
                  >
                    REJECTED
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenStatusCreateOrder(!isOpenStatusCreateOrder);
                      setStatusCreateOrder("COMPLETED");
                    }}
                  >
                    COMPLETED
                  </div>
                  <div
                    onClick={() => {
                      setIsOpenStatusCreateOrder(!isOpenStatusCreateOrder);
                      setStatusCreateOrder("PENDING");
                    }}
                  >
                    PENDING
                  </div>
                </div>
              )}
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th
              onClick={handleCreateOrder}
              className="cursor-pointer bg-green-600"
              >Create</th>
              <th
              className="cursor-pointer bg-red-600"
              onClick={()=>setIsOpenCreateOrder(!isOpenCreateOrder)}
              >Cancel</th>
            </tr>
          </thead>
        </table>
      </div>}
      <FiPlusCircle 
       onClick={()=>setIsOpenCreateOrder(!isOpenCreateOrder)}
       
       className="text-5xl absolute translate-x-10 translate-y-16 cursor-pointer" />
      <div className="flex flex-col overflow-y-scroll h-96 w-f bg-gray-200 rounded- p- m-10">
        {input?.map((data, i) => {
          return (
            <div className="   cursor-pointer rounded-md     " key={i}>
              <table>
                <thead className="border-2 border-black">
                  <tr className="border-2 border-black">
                    <th className="border-2 border-black bg-yellow-500">Order Id</th>
                    <th className="border-2 border-black bg-yellow-500">User Id</th>
                    <th className="border-2 border-black bg-yellow-500">Kind of order</th>
                    <th className="border-2 border-black bg-yellow-500">Created At</th>
                    <th className="border-2 border-black bg-yellow-500">Scrap Id</th>
                    <th className="border-2 border-black bg-yellow-500">Expected weight</th>
                    <th className="border-2 border-black bg-yellow-500">User note</th>
                    <th className="border-2 border-black bg-yellow-500">Payment</th>
                    <th className="border-2 border-black bg-yellow-500">Payment Image</th>
                    <th className="border-2 border-black bg-yellow-500">Scrap image</th>
                    <th className="border-2 border-black bg-yellow-500">Phone number</th>
                    <th className="border-2 border-black bg-yellow-500">Admin note</th>
                    <th className="border-2 border-black bg-yellow-500">Actual weight</th>
                    <th className="border-2 border-black bg-yellow-500">Total price</th>
                    <th className="border-2 border-black bg-yellow-500">Status</th>
                    <th className="border-2 border-black bg-yellow-500">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-2 border-black">{data.id}</td>
                    <td className="border-2 border-black">{data.userId}</td>
                    <td className="border-2 border-black">{data.buyOrSell}</td>
                    <td className="border-2 border-black">
                      {data.createdAt.slice(0, 10)}
                    </td>
                    <td className="border-2 border-black">{data.productId}</td>
                    <td className="border-2 border-black">
                      {data.expectedWeight ? data.expectedWeight : "0"}
                    </td>
                    <td className="border-2 border-black">
                      <div name="" id="" cols="15" rows="3">
                        {data.note ? data.note : "--"}
                      </div>
                    </td>
                    <td className="border-2 border-black">
                      {data.payment ? data.payment : "--"}
                    </td>
                    <td className="border-2 border-black">
                      <img
                        className="h-14 w-14"
                        src={
                          data.scrapPicture ? data.paymentPicture : defaultPic
                        }
                        alt=""
                      />
                    </td>
                    <td className="border-2 border-black">
                      <img
                        className="h-14 w-14"
                        src={data.scrapPicture ? data.scrapPicture : defaultPic}
                        alt=""
                      />
                    </td>
                    <td className="border-2 border-black">
                      {data.phoneNumber ? data.phoneNumber : "0"}
                    </td>
                    <td className="border-2 border-black">
                      <div name="" id="" cols="15" rows="3">
                        {data.noteAdmin ? data.noteAdmin : "--"}
                      </div>
                    </td>
                    <td className="border-2 border-black">
                      {data.actualWeight ? data.actualWeight : "0"}
                    </td>
                    <td className="border-2 border-black">{data.totalPrice}</td>
    
                    <td className="border-2 border-black">{data.status}</td>
                    <td className="border-2 border-black">
                      <div
                        onClick={() => {
                          setEditOrderData(data);
                          setIsOpenEditOrder(!isOpenEditOrder);
                        }}
                        className="bg-green-600 p-2 cursor-pointer"
                      >
                        edit
                      </div>
                      <div
                     onClick={() => {
                      setDelOrderId({id:data.id})
                      setIsOpenOrderDel(!isOpenOrderDel)}}
                      className="bg-red-600 p-2 cursor-pointer text-white"
                      >Del</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            );
            
        })}
        
      </div>
      {isOpenOrderDel && (
    <div className="bg-yellow-500 w-auto h-auto absolute -my-96 translate-y-96 mx-96 m- p-20 ">
    <div
    className="text-5xl "
    >Do you want to delete this order ?</div>
    <div className="flex gap-5 text-2xl">
    <div className="hover:bg-green-600 p-1 cursor-pointer" onClick={handleDeleteOrder}>
    yes
    </div>
    <div
    className="hover:bg-red-600 p-1 cursor-pointer"
    onClick={() => setIsOpenOrderDel(!isOpenOrderDel)}
    >
    no
    </div>
    </div>
    </div>
    )}
      {isOpenEditOrder && (
        <div className="bg-gray-100 w-auto h-auto fixed -my-96 -translate-y-full mx-64 ml-10 mr-20 p-10 rounded-md">
          <table className="border-2 border-black ">
            <thead>
            <th className="p-5 bg-yellow-500  text-white border- border-black ">EDIT ORDER</th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
            <th className=" bg-yellow-500 "></th>
              <tr>
                <th className="border-2 border-black bg-yellow-500  text-white p-2">
                  Order id
                </th>
                <th className="border-2 border-black bg-gray-300">{editOrderData.id}</th>

                <th className="border-2 border-black bg-yellow-500  text-white ">
                  User id
                </th>
                <th className="border-2 border-black bg-gray-300">
                  {editOrderData.userId}
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Kind Of order
                </th>
                <th className="border-2 border-black bg-gray-300">
                  {editOrderData.buyOrSell}
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Created At
                </th>
                <th className="border-2 border-black bg-gray-300">
                  {editOrderData.createdAt.slice(0, 10)}
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Scrap Id
                </th>
                <th className="border-2 border-black bg-gray-300">
                  {editOrderData.productId}
                </th>
              </tr>

              <tr>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Expected weight
                </th>
                <th className="border-2 border-black bg-gray-300">
                  {editOrderData.expectedWeight
                    ? editOrderData.expectedWeight
                    : "0"}
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  User note
                </th>
                <th className="border-2 border-black">
                  <div name="" id="" className="h-20 w-30 bg-gray-300">
                    {editOrderData.note ? editOrderData.note : "---"}
                  </div>
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Payment
                </th>
                <th className="border-2 border-black bg-gray-300">
                  {editOrderData.payment ? editOrderData.payment : "---"}
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Payment image
                </th>
                <th className="border-2 border-black">
                  {paymentPic ? (
                    <img
                      src={
                        paymentPic
                          ? URL.createObjectURL(paymentPic)
                          : defaultPic
                      }
                      className="w-96 h-40"
                      alt=""
                    />
                  ) : (
                    <img
                      src={
                        editOrderData.paymentPicture
                          ? editOrderData.paymentPicture
                          : defaultPic
                      }
                      className="w-96 h-40"
                      alt=""
                    />
                  )}
                  <input
                    onChange={(e) => {
                      if (e.target.files[0]) {
                        setPaymentPic(e.target.files[0]);
                      }
                    }}
                    type="file"
                    className="w-15 text-xs absolute -my-5 -mx-16"
                  />
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Scrap image
                </th>
                <th className="border-2 border-black bg-gray-300">
                  <img
                    onClick={() =>
                      setIsOpenCheckScrapImage(!isOpenCheckScrapImage)
                    }
                    src={
                      editOrderData.scrapPicture
                        ? editOrderData.scrapPicture
                        : defaultPic
                    }
                    alt=""
                    className="w-40 h-40 cursor-pointer"
                  />
                  {isOpenCheckScrapImage && (
                    <div>
                      <img
                        src={editOrderData.scrapPicture}
                        alt=""
                        className="h-96 w-6/12 absolute -mx-56 -translate-x-96 -my-96 translate-y-16"
                      />
                      <div
                        onClick={() =>
                          setIsOpenCheckScrapImage(!isOpenCheckScrapImage)
                        }
                        className="h-96 w-96 absolute -mx- -translate-x-72  -my-96 translate-y- text-8xl cursor-pointer"
                      >
                        X
                      </div>
                    </div>
                  )}
                </th>
              </tr>

              <tr>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Phone number
                </th>
                <th className="border-2 border-black bg-gray-300">
                  {editOrderData.phoneNumber ? editOrderData.phoneNumber : "---"}
                  
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Admin note
                </th>
                <th className="border-2 border-black">
                  <textarea
                    name=""
                    id=""
                    onChange={(e) => setNoteAdmin(e.target.value)}
                    className="h-20 w-30"
                    value={noteAdmin ? noteAdmin : editOrderData.noteAdmin}
                  ></textarea>
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Actual weight
                </th>
                <th className="border-2 border-black bg-gray-300 p-5">
                  <input
                    onChange={(e) => setEditOrderActualWeight(e.target.value)}
                    type="text"
                    className="w-20 "
                  />
                  <div>kilogram</div>
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Total price
                </th>
                <th className="border-2 border-black bg-gray-300">
                  <input
                    className="w-20"
                    onChange={(e) => setTotalPrice(e.target.value)}
                    type="text"
                    name=""
                    id=""
                  />
                  <div>baht</div>
                </th>
                <th className="border-2 border-black bg-yellow-500  text-white">
                  Status
                </th>
                <th
                  onClick={() => setIsOpenStatus(!isOpenStatus)}
                  className="border-2 border-black cursor-pointer hover:bg-gray-400 bg-gray-300"
                >
                  {status ? status : editOrderData.status}
                </th>
                {isOpenStatus && (
                  <th className="bg-gray-500 absolute -mx-40 my-20  w-44  z-50">
                    <div
                      onClick={() => {
                        setIsOpenStatus(!isOpenStatus);
                        setStatus("REJECTED");
                      }}
                      className="border-2 border-gray-400 cursor-pointer hover:bg-gray-400  -mx-2 z-50"
                    >
                      REJECTED
                    </div>
                    <div
                      onClick={() => {
                        setIsOpenStatus(!isOpenStatus);
                        setStatus("COMPLETED");
                      }}
                      className="border-2 border-gray-400 cursor-pointer hover:bg-gray-400  -mx-2 z-50"
                    >
                      COMPLETED
                    </div>
                    <div
                      onClick={() => {
                        setIsOpenStatus(!isOpenStatus);
                        setStatus("PENDING");
                      }}
                      className="border-2 border-gray-400 cursor-pointer hover:bg-gray-400  -mx-2 z-50"
                    >
                      PENDING
                    </div>
                  </th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 "></td>
                <td className="bg-yellow-500 ">
                  <div className="flex gap-2">
                    <div className="cursor-pointer bg-green-600 hover:bg-green-500 text-white p-2 rounded-sm" onClick={handleEditOrder}>
                      Save
                    </div>
                    <div
                      className="cursor-pointer bg-red-600 hover:bg-gray-400 text-white p-2 rounded-sm"
                      onClick={() => setIsOpenEditOrder(!isOpenEditOrder)}
                    >
                      Cancel
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

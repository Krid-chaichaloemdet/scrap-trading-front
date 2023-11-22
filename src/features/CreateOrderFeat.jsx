// import { useEffect, useState } from "react";
// import axios from "../config/axios";
// import { useAuth } from "../hooks/use-auth";

// export default function CreateOrderFeat({ onclose }) {

//   const [isOpenCreateOrderScrap, setIsOpenCreateOrderScrap] = useState(false);
//   const [createOrderScrap, setCreateOrderScrap] = useState(null);

//   const [createOrderNote, setCreateOrderNote] = useState(null);
//   const [CreateOrderPhoneNumber, setCreateOrderPhoneNumber] = useState(null);
//   const [createOrderExpectedWeight, setCreateOrderExpectedWeight] = useState(null);
//   const [isOpenCreateOrderExpextedW, setIsOpenCreateOrderExpextedW] = useState(false);

//   const [isOpenCreateOrderPayment, setIsOpenCreateOrderPayment] = useState(false);
//   const [createOrderPayment, setCreateOrderPayment] = useState(null);

//   const [CreateOrderBuyOrSell, setCreateOrderBuyOrSell] = useState(null);
//   const [isOpenCreateOrderBuyOrSell, setIsOpenCreateOrderBuyOrSell] = useState(false);
//   const [CreateOrderScrapPicture, setCreateOrderScrapPicture] = useState(null);





//   const { productItem, authUser } = useAuth();



//   const handleCreateOrder = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("scrapPicture", CreateOrderScrapPicture);
//     formData.append("buyOrSell", CreateOrderBuyOrSell);
//     formData.append("scrap", createOrderScrap.id);
//     formData.append("expectedWeight", createOrderExpectedWeight);
//     formData.append("newPayment", createOrderPayment);
//     formData.append("note", createOrderNote);
//     formData.append("phoneNumber", CreateOrderPhoneNumber);
//     formData.append("userId", authUser.id);
//      await axios.post("/user/createFullOrder", formData).then((res)=>{

//        return  onclose(false)
//      }

//     )
//   };



//   const amounts = [
//     { id: 1, amount: "5" },
//     { id: 2, amount: "10" },
//     { id: 3, amount: "20" },
//     { id: 4, amount: "50" },
//     { id: 5, amount: "100" },
//     { id: 6, amount: "500" },
//   ];

//   return (
//     <div
//       action=""
//       className="cursor-pointer justify-center items-center  flex-col gap-2 w-auto fixed  -my-96 mx-52 p-5  rounded-lg grid grid-flow-row bg-gray-400 "
//     >
//       <div
//         onClick={() => setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell)}
//         type="text"
//         className="w-auto border rounded-lg outline-none  text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
//       >
//         {CreateOrderBuyOrSell ? CreateOrderBuyOrSell : "SELL ,BUY OR OFFER US AN AUCTION"}
//       </div>
//       {isOpenCreateOrderBuyOrSell && (
//         <ul className="">
//           <li
//             onClick={() => {
//               setCreateOrderBuyOrSell("SELLING");

//               return setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell);
//             }}
//             className="hover:bg-gray-200 border rounded-md"
//           >
//             SELLING
//           </li>
//           <li
//             onClick={() => {
//               setCreateOrderBuyOrSell("BUYING");

//               return setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell);
//             }}
//             className="hover:bg-gray-200 border-black rounded-md"
//           >
//             BUYING
//           </li>
//           <li
//             onClick={() => {
//               setCreateOrderBuyOrSell("AUCTION");

//               return setIsOpenCreateOrderBuyOrSell(!isOpenCreateOrderBuyOrSell);
//             }}
//             className="hover:bg-gray-200 border rounded-md"
//           >
//             AUCTION
//           </li>
//         </ul>
//       )}

//       <div
//         onClick={() => setIsOpenCreateOrderScrap(!isOpenCreateOrderScrap)}
//         type="text"
//         placeholder="Your scrap"
//         className="w-auto border rounded-lg outline-none  text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
//       >
//         {" "}
//         {createOrderScrap?.name ? createOrderScrap.name : "Select your kind of scrap"}
//       </div>
//       {isOpenCreateOrderScrap &&
//         productItem.map((data, i) => {
//           return (
//             <div
//               className=" hover:bg-gray-200 border-x-black rounded-md"
//               key={i}
//             >
//               <div
//                 onClick={() => {
//                   setCreateOrderScrap(data);
//                   return setIsOpenCreateOrderScrap(!isOpenCreateOrderScrap);
//                 }}
//                 className=" hover:bg-gray-200 border-black rounded-md"
//               >
//                 {data.name}
//               </div>
//             </div>
//           );
//         })}

//       <div
//         type="text"
//         placeholder="Your expected weight"
//         className="w-auto border rounded-lg outline-none  text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
//         onClick={() => setIsOpenCreateOrderExpextedW(!isOpenCreateOrderExpextedW)}
//         value={createOrderExpectedWeight ? createOrderExpectedWeight : "Your expected weight?"}
//         name="expectedWeight"
//       >
//         {createOrderExpectedWeight} TONS
//       </div>
//       {isOpenCreateOrderExpextedW && (
//         <div>
//           {amounts.map((data, i) => {
//             return (
//               <div className=" " key={i}>
//                 <div
//                   onClick={() => {
//                     setCreateOrderExpectedWeight(data.amount);

//                     return setIsOpenCreateOrderExpextedW(!isOpenCreateOrderExpextedW);
//                   }}
//                   className=" hover:bg-gray-200 border-x-black rounded-md"
//                   key={i}
//                 >
//                   {data.amount} TONS
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       <div
//         onClick={() => setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment)}
//         type="text"
//         placeholder="Your payment"
//         className="w-auto border rounded-lg outline-none  text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
//       >
//         {createOrderPayment ? createOrderPayment : "SELECT YOUR PAYMENT "}
//       </div>
//       <div>
//         {isOpenCreateOrderPayment && (
//           <ul className="w-auto border  rounded-lg outline-none  text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500">
//             <li
//               onClick={() => {
//                 setCreateOrderPayment("CASH");

//                 return setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment);
//               }}
//               className="hover:bg-gray-200 border rounded-md"
//             >
//               CASH
//             </li>
//             <li
//               onClick={() => {
//                 setCreateOrderPayment("MOBILE BANKING");

//                 return setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment);
//               }}
//               className="hover:bg-gray-200 border rounded-md"
//             >
//               MOBILE BANKING
//             </li>
//             <li
//               onClick={() => {
//                 setCreateOrderPayment("PROMPT PAY");

//                 return setIsOpenCreateOrderPayment(!isOpenCreateOrderPayment);
//               }}
//               className="hover:bg-gray-200 border rounded-md"
//             >
//               PROMPT PAY
//             </li>
//           </ul>
//         )}
//       </div>

//       <input
//         onChange={(e) => setCreateOrderPhoneNumber(e.target.value)}
//         placeholder="Your phone number"
//         className="w-auto border rounded-lg outline-none  text-lg focus:ring focus:ring-blue-300 focus:border-blue-500 border-gray-500"
//         value={CreateOrderPhoneNumber}
//         name="phoneNumber"
//       />

//       {CreateOrderScrapPicture ? (
//         <img
//           className="w-20 h-20 rounded-md"
//           src={CreateOrderScrapPicture ? URL.createObjectURL(CreateOrderScrapPicture) : "---"}
//           alt=""
//         />
//       ) : (
//         <div>Please add your scrap image</div>
//       )}
//       <input
//         type="file"
//         className=" rounded-lg w-60"
//         onChange={(e) => {
//           if (e.target.files[0]) {
//             setCreateOrderScrapPicture(e.target.files[0]);
//           }
//         }}
//         name="scrapPicture"
//       />

//       <textarea
//         onChange={(e) => setCreateOrderNote(e.target.value)}
//         placeholder="Write here..."
//         className="w-96 relative"
//         value={createOrderNote}
//         name="note"
//       />
//       <div className="flex gap-5">
//         <button
//           onClick={handleCreateOrder}

//           className="bg-green-400  w-60 text-white rounded-lg"
//         >
//           SUBMIT
//         </button>
//         <button
//           onClick={() => onclose(false)}
//           className="bg-red-400  w-60 text-white rounded-lg"
//         >
//           CANCEl
//         </button>
//       </div>
//     </div>
//   );
// }

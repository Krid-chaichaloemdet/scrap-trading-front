import { useState } from "react";
import Modal from "../component/Modal";
import ReadProductPictureButton from "../featureButton/ReadProductPictureButton";
import { useAuth } from "../hooks/use-auth";
import { FiPlusCircle } from "react-icons/fi";
import axios from "axios";

export default function ReadProductFeat() {
  const { productItem, authUser } = useAuth();
  const [isOpenEditProduct, setIsOpenProduct] = useState(false);
  const [editProductData, setEditProductData] = useState(null);

  const [isOpenProductDel, setIsOpenProductDel] = useState(false);
  const [producDelId, setProductDelId] = useState(null);

  const [productName, setProductName] = useState("" || null);
  const [price, setPrice] = useState(null);
  const [scrapPicture, setScrapPicture] = useState(null);
  const [productInfo, setProductInfo] = useState(null);

  const [error, setError] = useState(null);

  const [isOpenCreateProduct, setIsOpenCreateProduct] = useState(false);
  const [creareProductScrapName, setCreateProductScrapName] = useState(null);

  const [createProductScrapPic, setCreateProductScrapPic] = useState(null);

  const [createProductScrapPrice, setCreateProductScrapPrice] = useState(null);

  const [createProductScrapInfo, setCreateProductScrapInfo] = useState(null)

  const handleEditProduct = () => {
    const formData = new FormData();
console.log("kuy maaa")
    // if (price === null ) {
    //   return setError("This field can't be empty");
    // }
    // if (productName === null ) {
    //   return setError("This field can't be empty");
    // }
    // if (scrapPicture === null ) {
    //   return setError("This field can't be empty");
    // }
    // if (productInfo === null ) {
    //   return setError("This field can't be empty");
    // }

    if (productName !== null) {
      formData.append("productName", productName);
    }
    if (price !== null) {
      formData.append("price", price);
    }
    if (scrapPicture !== null) {
      formData.append("scrapPicture", scrapPicture);
    }
    if (productInfo !== null) {
      formData.append("productInfo", productInfo);
    }
    formData.append("productId", editProductData.id);
      console.log("here right")
    axios.patch("admin/editProductAdmin", formData).then((res) => {
      const afterEditProduct = productItem.findIndex((el) => {
        return el.id == res.data.id;
      });
      productItem[afterEditProduct] = res.data;
      return setIsOpenProduct(false);
    });
  };

  const handleDeleteProduct = async () => {
    await axios.post("admin/deleteProductAdmin", producDelId).then((res) => {
      const afterDelProduct = productItem.findIndex((el) => {
        return el.id == res.data.id;
      });
      productItem.splice(afterDelProduct, 1);
      return setIsOpenProductDel(false);
    });
  };

  const handleCreateProduct = async () => {
    const formData = new FormData();

    if (creareProductScrapName == null || "") {
      return setError("This field can't be empty");
    }

    if (createProductScrapPic == null || "") {
      return setError("This field can't be empty");
    }

    if (createProductScrapPrice == null || "") {
      return setError("This field can't be empty");
    }
    if (createProductScrapInfo == null || "") {
      return setError("This field can't be empty");
    }

    formData.append("creareProductScrapName", creareProductScrapName);

    formData.append("createProductScrapPic", createProductScrapPic);

    formData.append("createProductScrapPrice", createProductScrapPrice);

    formData.append("createProductScrapInfo", createProductScrapInfo);

    await axios.post("admin/createProductAdmin", formData).then((res) =>{
        productItem.push(res.data)
        return setIsOpenCreateProduct(false)
    });
  };
const defaultPic = "https://1000marcas.net/wp-content/uploads/2020/10/iCloud-Logo.png"
  return (
    <>
     <div 
     onClick={()=>console.log(productName)}
     className="text-gray-900  text-5xl flex font-extrabold justify-start  ">
        All Products
      </div>
      <div className="relative flex ">
        {isOpenEditProduct && (
          <div className=" bg-yellow-500 w-auto h-auto justify-center z-50 flex items-center fixed -translate-y-20 translate-x-96 mx-20">
            <table className="border-4 ">
              <thead className="border-4">
            <th className="p-5">EDIT PRODUCT</th>
                <tr>
                  <th className="border-4 p-2">TITLE</th>
                  <th className="border-4 ">INFORMATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-4 p-2">ID</td>
                  <td className="border-4 ">{editProductData.id}</td>
                </tr>
                <tr>
                  <td className="border-4 p-2">NAME</td>
                  {productName ? (
                    <input
                      onChange={(e) => setProductName(e.target.value)}
                      type="text"
                      name=""
                      id=""
                      value={productName}
                    />
                  ) : (
                    <input
                      onChange={(e) => setProductName(e.target.value)}
                      type="text"
                      name=""
                      id=""
                      value={
                        productName == "" ? productName : editProductData.name
                      }
                    />
                  )}
                  {error && <div className="text-red-500">{error}</div>}
                </tr>
                <tr>
                  <td className="border-4 p-2">PRICE</td>
                  {/* <td className="border-4">{editProductData.price}</td> */}
                  {price ? (
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      value={price}
                    />
                  ) : (
                    <input
                      onChange={(e) => setPrice(e.target.value)}
                      type="text"
                      value={price == "" ? price : editProductData.price}
                    />
                  )}
                  {error && <div className="text-red-500">{error}</div>}
                </tr>
                <tr>
                  <td className="border-4 ">PRODUCT IMAGE</td>
                  <td className="border-4">
                    {scrapPicture ? (
                      <img
                        className="w-40 h-40"
                        src={
                          scrapPicture
                            ? URL.createObjectURL(scrapPicture)
                            : "---"
                        }
                        alt=""
                      />
                    ) : (
                      <img
                        className="w-40 h-40"
                        src={editProductData.productPicture}
                        alt=""
                      />
                    )}
                    <input
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          setScrapPicture(e.target.files[0]);
                        }
                      }}
                      type="file"
                    />
                    {error && <div className="text-red-500">{error}</div>}
                  </td>
                </tr>
                <tr>
                  <td className="border-4 p-5">PRODUCT INFORMATION</td>

                  {productInfo ? (
                    <textarea
                      rows={5}
                      type="text"
                      onChange={(e) => setProductInfo(e.target.value)}
                      value={productInfo}
                      className="w-full "
                    />
                  ) : (
                    <textarea
                    rows={5}
                      type="text"
                      className="w-full "
                      onChange={(e) => setProductInfo(e.target.value)}
                      value={
                        productInfo == ""
                          ? productInfo
                          : editProductData.productInfo
                      }
                    />
                  )}
                  {error && <div className="text-red-500">{error}</div>}
                </tr>
                <tr>
                  <td
                    onClick={handleEditProduct}
                    className="border-4  bg-green-400 hover:green-500 cursor-pointer"
                  >
                    SAVE
                  </td>
                  <td
                    onClick={() => {
                      setError(null);
                      setProductInfo(null);
                      setPrice(null);
                      setProductName(null);
                      setIsOpenProduct(!isOpenEditProduct);
                    }}
                    className="border-4  bg-gray-500 hover:bg-gray-600 cursor-pointer"
                  >
                    CANCEL
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {isOpenProductDel && (
          <div className="bg-yellow-500 rounded-md w-auto text-5xl h-auto justify-center flex p-20 flex-col items-center fixed -translate-y-10 translate-x-40 z-50">
            <div
            className="text-6xl p-20"
            >Do you want to delete this item ?</div>
            <div className="flex gap-5 p-10">
              <div className="hover:bg-gray-400 p-5 rounded-md cursor-pointer" onClick={handleDeleteProduct}>
                yes
              </div>
              <div
                className="hover:bg-gray-400 p-5 rounded-md cursor-pointer"
                onClick={() => setIsOpenProductDel(!isOpenProductDel)}
              >
                no
              </div>
            </div>
          </div>
        )}
        {isOpenCreateProduct && (
          <div className="bg-yellow-500 w-auto h-auto justify-center flex z-50  items-center fixed -translate-y-16 mx-2 translate-x-96 ">
            <table className="border-4">
              <thead className="">
                  <th className="p-5 text-xl">CREATE PRODUCT</th>
                <tr className="border-4">
                  <th className=" border-4 p-5">Product name</th>
                  <th>
                    <input
                      onChange={(e) =>
                        setCreateProductScrapName(e.target.value)
                      }
                      type="text"
                      name=""
                      id=""
                      value={creareProductScrapName}
                      className="rounded-sm"
                    />
                    {error && <div className="text-red-500">{error}</div>}
                  </th>
                </tr>
                <tr className="border-4">
                  <th className="border-4">Product image</th>
                  <th>
                    <img src={createProductScrapPic ? URL.createObjectURL(createProductScrapPic) : defaultPic} alt="" className="h-40 w-40" />
                    <input
                      onChange={(e) => {
                        if (e.target.files[0]) {
                          setCreateProductScrapPic(e.target.files[0]);
                        }
                      }}
                      type="file"
                      name=""
                      id=""
                    />
                    {error && <div className="text-red-500">{error}</div>}
                  </th>
                </tr>
                <tr className=" border-4">
                  <th className=" border-4 p-10 bg-yellow-500"> Product information</th>
                  <th>
                    <textarea 
                    placeholder="Write here ..."
                    onChange={(e) =>
                        setCreateProductScrapInfo(e.target.value)
                      }
                    type="text" cols={40} rows={5} />
                    {error && <div className="text-red-500">{error}</div>}
                  </th>
                </tr>
                <tr className="border-4">
                  <th className=" border-4 p-5"> Price per kilogram</th>
                  <th>
                    <input 
                    className="w-20"
                    onChange={(e) =>
                        setCreateProductScrapPrice(e.target.value)
                      }
                    type="text" />
                    {error && <div className="text-red-500">{error}</div>}
                    {" "} BAHT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td onClick={handleCreateProduct} className="bg-green-400 hover:bg-green-500 cursor-pointer p-2">
                    Create
                  </td>
                  <td
                    onClick={() => {
                        setIsOpenCreateProduct(!isOpenCreateProduct)}}
                    className="border-4 bg-gray-500   hover:bg-gray-600 cursor-pointer"
                  >
                    Cancel
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <FiPlusCircle
          onClick={() => setIsOpenCreateProduct(!isOpenCreateProduct)}
          className="text-5xl absolute translate-x-16 translate-y-6 cursor-pointer"
        />
        <table className="m-20 border-2 bg-gray-100">
          <thead className="border-2">
            <tr className="">
              <th className="border-2 bg-yellow-500">Id</th>
              <th className="border-2 bg-yellow-500">Name</th>
              <th className="border-2 bg-yellow-500">Price</th>
              <th className="border-2 bg-yellow-500">Product image</th>
              <th className="border-2 bg-yellow-500">Product information</th>
              <th className="border-2 bg-yellow-500">Edit</th>
            </tr>
          </thead>
          {productItem?.map((data, i) => {
            return (
              <tbody key={i} className="border-2">
                <tr>
                  <td className="border-2">{data.id}</td>
                  <td className="border-2">{data.name}</td>
                  <td className="border-2">{data.price}</td>
                  <td className="border-2">
                    <img
                      className="h-20 w-20"
                      src={data.productPicture}
                      alt=""
                    />
                  </td>
                  <td className="border-2">{data.productInfo}</td>
                  <td className="border-2">
                    <div className="flex gap-2">
                      <div
                        className="cursor-pointer bg-green-600 text-white p-1"
                        onClick={() => {
                          setEditProductData(data);
                          setIsOpenProduct(!isOpenEditProduct);
                        }}
                      >
                        edit
                      </div>
                      <div
                        onClick={() => {
                          setProductDelId({ id: data.id });
                          setIsOpenProductDel(!isOpenProductDel);
                        }}
                        className="bg-red-600 cursor-pointer text-white p-1"
                      >
                        delete
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
}

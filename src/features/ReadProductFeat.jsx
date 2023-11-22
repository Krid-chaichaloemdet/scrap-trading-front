import ReadProductPictureButton from "../featureButton/ReadProductPictureButton";
import { useAuth } from "../hooks/use-auth";

export default function ReadProductFeat() {


  const { productItem } = useAuth();
  console.log("KUY",productItem)
  return (
    <  >
    <div className="flex flex-col w-full h-screen  p-10">

      <div className="text-gray-900  text-5xl flex font-extrabold justify-start  mb-2">
        Lists of scraps we are interested
      </div>
      <div className="flex flex-col bg-yellow-500 rounded-md  overflow-y-scroll w-8/12 h-5/6">
        {productItem?.map((data, i) => {
          return (
            <div className="flex " key={i}>
              <div
                className="bg-gray-200 p-1 rounded-md   text-black flex justify-start text-2xl m-2 "
                key={i}
              >
                ID {data.id} {data.name} unit price {data.price} THB. per 1 kg. 
              </div>
       
              

              
              <ReadProductPictureButton data={data} />
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}

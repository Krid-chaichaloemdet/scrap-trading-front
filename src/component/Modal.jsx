export default function Modal({
  title,
  children,
  maxWidth = 36,
  open,
  onClose,
  data,
}) {
  return (
    <>
      {open && (
        <>
          <div className="fixed inset-0 bg-white opacity-10 z-20"></div>
          <div className="fixed inset-0 z-30 mb- ">
            <div className="flex justify-center items-center min-h-full p-4">
              <div
                className="rounded-lg w-full bg-white shadow-2xl border h-96"
                style={{ maxWidth: `${maxWidth}rem` }}
              >
                <div className="flex justify-between p-4 text-xl border-b">
                  <div className="invisible">X</div>
                  <div className="font-bold">{title}</div>
                  <div
                    className="text-gray-500 cursor-pointer"
                    onClick={onClose}
                  >
                    X
                  </div>
                </div>
                <div className="flex justify-between">
                  <img
                    className=" h-72 w-72    rounded-xl p-5 "
                    src={data.productPicture}
                    alt=""
                  ></img>

                  <p className=" bg-red-200 w-52 mr-32  ">
                    ddddddddddddddddddddddd

                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

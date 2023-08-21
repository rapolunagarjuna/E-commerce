import GreenBtn from "../../GreenBtn";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa";



function AddRemoveButton({ num, addFunction, removeFunction }) {
  return (
    <div className="w-fit flex flex-row gap-2 items-center justify-center">
      <div
        className="bg-gray-200 border border-slate-900 hover:bg-secondary text-xs p-2 hover:text-base rounded-full hover:cursor-pointer shadow-xl"
        onClick={removeFunction}
      >
        <FaMinus />
      </div>
      <span>{num}</span>
      <div
        className="bg-gray-200 border border-slate-900 hover:bg-secondary text-xs p-2 hover:text-base rounded-full hover:cursor-pointer shadow-xl"
        onClick={addFunction}
      >
        <FaPlus />
      </div>
    </div>
  );
}

export default function AddToInventoryForm({ product, onClose, onClick }) {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const removeQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity - 1);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
      <div className="bg-slate-100 opacity-100 min-w-fit w-5/12 p-6 z-10 shadow-xl">
        {/* Your form content */}
        <div className="flex flex-row justify-end">
          <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full">
            Add to Inventory
          </h2>
          <IoMdClose
            size={30}
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="text-primary text-xl mt-3 mb-3">
          <div className="flex flex-row">
            <div className="flex flex-col w-fit">
              <p className="my-2">Name</p>
              <p className="my-2">Product Code</p>
              <p className="my-2">Dimension</p>
              <p className="my-2">Current Inventory</p>
            </div>

            <div className="flex flex-col w-fit ml-4">
              <p className="my-2">{product.name}</p>
              <p className="my-2">{product.productCode}</p>
              <p className="my-2">{product.dimension}</p>
              <p className="my-2">{product.quantity}</p>
            </div>
          </div>

          <div className="text-primary text-xl mt-3 mb-3">

            <div className="flex flex-row">
              <div className="flex flex-col gap-4">
                <span className="h-7">Quantity</span>
              </div>

              <div className="flex flex-col pl-7 gap-4">
                <div className="h-7">
                  <AddRemoveButton
                    num={quantity}
                    addFunction={addQuantity}
                    removeFunction={removeQuantity}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end w-full">
          <GreenBtn name="Add" loading={loading} func={() => onClick(quantity)} />
        </div>
      </div>
    </div>
  );
}

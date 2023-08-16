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

export default function EditOrderItemForm({ item, onSave, onClose }) {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);

  console.log(item.quantity, item.price);

  const handleSave = () => {
    setLoading(true);
  };

  const addQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const removeQuantity = (e) => {
    e.preventDefault();
    setQuantity(quantity - 1);
  };

  const addPrice = (e) => {
    e.preventDefault();
    setPrice(price + 1);
  };

  const removePrice = (e) => {
    e.preventDefault();
    setPrice(price - 1);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
      <div className="bg-slate-100 opacity-100 min-w-fit w-3/12 p-6 z-10 shadow-xl">
        {/* Your form content */}
        <div className="flex flex-row justify-end">
          <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full">
            Item Details
          </h2>
          <IoMdClose
            size={30}
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="text-primary text-xl mt-3 mb-3">
          <p className="my-2">{item.name}</p>

          <div className="flex flex-row">
            <div className="flex flex-col gap-4">
              <span className="h-7">Quantity</span>
              <span className="h-7">Price</span>
            </div>

            <div className="flex flex-col pl-7 gap-4">
              <div className="h-7">
                <AddRemoveButton
                  num={quantity}
                  addFunction={addQuantity}
                  removeFunction={removeQuantity}
                />
              </div>
              <div className="h-7">
                <AddRemoveButton
                  num={price}
                  addFunction={addPrice}
                  removeFunction={removePrice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-row justify-end w-full">
          <GreenBtn
            name="Save"
            loading={loading}
            func={() =>
              onSave({
                productCode: item.productCode,
                quantity: quantity,
                price: price,
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

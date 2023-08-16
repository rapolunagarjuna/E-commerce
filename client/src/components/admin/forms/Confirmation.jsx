import { useState } from "react";
import {IoMdClose } from "react-icons/io";
import GreenBtn from "../../GreenBtn";
import BlueBtn from "../../BlueBtn";



export default function ConfirmDeleteForm({
  name,
  visible,
  onClose,
  onConfirm,
}) {
  const [loading, setLoading] = useState(false);

  if (!visible) {
    return null;
  }

  const handleConfirm = async () => {
    setLoading(true);
    try {
      await onConfirm(); // Perform the actual deletion logic here
      setLoading(false);
      onClose(); // Close the confirmation dialog
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
      <div className="bg-slate-100 opacity-100 w-4/12 p-6 z-10 shadow-xl">
        <div className="flex flex-row justify-end">
          <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full"></h2>
          <IoMdClose
            size={30}
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="text-primary text-xl mt-10 mb-10">
          <p className="my-5 text-center">Are you sure you want to {name}?</p>
        </div>
        <div className="flex flex-row justify-between w-full">
          <BlueBtn name="No" func={onClose} />
          <GreenBtn name="Yes" loading={loading} func={handleConfirm} />
        </div>
      </div>
    </div>
  );
}

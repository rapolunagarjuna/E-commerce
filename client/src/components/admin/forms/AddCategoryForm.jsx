import GreenBtn from "../../GreenBtn";
import { useState} from "react";
import {IoMdClose } from "react-icons/io";

export default function AddCategoryForm({ visible, onClose, apiCall }) {
    const [loading, setLoading] = useState(false);
    const [categoryName, setCategoryName] = useState("");
  
    if (!visible) {
      return null;
    }
  
    const handleClick = () => {
      setLoading(true);
      if (categoryName === "") {
        alert("Cannot have empty fields");
        setLoading(false);
      }
  
      try {
          apiCall(categoryName);
          setLoading(false);
          onClose();
      } catch (error) {
          console.error(error);
          setLoading(false);
          onClose();
      }
    };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
        <div className="bg-slate-100 opacity-100 w-5/12 p-6 z-10 shadow-xl">
          {/* Your form content */}
          <div className="flex flex-row justify-end">
            <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full">
              Add Category
            </h2>
            <IoMdClose
              size={30}
              className="hover:cursor-pointer"
              onClick={onClose}
            />
          </div>
          <div className="text-primary text-xl mt-3 mb-3">
            <p className="my-2">Category Name</p>
            <input
              className="p-2 border border-primary my-2 w-full"
              type="text"
              placeholder="Enter category name here"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-end w-full">
            <GreenBtn name="Save" loading={loading} func={handleClick} />
          </div>
        </div>
      </div>
    );
  }
  
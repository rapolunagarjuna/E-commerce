import GreenBtn from "../../GreenBtn";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BACKEND_URL } from "../../../../config";
import Cookies from "js-cookie";

export default function EditEmployeeForm({ visible, onClose, onChange, user}) {
  const [loading, setLoading] = useState(false);
  const TOKEN = Cookies.get("token");

  if (!visible) {
    return null;
  }

  const handleClick = async () => {
    setLoading(true);
    fetch(BACKEND_URL + "/api/admin/employees?token=" + TOKEN,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        body: JSON.stringify({
            email:user.email,
            discount: discount
        })}
    )
      .then((response) => response.json())
      .then((data) => {
        onChange(data.user);
        onClose();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/30 z-5 flex items-center justify-center">
      <div className="bg-slate-100 opacity-100 w-5/12 p-6 z-10 shadow-xl">
        {/* Your form content */}
        <div className="flex flex-row justify-end">
          <h2 className="text-2xl text-primary text-center font-semibold mb-4 w-full">
            Edit Employee
          </h2>
          <IoMdClose
            size={30}
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="text-primary text-xl mt-3 mb-3">
          <p className="my-2">{"First Name:" + user.firstName}</p>
          <p className="my-2">{"Last Name:" + user.lastName}</p>
          <p className="my-2">{"Phone:" + user.phoneNumber}</p>
          <p className="my-2">{"Email:" + user.email}</p>

        </div>
        <div className="flex flex-row justify-end w-full">
          <GreenBtn name="Save" loading={loading} func={handleClick} />
        </div>
      </div>
    </div>
  );
}

import GreenBtn from "../../GreenBtn";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BACKEND_URL } from "../../../../config";
import Cookies from "js-cookie";

export default function AddUserForm({ visible, onClose, onChange }) {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [discount, setDiscount] = useState("");
  const TOKEN = Cookies.get("token");

  if (!visible) {
    return null;
  }

  const handleClick = async () => {
    setLoading(true);
    fetch(BACKEND_URL + "/api/admin/users?token=" + TOKEN,{
        method: "POST",
        headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role,
            discount: discount,
            phoneNumber: phone,
        })}
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
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
            Add User
          </h2>
          <IoMdClose
            size={30}
            className="hover:cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="text-primary text-xl mt-3 mb-3">
          <p className="my-2">First Name</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter first name here"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <p className="my-2">Last Name</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter last name here"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <p className="my-2">Phone</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="text"
            placeholder="Enter phone number here"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <p className="my-2">Email</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="email"
            placeholder="Enter email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <p className="my-2">Role</p>
          <select
            className="p-2 border border-primary my-2 w-full"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option
              className="p-2 border border-primary my-2 w-full"
              value=""
              disabled
            >
              Select a role
            </option>
            <option
              className="p-2 border border-primary my-2 w-full"
              value="Admin"
            >
              Admin
            </option>
            <option
              className="p-2 border border-primary my-2 w-full"
              value="User"
            >
              User
            </option>
            <option
              className="p-2 border border-primary my-2 w-full"
              value="Editor"
            >
              Editor
            </option>
          </select>

          <p className="my-2">Discount (%)</p>
          <input
            className="p-2 border border-primary my-2 w-full"
            type="number"
            placeholder="Enter discount here"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div className="flex flex-row justify-end w-full">
          <GreenBtn name="Save" loading={loading} func={handleClick} />
        </div>
      </div>
    </div>
  );
}

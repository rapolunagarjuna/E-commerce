import PersistentDrawerLeft from "./SideBar";
import BlueBtn from "../BlueBtn";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import AddEmployeeForm from "./forms/AddEmployeeForm";
import ConfirmDeletForm from "./forms/Confirmation.jsx";
import EditEmployeeForm from "./forms/EditEmployeeForm";
import { BACKEND_URL } from "../../../config";


const headers = [
  "First Name",
  "Last Name",
  "Phone Number",
  "Email",
  "Actions",
];

export default function AdminEmployees() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [isAddEmployeeFormVisible, setAddEmployeeFormVisible] = useState(false);
  const [isEditEmployeeFormVisible, setEditEmployeeFormVisible] = useState(false);
  const [isConfirmDeleteFormVisible, setConfirmDeleteFormVisible] =
    useState(false);
  const TOKEN = Cookies.get("token");

  useEffect(() => {
    fetch(BACKEND_URL + `/api/admin/employees?token=${TOKEN}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    setAddEmployeeFormVisible(true);
  };

  const handleAddUserToTable = (newUser) => {
    console.log(newUser);
    const updatedUsers = [newUser, ...users];
    setUsers(updatedUsers);
  };

  const handleDeleteUser = (user) => {
    setUser(user);
    setConfirmDeleteFormVisible(true);
  };

  const handleEditUser = (user) => {
    setUser(user);
    setEditEmployeeFormVisible(true);
  };

  const handleEditChangeUserToTable = (newUser) => {
    const updatedUsers = users.map((item) => {
      if (item.email === newUser.email) {
        return newUser;
      } else {
        return item;
      }
    });
    setUsers(updatedUsers);
  };

  async function deleteUserApi() {
    fetch(BACKEND_URL + "/api/admin/users/" + user.email + "?token=" + TOKEN, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = users.filter((item) => item.email !== user.email);
        console.log(updatedUsers);
        setUsers(updatedUsers);
        setUser("");
      })
      .catch((error) => console.error(error));
  }

  return (
    <PersistentDrawerLeft>
      <div className="flex flex-col w-full">
        <p className="mb-10 mt-16 text-primary text-center text-5xl">Employees</p>

        <div className="flex flex-row w-10/12 h-fit mb-10 justify-end mx-auto">
          <BlueBtn name="Add Employee" func={handleAddUser} />
        </div>

        <table className="border-collapse w-10/12 mx-auto">
          <thead>
            <tr>
              {headers.map((item) => (
                <th className="border-2 border-primary p-2 text-lg font-bold bg-blue-200">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((item, key) => {
              return (
                <tr key={key}>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.firstName}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.lastName}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.phoneNumber}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg text-center">
                    {item.email}
                  </td>
                  <td className="border-2 border-primary p-2 text-lg  w-32 h-full">
                    <div className="flex flex-row m-auto w-fit h-fit">
                      <IoMdCreate
                        size={30}
                        className="hover:cursor-pointer"
                        onClick={() => handleEditUser(item)}
                      />
                      <IoMdTrash
                        size={30}
                        className="hover:cursor-pointer"
                        onClick={() => handleDeleteUser(item)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <AddEmployeeForm
          visible={isAddEmployeeFormVisible}
          onClose={() => setAddEmployeeFormVisible(false)}
          onChange={(user) => handleAddUserToTable(user)}
        />
        <ConfirmDeletForm
          name={`delete the user whose email is ${user.email}`}
          onConfirm={deleteUserApi}
          visible={isConfirmDeleteFormVisible}
          onClose={() => setConfirmDeleteFormVisible(false)}
        />
        <EditEmployeeForm
          visible={isEditEmployeeFormVisible}
          user={user}
          onChange={(user) => handleEditChangeUserToTable(user)}
          onClose={() => setEditEmployeeFormVisible(false)}
        />
      </div>
    </PersistentDrawerLeft>
  );
}

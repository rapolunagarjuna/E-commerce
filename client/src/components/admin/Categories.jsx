import PersistentDrawerLeft from "./SideBar";
import BlueBtn from "../BlueBtn";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { IoMdCreate, IoMdTrash } from "react-icons/io";
import { BACKEND_URL } from "../../../config.js";
import ConfirmDeleteForm from "./forms/Confirmation";
import AddCategoryForm from "./forms/AddCategoryForm";

const headers = ["S.No", "Category Name", "Actions"];

export default function AdminCategories() {
  const [categories, setCategories] = useState([]);
  const [isAddCategoryFormVisible, setAddCategoryFormVisible] = useState(false);
  const [isConfirmDeleteForm, setConfirmDeleteForm] = useState(false);
  const TOKEN = Cookies.get("token");
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    fetch(BACKEND_URL + `/api/admin/categories?token=${TOKEN}`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.categories);
      });
  }, TOKEN);

  const handleAddCategory = (e) => {
    e.preventDefault();
    setAddCategoryFormVisible(true);
  };

  const handleDeleteCategory = (name) => {
    setCategoryName(name);
    setConfirmDeleteForm(true);
  };

  async function deleteCategoryApiCall() {
    try {
      const response = await fetch(
        BACKEND_URL +
          "/api/admin/categories/" +
          categoryName +
          "?token=" +
          TOKEN,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const updatedCategories = categories.filter(
          (item) => item.name !== categoryName
        );
        setCategories(updatedCategories);
        setCategoryName("");
      } else {
        console.error("Failed to delete category");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function addCategoryApiCall(categoryName) {
    const categoryData = {
      name: categoryName,
    };

    fetch(BACKEND_URL + "/api/admin/categories?token=" + TOKEN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(categoryData),
    })
      .then((response) => {
        const updatedCategories = [...categories, { name: categoryName }];
        setCategories(updatedCategories);
        setLoading(false);
        onClose();
      })
      .catch((error) => console.error(error));
    setLoading(false);
  }

  const handleEditCategory = (e) => {
    e.preventDefault();
  };

  return (
    <PersistentDrawerLeft>
      <div className="flex flex-col w-full">
        <p className="mb-10 mt-16 text-primary text-center text-5xl">
          Categories
        </p>

        <div className="flex flex-row w-8/12 h-fit mb-10 justify-end mx-auto">
          <BlueBtn name="Add Category" func={handleAddCategory} />
        </div>

        <table className="border-collapse w-8/12 mx-auto">
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
            {categories.map((item, key) => (
              <tr key={key}>
                <td className="border-2 border-primary p-2 text-lg text-center">
                  {key + 1}
                </td>
                <td className="border-2 border-primary p-2 text-lg text-center">
                  {item.name}
                </td>
                <td className="border-2 border-primary p-2 text-lg w-32 h-full">
                  <div className="flex flex-row m-auto w-fit h-fit">
                    <IoMdCreate
                      size={30}
                      className="hover:cursor-pointer"
                      onClick={handleEditCategory}
                    />
                    <IoMdTrash
                      size={30}
                      className="hover:cursor-pointer"
                      onClick={() => handleDeleteCategory(item.name)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AddCategoryForm
          visible={isAddCategoryFormVisible}
          onClose={() => setAddCategoryFormVisible(false)}
          apiCall={addCategoryApiCall}
        />

        <ConfirmDeleteForm
          visible={isConfirmDeleteForm}
          onClose={() => setConfirmDeleteForm(false)}
          onConfirm={deleteCategoryApiCall}
          name={"delete the category named " + categoryName}
        />
      </div>
    </PersistentDrawerLeft>
  );
}

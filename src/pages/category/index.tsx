import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NotFound } from "../../components";
import { createCategory, updateCategory, deleteCategory } from "../../redux/actions/categoryAction";
import { FormSubmit, RootStore, ICategory } from "../../utils/TypeScript";

const Category = () => {
  const [name, setName] = useState("");
  const [edit, setEdit] = useState<ICategory | null>(null);

  const { auth, categories } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();

  useEffect(() => {
if(edit) setName(edit.name)
  },[edit])

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    if (!auth.access_token || !name) return;

    if (edit) {
      if(edit.name === name) return;
      const data = { ...edit, name }
      dispatch(updateCategory(data, auth.access_token))
      
    } else {
      dispatch(createCategory(name, auth.access_token));
      
    }
    setName("");
    setEdit(null)
  };
  const handleDelete = (id: string) => {
    if (!auth.access_token) return;
    dispatch(deleteCategory(id, auth.access_token))
  }
  if (auth.user?.role !== "admin") return <NotFound />;
  return (
    <div className="category">
      <form onSubmit={handleSubmit}>
        <label htmlFor="category">Category</label>
        <div className="d-flex align-items-center">
          {
            edit && <i className="me-2 text-danger fas fa-times"
              style={{cursor: 'pointer'}}
            onClick={() => setEdit(null)} />
          }
          <input
            type="text"
            name="category"
            id="category"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">
            {edit ? 'Update' : 'Create'}
          </button>
        </div>
      </form>
      {categories.map((category) => (
        <div key={category._id}>
          <div className="category_row">
            <p className="m-0 text-captialize"> {category.name}</p>
            <div>
              <i className="mx-2 fas fa-edit text-primary"
              onClick={() => setEdit(category)} />
              <i className="mx-2 fas fa-trash-alt text-danger" onClick={() => handleDelete(category._id) }/>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;

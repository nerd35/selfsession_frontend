import React from "react";
import { useSelector } from "react-redux";
import { RootStore, IBlog, InputChange } from "../../utils/TypeScript";

interface IProps {
  blog: IBlog;
  setBlog: (blog: IBlog) => void;
}

const CreateForm: React.FC<IProps> = ({ blog, setBlog }) => {
  const { categories } = useSelector((state: RootStore) => state);

  const handleInputChange = (e: InputChange) => {
    const { value, name } = e.target;
    setBlog({ ...blog, [name]: value });
  };

  const handleThumbnailChange = (e: InputChange) => {
    const target = e.target as HTMLInputElement;
    const files = target.files
    if (files) {
      const file = files[0]
      setBlog({ ...blog, thumbnail: file })
    }
  };

  return (
    <form>
      <div className="form-group position-relative">
        <input
          type="text"
          className="form-control"
          name="title"
          value={blog.title}
          onChange={handleInputChange}
        />
        <small
          className="text-muted position-absolute"
          style={{ top: "12px", right: "10px", opacity: "0.4" }}
        >
          {blog.title.length}/50
        </small>
      </div>

      <div className="my-3 form-group">
        <input
          type="file"
          className="form-control1"
          accept="image/*"
          onChange={handleThumbnailChange}
        />
      </div>

      <div className="form-group position-relative">
        <textarea
          className="form-control2"
          rows={4}
          value={blog.description}
          name="description"
          style={{ resize: "none" }}
          onChange={handleInputChange}
          placeholder="Enter Post description"
        />
        <small
          className="text-muted position-absolute"
          style={{ top: "12px", right: "10px", opacity: '0.4' }}
        >
          {blog.description.length}/200
        </small>
      </div>

      <div className="my-3 form-group">
        <select className="form-control2 text-capitalize" value={blog.category} name="category" onChange={handleInputChange}>
          <option value="">Choose a Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default CreateForm;

import React, { useEffect, useState } from "react";
import { useParams , useHistory} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootStore, IParams, IBlog } from "../../utils/TypeScript";
import { getBlogsByCategoryId } from "../../redux/actions/blogAction";
import { CardVert, Loadings, Pagination, SideBar } from "../../components";

const BlogsByCategory = () => {
  const { categories, blogsCategory } = useSelector(
    (state: RootStore) => state
  );

  const dispatch = useDispatch();
  const history = useHistory()

  const { slug } = useParams<IParams>();

  const [categoryId, setCategoryId] = useState("");
  const [blogs, setBlogs] = useState<IBlog[]>();
  const [total, setTotal] = useState(0);

  const { search } = history.location;

  useEffect(() => {
    const category = categories.find((item) => item.name === slug);
    if (category) setCategoryId(category._id);
  }, [slug, categories]);

  useEffect(() => {
    if (!categoryId) return;

    if (blogsCategory.every((item) => item.id !== categoryId)) {
      dispatch(getBlogsByCategoryId(categoryId, search));
    } else {
      const data = blogsCategory.find((item) => item.id === categoryId);
      if (!data) return;
      setBlogs(data.blogs);
      setTotal(data.total);
      if(data.search) history.push(data.search)
    }
  }, [categoryId, blogsCategory, dispatch, search, history]);

  const handlePagination = (num: number) => {
    const search = `?page=${num}`
    dispatch(getBlogsByCategoryId(categoryId, search));
  }

  if (!blogs) return <Loadings />;
  return (
    <div className="">
      <div className=" row">
        <div className="col-md-8">
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog._id} className="col-md-6">
                <CardVert  blog={blog} />
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <SideBar />
        </div>
      </div>
      {
        total > 1 &&
      <Pagination total={total} callback={handlePagination} />
      }
    </div>
  );
};

export default BlogsByCategory;

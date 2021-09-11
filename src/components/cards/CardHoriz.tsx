import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { IBlog, RootStore } from '../../utils/TypeScript';

interface IProps {
  blog: IBlog
}


const CardHoriz: React.FC<IProps> = ({ blog}) => {

  const {auth} = useSelector((state: RootStore) => state)
  return (
      <div className="mt-5 post-card">
      <div className="Post-card-image">
        {
          blog.thumbnail &&
          <>
            {
              typeof (blog.thumbnail) === 'string'
                ? <Link to={`/blog/${blog._id}`}>
                  <img src={blog.thumbnail} alt="thumbnail" className="card-img" style={{marginTop: '-50px !important'}} />
                </Link>
                : <img src={URL.createObjectURL(blog.thumbnail)} alt="thumbnail" className="card-img" />
            }
          </>
        }
              
            </div>
            <div className="post-card-content">
                <Link to="" className="categorie">{blog.category}</Link>
                <h5 className="post-card-title">{blog.title}</h5>
                <p className="post-card-text">{blog.description}</p>
                <div className="post-card-info">
                    <div>
                        <img src={auth.user?.avatar} alt="author" className="post-card-author"/>
                    </div>
                    <div>
                        <p className="post-card-author-title"> {auth.user?.name}</p>
                    </div>
                    <div>
                        <p className="post-card-date">{new Date(blog.createdAt).toLocaleString()}</p>
                    </div>

                </div>
            </div>
          </div>
  )
}

export default CardHoriz

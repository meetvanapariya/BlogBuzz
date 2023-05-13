import React from 'react';
import {  Link } from "react-router-dom";
import moment from "moment";
const BlogCard = ({blogs}) =>{
  return(
    <>
      {blogs.map(blog => (
        <div className="col-md-4" key={blog.title}>
          <div className="blog-card-content">
            <img src={blog.image} alt="img"/>
            <div className="card-body">
              <h5 className="card-title light-300 text-dark">{blog.title}</h5>
              <div className="d-flex justify-content-between">
                <p>{blog.userName}</p>
                <p>{moment(blog.createdAt).format('DD MMM YY')}</p>
              </div>

              <p>{blog.body.length > 150 ? `${blog.body.slice(0, 150)}...` : blog.body}</p>
              <Link to={`blog/${blog.slug}`} class="contact-us-btn text-decoration-none">Read More</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default BlogCard;
import React, {useEffect} from "react";
import BlogCard from "../blogs/blog-card";
import axios from "axios";
import {BLOG_URL_API} from "../blogs/blog-main-section";
import {Link} from "react-router-dom";
const LatestBlog = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const fetchBlogs = async () => {
    try {
      const response = await axios.get(BLOG_URL_API, {
        params: {
          _limit: 3,
        },
      });
      setBlogs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    fetchBlogs();
  },[])
  return(
    <div className="mt-4">
      <h2 className="blog-heading">Latest Blogs</h2>
      {isLoading && <div className="text-center mt-4 mb-4">Loading...</div>}
      {!isLoading && blogs.length === 0 && <div className="text-center mt-4 mb-4">No blogs available</div>}
      {!isLoading && blogs.length > 0 && (
        <div className="blog-cards row">
          <BlogCard blogs={blogs}/>
          <div className="text-center mt-4 mb-4">
            <Link to="/blog" className="btn btn-primary">View All Blogs</Link>
          </div>
        </div>
      )}
    </div>
  )
}
export default LatestBlog;
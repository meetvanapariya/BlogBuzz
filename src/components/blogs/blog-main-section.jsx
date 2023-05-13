import React , {useState , useEffect } from 'react';

import BlogCard from "./blog-card";
import axios from "axios";
import BlogSearchBar from "./blog-search";


export const port = 3004; // Replace with the actual port number or dynamically retrieve it
export const BASE_URL_API = `http://localhost:${port}`;
export const BLOG_URL_API = `${BASE_URL_API}/blogs`;
const PAGE_SIZE = 10; // Number of blogs to show per page

const BlogMainSection = () =>{
  const [blogs , setBlogs] = useState([]);
  const [isLoading , setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const fetchBlogs =  async () =>{
    try {
      const response = await axios.get(BLOG_URL_API, {
        params: {
          _limit: PAGE_SIZE,
          _start: (currentPage - 1) * PAGE_SIZE,
        },
      });
      setBlogs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const searchBlog = (val) => {
    if(val === "") return fetchBlogs();
    const filteredBlogs = blogs.filter((blog) => {
      return blog.title.toLowerCase().includes(val.toLowerCase());
    });
    setBlogs(filteredBlogs);
  }
  useEffect(() => {
    setIsLoading(true);
    fetchBlogs();
  },[currentPage])
  return(
    <section className="main-blog-section">
      <div className="container">
        <div className="service-tag py-2 blog-category">
          <div className="col-md-12">
              <BlogSearchBar searchBlog={searchBlog}/>
          </div>
        </div>
        <div className="container mb-4">
          {isLoading && <div className="text-center mt-4 mb-4">Loading...</div>}
          {!isLoading && blogs.length === 0 && <div className="text-center mt-4 mb-4">No blogs available</div>}
          {!isLoading && blogs.length > 0 && (
            <>
              <div>Found {blogs.length} blogs</div>
              <div className="blog-cards row">
                <BlogCard blogs={blogs}/>
                {/*pagination*/}
                <div className="text-center">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className="btn btn-primary pagination-btn"
                  >
                    Previous
                  </button>
                  <button
                    disabled={currentPage === 2}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className="btn btn-primary pagination-btn"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

    </section>

  );
}


export default BlogMainSection;
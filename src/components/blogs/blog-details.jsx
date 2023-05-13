import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import HeroSection from "./hero-section";
import {BLOG_URL_API } from "./blog-main-section";
import axios from "axios";
import moment from "moment";

const BlogDetails =  () => {
  let { id } = useParams();
  let blogDetailsUrl = `${BLOG_URL_API}/?slug=${id}`;
  const [singleBlogData , setSingleBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const fetchSingleBlog = async () => {
    try {
      const response = await axios.get(blogDetailsUrl);
      setSingleBlogData(response.data[0]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    fetchSingleBlog();
  },[])

  return(
    <>
      {isLoading && <div className="text-center mt-4 mb-4">Loading...</div>}
      {!isLoading && !singleBlogData && <div className="text-center mt-4 mb-4">No blog available</div>}
      {!isLoading && singleBlogData &&(
        <>
          <HeroSection title={singleBlogData.title}/>
          <section className="container py-5">
            <div className="row pt-5 m-2">
              <div className=" col-lg-8 m-auto text-left justify-content-center">
                <div className="d-flex justify-content-between mb-4">
                  <p>{singleBlogData.userName}</p>
                  <p>{moment(singleBlogData.createdAt).format('DD MMM YY')}</p>
                </div>
                <h2 className=" h3 pb-3 light-300 typo-space-line">{singleBlogData.title}</h2>
                <p className="py-3 text-muted light-300">
                  {singleBlogData.body}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8 m-auto text-left justify-content-center">
                <img src={singleBlogData.image}  alt="blog-img" className="w-100"/>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  )
}

export default BlogDetails;
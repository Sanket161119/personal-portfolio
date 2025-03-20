/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Carousel } from "antd";
import "./Blogs.scss";
import infinite from "../../../assets/infinite.svg";

const Blogs = ({ blogs }) => {

  return (
    <>
      <div className="blog">
        <div className="blog-title">
          <h1>Blogs</h1>
          <img src={infinite} alt="" />
        </div>
      </div>
      <Carousel arrows infinite={true} autoplay className="blog-container">
        {blogs.map((blog) => (
          <div key={blog.url} className="blogs">
            {blog.urlToImage && (
              <div className="image-container">
                <img src={blog.urlToImage} alt={blog.title} />
                <div className="overlay">
                  <h3>{blog.author}</h3>
                  <p>{blog.title}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Blogs;

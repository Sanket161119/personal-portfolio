/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Blogs from "./Blogs/Blogs";
import Loader from "../../Shared/Components/Loader/Loader";
import httpLayer from "../../Services/Httplayer";
import { useSelector } from "react-redux";

const Others = () => {
  const [data, setData] = useState({ blogs: [] });
  const isLoading = useSelector((state) => state.services.loader);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogResponse = await httpLayer.getBlogArticles();
        setData({
          blogs: blogResponse,
        });
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />
      {!isLoading && <Blogs blogs={data.blogs} />}
    </>
  );
};

export default Others;

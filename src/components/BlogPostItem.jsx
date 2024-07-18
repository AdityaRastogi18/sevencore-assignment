import React from "react";
import { Link } from "react-router-dom";

const BlogPostItem = ({ post, index }) => {
  return (
    <Link
      to={`/post/${index}`}
      state={post}
      className="flex flex-col-reverse md:flex-row gap-5 justify-between items-center"
    >
      <div className="">
        <h2 className="font-extrabold text-md md:text-xl pb-2">
          {post?.title}
        </h2>
        <p className="pb-2">{post?.description}</p>
        <div className="flex gap-2 ">
        <p className=" text-slate-500">By {post?.author}</p>
        &#x2022;
        <p className="text-gray-500">
          {new Date(post?.publishedAt).toLocaleDateString()}
        </p>
      </div>
      </div>
      
        <img
          src={post?.urlToImage}
          alt={post?.title}
          className="aspect-square object-fill w-full h-full md:w-[100px] rounded-md"
        />
      
    </Link>
  );
};

export default BlogPostItem;

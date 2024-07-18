// src/components/BlogPostList.js
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Api from "../services/Api";
import BlogPostItem from "./BlogPostItem";

const BlogPostList = () => {
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);

  const { data, isError, isLoading } = useQuery(
    ["posts", page, pageLimit],
    () => Api.fetchTopHeadlines(page, pageLimit),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;

  const posts = data.articles;
  const totalPages = Math.ceil(data.totalResults / pageLimit);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div>
        {posts.map((post, index) => (
          <div className="p-4 border rounded-md gap-4 mb-3 hover:bg-blue-50">
            <BlogPostItem post={post} index={index} key={index} />
          </div>
        ))}
      </div>
      <div className="inline-flex shadow-sm mt-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
          className="btn-grp-start"
        >
          Previous
        </button>
        
        {new Array(totalPages).fill(null).map((_, index) => (
          <button
            onClick={() => setPage(index+1)}
            className="btn-grp-middle"
            key={`btn-${index}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
          className="btn-grp-end"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogPostList;

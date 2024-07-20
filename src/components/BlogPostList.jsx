import React, { useState } from "react";
import { useQuery } from "react-query";
import Api from "../services/Api";
import BlogPostItem from "./BlogPostItem";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

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

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage />;

  const posts = data.articles;
  const totalPages = Math.ceil(data.totalResults / pageLimit);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-7 mt-3">
        React Blog Posts Assignment for SevenCore
      </h1>
      <div>
        {posts.map((post, index) => (
          <div key={index} className="p-4 border rounded-md gap-4 mb-3 hover:bg-blue-50 hover:shadow-md">
            <BlogPostItem post={post} index={index} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="inline-flex shadow-sm ">
          <button
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
            className="btn-grp-start"
          >
            Previous
          </button>

          {new Array(totalPages).fill(null).map((_, index) => (
            <button
              onClick={() => setPage(index + 1)}
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
            data-testid="Next"
          >
            Next
          </button>
        </div>
        <div className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Set page size:
          <input
            type="number"
            value={pageLimit}
            onChange={(e) => setPageLimit(e.target.value)}
            className="rounded-md ms-2 text-black text-center w-[100px] focus:ring-offset-0"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogPostList;

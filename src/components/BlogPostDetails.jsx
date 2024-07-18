import {
  faArrowLeft,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const BlogPostDetails = () => {
  const location = useLocation();
  const post = location.state;
  const navigate = useNavigate();
  const truncatedContent = post?.content?.substring(
    0,
    post?.content?.indexOf("…") + 1
  );

  if (!post) {
    return <div>Error loading post</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-7 mt-3">
        <Link className="text-3xl font-bold " to={"/"}>
          Blog Post
        </Link>
        <button
          data-testid="back-btn"
          name="back"
          role="button"
          className="border rounded-lg p-2 px-4 hover:bg-gray-50 hover:shadow-sm"
          onClick={() => navigate("/")}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
      {post.urlToImage && (
        <img
          src={post?.urlToImage}
          alt={post?.title}
          className="mb-4 w-full h-auto sm:h-[350px] lg:h-[450px] object-fill rounded-md"
        />
      )}
      <h1 className="sm:text-3xl font-bold my-3">{post?.title}</h1>
      <div className="flex gap-3 mb-2">
        <p className=" text-slate-500">{post?.author}</p>
        &#x2022;
        <p className="text-gray-500">
          {new Date(post?.publishedAt).toLocaleDateString()}
        </p>
      </div>
      <p>
        {truncatedContent ? truncatedContent : post?.description}{" "}
        <a className="text-blue-500" href={post?.url} target="_blank">
          Read Complete Article.
        </a>
      </p>
    </div>
  );
};

export default BlogPostDetails;

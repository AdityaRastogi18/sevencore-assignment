import React from "react";
import { useLocation, Link } from "react-router-dom";

const BlogPostDetails = () => {
  const location = useLocation();
  const post = location.state;
  const truncatedContent = post.content.substring(0, post.content.indexOf('...') + 3);

  if (!post) {
    return <div>Error loading post</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      {post.urlToImage && (
        <img src={post.urlToImage} alt={post.title} className="mb-4 w-[30px] h-[30px]" />
      )}
      <p>{truncatedContent}</p>
      <p className="text-gray-500">
        {new Date(post.publishedAt).toLocaleDateString()}
      </p>
      <Link to="/" className="text-blue-600 hover:underline">
        Back to Posts
      </Link>
    </div>
  );
};

export default BlogPostDetails;

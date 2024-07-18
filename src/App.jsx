import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const BlogPostList = lazy(() => import("./components/BlogPostList"));
const BlogPostDetails = lazy(() => import("./components/BlogPostDetails"));

console.log("coming here with details", BlogPostDetails)
console.log("coming here with list", BlogPostList)

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="flex flex-col justify-between min-h-screen">
      <BlogPostList />
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:id" element={<BlogPostDetails />} />
        </Routes>
        <footer className="bottom-0 text-center py-4 bg-gray-100 mt-4">
          <FontAwesomeIcon icon={faCopyright} /> All Rights reserved to{" "}
          <a href="mailto:adityarastogi1801@gmail.com">
            adityarastogi1801@gmail.com
          </a>
        </footer>
      </div>
    </Suspense>
  );
};

export default App;

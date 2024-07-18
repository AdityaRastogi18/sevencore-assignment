import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const BlogPostList = lazy(() => import("./components/BlogPostList"));
const BlogPostDetails = lazy(() => import("./components/BlogPostDetails"));

const App = () => {
  return (
    
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              {/* <Spinner /> */}
              loading
            </div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<BlogPostList />} />
          <Route path="/post/:id" element={<BlogPostDetails />} />
        </Routes>
      </Suspense>
    
  );
};

export default App;
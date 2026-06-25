import React from "react";
import useDocumentMetadata from "../hooks/useDocumentMetadata";

const Blogs = () => {
  useDocumentMetadata({
    title: "Blogs | Rohit Kumar - Frontend focused Full stack developer",
    description: "Insights and articles on frontend development, React, Next.js, and modern web engineering by Rohit Kumar.",
    url: "https://www.rohitisog.com/blogs",
    keywords: "Blogs, Technical Writing, Frontend Blog, React, Next.js, TypeScript, Web Development"
  });

  return (
    <>
    </>
  );
};

export default Blogs;

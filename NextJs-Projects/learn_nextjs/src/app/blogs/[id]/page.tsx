import React from "react";

const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return <div>Blog-{id}</div>;
};

export default Blog;

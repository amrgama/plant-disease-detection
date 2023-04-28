import React, { useState } from "react";
import {Link} from "react-router-dom";

const BlogCard = ({ post, extraClass }) => {
  return (
    <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
      <div className="ratio ratio-4x3 ">
        <img
          src={post?.image}
          className="w-100 h-100 "
          alt="..."
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">
          <Link to={``} className="nav-link">{post?.title}</Link>
        </h5>
        <p className="card-text mb-1">{post?.content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
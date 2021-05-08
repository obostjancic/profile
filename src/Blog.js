import React from "react";
import "./Blog.css";
import { VSSection } from "./VSSection";

const Post = () => {
  return (
    <div className="post">
      <div className="post-inner">
        <div className="post-image" style={{ background: "url(code.png)", backgroundSize: "contain" }} />

        <h2 className="post-name">Post title</h2>
        <div className="post-description">lorem ipsum dolor sit amet con et justo e </div>
        <div className="post-button">Learn More</div>
      </div>
    </div>
  );
};

export const Blog = () => {
  return (
    <VSSection>
      <div className="blog">
        <h2 className="section-heading">Blog</h2>
        <div className="flex-wrapper">
          <div className="flex-wrapper">
            <Post />
            <Post />
          </div>
          <div className="flex-wrapper">
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </VSSection>
  );
};

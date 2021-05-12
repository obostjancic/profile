import React from "react";
import "./Writing.css";
import { VSSection } from "../components/VSSection";

const url =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

const articles = [
  {
    id: 0,
    title: "Simple fetch retry policy",
    imgUrl: url,
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus magna. quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
  {
    id: 1,
    title: "REST API - supercharged",
    imgUrl: url,
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet,Vestibulum sed risus magna. Praesent dignissim, semdapibus vehicula egestas, quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
  {
    id: 2,
    title: "Design patterns in Typescript",
    imgUrl: url,
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus magna. Praesent dignissim, quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
  {
    id: 3,
    title: "Managing hierarchical data in SQL",
    imgUrl: url,
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
];

// axios retry policy
// react query
// rest supercharger
// design patterns in typescirpt
// managing hierarchical data in sql

const Post = ({ article }) => {
  const { title, description, url, imgUrl } = article;
  return (
    <div className="article flex column">
      <img className="article-image" src={imgUrl} alt="" />
      <div className="article-inner flex column">
        <h3 className="article-title">{title}</h3>
        <div className="article-summary">{description}</div>
        <div className="article-button primary">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read full article
          </a>
        </div>
      </div>
    </div>
  );
};

export const Writing = () => {
  return (
    <VSSection anchor="writing">
      <div className="section">
        <h2 className="section-heading">Writing</h2>
        <div className="articles flex row">
          <Post article={articles[0]} />
          <Post article={articles[1]} />
          <Post article={articles[2]} />
          <Post article={articles[3]} />
        </div>
      </div>
    </VSSection>
  );
};

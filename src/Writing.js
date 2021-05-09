import React from "react";
import "./Writing.css";
import { VSSection } from "./VSSection";

const articles = [
  {
    id: 0,
    title: "Lorem impsum article 1",
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus magna. quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
  {
    id: 1,
    title: "Lorem impsum article 2",
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet,Vestibulum sed risus magna. Praesent dignissim, semdapibus vehicula egestas, quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
  {
    id: 2,
    title: "Lorem impsum article 3",
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus magna. Praesent dignissim, quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
  {
    id: 3,
    title: "Lorem impsum article 4",
    url: "https://www.w3schools.com/howto/howto_css_image_responsive.asp",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.",
  },
];

const Post = ({ article }) => {
  const { title, description, url } = article;
  return (
    <div className="article">
      <div className="article-image" style={{ background: "url(code.png)", backgroundSize: "contain" }} />
      <div className="article-inner">
        <h3 className="article-title">{title}</h3>
        <div className="article-summary">{description}</div>
        <div className="article-button">
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
    <VSSection>
      <div className="writing">
        <h2 className="section-heading">Writing</h2>
        <div className="articles">
          <Post article={articles[0]} />
          <Post article={articles[1]} />
          <Post article={articles[2]} />
          <Post article={articles[3]} />
        </div>
      </div>
    </VSSection>
  );
};

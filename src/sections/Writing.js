import React from "react";
import { VSSection } from "../components/VSSection";
import { FlexColumn, FlexRow, JustifyContent, SectionHeading, theme } from "../components";
import styled from "styled-components";

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

const Articles = styled(FlexRow)`
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  ${JustifyContent("center")}
  margin-bottom: 2em;
`;

const ArticleWrapper = styled(FlexColumn)`
  min-width: 250px;
  max-width: 400px;
  ${JustifyContent("flex-start")};
  text-align: left;
  margin: 1em 0.75em;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 10px #ddd;
  box-shadow: 2px 2px 10px #ddd;
`;

const Image = styled.img`
  min-height: 128px;
  width: 100%;
  margin: 0 auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ArticleInner = styled(FlexColumn)`
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  padding: 1em;
  ${JustifyContent("space-between")};

  & > h3 {
    display: inline-block;
    margin: 0;
    padding-bottom: 0.5em;
    padding-right: 1em;
    border-bottom: 1px solid ${theme.primary};
  }

  & > p {
    font-size: 14px;
    margin: 1em 0;
  }

  & > a {
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }
  & > a:visited {
    text-decoration: none;
    color: ${theme.primary};
  }
`;

const Article = ({ article }) => {
  const { title, description, url, imgUrl } = article;
  return (
    <ArticleWrapper>
      <Image src={imgUrl} alt="" />
      <ArticleInner>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          Read full article
        </a>
      </ArticleInner>
    </ArticleWrapper>
  );
};

export const Writing = () => {
  return (
    <VSSection anchor="writing">
      <SectionHeading>Writing</SectionHeading>
      <Articles>
        <Article article={articles[0]} />
        <Article article={articles[1]} />
        <Article article={articles[2]} />
        <Article article={articles[3]} />
      </Articles>
    </VSSection>
  );
};

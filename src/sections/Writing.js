import React from "react";
import { VSSection } from "../components/VSSection";
import { FlexColumn, FlexRow, JustifyContent, SectionHeading, theme } from "../components";
import styled from "styled-components";
import { articles } from "./data";

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

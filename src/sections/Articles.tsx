import React from 'react';
import { VSSection } from '../components/VSSection';
import { SectionHeading, theme } from '../components';
import styled from 'styled-components';
import { articles } from './data';
import { Article } from '../types';

const ArticlesWrapper = styled.div`
  display: flex;
  flex-direction: row;

  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2em;
`;

const ArticleWrapper = styled.div`
  min-width: 250px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${theme.backgroundDark};
  text-align: left;
  margin: 1em 0.75em;
  border-radius: 5px;
  box-shadow: 2px 2px 10px #ddd;
`;

const Image = styled.img`
  min-height: 128px;
  width: 100%;
  margin: 0 auto;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const ArticleInner = styled.div`
  -ms-flex: 1;
  flex: 1;
  padding: 1em;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

const ArticleCard = ({ article }: { article: Article }) => {
  const { title, description, url, imgUrl } = article;
  return (
    <ArticleWrapper>
      <article>
        <Image src={imgUrl} alt="Article image" />
        <ArticleInner>
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read full article
          </a>
        </ArticleInner>
      </article>
    </ArticleWrapper>
  );
};

export const Articles = () => {
  return (
    <VSSection anchor="articles">
      <SectionHeading>Articles</SectionHeading>
      <ArticlesWrapper>
        <ArticleCard article={articles[0]} />
        <ArticleCard article={articles[1]} />
        <ArticleCard article={articles[2]} />
        <ArticleCard article={articles[3]} />
      </ArticlesWrapper>
    </VSSection>
  );
};

import React from 'react';
import { Section } from '../components/Section';
import { articles } from './data';
import { Article } from '../types';

const ArticleCard = ({ article }: { article: Article }) => {
  const { title, description, url, imgUrl } = article;
  return (
    <div className="flex-col justify-start m-4 shadow-md border rounded-md ">
      <article>
        <img
          className="min-h-[128px] w-full mx-auto border-0 rounded-t-md"
          src={imgUrl}
          alt="Article image"
        />
        <div className="flex-col justify-between flex-1 p-4 border rounded">
          <h3 className="inline-blox pb-2 pr-4 border-b border-prim-light">{title}</h3>
          <p className="text-sm my-4 leading-6">{description}</p>
          <a
            className="text-sm font-bold  text-transparent bg-clip-text bg-gradient-to-br from-prim-light to-prim-dark"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read full article
          </a>
        </div>
      </article>
    </div>
  );
};

export const Articles = () => {
  return (
    <Section anchor="articles">
      <h2 className="text-center uppercase mb-8 text-3xl">Articles</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-4 md:grid-cols-2">
        <ArticleCard article={articles[0]} />
        <ArticleCard article={articles[1]} />
        <ArticleCard article={articles[2]} />
        <ArticleCard article={articles[3]} />
      </div>
    </Section>
  );
};

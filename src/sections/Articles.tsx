import React from 'react';
import { Section } from '../components/Section';
import { articles } from './data';
import { Article } from '../types';

function ArticleCard({ article }: { article: Article }) {
  const { title, description, url, imgUrl } = article;
  return (
    <article className="flex flex-col justify-between m-4 border rounded-md shadow-md ">
      <img
        className="min-h-[128px] w-full mx-auto border-0 rounded-t-md"
        src={imgUrl}
        alt="Article"
      />
      <div className="flex flex-col justify-between flex-1 p-4 rounded">
        <h3 className="pb-2 pr-4 border-b border-prim-light">{title}</h3>
        <p className="flex-1 my-4 text-sm leading-8">{description}</p>
        <a
          className="text-sm font-bold text-gradient"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read full article
        </a>
      </div>
    </article>
  );
}

export default function Articles() {
  return (
    <Section anchor="articles">
      <h2 className="p-8 mb-8 text-3xl text-center uppercase">Articles</h2>
      <div className="grid grid-cols-1 2xl:grid-cols-1 md:grid-cols-1">
        <ArticleCard article={articles[0]} />
        {/* <ArticleCard article={articles[1]} />
        <ArticleCard article={articles[2]} />
        <ArticleCard article={articles[3]} /> */}
      </div>
    </Section>
  );
}

export interface Image {
  id: string;
  src: string;
  description: string;
  srcPng?: string;
  wdith?: string;
  height?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  images: Image[];
}

export interface Article {
  id: string;
  title: string;
  imgUrl: string;
  url: string;
  description: string;
}

export interface LinkProps {
  href: string;
  children: React.ReactNode;
}

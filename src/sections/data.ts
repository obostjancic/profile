import { Article, Project } from '../types';

export const projects: Record<string, Project> = {
  team8: {
    id: 'team8',
    name: 'Team 8',
    description: 'Collaboration and HR management app',
    url: '#',
    images: [
      {
        id: '0',
        src: './images/projects/team8/team8.avif',
        srcPng: './images/projects/team8/team8.png',
        wdith: '221',
        height: '134',
        description:
          'Team8 is a work management software that aims to be a "one-stop shop" for everything in between 9 and 5. Your email inbox, calendar, chat, absence requests, attendance tracking, and a kanban board are all in one browser tab, under one account. Built with React and Express.js',
      },
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        description:
          'Its modular design allows customers to pick only the parts that they want to use, while importing functionality makes the transition process easy.',
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
        description:
          'Running in the cloud, secured by Oauth2, with fine-grained access control. Flexible hierarchy models make it applicable to all organizations, regardless of size.',
      },
    ],
  },
  kolorkross: {
    id: 'kolorkross',
    name: 'Kolor Kross',
    url: 'https://github.com/obostjancic/kolorkross',
    description: 'A VS Code extension that allows fast & colorful access to multiple workspaces',
    images: [
      {
        id: '0',
        wdith: '2214',
        height: '1348',
        src: './images/projects/kolorkross/kolorkross.avif',
        srcPng: './images/projects/kolorkross/kolorkross.png',
        description:
          'Kolor Kross organizes projects (workspaces) into flexible groups. Every project is assigned a color, and the VS Code window of that project is colored with that color. This allows users to develop mental maps when working across multiple projects.',
      },
    ],
  },
};

export const articles: Article[] = [
  {
    id: '0',
    title: 'What is the best Node.js logging library?',
    imgUrl:
      'https://ogi.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FUuX-Le3bfzc%2Fupload%2Fv1649197915819%2Fh2CJSzARC.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75',
    url: 'https://ogi.hashnode.dev/what-is-the-best-nodejs-logging-library',
    description:
      'Sooner or later in the lifespan of your project, it will grow to a stage where the humble console.log will stop being adequate for your needs. Maybe you will need to store the logs in multiple places, separated by levels or just print them formatted in a human-readable way...',
  },
  {
    id: '1',
    title: 'REST API - supercharged',
    imgUrl:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    url: 'https://www.w3schools.com/howto/howto_css_image_responsive.asp',
    description:
      'Lorem ipsum dolor sit amet,Vestibulum sed risus magna. Praesent dignissim, semdapibus vehicula egestas, quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.',
  },
  {
    id: '2',
    title: 'Design patterns in Typescript',
    imgUrl:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    url: 'https://www.w3schools.com/howto/howto_css_image_responsive.asp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed risus magna. Praesent dignissim, quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.',
  },
  {
    id: '3',
    title: 'Managing hierarchical data in SQL',
    imgUrl:
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
    url: 'https://www.w3schools.com/howto/howto_css_image_responsive.asp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  quam ligula imperdiet neque, condimentum finibus erat orci vel velit. Donec molestiecondimentum augue a rutrum. Morbi quis nisl vel mauris lobortis accumsan.',
  },
];

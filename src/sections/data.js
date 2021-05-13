const image = id => ({
  id,
  src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut mi tincidunt, faucibus augue vehicula, rutrum orci. Cras dapibus urna turpis, ac viverra velit ornare non. Donec vitae purus sit amet massa porttitor consectetur. Nam viverra nunc tellus, id finibus. ${id}`,
});

const images = () => [0, 1, 2, 3].map(id => image(id));

export const projects = {
  1: {
    id: "1",
    name: "Team 8",
    description: "Collaboration and HR management app",
    images: images(),
  },
  2: {
    id: "2",
    name: "Viktor",
    description: "Automated crypto currency trading bot",
    images: images(),
  },
  3: {
    id: "3",
    name: "Superchager",
    description: "Nest.js REST API starter kit",
    images: images(),
  },
  4: {
    id: "4",
    name: "Project 4",
    description: "Lorem ipsum dolor sit amet",
    images: images(),
  },
};

const url =
  "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80";

export const articles = [
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

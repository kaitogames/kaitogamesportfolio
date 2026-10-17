const images = import.meta.glob("../assets/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const img = (name) => images[`../assets/${name}`];

export const projects = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "A short line about this game",
    category: "Games",
    image: img("project1.jpg"),
    description: "Write a longer description of this project here.",
    link: "",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "A short line about this game",
    category: "Games",
    image: img("project2.jpg"),
    description: "Write a longer description of this project here.",
    link: "",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "A short line about this game",
    category: "Games",
    image: img("project2.jpg"),
    description: "Write a longer description of this project here.",
    link: "",
  },
  {
    slug: "project-two",
    title: "Project Two",
    tagline: "A short line about this game",
    category: "Games",
    image: img("project2.jpg"),
    description: "Write a longer description of this project here.",
    link: "",
  },
  {
    slug: "project-three",
    title: "Project Three",
    tagline: "A short line about this project",
    category: "Programming",
    image: img("project3.jpg"),
    description: "Write a longer description of this project here.",
    link: "",
  },
  {
    slug: "project-four",
    title: "Project Four",
    tagline: "A short line about this project",
    category: "Programming",
    image: img("project4.jpg"),
    description: "Write a longer description of this project here.",
    link: "",
  },
];
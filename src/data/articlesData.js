// articlesData.js
// Central storage for all articles shown on the portfolio.
// To add a new article: copy an object below, change the fields, and give it a unique "slug".
// "image" can be a local import (e.g. from src/assets/articles/...) or a full URL.

const articlesData = [
  {
    slug: "react-hooks-explained",
    title: "React Hooks Explained Simply",
    excerpt:
      "A beginner-friendly walkthrough of useState, useEffect, and useRef, with real examples from projects I've built.",
    image: "/articles-img/react-hooks.jpg",
    category: "Frontend",
    date: "Jul 10, 2026",
    readTime: "5 min read",
    tags: ["react", "javascript", "hooks"],
    content: `
      Write the full article body here in Markdown or plain text.
      This field can be rendered later on the single-article page.
    `,
  },
  {
    slug: "intro-to-cybersecurity",
    title: "Getting Started in Cybersecurity",
    excerpt:
      "Key concepts every beginner should know before diving into ethical hacking and network security.",
    image: "/articles-img/cybersecurity.jpg",
    category: "Cybersecurity",
    date: "Jun 28, 2026",
    readTime: "7 min read",
    tags: ["cybersecurity", "networking"],
    content: `
      Write the full article body here.
    `,
  },
  {
    slug: "arduino-embedded-projects",
    title: "Building My First Embedded System with Arduino",
    excerpt:
      "Lessons learned building sensor-driven Arduino projects during my coursework at UNISO.",
    image: "/articles-img/arduino.jpg",
    category: "Embedded Systems",
    date: "Jun 12, 2026",
    readTime: "4 min read",
    tags: ["arduino", "embedded", "iot"],
    content: `
      Write the full article body here.
    `,
  },
  // {
  //   slug: "ai-for-beginners",
  //   title: "AI and Data Science: Where to Start",
  //   excerpt:
  //     "My roadmap for learning AI/ML fundamentals alongside a full-time Computer Science degree.",
  //   image: "/articles-img/ai-data-science.jpg",
  //   category: "AI & Data Science",
  //   date: "May 30, 2026",
  //   readTime: "6 min read",
  //   tags: ["ai", "machine-learning", "data-science"],
  //   content: `
  //     Write the full article body here.
  //   `,
  // },
];

export default articlesData;
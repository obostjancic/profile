import React from "react";
import VSParagraph from "../VSParagraph";

export const Skills = () => (
  <div style={{ textAlign: "justify" }}>
    <h2 style={{ color: "#0076b2", fontWeight: "500", fontSize: "250%" }}>Skills {"&"} Interests</h2>
    <VSParagraph direction="left">
      I have been working professionally as a Web developer for more than three years, and I am particularly experienced
      in the development of stable and scalable REST API's. Even though my primary role was that of a backend developer,
      I frequently took responsibility in other areas like: Frontend development, Database design, UI/UX design and
      deployment processes.
    </VSParagraph>
    {/* TODO: add a paragraph about CI/CD interest */}
    <VSParagraph direction="right">
      Apart from work I have developed a web applications with Python (Django framework) that is used to create, search
      and manage language corporas. It utilizes natural language processing to recognize and categorize words from input
      text. It is currently in production and contains 2.900.000 + words.
    </VSParagraph>
    <VSParagraph direction="left">
      During my studies, I have taken part in various projects in different areas of computer science like: Computer
      Graphics, Computer Vision and Artificial Intelligence. Most notably, I was a team leader on a student attendance
      system which was developed as an internal faculty project.
    </VSParagraph>
    <VSParagraph direction="right">
      When it comes to my side projects, I generally choose technologies with which I haven’t had a lot of experience to
      that point. I enjoy 'Learning-by-doing' and picking up a new framework is not a problem for me.
    </VSParagraph>
  </div>
);

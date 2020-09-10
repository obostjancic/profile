import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdWork, MdSchool } from "react-icons/md";

import "./timeline.css";
import Link from "../common/link";
import { Header, SubHeader } from "../common/headers";

export const Timeline1 = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      id="timeline-element-any"
      className="vertical-timeline-element--work"
      date="Jan 2020 - Present"
      icon={<MdWork />}
      iconStyle={{ background: "#0076b2", color: "#fff" }}
    >
      <Link href="https://anyline.com">
        <Header>Web developer</Header>
        <SubHeader>Anyline GmbH, Vienna</SubHeader>
        <p className="primary">Frontend (React) {"&"} backend development (Node.js)</p>
      </Link>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      id="timeline-element-ta"
      className="vertical-timeline-element--education"
      date="Oct 2018 - Jun 2019"
      icon={<MdSchool />}
      iconStyle={{ background: "#478fb3", color: "#fff" }}
    >
      <Link href="http://math.pmf.unsa.ba/strucni-studij/informacione-tehnologije.html">
        <Header>Teaching assistant</Header>
        <SubHeader>Faculty of natural sciences and mathematics</SubHeader>
        <p className="primary">Introduction to web development </p>
      </Link>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      id="timeline-element-workflow"
      className="vertical-timeline-element--education"
      date="May 2018 - Jan 2020"
      icon={<MdWork />}
      iconStyle={{ background: "#0076b2", color: "#fff" }}
    >
      <Link href="https://www.workflow.at/">
        <Header>Web developer</Header>
        <SubHeader>Workflow EDV GmbH, Vienna</SubHeader>
        <p className="primary">Frontend (React) {"&"} backend development (Spring)</p>
      </Link>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      id="timeline-element-msc"
      className="vertical-timeline-element--work"
      date="Oct 2017 - Present"
      icon={<MdSchool />}
      iconStyle={{ background: "#478fb3", color: "#fff" }}
    >
      <Link href="http://math.pmf.unsa.ba/en/postdiplomski-studij/teorijska-kompjuterska-nauka.html">
        <Header>MSc Computer Science</Header>
        <SubHeader>Faculty of natural sciences and mathematics</SubHeader>
        <p className="primary">Computer geometry and graphics, Software engineering, ​Artificial intelligence​. </p>
      </Link>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      id="timeline-element-utic"
      className="vertical-timeline-element--work"
      date="Apr 2017 - May 2018"
      icon={<MdWork />}
      iconStyle={{ background: "#0076b2", color: "#fff" }}
    >
      <Link href="http://www.utic.unsa.ba/">
        <Header>Web developer (Part time)</Header>
        <SubHeader>IT Services of University of Sarajevo</SubHeader>
        <p className="primary">Backend development with Java (Spring)</p>
      </Link>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      id="timeline-element-bsc"
      className="vertical-timeline-element--work"
      date="Oct 2014 - Sep 2017"
      icon={<MdSchool />}
      iconStyle={{ background: "#478fb3", color: "#fff" }}
    >
      <Link href="http://math.pmf.unsa.ba/en/dodiplomski-studij/teorijska-kompjuterska-nauka.html">
        <Header className="primary primary vertical-timeline-element-title">BSc Computer Science</Header>
        <SubHeader className="primary primary vertical-timeline-element-subtitle">
          Faculty of natural sciences and mathematics
        </SubHeader>
        <p className="primary">OOP, Data structures {"&"} algorithms, Computer networking, Probability theory.</p>
      </Link>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

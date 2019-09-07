import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { MdWork, MdSchool } from 'react-icons/md';

import './timeline.css';

export const Timeline1 = () => (
	<VerticalTimeline>
		<VerticalTimelineElement
			id="timeline-element-bsc"
			className="vertical-timeline-element--work"
			date="Oct 2014 - Sep 2017"
			icon={ <MdSchool />}
			iconStyle={{ background: '#478fb3', color: '#fff' }}
		>
			<h3 className="primary primary vertical-timeline-element-title">BSc Computer Science</h3>
			<h4 className="primary primary vertical-timeline-element-subtitle">Faculty of natural sciences and mathematics</h4>
			<p className="primary">OOP, Data structures {'&'} algorithms, Computer networking, Probability theory.</p>
			{/* <p className="secondary">OOP, Data structures {'&'} algorithms, Computer networking, Probability theory.</p> */}
		</VerticalTimelineElement>
		<VerticalTimelineElement
			id="timeline-element-utic"
			className="vertical-timeline-element--work"
			date="Apr 2017 - May 2018"
			icon={ <MdWork />}
			iconStyle={{ background: '#0076b2', color: '#fff' }}
		>
			<h3 className="primary vertical-timeline-element-title">Web developer (Part time)</h3>
			<h4 className="primary vertical-timeline-element-subtitle">IT Services of University of Sarajevo</h4>
			<p className="primary">Backend development with Java (Spring)</p>
		</VerticalTimelineElement>
		<VerticalTimelineElement
			id="timeline-element-msc"
			className="vertical-timeline-element--work"
			date="Oct 2017 - Present"
			icon={ <MdSchool />}
			iconStyle={{ background: '#478fb3', color: '#fff' }}
		>
			<h3 className="primary vertical-timeline-element-title">MSc Computer Science</h3>
			<h4 className="primary vertical-timeline-element-subtitle">Faculty of natural sciences and mathematics</h4>
			<p className="primary">Computer geometry and graphics, Software engineering, ​Artificial intelligence​. </p>
		</VerticalTimelineElement>
		<VerticalTimelineElement
			id="timeline-element-bek"
			className="vertical-timeline-element--work"
			date="Nov 2017 - Present"
			icon={ <MdWork />}
			iconStyle={{ background: '#0076b2', color: '#fff' }}
		>
			<h3 className="primary vertical-timeline-element-title">BEK - Bosnian language corpus</h3>
			<h4 className="primary vertical-timeline-element-subtitle">Language institute of University of Sarajevo</h4>
			<p className="primary">Natural language processing with Python (Django)</p>
		</VerticalTimelineElement>
		<VerticalTimelineElement
			id="timeline-element-workflow"
			className="vertical-timeline-element--education"
			date="May 2018 - Present"
			icon={ <MdWork />}
			iconStyle={{ background: '#0076b2', color: '#fff' }}
		>
			<h3 className="primary vertical-timeline-element-title">Web developer</h3>
			<h4 className="primary vertical-timeline-element-subtitle">Workflow EDV GmbH, Vienna</h4>
			<p className="primary">Frontend (React) {'&'} backend development (Spring)</p>
		</VerticalTimelineElement>
		<VerticalTimelineElement
			id="timeline-element-ta"
			className="vertical-timeline-element--education"
			date="Oct 2018 - Jun 2019"
			icon={ <MdSchool />}
			iconStyle={{ background: '#478fb3', color: '#fff' }}
		>
			<h3 className="primary vertical-timeline-element-title">Teaching assistant</h3>
			<h4 className="primary vertical-timeline-element-subtitle">Faculty of natural sciences and mathematics</h4>
			<p className="primary">Introduction to web development </p>
		</VerticalTimelineElement>
	</VerticalTimeline>
);
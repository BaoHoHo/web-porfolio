import React from 'react';
import './Resume.css';
import { Container, Col, Row, ProgressBar } from 'react-bootstrap';

function Resume() {
	return (
		<div className="outer-body">
			<div className="inner-body">
				<Container>
					<Row className="Row row-3">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">SKILLS</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>Focus</h5>
							<p>
								I spend most of my time doing Full Stack Web Development, but I
								also love doing research on new technology and learn it in my freetime!
							</p>
							<h5>Coding Languages</h5>
							<div>
								<h6>Java</h6>
								<ProgressBar striped variant="success" animated now={80} />
								<h6>Python</h6>
								<ProgressBar striped variant="info" animated now={60} />
								<h6>C Programming Language</h6>
								<ProgressBar striped variant="warning" animated now={30} />
								<h6>JavaScript</h6>
								<ProgressBar striped variant="danger" animated now={30} />
								<h6>HTML & CSS</h6>
								<ProgressBar striped variant="danger" animated now={70} />
							</div>
							<br></br>
							<br />
							<h5>Leadership</h5>
							<p>
								Media Team Coordinator at Association of Vietnamese Community at
								Virginia Tech
							</p>
							<h5>Teamwork and Collaboration</h5>
							<p>
								I gained lots of experience in working with people through
								school and personal projects
							</p>
							<h5>Communication</h5>
							<p>
								I have experience in public speaking, and I'm also fluent in
								English and Vietnamese
							</p>
						</Col>
					</Row>
					<Row className="Row row-2">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">PROJECTS</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>Worldowe</h5>
							<p className="info">
								{/* <a href="http://www.worldowe.com/" target="_blank">
									See Live
								</a>{' '}
								|  */}
								Web Project | Next.js
								<span> &bull;</span>{' '}
								<em className="date">DECEMBER 2021 - Present</em>
							</p>
							<p>Creating a booking website for beauty in NEXT JS with features of staff management, customizing users’ accounts with log-in/ log-out personal information, booking reservations, reviewing stores, etc.</p> 
							<p>Main responsible: front-end and interaction of the web.</p>
							<p></p>
							<h5>Covid-19 Visualization</h5>
							<p className="info">
								Class Project | Java
								<span> &bull;</span>{' '}
								<em className="date">APRIL 2022 - APRIL 2022</em>
							</p>
							<p>
								An application that display bar charts, with each chart
								representing case fatality ratios (percentage of people who got
								COVID and died) for five racial groups in the United States as
								of September 2020.
							</p>
							<h5>Space Colony</h5>
							<p className="info">
								Class Project | Java
								<span> &bull;</span>{' '}
								<em className="date">MARCH 2022 - MARCH 2022</em>
							</p>
							<p>A sorting program that takes inputs and categorizes the items/users.</p>
						</Col>
					</Row>
					<Row className="Row row-2">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">EDUCATION</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>Virginia Tech</h5>
							<p>Expected Graduation Date: 12/2024</p>
							<p>Major: Computer Science</p>
							<p>GPA: 3.48</p>
							<p>In Major GPA: 3.64</p>
							<p></p>
							<h5>Peninsula Catholic High School</h5>
							<p>Graduated with a GPA of 4.29</p>
						</Col>
					</Row>
					<Row className="Row row-2">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">RELEVANT COURSEWORK</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>CS1114: Introduction to Software Design</h5>
							<p>Software engineering principles and programming skills in a programming language that supports the object-oriented paradigm</p>
							<h5>CS2114: Software Design & Data Structures</h5>
							<p>Advanced object-oriented software design, algorithm development and analysis, and classic data structures.</p>
						</Col>
					</Row>
					<Row className="Row row-4">
						<Col lg={3}>
							<div className="section-card">
								<h2 className="title">ACTIVITIES</h2>
							</div>
						</Col>
						<Col lg={9}>
							<h5>VT HACKS IX/ Volunteer & Participant </h5>
							<p>FEBRUARY 2022,  BLACKSBURG, VA</p>
							<h5>HACK VIOLET/ Participant</h5>
							<p>FEBRUARY 2022,  BLACKSBURG, VA</p>
							<h5>VIETNAMESE COMMUNITY AT VIRGINIA TECH/ Media Team Coordinator</h5>
							<p>AUGUST 2021 - PRESENT,  BLACKSBURG, VA</p>
							<h5>SOCIETY OF ASIAN SCIENTISTS & ENGINEERS/ Member</h5>
							<p>AUGUST 2021 - PRESENT,  BLACKSBURG, VA</p>
							<h5>PHUC’S FOND/ Volunteer</h5>
							<p>AUGUST 2021 - PRESENT,  BLACKSBURG, VA</p>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default Resume;

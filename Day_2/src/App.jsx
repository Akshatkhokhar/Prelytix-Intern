import React from 'react';


// Brand icons (local components to avoid export errors)
const GithubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const App = () => {
  return (
    <div className="resume-container">
      <header>
        <h1>Akshat Khokhar</h1>
        <div className="contact-info">
          akshatkhokhar18@gmail.com — +91 6355690901 — Kathlal, Kheda, Gujarat
        </div>
        <div className="links">
          <a href="https://www.linkedin.com/in/akshat-khokhar" target="_blank" rel="noopener noreferrer"><LinkedinIcon /> LinkedIn</a>
          <a href="https://github.com/Akshatkhokhar" target="_blank" rel="noopener noreferrer"><GithubIcon /> GitHub</a>
        </div>
      </header>

      <section>
        <h2>Professional Summary</h2>
        <div className="section-content">
          <ul>
            <li>
              Computer Engineering student with strong foundation in full-stack development and AI/ML technologies. Led hackathon
              winning teams and developed production-ready applications using React, Node.js, Python, and modern frameworks.
              Demonstrated leadership by securing 1st place in Lavapunk Hackathon and 4th place in IEEE CREA-TECH AI Innovation Competition. Passionate about building secure, scalable solutions and continuously learning emerging technologies.
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="section-content">
          <div className="education-item">
            <div className="item-header">
              <span>Madhuben and Bhanubhai Patel Institute of Technology, Anand</span>
              <span>Jun 2023 – May 2027</span>
            </div>
            <div className="item-subheader">
              <span>B.Tech in Computer Engineering</span>
              <span><strong>CGPA: 8.5</strong></span>
            </div>
          </div>

          <div className="education-item">
            <div className="item-header">
              <span>Shyam International School, Kathlal</span>
              <span>Jun 2022 – May 2023</span>
            </div>
            <div className="item-subheader">
              <span>HSC Board Exam</span>
              <span><strong>PR: 60.30%</strong></span>
            </div>
          </div>

          <div className="education-item">
            <div className="item-header">
              <span>Shyam International School, Kathlal</span>
              <span>Jun 2020 – May 2021</span>
            </div>
            <div className="item-subheader">
              <span>SSC Board Exam</span>
              <span><strong>PR: 96%</strong></span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <div className="section-content skills-list">
          <p>• <strong>Programming Languages:</strong> JavaScript, C++, Python, SQL</p>
          <p>• <strong>Frameworks & Libraries:</strong> React.js, Node.js, Express.js, FastAPI, Tailwind CSS</p>
          <p>• <strong>Databases:</strong> MongoDB, MySQL</p>
          <p>• <strong>Tools & Platforms:</strong> Git, GitHub, VS Code, Postman, GPT-4o, Claude</p>
          <p>• <strong>Core Competencies:</strong> Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks, Machine Learning</p>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="section-content">
          <div className="project-item">
            <p>• <strong>Model Shield – AI Firewall for LLM Applications</strong> <a href="https://github.com/Akshatkhokhar/Model-Shield" target="_blank" rel="noopener noreferrer" style={{fontSize: '0.8rem', fontStyle: 'italic'}}>[GitHub]</a></p>
            <ul>
              <li>Built a security layer for LLM applications that detects and blocks malicious prompts and unsafe content using <strong>React and FastAPI</strong>. Implemented rule-based threat detection engine, real-time admin dashboard for monitoring security events, and comprehensive audit logging system to prevent prompt injection attacks and ensure safe AI interactions.</li>
            </ul>
          </div>

          <div className="project-item">
            <p>• <strong>Smart AI Resume Analyzer</strong> <a href="https://github.com/Akshatkhokhar/Smart-AI-Resume-Analyzer" target="_blank" rel="noopener noreferrer" style={{fontSize: '0.8rem', fontStyle: 'italic'}}>[GitHub]</a></p>
            <ul>
              <li>Developed an AI-powered resume analyzer using <strong>React, Node.js, Express.js, and Python</strong> that calculates ATS compatibility scores via a pre-trained ML model. Integrated NLP for generating personalized improvement suggestions, real-time job and internship recommendations, and an automated resume builder with multiple customizable templates based on analysis insights.</li>
            </ul>
          </div>

          <div className="project-item">
            <p>• <strong>VeriOpp – Internship & Scholarship Trust Analyzer</strong> <a href="https://github.com/Akshatkhokhar/veriopp-insights" target="_blank" rel="noopener noreferrer" style={{fontSize: '0.8rem', fontStyle: 'italic'}}>[GitHub]</a></p>
            <ul>
              <li>Created a trust analysis platform using <strong>React, Node.js, Express.js, and MongoDB</strong> that evaluates internship and scholarship opportunities for authenticity. Implemented dynamic web scraping with Cheerio and Puppeteer, developed a 7-signal weighted trust scoring algorithm, and built a secure admin panel with JWT authentication for manual verification and data management.</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Leadership and Mentorship Roles</h2>
        <div className="section-content">
          <ul>
            <li><strong>Team Leader – Lavapunk Hackathon (Devpost)</strong> – Led the team to victory by coordinating development workflow, managing task distribution, and ensuring timely project delivery. Facilitated effective collaboration among team members, made key technical decisions, and successfully presented the solution to judges, securing 1st place in the competition.</li>
            <li><strong>Team Leader – Smart India Hackathon 2025</strong> – Led a 6-member team through project planning, feature design, and final system deployment. Coordinated collaboration between frontend and backend developers, ensured alignment with project objectives and deadlines, and managed the development process to deliver a functional prototype.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2>Certifications and Achievements</h2>
        <div className="section-content">
          <ul>
            <li>Secured <strong>4th Place</strong> in CREA-TECH: Empowering Innovation with AI Tools – organized by IEEE WIE SCET SB AG (July 2025)</li>
            <li><strong>Won Lavapunk Hackathon</strong> via Devpost – demonstrated innovative problem-solving and project execution in a competitive environment</li>
            <li>Secured <strong>winning rank</strong> in NeuroX Hackathon – organized by IIT Guwahati, competed at national level</li>
            <li>Completed <strong>Code Unnati Program</strong> – gained comprehensive knowledge in Artificial Intelligence, Machine Learning, and Deep Learning</li>
            <li>Participated in <strong>Smart India Hackathon 2025</strong> – led team through ideation, development, and deployment phases.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default App;

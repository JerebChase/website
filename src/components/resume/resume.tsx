import React, { useState } from 'react';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Technologies from './technologies';

const Resume = () => {
  const [currentPage, setCurrentPage] = useState<string>('About');
  return (
    <div className="resume">
      <div className="sidebar">
        <ul>
          <li onClick={() => setCurrentPage('About')}>About</li>
          <li onClick={() => setCurrentPage('Experience')}>Experience</li>
          <li onClick={() => setCurrentPage('Skills')}>Skills</li>
          <li onClick={() => setCurrentPage('Technologies')}>Technologies</li>
          <li onClick={() => setCurrentPage('Education')}>Education</li>
        </ul>
      </div>
      <div className="main">
        {currentPage === 'About' &&
          <About />
        }
        {currentPage === 'Experience' &&
          <Experience />
        }
        {currentPage === 'Skills' &&
          <Skills />
        }
        {currentPage === 'Technologies' &&
          <Technologies />
        }
      </div>
    </div>
  );
}

export default Resume;

import React, { useState } from 'react';
import Sidebar from '../common/sidebar';
import About from './about';
import Experience from './experience';
import Skills from './skills';
import Technologies from './technologies';
import Education from './education';

const Resume = () => {
  const [currentPage, setCurrentPage] = useState<string>('About');
  const menuItems = ['About', 'Experience', 'Skills', 'Technologies', 'Education'];
  return (
    <div className="resume">
      <Sidebar menuItems={menuItems} component={'resume'} onClick={setCurrentPage}/>
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
        {currentPage === 'Education' &&
          <Education />
        }
      </div>
    </div>
  );
}

export default Resume;

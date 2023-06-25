import React, { useState } from 'react';
import ProfilePic from '../../Images/ProfilePic.jpg';
import '../../Styles/Home.css';

const Home = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const containerWidth = e.target.offsetWidth;
    const pageWidth = containerWidth / 4; // Assuming 4 pages
    const newPage = Math.floor(scrollPosition / pageWidth);
    setCurrentPage(newPage);
  };

  const handleMouseWheel = (e) => {
    const delta = Math.sign(e.deltaY);
    const container = e.currentTarget;
    container.scrollLeft += delta * 100; // Adjust the scroll speed as needed
  };

  return (
    <div className="container">
      <div className="pages" onScroll={handleScroll} onWheel={handleMouseWheel}>
      <div className="pages">
        <div className="page">
          <img src={ProfilePic} alt="Profile Picture" className="profile-pic" />
          <div className="content">
            <h1 className="header">Mohamad Ajaz Imran - Novice web developer</h1>
            <p className="paragraph">
              This is a paragraph describing the content of the first page. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam pulvinar mauris
              nec libero suscipit, in sagittis nunc blandit. Fusce auctor ultrices
              urna vitae commodo. Curabitur interdum malesuada bibendum.
            </p>
          </div>
        </div>
        <div className="page">
          <h1 className="header">Second Page</h1>
          <p className="paragraph">
            This is filler text for the second page. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam pulvinar mauris nec libero suscipit,
            in sagittis nunc blandit. Fusce auctor ultrices urna vitae commodo.
            Curabitur interdum malesuada bibendum.
          </p>
        </div>
        <div className="page">
          <h1 className="header">Third Page</h1>
          <p className="paragraph">
            This is filler text for the third page. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam pulvinar mauris nec libero suscipit,
            in sagittis nunc blandit. Fusce auctor ultrices urna vitae commodo.
            Curabitur interdum malesuada bibendum.
          </p>
        </div>
        <div className="page">
          <h1 className="header">Fourth Page</h1>
          <p className="paragraph">
            This is filler text for the fourth page. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Nullam pulvinar mauris nec libero suscipit,
            in sagittis nunc blandit. Fusce auctor ultrices urna vitae commodo.
            Curabitur interdum malesuada bibendum.
          </p>
        </div>
      </div>
      </div>
      <div className="page-indicator">
        {[...Array(4)].map((_, index) => (
          <span
            key={index}
            className={`dot ${currentPage === index ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;


  
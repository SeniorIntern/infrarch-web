import React, { useEffect, useState } from 'react';
import ImageCard from './ImageCard';
import '../assets/styles/ProjectShowcase.css';

export default function ProjectShowcase() {
  const [portfolioData, setportfolioData] = useState([]);

  useEffect(() => {
    const getPortfolioDetails = async () => {
      const response = await fetch('http://localhost:5001/api/portfolio/');
      setportfolioData(await response.json());
    };
    getPortfolioDetails();
  }, []);

  return (
    <div className='projectShowcase'>
      <p className='project__Showcase'>NEW PROJECTS | RESIDENTIAL HOMES</p>
      <p className='project__ShowcaseTitle'>Follow our projects</p>
      <figure className='portfolio__card'>
        {console.log('portfolio table:')}
        {console.log(portfolioData)}
        {portfolioData.map((portfolio) => {
          return <ImageCard key={portfolio.p_id} {...portfolio} />;
        })}
      </figure>
    </div>
  );
}

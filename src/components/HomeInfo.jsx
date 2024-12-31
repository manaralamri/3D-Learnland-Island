

import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons/';
const InfoBox = ({text, link, btnText}) =>(
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{text}</p>
    <Link to={link} className='neo-brutalism-white neo-btn'>
    {btnText}
    <img src={arrow} className='w-4 h-4 object-contain'/>
    </Link>
  </div>
)



const renderContent =  {
  1:(
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hi, I am <span className='font-semibold'>Learnland Island</span>👋
      <br/>
      A beautiful and serene tech hub
    
      </h1>
  ),

  2:(
    <InfoBox 
     text="Learnland Island is full of creativity and amazing opportunities, explore it now!"
     link='/about'
     btnText='Learn more about Learnland Island '
    />
  ),

  3:(
    <InfoBox 
    text="Want to know about the projects of Learnland Island?"
    link='/projects'
    btnText='Visit project '
   />

  ),

  4:(
    <InfoBox 
    text="Need to uncover the secrets of Learnland Island and what it offers? I’m just a few keystrokes away"
    link='/contact'
    btnText='Let`s talk'
   />

  ),

}
const HomeInfo = ({CurrentStage}) => {
  return renderContent[CurrentStage] || null;
}

export default HomeInfo
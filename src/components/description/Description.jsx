import React from 'react';
import './description.css';
import profile from './media/profile-image.JPG';

const Description = () => {
    return (
        <section id="description-container">
            <img src={profile} alt="profile" id="profile-picture" className="description-item"/>
            <p id="description-text" className="description-item">
                I am a beginner photographer from Hawkes Bay in New Zealand. This is my personal collection of film photos. You're welcome to follow along as I figure this whole photography thing out. It's been a fun journey so far, and I am excited to learn more and more.<br /> Here you'll find a mostly un-edited collection of just about every photo I take on film. The ones I like, and the ones I don't, and everything in between. 
            </p>
        </section>
    )
}

export default Description;
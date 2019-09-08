import React from 'react';
import VSParagraph from '../VSParagraph';
import VSDiv from '../VSDiv';

export const Intro = () => (
    <div style={{textAlign: 'justify'}}>
        <h1 style={{color: '#0076b2', marginTop: '2.5rem', marginBottom: '2rem', fontWeight:'500', fontSize: '300%'}}>Ognjen Bostjančić</h1>
        <VSDiv id="profile-summary" direction="left" childStyle={{minHeight: '128px', marginBottom: '1.5rem'}}>
            <div className="photo" style={{background: 'url(profile-photo-square.jpg)', backgroundSize: 'contain'}}></div>
            <p id="summary"><b>Computer science student and software developer currently focused on web development, but interested in pretty much everything that ends up compiled or interpreted.</b></p>
        </VSDiv>
        <VSParagraph direction="right">Currently, I am working remotely as a developer for Workflow EDV GmbH, where I am helping to enhance and upgrade HR software product. In this role I am focused on both back and front end web development.</VSParagraph>
        <VSParagraph direction="left">Colleagues know me as motivated, communicative and a creative developer who likes to help others, and who can be trusted to come up with a solution. I welcome individual responsibility, and I can work well alone, but I’m at my best collaborating with others.</VSParagraph>
        <VSParagraph direction="right">Parallel to work I graduated with a Bachelor in Computer Science, and I am studying a Master Degree in Computer Science.</VSParagraph>
        <VSParagraph direction="left" style={{fontSize: '100%'}}>Contact me, take a look at some of my code or check my resume here:</VSParagraph>
        <div className="from-right" style={{textAlign:'center', marginTop: '1rem'}}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ognjen.bostjancic">
                <img className="contact-icon" style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="Facebook.png" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/obostjancic/">
                <img className="contact-icon" style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="Linkedin.png" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/obostjancic">
                <img className="contact-icon" style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="Gitlab.png" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="ognjen-bostjancic-cv.pdf">
                <img className="contact-icon" style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="cv.png" />
            </a>
        </div>
    </div>
);
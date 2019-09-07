import React from 'react';

export const Intro = () => (
    <div style={{textAlign: 'justify'}}>
        <h1 style={{color: '#0076b2', marginTop: '2.5rem', marginBottom: '2rem', fontWeight:'500', fontSize: '300%'}}>Ognjen Bostjančić</h1>
        <div id="profile-summary" className="from-left" style={{marginBottom: '2rem'}}>
            <div className="curve" style={{background: 'url(profile-photo-square.jpg)', backgroundSize: 'contain'}}/>
            <p><b>Computer science student and software developer currently focused on web development but interested in pretty much everything that ends up compiled or interpreted.</b></p>
        
        </div>
        <p className="from-right">Currently, I am working remotely as a developer for Workflow EDV GmbH, where I am helping to enhance and upgrade HR software. In this role I am focused on both back and front end web development.</p>
        <p className="from-left">Colleagues know me as motivated, communicative and creative developer who likes to help others, and who can be trusted to come up with a solution. I welcome individual responsibility, and I can work well alone, but I’m at my best collaborating with others.</p>
        <p className="from-right">Parallel to work I graduated with a Bachelor of Computer Science, and I am studying a Masters Degree in Computer Science.</p>
        <p className="from-left" style={{fontSize: '100%'}}>You can use the icons below to contact me, take a look at some of my code or check my resume.</p>
        <div className="from-right" style={{textAlign:'center', marginTop: '1rem'}}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/ognjen.bostjancic">
                <img style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="Facebook.png" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/obostjancic/">
                <img style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="Linkedin.png" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://gitlab.com/obostjancic">
                <img style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="Gitlab.png" />
            </a>
            <a target="_blank" rel="noopener noreferrer" href="ognjen-bostjancic-cv.pdf">
                <img style={{width:'60px', margin: '0 3.5%', borderRadius: '50%'}} src="cv.png" />
            </a>
        </div>
    </div>
);
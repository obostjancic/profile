import React from 'react';
import './tree.css';

const animation = (min, max) => {
    const rand =  Math.random() * (max - min) + min;
    return `${rand}s ease 0s normal forwards 1 fadein`;
}



const TreeCircle = ({id, position, size}) => {
    const { top, left } = position;
    return (
        <div id={id} className={`tree-circle-${size}`} style={{position: 'absolute', top, left, animation: animation(1.5, 2.25)}} />
    );
}

const TreeCircleText = ({children, position, size}) => {
    const { top, left } = position;
    return (
        <div className={`tree-circle-${size}-text`} style={{position: 'absolute', top, left, animation: animation(1.5, 2.25)}}>{children}</div>
    );
}

export const Tree = () => (
    <div className="tree" style={{textAlign: 'center', position: 'relative', margin: '0 12.5% ', background: 'url(tree3.svg) no-repeat center', backgroundSize: 'contain'}}>
        <img src="tree.svg" style={{visibility: "hidden"}} />
        <TreeCircle id="postgreSQL-circle" size="small" position={{top: '31.5%', left: '2.5%'}} />
        <TreeCircleText id="postgreSQL-circle-text" size="small" position={{top: '30%', left: '6%'}}>PostgreSQL</TreeCircleText>
        <TreeCircle id="mySQL-circle" size="small" position={{top: '44.2%', left: '3%'}} />
        <TreeCircleText id="mySQL-circle-text" size="small" position={{top: '40.5%', left: '0.5%'}}>MySQL</TreeCircleText>
        <TreeCircle id="hibernate-circle" size="small" position={{top: '17.5%', left: '10.75%'}}/>
        <TreeCircleText id="hibernate-circle-text" size="small" position={{top: '14%', left: '7%'}}>Hibernate</TreeCircleText>
        <TreeCircle id="maven-circle" size="small" position={{top: '25%', left: '12%'}}/>
        <TreeCircleText id="maven-circle-text" size="small" position={{top: '24.80%', left: '3.6%'}}>Maven</TreeCircleText>
        <TreeCircle id="spring-circle" size="small" position={{top: '9%', left: '22.5%'}}/>
        <TreeCircleText id="spring-circle-text" size="small" position={{top: '5.5%', left: '19.5%'}}>Spring</TreeCircleText>
        <TreeCircle id="django-circle" size="small" position={{top: '5.9%', left: '33.8%'}}/>
        <TreeCircleText id="django-circle-text" size="small" position={{top: '2.5%', left: '28%'}}>Django</TreeCircleText>
        <TreeCircle id="drf-circle" size="small" position={{top: '2.5%', left: '42%'}}/>
        <TreeCircleText id="drf-circle-text" size="small" position={{top: '-1%', left: '41.5%'}}>DRF</TreeCircleText>
        <TreeCircle id="sklearn-circle" size="small" position={{top: '2.75%', left: '48%'}}/>
        <TreeCircleText id="sklearn-circle-text" size="small" position={{top: '2.25%', left: '51.5%'}}>Sklearn</TreeCircleText>
        <TreeCircle id="nltk-circle" size="small" position={{top: '7%', left: '60.3%'}}/>
        <TreeCircleText id="nltk-circle-text" size="small" position={{top: '6%', left: '54%'}}>NLTK</TreeCircleText>
        <TreeCircle id="node-circle" size="small" position={{top: '10.2%', left: '68.8%'}}/>
        <TreeCircleText id="node-circle-text" size="small" position={{top: '6.5%', left: '66%'}}>Node</TreeCircleText>
        <TreeCircle id="express-circle" size="small" position={{top: '10.2%', left: '74%'}}/>
        <TreeCircleText id="express-circle-text" size="small" position={{top: '6.5%', left: '74%'}}>Express</TreeCircleText>
        <TreeCircle id="ts-circle" size="small" position={{top: '13.2%', left: '83%'}}/>
        <TreeCircleText id="ts-circle-text" size="small" position={{top: '16%', left: '84%'}}>TypeScript</TreeCircleText>
        <TreeCircle id="react-circle" size="small" position={{top: '31.4%', left: '93.3%'}}/>
        <TreeCircleText id="react-circle-text" size="small" position={{top: '33.5%', left: '91.3%'}}>React</TreeCircleText>
        <TreeCircle id="jquery-circle" size="small" position={{top: '24%', left: '94.3%'}}/>
        <TreeCircleText id="jquery-circle-text" size="small" position={{top: '20.5%', left: '91.3%'}}>JQuery</TreeCircleText>

        <TreeCircle id="sql-circle" size="medium" position={{top: '37%', left: '14%'}}/>
        <TreeCircleText id="sql-circle-text" size="medium" position={{top: '40%', left: '13%'}}>SQL</TreeCircleText>
        <TreeCircle id="c++-circle" size="medium" position={{top: '49%', left: '9%'}}/>
        <TreeCircleText id="c++-circle-text" size="medium" position={{top: '52%', left: '7.5%'}}>C++</TreeCircleText>
        <TreeCircle id="java-circle" size="large" position={{top: '21%', left: '24%'}}/>
        <TreeCircleText id="java-circle-text" size="large" position={{top: '18%', left: '30.5%'}}>Java</TreeCircleText>
        <TreeCircle id="python-circle" size="large" position={{top: '19%', left: '46%'}}/>
        <TreeCircleText id="python-circle-text" size="large" position={{top: '18.5%', left: '53%'}}>Python</TreeCircleText>
        <TreeCircle id="js-circle" size="large" position={{top: '27%', left: '72%'}}/>
        <TreeCircleText id="js-circle-text" size="large" position={{top: '26%', left: '65%'}}>JS</TreeCircleText>
        <TreeCircle id="css-circle" size="medium" position={{top: '40%', left: '85%'}}/>
        <TreeCircleText id="css-circle-text" size="medium" position={{top: '38.5%', left: '90%'}}>CSS</TreeCircleText>
        <TreeCircle id="html-circle" size="medium" position={{top: '46.5%', left: '93%'}}/>
        <TreeCircleText id="html-circle-text" size="medium" position={{top: '50%', left: '89%'}}>HTML</TreeCircleText>
    </div>
)
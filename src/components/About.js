import React from 'react'
import './about.css'

const About = () => {
    return (
        <div >
        
            <main className="main-container">
                <h1>ABOUT ME</h1>
                <hr />
                <p>I'm a self-taught software engineer based in Los Angeles, CA. </p>

                <p>My passion is developing web applications. I love programming and systematically figuring out ways to build more efficient and usable systems. I’m an autonomous learner who works well onsite, in a team environment, and communicates effectively. I enjoy challenging myself with new problems and overcoming obstacles along the way.</p>
                <p>My self-taught journey with React, Node, Express, and PostgreSQL/MongoDB has been providing me the knowledge I need to make ideas a reality.</p>
                <ul>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>CSS</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>MongoDB</li>

                </ul>
            </main>


        </div>
    )
}

export default About;
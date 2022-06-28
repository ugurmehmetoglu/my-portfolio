import React from 'react'
import './home.css'


const Home = (props) => {
    return (
        <div className="home">
            <header className="header-container">
                <div className="header-container-items">
                    <h1>Logo</h1>
                    <nav className="nav-bar">
                        <ul>
                            <li><a href="http://localhost:3000/">HOME</a></li>
                            <li><a href="http://localhost:3000/resume">RESUME</a></li>
                            <li><a href="http://localhost:3000/about">ABOUT</a></li>
                            <li><a href="http://localhost:3000/contact">CONTACT</a></li>
                        </ul>

                    </nav>
                </div>
            </header>
            <main className="main-container">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFpwHq_hOPy8A/profile-displayphoto-shrink_100_100/0/1655257491882?e=1661385600&v=beta&t=t6fOi5-Ns1Be63XemoRjgfpJAK535TFogCujRyJGxAQ" alt="photo"/>
                <div className="main-container-elements">
                    <h1>UGUR MEHMETOGLU</h1>
                    <hr/>
                    <p>Software Engineer, in Los Angeles</p>
                    <button>Get In Touch</button>
                    <button>Download Resume</button>
                </div>
                

            </main>
            
           
            </div>
            
               

           
            )
        }
        
        export default Home;

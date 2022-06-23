import React from 'react'
import './home.css'


const Home = (props) => {
    return (
        <div className="home">
            <header className="header-container">
                <div className="header-container-items">
                    <h1>Logo</h1>
                    <div className="nav-bar">
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">RESUME</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>

                    </div>
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

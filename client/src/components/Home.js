import React from 'react'
import './home.css'

import image from './IMG_3918.jpg'
import {useNavigate} from 'react-router-dom'
import './UgurMehmetoglu_Resume.pdf'


const Home = () => {
    const navigate = useNavigate();
 const navigateToContact = () => {
   navigate('/contact')
 }
    return (
        <div className="home">
            
            <main className="main-container">
                
                <img src={image} alt=""/>
                <div>
                    <h1>UGUR MEHMETOGLU</h1>
                    <hr/>
                    <p>Software Engineer, in Los Angeles</p>
                    <button onClick={navigateToContact}>Get In Touch</button>
                    <a href={require("./UgurMehmetoglu_Resume.pdf")} download="./UgurMehmetoglu_Resume.pdf">
                    <button type="button">Download Resume</button>
                    </a>
                </div>
                
             
            </main>
            
           
            </div>
            
               

           
            )
        }
        
        export default Home;

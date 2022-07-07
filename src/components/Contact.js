import React from 'react'
import './contact.css'

const Contact = () => {
    return(
<main className="main-container-contact">
    <div>
<h2>CONTACT</h2>
<hr/>
<h3>Have a question or want to work together?</h3>
    </div>
    <div className="main-contact-form">
        <form action="">
            <label htmlFor="fname"> Name:</label><br/>
            <input type="text" placeholder="Enter Your Name"/>
            <label htmlFor="email"> Email:</label><br/>
            <input type="text" placeholder="Enter Your Email Address"/>
            <label htmlFor="message"> Message:</label><br/>
            <input type="text" placeholder="Enter Your Message"/>
            <input type="submit" value="Submit"></input>
        </form>
    </div>
</main>
    )
}

export default Contact;
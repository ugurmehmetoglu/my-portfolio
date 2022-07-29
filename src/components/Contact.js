import React, { useState } from 'react'
import './contact.css'


const Contact = () => {

   

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

      const PostMessage = (e) => {
          e.preventDefault();
          console.log("afdsgdhfjgkh")
          console.log(name,email, message)
          fetch("http://localhost:5000/contact",{
              method:"post",
              headers:{
                "Content-Type":"application/json"
                },
              body:JSON.stringify({
                  name,
                  email,
                  message
              })
          }).then(res => res.json())
          .then(data => {
              console.log(data)
              setMessage('')
              setName('')
              setEmail('')
          }).catch(err => {
              console.log(err)
          })
      }

    return (
        <main className="main-container-contact">
            <div>
                <h2>CONTACT</h2>
                <hr />
                <h3>Have a question or want to work together?</h3>
            </div>
            <div className="main-contact-form">
                <form onSubmit={PostMessage}>
                    <label htmlFor="fname"> Name:</label><br />
                    <input type="text" name="name" value={name} placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="email"> Email:</label><br />
                    <input type="text" name="email" value={email} placeholder="Enter Your Email Address" onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="message"> Message:</label><br />
                    <input type="text" name="message" value={message} placeholder="Enter Your Message" onChange={(e) => setMessage(e.target.value)} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </main>
    )
}

export default Contact;
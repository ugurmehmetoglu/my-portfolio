import React, {useState} from 'react';
import './resume.css'
import { Document, Page } from 'react-pdf';
import pdf from './resume.pdf'
const Resume = () => {
 

    const [ numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess ({numPages}) {
        setNumPages(numPages)
       
    }

    return (
        <div className="resume">
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
              <div className="resume-pdf">
              <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>

              </div>
         
            </main>

        </div>
    )
}

export default Resume;
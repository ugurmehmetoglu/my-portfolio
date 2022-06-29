import React, {useState} from 'react';
import './resume.css'
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
 

    const [ numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1)

    function onDocumentLoadSuccess ({numPages}) {
        setNumPages(numPages)
       
    }

    return (
        <div className="resume">
            
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
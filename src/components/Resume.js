import React from 'react';
import './resume.css'
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from './resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {

    return (
        <div >
            
            <main>
              <div className="resume-pdf">
              <Document  file={pdf} >
        <Page pageNumber={1} />
      </Document>

              </div>
         
            </main>

        </div>
    )
}

export default Resume;
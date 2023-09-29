import React from 'react';
import { Document, pdfjs, Page } from 'react-pdf';
import myResume from './Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  return (
    <section className='d-flex justify-content-center'>
      <div id='pdf'>
        <Document file={myResume}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </section>
  );
};

export default Resume;

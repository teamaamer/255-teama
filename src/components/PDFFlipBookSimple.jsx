'use client';

import { useState, useEffect } from 'react';

export default function PDFFlipBookSimple({ pdfUrl }) {
  const [Document, setDocument] = useState(null);
  const [Page, setPage] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    import('react-pdf').then((module) => {
      const { Document: Doc, Page: Pg, pdfjs } = module;
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      setDocument(() => Doc);
      setPage(() => Pg);
      console.log('react-pdf loaded');
    });
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    console.log('PDF loaded! Pages:', numPages);
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.error('PDF load error:', error);
  }

  if (!Document || !Page) {
    return <div className="text-center p-8">Loading PDF library...</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mb-16 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">PDF Test</h2>
      
      <div className="bg-white p-4 rounded shadow-lg">
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
        >
          <Page
            pageNumber={pageNumber}
            width={600}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
        
        {numPages && (
          <div className="flex justify-between mt-4">
            <button
              onClick={() => setPageNumber(p => Math.max(1, p - 1))}
              disabled={pageNumber <= 1}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Previous
            </button>
            <span>Page {pageNumber} of {numPages}</span>
            <button
              onClick={() => setPageNumber(p => Math.min(numPages, p + 1))}
              disabled={pageNumber >= numPages}
              className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

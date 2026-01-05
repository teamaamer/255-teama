'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const HTMLFlipBook = dynamic(() => import('react-pageflip'), {
  ssr: false,
});

export default function PDFFlipBook({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [isLoadingPDF, setIsLoadingPDF] = useState(true);
  const [pageWidth, setPageWidth] = useState(370);
  const [pageHeight, setPageHeight] = useState(500);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [Document, setDocument] = useState(null);
  const [Page, setPage] = useState(null);
  const [error, setError] = useState(null);
  const bookRef = useRef(null);

  useEffect(() => {
    import('react-pdf').then((module) => {
      const { Document: Doc, Page: Pg, pdfjs } = module;
      pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
      setDocument(() => Doc);
      setPage(() => Pg);
    }).catch((err) => {
      console.error('Error loading react-pdf:', err);
      setError('Failed to load PDF library');
    });
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== 'undefined') {
        const mobile = window.innerWidth < 768;
        const width = mobile ? Math.min(window.innerWidth - 60, 300) : 450;
        const height = mobile ? Math.min(window.innerHeight * 0.6, 400) : 600;
        setIsMobile(mobile);
        setPageWidth(width);
        setPageHeight(height);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    console.log('PDF loaded successfully! Number of pages:', numPages);
    setNumPages(numPages);
    setIsLoadingPDF(false);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setError(`Failed to load PDF document: ${error.message || 'Unknown error'}`);
    setIsLoadingPDF(false);
  }

  function onPageLoadSuccess(page) {
    console.log('Page loaded:', page.pageNumber);
  }

  function onPageLoadError(error) {
    console.error('Error loading page:', error);
  }

  function onFlip(e) {
    setCurrentPage(e.data);
  }

  function goToPreviousPage() {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  }

  function goToNextPage() {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  }

  if (!Document || !Page) {
    return (
      <div className="w-full max-w-4xl mx-auto mb-16 flex justify-center items-center min-h-[500px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto mb-16 flex justify-center items-center min-h-[500px]">
        <div className="text-red-600 text-center">
          <p className="text-xl font-semibold mb-2">Error Loading PDF</p>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mx-auto mb-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Company Profile
      </h2>
      
      <div className="flex justify-center items-center relative min-h-[650px] gap-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 0}
          className="nav-button left-button z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 md:p-4 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading=""
        >
          {isLoadingPDF ? (
            <div className="flex justify-center items-center min-h-[500px]">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : numPages ? (
            <div className="flip-book-container">
              <HTMLFlipBook
                ref={bookRef}
                width={pageWidth}
                height={pageHeight}
                maxShadowOpacity={0.5}
                drawShadow={true}
                showCover={true}
                size="fixed"
                className="flip-book"
                usePortrait={isMobile}
                startPage={0}
                flippingTime={1000}
                useMouseEvents={true}
                swipeDistance={30}
                clickEventForward={true}
                mobileScrollSupport={true}
                onFlip={onFlip}
              >
                {Array.from(new Array(numPages), (el, index) => (
                  <div className="page" key={`page_${index + 1}`}>
                    <Page
                      pageNumber={index + 1}
                      width={pageWidth}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      onLoadSuccess={onPageLoadSuccess}
                      onLoadError={onPageLoadError}
                    />
                  </div>
                ))}
              </HTMLFlipBook>
            </div>
          ) : null}
        </Document>

        <button
          onClick={goToNextPage}
          disabled={currentPage >= numPages - 1}
          className="nav-button right-button z-10 bg-gray-800 hover:bg-gray-700 text-white p-3 md:p-4 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next page"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .flip-book-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
        }

        :global(.flip-book) {
          margin: 0 auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }
        
        .page {
          background: white;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

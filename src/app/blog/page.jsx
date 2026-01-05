'use client';

import Container from "@/components/layout/Container";
import React, { useEffect } from "react";

const BlogPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="bg-foreground min-h-screen pt-80 pb-20">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Our Latest Work</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex justify-center">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DPtgFGnjGQJ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}></blockquote>
          </div>

          <div className="flex justify-center">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DN5nze-jfZ5/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}></blockquote>
          </div>

          <div className="flex justify-center">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DNN-oy-R-JL/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}></blockquote>
          </div>

          <div className="flex justify-center">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DLpZiUjxvjM/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}></blockquote>
          </div>

          <div className="flex justify-center">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DLe33XVtnRa/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}></blockquote>
          </div>

          <div className="flex justify-center">
            <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DLR7Y7hN1nU/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '99.375%' }}></blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogPage;

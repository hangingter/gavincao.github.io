import React, { useState, useEffect } from 'react';
import BlogList from './blog/BlogList';
import BlogPost from './blog/BlogPost';
import BlogEditor from './blog/BlogEditor';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState('list');
  const [currentPostId, setCurrentPostId] = useState(null);
  
  // Handle hash-based routing for the blog section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash.startsWith('#/blog/edit/')) {
        const id = hash.replace('#/blog/edit/', '');
        setCurrentPage('edit');
        setCurrentPostId(id);
      } else if (hash.startsWith('#/blog/new')) {
        setCurrentPage('new');
        setCurrentPostId(null);
      } else if (hash.startsWith('#/blog/')) {
        const id = hash.replace('#/blog/', '');
        setCurrentPage('post');
        setCurrentPostId(id);
      } else if (hash === '#/blog') {
        setCurrentPage('list');
        setCurrentPostId(null);
      }
    };

    // Initial check
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section id="blog" className="py-12 bg-gray-50">
      {currentPage === 'list' && <BlogList />}
      {currentPage === 'post' && <BlogPost postId={currentPostId} />}
      {currentPage === 'edit' && <BlogEditor postId={currentPostId} />}
      {currentPage === 'new' && <BlogEditor />}
    </section>
  );
};

export default Blog;
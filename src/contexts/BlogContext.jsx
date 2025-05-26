import React, { createContext, useState, useEffect } from 'react';
import initialBlogPosts from '../data/blogPosts';

// Create the blog context
export const BlogContext = createContext();

// Create a provider component
export const BlogProvider = ({ children }) => {
  // Initialize state with blog posts from data file
  const [blogPosts, setBlogPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  // Load blog posts from localStorage if available, otherwise use initial data
  useEffect(() => {
    const loadBlogPosts = () => {
      try {
        const savedPosts = localStorage.getItem('blogPosts');
        if (savedPosts) {
          setBlogPosts(JSON.parse(savedPosts));
        } else {
          setBlogPosts(initialBlogPosts);
          // Save initial blog posts to localStorage
          localStorage.setItem('blogPosts', JSON.stringify(initialBlogPosts));
        }
      } catch (error) {
        console.error('Error loading blog posts:', error);
        setBlogPosts(initialBlogPosts);
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  // Extract unique categories from blog posts
  useEffect(() => {
    if (blogPosts.length > 0) {
      const uniqueCategories = [...new Set(blogPosts.map(post => post.category))];
      setCategories(uniqueCategories);
    }
  }, [blogPosts]);

  // Add a new blog post
  const addBlogPost = (newPost) => {
    const updatedPosts = [newPost, ...blogPosts];
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  // Update an existing blog post
  const updateBlogPost = (updatedPost) => {
    const updatedPosts = blogPosts.map(post => 
      post.id === updatedPost.id ? updatedPost : post
    );
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  // Delete a blog post
  const deleteBlogPost = (postId) => {
    const updatedPosts = blogPosts.filter(post => post.id !== postId);
    setBlogPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
  };

  // Sort blog posts by date (newest first)
  const sortedBlogPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  return (
    <BlogContext.Provider
      value={{
        blogPosts: sortedBlogPosts,
        categories,
        selectedCategory,
        setSelectedCategory,
        addBlogPost,
        updateBlogPost,
        deleteBlogPost,
        isLoading
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
import React, { useContext, useEffect, useState } from 'react';
import { BlogContext } from '../../contexts/BlogContext';

const BlogPost = ({ postId }) => {
  const { blogPosts } = useContext(BlogContext);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading from an API
    setIsLoading(true);
    
    // Find the post with the matching ID
    const foundPost = blogPosts.find(p => p.id === postId);
    
    if (foundPost) {
      // Simulate a delay for loading effect
      setTimeout(() => {
        setPost(foundPost);
        setIsLoading(false);
      }, 300);
    } else {
      setIsLoading(false);
    }
  }, [postId, blogPosts]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-pulse w-full max-w-3xl">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="h-64 bg-gray-200 rounded mb-6"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h2>
        <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been removed.</p>
        <a 
          href="#/blog" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Return to Blog
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center mb-6">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <span className="text-gray-500 text-sm ml-3">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          
          {post.coverImage && (
            <div className="mb-8">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto rounded-lg shadow-md" 
              />
            </div>
          )}
        </div>

        {/* Post Body */}
        <div className="prose max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Post Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <a 
              href="#/blog" 
              className="flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Blog
            </a>
            <a 
              href={`#/blog/edit/${post.id}`} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Post
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
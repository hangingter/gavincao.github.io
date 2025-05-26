import React, { useState, useContext, useEffect } from 'react';
import { BlogContext } from '../../contexts/BlogContext';

const BlogEditor = ({ postId = null }) => {
  const { blogPosts, addBlogPost, updateBlogPost } = useContext(BlogContext);
  
  const emptyPost = {
    title: '',
    excerpt: '',
    content: '',
    category: 'technology',
    coverImage: '/assets/images/blog-placeholder.jpg', // Default placeholder
  };
  
  const [post, setPost] = useState(emptyPost);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  // Load post data if editing an existing post
  useEffect(() => {
    if (postId) {
      const existingPost = blogPosts.find(p => p.id === postId);
      if (existingPost) {
        setPost(existingPost);
        setIsEditing(true);
      }
    }
  }, [postId, blogPosts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost(prevPost => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');
    
    // Simple validation
    if (!post.title.trim() || !post.excerpt.trim() || !post.content.trim()) {
      setErrorMessage('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    try {
      if (isEditing) {
        // Update existing post
        updateBlogPost({
          ...post,
          updatedAt: new Date().toISOString()
        });
        setSuccessMessage('Blog post updated successfully!');
      } else {
        // Add new post
        const newPost = {
          ...post,
          id: `post-${Date.now()}`,
          date: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        };
        addBlogPost(newPost);
        setSuccessMessage('Blog post published successfully!');
        
        // Reset form if it's a new post
        setPost(emptyPost);
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
      
      // Clear the success message after a delay
      if (successMessage) {
        setTimeout(() => setSuccessMessage(''), 3000);
      }
    }
  };

  const categoryOptions = [
    'technology',
    'design',
    'business',
    'lifestyle',
    'personal',
    'coding'
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>

        {successMessage && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
            <p>{successMessage}</p>
          </div>
        )}

        {errorMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
            <p>{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter post title"
              required
            />
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={post.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
              Excerpt (Summary) *
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={post.excerpt}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter a brief summary of your post"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="coverImage" className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image URL
            </label>
            <input
              type="text"
              id="coverImage"
              name="coverImage"
              value={post.coverImage}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL (optional)"
            />
            {post.coverImage && (
              <div className="mt-2">
                <img src={post.coverImage} alt="Cover preview" className="h-32 object-cover rounded-md" />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
              Content *
            </label>
            <textarea
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              rows="12"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog post content here..."
              required
            ></textarea>
            <p className="text-sm text-gray-500 mt-1">
              Use blank lines to separate paragraphs.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {isEditing ? 'Updating...' : 'Publishing...'}
                </span>
              ) : (
                <span>{isEditing ? 'Update Post' : 'Publish Post'}</span>
              )}
            </button>
            
            <a
              href="#/blog"
              className="px-6 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
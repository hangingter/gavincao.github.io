import React, { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      category: "web",
      image: "https://via.placeholder.com/600x400?text=E-Commerce+Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
      id: 2,
      title: "Portfolio Template",
      category: "web",
      image: "https://via.placeholder.com/600x400?text=Portfolio+Template",
      description: "A customizable portfolio website template for creative professionals.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 3,
      title: "Task Management App",
      category: "mobile",
      image: "https://via.placeholder.com/600x400?text=Task+Management+App",
      description: "A productivity app to help users organize tasks and manage deadlines efficiently.",
      technologies: ["React Native", "Redux", "Firebase"]
    },
    {
      id: 4,
      title: "Dashboard UI Design",
      category: "design",
      image: "https://via.placeholder.com/600x400?text=Dashboard+UI+Design",
      description: "A modern and intuitive dashboard interface design for a SaaS platform.",
      technologies: ["Figma", "Adobe XD", "Photoshop"]
    },
    {
      id: 5,
      title: "Weather Forecast App",
      category: "mobile",
      image: "https://via.placeholder.com/600x400?text=Weather+Forecast+App",
      description: "A weather application providing real-time weather data and forecasts.",
      technologies: ["React", "Weather API", "ChartJS"]
    },
    {
      id: 6,
      title: "Brand Identity Design",
      category: "design",
      image: "https://via.placeholder.com/600x400?text=Brand+Identity+Design",
      description: "Complete brand identity package including logo, colors, and marketing materials.",
      technologies: ["Illustrator", "InDesign"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent works. Each project represents unique challenges and learning opportunities.
          </p>
        </div>

        {/* Project Filter Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="h-60 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="text-blue-600 font-medium hover:text-blue-800 transition inline-flex items-center"
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
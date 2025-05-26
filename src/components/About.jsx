import React from 'react';

const About = () => {
  const timelineEvents = [
    {
      year: '2022 - Present',
      title: 'Senior Web Developer',
      organization: 'Tech Innovations Inc.',
      description: 'Leading frontend development for enterprise applications using React, TypeScript, and modern web technologies.',
      icon: '💼'
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      organization: 'Digital Solutions Agency',
      description: 'Developed responsive web applications and collaborated with UX/UI designers to create seamless user experiences.',
      icon: '💻'
    },
    {
      year: '2018 - 2020',
      title: 'Junior Developer',
      organization: 'Startup Hub',
      description: 'Started my professional journey building websites and applications for small businesses and startups.',
      icon: '🚀'
    },
    {
      year: '2014 - 2018',
      title: 'Computer Science Degree',
      organization: 'University of Technology',
      description: 'Bachelor\'s degree in Computer Science with focus on web technologies and software engineering.',
      icon: '🎓'
    },
    {
      year: '2014',
      title: 'First Coding Experience',
      organization: 'Self-taught',
      description: 'Built my first website and discovered my passion for programming and web development.',
      icon: '⌨️'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My journey in technology has been driven by curiosity and a passion for creating meaningful digital experiences.
            Here's the story of my professional and educational path.
          </p>
        </div>

        {/* Life Timeline */}
        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index < timelineEvents.length - 1 && (
                <div 
                  className="absolute left-8 top-14 w-1 bg-blue-200 h-full"
                  style={{ left: 'calc(2rem + 8px)' }}
                ></div>
              )}

              <div className="flex items-start mb-12">
                {/* Icon/Year Circle */}
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full border-4 border-white shadow-md z-10">
                    <span className="text-xl">{event.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="ml-8 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                    <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0">
                      {event.year}
                    </span>
                  </div>
                  <h4 className="text-md font-medium text-blue-600 mb-2">{event.organization}</h4>
                  <p className="text-gray-600">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
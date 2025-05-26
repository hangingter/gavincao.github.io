import React from 'react';

const Academic = () => {
  const papers = [
    {
      title: "Novel Approaches to Neural Network Optimization in Web Applications",
      authors: "John Doe, Sarah Johnson, Michael Chen",
      journal: "Journal of Web Technologies",
      year: "2023",
      doi: "10.1234/jwt.2023.0102",
      abstract: "This paper explores innovative techniques for optimizing neural networks specifically for web-based applications, focusing on reducing computational overhead while maintaining accuracy.",
      link: "https://doi.org/10.1234/jwt.2023.0102"
    },
    {
      title: "A Comparative Analysis of Modern Frontend Frameworks",
      authors: "John Doe, Emily Zhang",
      conference: "International Conference on Web Engineering (ICWE)",
      year: "2022",
      doi: "10.5678/icwe.2022.1234",
      abstract: "We present a comprehensive analysis of performance metrics across React, Angular, Vue, and Svelte frameworks, providing insights for optimal framework selection based on project requirements.",
      link: "https://doi.org/10.5678/icwe.2022.1234"
    },
    {
      title: "Improving User Experience Through Intelligent Component Architecture",
      authors: "John Doe, Robert Williams, Priya Patel",
      journal: "ACM Transactions on Interactive Systems",
      year: "2021",
      doi: "10.1145/3457142",
      abstract: "This research introduces a novel architecture for web components that dynamically adapts to user interaction patterns, significantly enhancing both performance and usability metrics.",
      link: "https://doi.org/10.1145/3457142"
    },
    {
      title: "Sustainable Web Design: Reducing Carbon Footprint in Modern Websites",
      authors: "John Doe, Lisa Green",
      conference: "Sustainable Computing Conference (SCC)",
      year: "2021",
      doi: "10.2345/scc.2021.5678",
      abstract: "We investigate methodologies for minimizing the environmental impact of web applications through efficient coding practices, optimized asset delivery, and sustainable hosting solutions.",
      link: "https://doi.org/10.2345/scc.2021.5678"
    },
    {
      title: "Machine Learning Approaches for Predictive UX Design",
      authors: "John Doe, David Kim, Sophia Martinez",
      journal: "IEEE Transactions on Human-Machine Systems",
      year: "2020",
      doi: "10.1109/THMS.2020.2983651",
      abstract: "This paper demonstrates how machine learning algorithms can be applied to anticipate user needs and automatically adjust interface elements for improved user experience and engagement.",
      link: "https://doi.org/10.1109/THMS.2020.2983651"
    }
  ];

  return (
    <section id="academic" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Academic Publications</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My contributions to academic research in web development, user experience design, and related technologies.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {papers.map((paper, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <h3 className="text-xl font-bold text-blue-700 flex-1">{paper.title}</h3>
                <span className="inline-block bg-blue-50 text-blue-600 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                  {paper.year}
                </span>
              </div>
              
              <p className="text-gray-700 font-medium mb-3">{paper.authors}</p>
              
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Published in: </span>
                {paper.journal || paper.conference}
              </p>
              
              <div className="mb-6">
                <h4 className="text-md font-semibold text-gray-700 mb-2">Abstract</h4>
                <p className="text-gray-600 text-sm">{paper.abstract}</p>
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  View Publication
                </a>
                <span className="text-sm text-gray-500">DOI: {paper.doi}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academic;
// Sample blog data with placeholder content
const blogPosts = [
  {
    id: "post-1",
    title: "Getting Started with React and Tailwind CSS",
    excerpt: "Learn how to set up a new project with React and Tailwind CSS for rapid UI development.",
    content: "React is a popular JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer in web and mobile apps.\n\nTailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. Instead of pre-designed components, Tailwind provides low-level utility classes that let you build completely custom designs.\n\nIn this tutorial, we'll walk through setting up a new project with React and Tailwind CSS. We'll cover installation, configuration, and basic usage to get you started quickly.\n\nFirst, let's create a new React application using Vite. Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.\n\n\n\nNext, let's install Tailwind CSS and its dependencies:\n\n\n\nThis will create a `tailwind.config.js` file in your project. Update it to include the paths to all of your template files.",
    category: "technology",
    date: "2023-05-15T12:00:00Z",
    coverImage: "/assets/images/blog-placeholder.jpg",
    updatedAt: "2023-05-15T12:00:00Z"
  },
  {
    id: "post-2",
    title: "Advanced State Management in React",
    excerpt: "Explore different state management solutions in React beyond the basic useState hook.",
    content: "State management is a critical aspect of React applications. As your application grows, managing state becomes increasingly complex.\n\nIn this post, we'll explore various state management solutions beyond the basic useState hook.\n\nWe'll cover:\n\n1. useReducer for complex state logic\n2. Context API for shared state\n3. External libraries like Redux, Zustand, and Jotai\n4. When to use each solution\n\nThe useState hook is great for simple state management, but when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one, useState can become cumbersome.\n\nThis is where useReducer comes in. useReducer is a hook that is usually preferable to useState when you have complex state logic. It takes a reducer function and an initial state, and returns the current state paired with a dispatch method.",
    category: "coding",
    date: "2023-06-22T14:30:00Z",
    coverImage: "/assets/images/blog-placeholder.jpg",
    updatedAt: "2023-06-22T14:30:00Z"
  },
  {
    id: "post-3",
    title: "The Future of Web Development",
    excerpt: "A look at emerging technologies and trends shaping the future of web development.",
    content: "Web development is constantly evolving. New technologies, frameworks, and methodologies emerge regularly, changing how we build applications for the web.\n\nIn this article, we'll explore some of the key trends and technologies that are likely to shape the future of web development.\n\n## Server Components\n\nFrameworks like React Server Components and Next.js are blurring the line between client and server rendering, allowing developers to build applications that can selectively render components on the server or client for optimal performance and user experience.\n\n## WebAssembly (WASM)\n\nWebAssembly is opening new possibilities for web applications by allowing high-performance code written in languages like Rust, C++, or C# to run in the browser. This enables web applications to perform tasks that were previously only possible in native applications.\n\n## Edge Computing\n\nEdge computing is moving computation closer to the user by running code on edge servers distributed around the world. This reduces latency and improves user experience by processing data closer to where it's needed.\n\n## AI and Machine Learning\n\nAI and machine learning are increasingly being integrated into web applications, from chatbots and voice interfaces to content recommendation systems and image recognition. As these technologies become more accessible, we can expect to see more AI-powered features in web applications.",
    category: "technology",
    date: "2023-07-05T09:15:00Z",
    coverImage: "/assets/images/blog-placeholder.jpg",
    updatedAt: "2023-07-05T09:15:00Z"
  },
  {
    id: "post-4",
    title: "UI/UX Design Principles Every Developer Should Know",
    excerpt: "Essential design principles that can help developers create better user experiences.",
    content: "As developers, we often focus on the technical aspects of building applications. However, understanding basic design principles can significantly improve the user experience of our applications.\n\nIn this post, we'll cover essential UI/UX design principles that every developer should know.\n\n## Hierarchy and Visual Weight\n\nHierarchy in design helps users understand the importance of elements on the page. By using size, color, contrast, and spacing, you can guide users' attention to the most important elements first.\n\n## Consistency\n\nConsistency in design creates familiarity and reduces cognitive load. Use consistent colors, typography, button styles, and spacing throughout your application.\n\n## Feedback and Response\n\nUsers should always receive feedback when they interact with your application. This could be visual feedback (like a button changing color when clicked) or system feedback (like a success message after submitting a form).\n\n## Accessibility\n\nDesigning for accessibility ensures that your application can be used by everyone, including people with disabilities. This includes using sufficient color contrast, providing alt text for images, and ensuring your application can be navigated using a keyboard.",
    category: "design",
    date: "2023-08-12T16:45:00Z",
    coverImage: "/assets/images/blog-placeholder.jpg",
    updatedAt: "2023-08-12T16:45:00Z"
  },
  {
    id: "post-5",
    title: "Building a Personal Brand as a Developer",
    excerpt: "Tips and strategies for building a personal brand to advance your career in tech.",
    content: "In today's competitive tech industry, building a personal brand can help you stand out, showcase your expertise, and open up new opportunities.\n\nIn this post, we'll explore strategies for building a personal brand as a developer.\n\n## Define Your Niche\n\nWhile it's important to have broad knowledge, focusing on a specific area can help you stand out. Choose a niche that aligns with your interests and career goals.\n\n## Create Valuable Content\n\nSharing your knowledge through blog posts, tutorials, or videos not only helps others but also establishes you as an authority in your field. Start by explaining concepts you've recently learned or sharing solutions to problems you've encountered.\n\n## Engage with the Community\n\nParticipate in online forums, contribute to open-source projects, speak at meetups or conferences, and engage with other developers on social media. Building genuine connections is key to growing your network.\n\n## Consistency is Key\n\nBuilding a personal brand takes time. Be consistent in creating content, engaging with others, and refining your expertise. With persistence, your efforts will compound over time.",
    category: "personal",
    date: "2023-09-03T11:20:00Z",
    coverImage: "/assets/images/blog-placeholder.jpg",
    updatedAt: "2023-09-03T11:20:00Z"
  }
];

export default blogPosts;
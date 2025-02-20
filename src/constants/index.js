import { samp } from "framer-motion/client";
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Freelance Developer",
      icon: mobile,
    },
    {
      title: "30+ Projects",
      icon: backend,
    },
    {
      title: "3+ Year Experience",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "WordPress Website Developer",
      company_name: "Freelancer",
      icon: starbucks,
      iconBg: "#383E56",
      date: "August 2021 - Present",
      points: [
        "Over 3 years of freelancing experience creating dynamic and responsive WordPress websites.",
        "Delivered major projects, including e-commerce stores, corporate sites, educational platforms, and creative portfolios.",
        "Specialized in custom themes, plugin integration, SEO optimization, and performance tuning.",
        "Successfully completed 20+ projects, enhancing client businesses with user-friendly and functional websites."
      ],
    },
    {
      title: "Website Developer (From Scratch)",
      company_name: "Freelancer",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "March 2022 - Present",
      points: [
        "Designed and built 10+ websites from scratch using HTML, CSS, Bootstrap, Tailwind, JavaScript, React, and TypeScript, ensuring a seamless user experience",
        "Created secure backend systems and scalable databases with PHP and SQL, improving reliability",
        "Developed custom admin dashboards, reducing client workload by 30% through automated workflows and real-time analytics",
        "Delivered responsive, scalable, and user-focused web solutions tailored to client needs.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Designed and built 10+ websites from scratch using HTML, CSS, Bootstrap, Tailwind, JavaScript, React, and TypeScript, ensuring a seamless user experience",
    //     "Created secure backend systems and scalable databases with PHP and SQL, improving reliability",
    //     "Developed custom admin dashboards, reducing client workload by 30% through automated workflows and real-time analytics",
    //     "Delivered responsive, scalable, and user-focused web solutions tailored to client needs.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "March 2022 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Evergreen Power Solar",
      description:
        "Evergreen Power Solar is a professionally crafted WordPress website designed to showcase solar energy solutions. It features a clean layout, engaging visuals, and easy navigation, ensuring a user-friendly experience. The site highlights services, products, and benefits, making it an effective platform for customers to explore renewable energy options.",
        tags: [
          {
            name: "wordpress",
            color: "blue-text-gradient",
          },
          {
            name: "css",
            color: "green-text-gradient",
          },
          {
            name: "php",
            color: "pink-text-gradient",
          },
        ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Soil to Soul Resorts",
      description:
        "Soil to Soul Resorts is a beautifully designed website built on WordPress, showcasing a serene and luxurious retreat experience. It features an intuitive layout, engaging visuals, and seamless navigation, ensuring a smooth user experience. The site effectively highlights the resort’s offerings, amenities, and booking options, making it an ideal platform for visitors to explore and plan their stay.",
      tags: [
        {
          name: "wordpress",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "php",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "PinkCityArts",
      description:
        "Pink City Arts is an elegantly designed WordPress website that highlights artistic and handcrafted products. With a visually appealing layout, smooth navigation, and engaging content, it effectively showcases the brand’s unique creations, making it a perfect platform for art enthusiasts and buyer.",
        tags: [
          {
            name: "wordpress",
            color: "blue-text-gradient",
          },
          {
            name: "css",
            color: "green-text-gradient",
          },
          {
            name: "php",
            color: "pink-text-gradient",
          },
        ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
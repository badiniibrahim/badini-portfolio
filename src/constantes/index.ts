import {
    mobile,
    backend,
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
    flutter,
    ifeelsmart,
    aleda,
    bloc,
    uppli,
    shoulders,
    blog,
    fit,
    next,
    car,
    nike,
    cine,
    coin,
    ratp,
    voiture,
    loct,
    cry,
    mob
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
      title: "Flutter",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "Flutter",
      icon: flutter,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
   
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "IFeelsmart",
      icon: ifeelsmart,
      iconBg: "#383E56",
      date: "juil. 2023 - oct. 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Flutter Developer",
      company_name: "Aleda",
      icon: aleda,
      iconBg: "#E6DEDD",
      date: "mai 2023 - juil. 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Blocs & Compagnie",
      icon: bloc,
      iconBg: "#383E56",
      date: "juil. 2020 - avr. 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.js Developer",
      company_name: "Uppli",
      icon: uppli,
      iconBg: "#E6DEDD",
      date: "oct. 2017 - juil. 2020",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "Loctore web app",
      description:
        "Loctoré is an e-health application with the terms care, life and health. This project was designed to make access to care accessible to all and to compensate for medical deserts in Africa.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },

        {
          name: "typescript",
          color: "blue-text-gradient",
        },
       
        {
          name: "material ui",
          color: "pink-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "blue-text-gradient",
        },
        
      ],
      image: loct,
      source_code_link: "https://loctore.com/",
    },
   
    {
      name: "Blog app-next.js",
      description:
        "Full Stack app development with Next.js 13, React, Tailwind, and MongoDB..",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blog,
      source_code_link: "https://github.com/badiniibrahim/blog-app-next.js-13-tailwindCSS-mongodb",
    },
    {
      name: "React Fitness App",
      description:
        "React fitness app using React, material ui, RapidApi, TypeScript and redux toolkit.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "material ui",
          color: "pink-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: fit,
      source_code_link: "https://github.com/badiniibrahim/react_fitness_app",
    },
    {
      name: "NextLink App",
      description:
        "Full Stack MERN Next.js 13 NexLink App | React, Next JS, TypeScript, MongoDB",
      tags: [
        {
          name: "next.js 13",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "typeScript",
          color: "pink-text-gradient",
        },
        {
          name: "redux toolkit",
          color: "pink-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: next,
      source_code_link: "https://github.com/badiniibrahim/nexlink-app-with-next.js-13",
    },
    {
      name: "Car catalogue",
      description:
        "FullStack Car catalogue app using React, NextJS-13, TailwindCSS, RapidApiB",
      tags: [
    
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "pink-text-gradient",
        },
      
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: car,
      source_code_link: "https://github.com/badiniibrahim/car-catalogue-next.js-13-tailwindCSS",
    },
    {
      name: "Nike landing page clone",
      description:
        "This template is a clone Nike website with Tailwind CSS",
      tags: [
    
        {
          name: "react",
          color: "blue-text-gradient",
        },
      
        {
          name: "typeScript",
          color: "pink-text-gradient",
        },
      
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: nike,
      source_code_link: "https://github.com/badiniibrahim/nike_landing_page_clone",
    },
    {
      name: "Cinema Catalog",
      description:
        "The app is designed for discovering and exploring movies. Users can browse a huge selection of movies, sorted by genre. They can also read detailed information about each movie.",
     tags: [
    
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
       
      ],
      image: cine,
      source_code_link: "https://github.com/badiniibrahim/flutter-app-CinemaCatalog",
    },
    {
      name: "CoinView",
      description:
        "CoinView is an easy-to-use cryptocurrency tracking app. It allows you to see real-time prices of different cryptocurrencies, as well as charts and detailed information on each currency. Stay informed on the latest crypto market trends with CoinView.",
     tags: [
    
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
       
      ],
      image: coin,
      source_code_link: "https://github.com/badiniibrahim/flutter-app-CinemaCatalog",
    },
    {
      name: "RATP (RER, Metro, Tramway) status",
      description:
        "The main objective of this application would be to make the lives of travelers easier by providing them with updated, real-time information to optimize their journeys on RATP public transport in Paris.",
     tags: [
    
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
       
      ],
      image: ratp,
      source_code_link: "https://github.com/badiniibrahim/flutter_ratp_trafic",
    },
    {
      name: "Car Hub",
      description:
        "This is a repository for a Flutter application to display list of cars",
     tags: [
    
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
       
      ],
      image: voiture,
      source_code_link: "https://github.com/badiniibrahim/flutter_ratp_trafic",
    },
    {
      name: "Crypto dash",
      description:
        "The primary objective of the application is to provide an exhaustive and constantly updated list of cryptocurrencies available on the market, accompanied by detailed information relating to each of them. ",
     tags: [
    
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
       
      ],
      image: cry,
      source_code_link: "https://github.com/badiniibrahim/flutter-app-crypto-dash",
    },
    {
      name: "Loctore mobile",
      description:
        "Loctoré is an e-health application with the terms care, life and health. This project was designed to make access to care accessible to all and to compensate for medical deserts in Africa",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },

      ],
      image: mob,
      source_code_link: "https://github.com/badiniibrahim/flutter-fitness-gym-app",
    },
    {
      name: "Fitness gym app",
      description:
        "Flutter Fitness GYM app your ultimate partner in achieving your fitness, health and wellness goals. Designed to give you a complete gym experience, this powerful and user-friendly app will support you every step of your fitness journey.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "dart",
          color: "green-text-gradient",
        },
        {
          name: "rapidApi",
          color: "pink-text-gradient",
        },
      ],
      image: shoulders,
      source_code_link: "https://github.com/badiniibrahim/flutter-fitness-gym-app",
    },
  ];
  
  export { services, technologies, experiences, projects };
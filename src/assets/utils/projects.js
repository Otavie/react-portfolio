import portfolioDesktop from '../img/portfolio-desktop.jpg';
import portfolioMobile from '../img/portfolio-mobile.png';
import studentPhotocardDesktop from '../img/photocard-desktop.jpg';
import studentPhotocardMobile from '../img/photocard-mobile.png';
import chatbotDesktop from '../img/chatbot-desktop.jpg';
import chatbotMobile from '../img/chatbot-mobile.png';
import cliDictionaryDesktop from '../img/cli-dictionary-desktop.jpg';
import cliDictionaryMobile from '../img/cli-dictionary-mobile.png';
import hslDesktop from '../img/hsl-project-desktop.jpg';
import hslMobile from '../img/hsl-project-mobile.png';
import weatherDesktop from '../img/weather-desktop.jpg';
import weatherMobile from '../img/weather-mobile.png';

const ListOfProjects = [
    {
        id: "portfolio-site",
        title: "Portfolio Site",
        description: "This portfolio website showcases the work and capabilities of a skilled frontend developer. Designed to provide a glimpse into the developer's expertise and creativity, it serves as both a professional showcase and a testament to the power of frontend technologies. This website was meticulously crafted using the following technologies: HTML5, SCSS/CSS3, and JavaScript, which are the fundamental building blocks for creating web interfaces. GreenSock Animation Platform (GSAP) Library, used for empowering captivating animations that enhance user engagement and interaction.",
        imageDesktop: portfolioDesktop,
        imageMobile: portfolioMobile,
        toolsUsed: "HTML | S(CSS) | JavaScript | GSAP",
        liveDemoURL: "https://otavie.github.io/portfolio_v3/",
        gitHubURL: "https://github.com/Otavie/portfolio_v3",
        keyFeatures: [
            {
                id: 1,
                featureTitle: "Responsive Design",
                featureNote: "The portfolio boasts a responsive design, ensuring seamless experiences across both desktop and mobile devices."
            },
            {
                id: 2,
                featureTitle: "Dynamic Landing Page",
                featureNote: "The landing page greets visitors with visually stunning project displays, brought to life through skilfully designed animations. These animations not only capture attention but also provide an immersive introduction to my showcased projects."
            },
            {
                id: 3,
                featureTitle: "Others",
                featureNote: "The website contains sections such as projects, about me and contact sections that contains information about projects, skills and education and contact details such as email, LinkedIn and GitHub respectively."
            }
        ]
    },
    {
        id: "student-photocard-collection",
        title: "Student Photocard Collection",
        description: "AltSchool 2023 Student Photocard Collection is a sophisticated web application that exemplifies the fusion of modern web technologies and user-centric design, providing an effective solution for managing student profiles and fostering a connected educational community. It offers a comprehensive set of features for students and administrators, enhancing the overall experience within the educational environment. Node.js, the runtime environment for server-side scripting. EJS, a template engine is used for rendering dynamic content. Bootstrap, a front-end framework for creating responsive web designs. MongoDB, a NoSQL database for efficient data storage and retrieval.",
        imageDesktop: studentPhotocardDesktop,
        imageMobile: studentPhotocardMobile,
        toolsUsed: "HTML | S(CSS) | NodeJS | EJS | Bootstrap | MongoDB | Font Awesome",
        liveDemoURL: "https://student-photocard.cyclic.cloud/",
        gitHubURL: "https://github.com/Otavie/AltSchool-2023-Photocard-MongoDB-EJS",
        keyFeatures: [
            {
                id: 1,
                featureTitle: "User Authentication",
                featureNote: "AltSchool 2023 ensures a secure and trustworthy environment by implementing robust user authentication."
            },
            {
                id: 2,
                featureTitle: "Student Profile Management",
                featureNote: "The application allows students to create, edit, and delete their profiles."
            },
            {
                id: 3,
                featureTitle: "Responsive Design",
                featureNote: "AltSchool 2023 boasts a responsive and adaptive design, ensuring a seamless user experience on both desktop and mobile devices."
            },
            {
                id: 4,
                featureTitle: "Session Management",
                featureNote: "The application employs Express sessions to efficiently manage user sessions. This ensures a smooth and secure user experience while navigating through the system."
            },
            {
                id: 5,
                featureTitle: "Password Hashing",
                featureNote: "This approach protects user information against unauthorized access."
            },
            {
                id: 6,
                featureTitle: "Student Profile Management",
                featureNote: "AltSchool 2023 seamlessly integrates with MongoDB, a powerful NoSQL database to facilitates the storage and retrieval of student data."
            }
        ]
    },
    {
        id: "chatbot-model",
        title: "Chatbot Model in Live Environment",
        description: "This project is an exciting endeavour that focuses on taking a chatbot from development to real-world usage. This project leverages cutting-edge technologies and methodologies to create a seamless and interactive chatbot experience for users. The primary purpose of this project is to demonstrate the successful deployment of a chatbot model into a live environment.",
        imageDesktop: chatbotDesktop,
        imageMobile: chatbotMobile,
        toolsUsed: "HTML5 | SCSS/CSS3 | JavaScript | Python | Flask",
        liveDemoURL: "https://github.com/Otavie/otavie-chatbot",
        gitHubURL: "https://github.com/Otavie/otavie-chatbot",
        keyFeatures: [
            {
                id: 1,
                featureTitle: "Model Training",
                featureNote: "Python was used to build and train the chatbot. The model is designed to understand and respond to user messages effectively."
            },
            {
                id: 2,
                featureTitle: "Natural Language Processing (NLP)",
                featureNote: "The chatbot employs NLP techniques to interpret user input, classify intents, and generate contextually relevant responses."
            },
            {
                id: 3,
                featureTitle: "Intent Recognition",
                featureNote: "The bot utilizes predefined intents and pattern-response pairs to recognize user queries and provide appropriate answers."
            },
            {
                id: 4,
                featureTitle: "Flask Integration",
                featureNote: "Flask, a web framework for Python, is integrated to create a user-friendly web interface for the chatbot."
            },
            {
                id: 5,
                featureTitle: "Web Interface",
                featureNote: "The chatbot is accessible through a user-friendly web interface. Users can interact with the chatbot by typing messages in the input field and clicking the 'Send' button."
            }
        ]
    },
    {
        id: "cli-dictionary",
        title: "CLI Dictionary",
        description: "The Command Line Interface (CLI) Dictionary is a user-friendly web application designed to enhance the command-line and text editing experience. This versatile tool is tailored to assist users in effortlessly discovering the meanings and usages of commonly employed commands and terminologies within shell environments and text editors. Whether you're a novice or an experienced developer, this app aims to be your indispensable companion.",
        imageDesktop: cliDictionaryDesktop,
        imageMobile: cliDictionaryMobile,
        toolsUsed: "HTML | CSS | JS | JSON",
        liveDemoURL: "https://otavie.github.io/cli-dictionary/",
        gitHubURL: "https://github.com/Otavie/cli-dictionary",
        keyFeatures: [
            {
                id: 1,
                featureTitle: "Comprehensive Definition Lookup",
                featureNote: "The CLI Dictionary offers an extensive database of command meanings and terminologies, specifically curated for users of vi, emacs, and git. It ensures you have a quick reference at your fingertips."
            },
            {
                id: 2,
                featureTitle: "Usage Guidance",
                featureNote: "The app goes the extra mile by offering insights into how these commands are typically used."
            },
            {
                id: 3,
                featureTitle: "Day and Night Modes",
                featureNote: "We understand that different users have different preferences. That's why we've included a user-friendly mode-switching feature."
            },
            {
                id: 4,
                featureTitle: "Responsive Design",
                featureNote: "We've crafted the CLI Dictionary to be fully responsive, ensuring a seamless experience across a variety of devices, including mobile phones, tablets, and desktop computers."
            }
        ]
    },
    {
        id: "hsl-site",
        title: "Hebron Startup Lab",
        description: "Welcome to the Hebron Startup Lab web project! This project is a web application built using JavaScript, HTML, and CSS (Sass) to showcase the activities and offerings of Hebron Startup Lab, a vibrant hub for entrepreneurs and startups in Hebron. HSL is Nigeria's s first University-based open living lab for entrepreneurs, investors and startups.",
        imageDesktop: hslDesktop,
        imageMobile: hslMobile,
        toolsUsed: "HTML | S(CSS) | JavaScript | GSAP",
        liveDemoURL: "https://hebron-startup-lab.netlify.app/",
        gitHubURL: "https://github.com/Otavie/hebron-startup-lab",
        keyFeatures: [
            {
                id: 1,
                featureTitle: "Responsive Design",
                featureNote: "The web project is fully responsive, ensuring a seamless experience on different devices and screen sizes."
            },
            {
                id: 2,
                featureTitle: "Interactive Landing Page",
                featureNote: "Engaging and interactive landing page to capture users' attention and encourage exploration."
            },
            {
                id: 3,
                featureTitle: "HSL Alumni Section",
                featureNote: "Display some of the list of HSL alumni that are founders or heading startups."
            },
            {
                id: 4,
                featureTitle: "Member Profiles",
                featureNote: "Highlight the members of the HSL team with detailed profiles. Meet the dedicated members of the Hebron Startup Lab team who work tirelessly to support and empower the startup community."
            }
        ]
    },
    {
        id: "weather-app",
        title: "Weather App",
        description: "WeatherNow is a versatile weather application designed to empower users with up-to-the-minute weather information for any location they desire. With WeatherNow, you have the convenience of checking current weather conditions at your fingertips. This robust application delivers comprehensive weather data, including temperature readings in both Fahrenheit and Celsius, as well as insightful details on various factors like weather conditions, humidity levels, and more. Whether you are a frequent traveler, an outdoor enthusiast, or simply someone who wants to be well-prepared for the day ahead, WeatherNow is the ideal companion. You can rely on it to make informed decisions based on real-time weather updates.",
        imageDesktop: weatherDesktop,
        imageMobile: weatherMobile,
        toolsUsed: "HTML | CSS | JavaScript | JSON",
        liveDemoURL: "https://otavie.github.io/weather-app/",
        gitHubURL: "https://github.com/Otavie/weather-app",
        keyFeatures: [
            {
                id: 1,
                featureTitle: "Temperature Readings",
                featureNote: "WeatherNow offers temperature readings in both Fahrenheit and Celsius, catering to your preferred metric."
            },
            {
                id: 2,
                featureTitle: "Detailed Weather Insights",
                featureNote: "Gain access to in-depth weather insights, including weather conditions, humidity levels, and more. Stay informed about the current state of the atmosphere."
            },
            {
                id: 3,
                featureTitle: "User-Friendly Interface",
                featureNote: "WeatherNow boasts an intuitive and user-friendly interface, ensuring a seamless experience for all users."
            },
            {
                id: 4,
                featureTitle: "Versatile Use Cases",
                featureNote: "Whether you're planning a trip, organizing outdoor activities, or simply want to stay informed about local weather, WeatherNow has you covered."
            }
        ]
    }
]

export default ListOfProjects;
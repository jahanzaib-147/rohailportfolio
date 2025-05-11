/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Rohail Rao's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Rohail's Portfolio",
    type: "website",
    url:
      "https://drive.google.com/file/d/1XahUK8YyIR7nwRGLj7tf7oRVl62epPJx/view?usp=sharing",
  },
};

//Home Page
const greeting = {
  title: "Rohail Rao",
  logo_name: "Rohail  Rao",
  subTitle:
    "I am a Data Analyst with 4 years of experience, specializing in SQL, Power BI, and Excel to optimize business performance and drive data-driven decisions.",
  resumeLink:
    "https://drive.google.com/file/d/1XahUK8YyIR7nwRGLj7tf7oRVl62epPJx/view?usp=sharing",
  portfolio_repository:
    "https://drive.google.com/file/d/1XahUK8YyIR7nwRGLj7tf7oRVl62epPJx/view?usp=sharing",
  githubProfile:
    "https://drive.google.com/file/d/1XahUK8YyIR7nwRGLj7tf7oRVl62epPJx/view?usp=sharing",
  bookmeeting: "https://calendly.com/rohailrao2000",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/muhammad-rohail-rao-170414215/",
  // gmail: "rohailrao2000@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  // {
  //   name: "Github",
  //   link: "https://github.com/ashutosh1919",
  //   fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
  //   backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  // },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/muhammad-rohail-rao-170414215/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "Calendly",
  //   link: "https://calendly.com/rohailrao2000",
  //   imageSrc: "calendly.png", // Reference https://fontawesome.com/icons/youtube?style=brands
  //    // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=rohailrao2000@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  // {
  //   name: "Instagram",
  //   link: "https://www.instagram.com/layman_brother/",
  //   fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
  //   backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  // },
];

const skills = {
  data: [
    {
      title: "Data Analytics & Business Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building scalable and production-ready dashboards and reports using Power BI and Excel for diverse business use cases",
        "⚡ Proven experience in handling large datasets using SQL to extract, transform, and analyze data for actionable insights",
        "⚡ Expertise in advanced data modeling, forecasting, and time series analysis to support strategic decision-making",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          imageSrc: "aawfba7fv.webp",
        },
        {
          skillName: "MS Excel",
          imageSrc: "excel.png",
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          imageSrc: "sql_logo.png",
        },
      ],
    },
    // {
    //   title: "Full Stack Development",
    //   fileName: "FullStackImg",
    //   skills: [
    //     "⚡ Building responsive website front end using React-Redux",
    //     "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
    //     "⚡ Creating application backend in Node, Express & Flask",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "HTML5",
    //       fontAwesomeClassname: "simple-icons:html5",
    //       style: {
    //         color: "#E34F26",
    //       },
    //     },
    //     {
    //       skillName: "CSS3",
    //       fontAwesomeClassname: "fa-css3",
    //       style: {
    //         color: "#1572B6",
    //       },
    //     },
    //     {
    //       skillName: "Sass",
    //       fontAwesomeClassname: "simple-icons:sass",
    //       style: {
    //         color: "#CC6699",
    //       },
    //     },
    //     {
    //       skillName: "JavaScript",
    //       fontAwesomeClassname: "simple-icons:javascript",
    //       style: {
    //         backgroundColor: "#000000",
    //         color: "#F7DF1E",
    //       },
    //     },
    //     {
    //       skillName: "ReactJS",
    //       fontAwesomeClassname: "simple-icons:react",
    //       style: {
    //         color: "#61DAFB",
    //       },
    //     },
    //     {
    //       skillName: "NodeJS",
    //       fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
    //       style: {
    //         color: "#339933",
    //       },
    //     },
    //     {
    //       skillName: "NPM",
    //       fontAwesomeClassname: "simple-icons:npm",
    //       style: {
    //         color: "#CB3837",
    //       },
    //     },
    //     {
    //       skillName: "Yarn",
    //       fontAwesomeClassname: "simple-icons:yarn",
    //       style: {
    //         color: "#2C8EBB",
    //       },
    //     },
    //     {
    //       skillName: "Gatsby",
    //       fontAwesomeClassname: "simple-icons:gatsby",
    //       style: {
    //         color: "#663399",
    //       },
    //     },
    //     {
    //       skillName: "Flutter",
    //       fontAwesomeClassname: "simple-icons:flutter",
    //       style: {
    //         color: "#02569B",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Indian Institute of Information Technology Kurnool",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
    {
      title: "Indiana University Bloomington",
      subtitle: "M.S. in Computer Science",
      logo_path: "iu_logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.indiana.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "My Journey",
  description:
    "I have over 4 years of experience as a Data Analyst, working with both evolving startups and established companies to drive data-driven decision-making. My expertise lies in SQL, Power BI, and Excel, enabling me to design insightful dashboards, conduct in-depth analyses, and optimize business performance. Additionally, I am actively involved in open-source data communities, where I contribute as a representative and mentor, sharing my knowledge and fostering collaboration.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Data Analyst",
          company: "Simplified Dashboards",
          company_url:
            "https://www.linkedin.com/company/simplified-dashboards/?viewAsMember=true",
          logo_path: "simplified_dashboards_logo.jpeg",
          duration: "January 2023 - Continue",
          location: "Karachi, Pakistan",
          description:
            "Working remotely as a Data Analyst, I collaborate with cross-functional teams to deliver actionable insights from complex datasets. Leveraging tools like SQL, Power BI, and Excel, I develop interactive dashboards, automate reporting processes, and support data-driven decision-making—regardless of location. My remote setup enables efficient communication, flexibility, and consistent delivery of high-impact analytical solutions",
          color: "#9b1578",
        },
        {
          title: "Assistant Manager Quality Auditor",
          company: "Ibex Global (Covered Insurance)",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "coverd.jpg",
          duration: "August 2024 - Present",
          location: "Karachi, Pakistan",
          description:
            "I analyze departmental KPIs to assess weekly and monthly performance, driving operational improvements. I maintain dashboards to provide real-time insights into team productivity. Additionally, I conduct audits of profiles and calls for new insurance policy customers to ensure compliance and quality standards.",
          color: "#000000",
        },
        {
          title: "Performance Analyst ",
          company: "Tekrevol ",
          company_url: "https://legatohealthtech.com/",
          logo_path: "tekrevol.jpg",
          duration: "September 2023 – June 2024",
          location: "Karachi, Pakistan",
          description:
            "I utilized data analysis to identify inefficiencies in the software development lifecycle and conducted assessments across departments to pinpoint areas for improvement. By collaborating cross-functionally, I interpreted data insights and proposed strategic solutions to enhance productivity. I implemented data-driven strategies that optimized processes and improved company performance while generating reports to communicate findings and recommendations to stakeholders and senior management.",
          color: "#0879bf",
        },
        {
          title: "Commercial Analyst",
          company: "MEDZnMORE Pvt. Ltd ",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "medznmore.webp",
          duration: "January 2023 - July 2023",
          location: "Karachi, Pakistan",
          description:
            "I designed and developed a live dashboard that enabled real-time tracking of key performance indicators, improving profit margins from -10% to 2% through efficient margin analysis. I worked closely with the data team to maintain data integrity and conducted in-depth analysis to provide insights and projections for future growth. Utilizing Excel, SQL, and Power BI, I created visually compelling data representations for clear communication with stakeholders. Additionally, I collaborated with cross-functional teams to align data efforts with company goals and objectives.",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    // {
    //   title: "Machine Learning Intern",
    //   company: "TikTok Inc.",
    //   company_url: "https://www.tiktok.com/en/",
    //   logo_path: "masterPortfolio\src\assets\images\ibex_logo.jpg",
    //   duration: "May 2022 - Aug 2022",
    //   location: "San Francisco, USA",
    //   description:
    //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //   color: "#000000",
    // },
    // {
    //   title: "Data Science Research Intern",
    //   company: "Delhivery Pvt. Ltd.",
    //   company_url: "https://www.delhivery.com/",
    //   logo_path: "delhivery_logo.png",
    //   duration: "May 2019 - Sept 2019",
    //   location: "Gurgaon, Haryana",
    //   description:
    //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //   color: "#ee3c26",
    // },
    // {
    //   title: "Data Science Intern",
    //   company: "Intel Indexer LLC",
    //   company_url:
    //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //   logo_path: "intel_logo.jpg",
    //   duration: "Nov 2018 - Dec 2018",
    //   location: "Work From Home",
    //   description:
    //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //   color: "#0071C5",
    // },
    //   ],
    // },
    //     {
    //       title: "Volunteerships",
    //       experiences: [
    //         {
    //           title: "Google Explore ML Facilitator",
    //           company: "Google",
    //           company_url: "https://about.google/",
    //           logo_path: "google_logo.png",
    //           duration: "June 2019 - April 2020",
    //           location: "Hyderabad, Telangana",
    //           description:
    //             "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //           color: "#4285F4",
    //         },
    //         {
    //           title: "Microsoft Student Partner",
    //           company: "Microsoft",
    //           company_url: "https://www.microsoft.com/",
    //           logo_path: "microsoft_logo.png",
    //           duration: "Aug 2019 - May 2020",
    //           location: "Hyderabad, Telangana",
    //           description:
    //             "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //           color: "#D83B01",
    //         },
    //         {
    //           title: "Mozilla Campus Captain",
    //           company: "Mozilla",
    //           company_url: "https://www.mozilla.org/",
    //           logo_path: "mozilla_logo.png",
    //           duration: "Oct 2019 - May 2020",
    //           location: "Kurnool, Andhra Pradesh",
    //           description:
    //             "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //           color: "#000000",
    //         },
    //         {
    //           title: "Developer Students Club Member",
    //           company: "DSC IIITDM Kurnool",
    //           company_url:
    //             "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //           logo_path: "dsc_logo.png",
    //           duration: "Jan 2018 - May 2020",
    //           location: "Kurnool, Andhra Pradesh",
    //           description:
    //             "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //           color: "#0C9D58",
    //         },
    //         {
    //           title: "Developer Program Member",
    //           company: "Github",
    //           company_url: "https://github.com/",
    //           logo_path: "github_logo.png",
    //           duration: "July 2019 - PRESENT",
    //           location: "Work From Home",
    //           description:
    //             "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //           color: "#181717",
    //         },
    //       ],
    //     },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description: "Some of my published Articles, Blogs and Research.",
//   avatar_image_path: "projects_image.svg",
// };

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "my_pic.png",
    description:
      "📬 I'm available on most social media platforms — feel free to connect! I typically respond within 24 hours. I'm happy to collaborate or assist with anything related to Data Analysis, SQL, Power BI, Excel Reporting, Dashboard Development, and Data-Driven Decision Making",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  publications,
  contactPageData,
};

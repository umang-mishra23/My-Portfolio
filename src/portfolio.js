/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Umang's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Umang Mishra Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Umang Mishra",
  logo_name: "UmangMishra",
  nickname: "Ethical Hacker & Bug Hunter",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1KGfqW8ovV2t39nyZa7RjoQ73IgDNtxF1/view?usp=drivesdk",
  portfolio_repository: "https://github.com/umang-mishra23",
  githubProfile: "https://github.com/umang-mishra23",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/umang-mishra23",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/-umangmishra/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:umangmishra2327@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Medium",
    link: "https://medium.com/@umangmishra2327",
    fontAwesomeIcon: "fa-medium", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },

  {
    name: "X-Twitter",
    link: "https://x.com/umangmishra509",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/umang.mishra509",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Web Security & VAPT",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Testing web applications for security flaws before attackers exploit them ",
        "⚡ Identifying and exploiting vulnerabilities",
        "⚡ Conducting real-world testing through bug bounty programs and security labs",
      ],
      softwareSkills: [
        {
          skillName: "Nmap",
          fontAwesomeClassname: "mdi:radar",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "BurpSuite",
          fontAwesomeClassname: "simple-icons:burpsuite",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "OWASP",
        
        },
        {
          skillName: "Wireshark",
          fontAwesomeClassname: "mdi:network",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Spring-Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#0b951c",
          },
        },

        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#02569B",
          },
        },

        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
            color: "#523c64",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "orange",
          },
        },
      ],
      
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "BugCrowd",
      iconifyClassname: "simple-icons:bugcrowd",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://bugcrowd.com/h/UmangMishra",
    },
    {
      siteName: "HackerOne",
      iconifyClassname: "simple-icons:hackerone",
      style: {
        color: "black",
      },
      profileLink: "https://hackerone.com/umang_mishra?type=user",
    },
    {
      siteName: "OpenBugBounty",
      iconifyClassname: "simple-icons:openbugbounty",
      style: {
        color: "orange",
      },
      profileLink: "https://www.openbugbounty.org/researchers/UmangMishra/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Lovely Professional University",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "lpu-logo.png",
      alt_name: "LPU Jalandhar",
      duration: "2023 - 2027",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS,CA, AI etc.",
        "⚡ Apart from this, I have done courses on Cyber Security, Android App Development and Full Stack Development.",
        "⚡ I was selected for Scholarship of 20% which was given to selected students in college.",
      ],
      website_link: "https://www.lpu.in/",
    },
    {
      title: "Imperial Public School",
      subtitle: "Intermediate",
      logo_path: "ips.png",
      alt_name: "ips logo",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Built a strong understanding of core subjects, turning basic concepts into clear knowledge.",
        "⚡ Developed analytical thinking and problem-solving skills across different topics.",
        "⚡ Gained academic maturity by balancing curiosity with discipline in learning",
      ],
      website_link: "https://ipshathwa.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "CERTIFIED CRPO",
      subtitle: "- EU CYBER ACADEMY",
      logo_path: "icttf.png",
      certificate_link:
        "https://mycourse.app/GyHjP98WhglCVXAXq",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "CERTIFIED CCEP",
      subtitle: "- Red Team Leaders",
      logo_path: "red-team-leaders.png",
      certificate_link:
        "https://courses.redteamleaders.com/exam-completion/94f32ecd6990ab49",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Red Hat System Administration I",
      subtitle: "- Red Hat",
      logo_path: "red-hat.png",
      certificate_link:
        "https://www.credly.com/badges/b46788b5-91cd-46a5-9e9f-036f6976ee5e/linked_in_profile",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      subtitle: "- Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/GJI0U5YIACGN",
      alt_name: "IBM",
      color_code: "#0C9D5899",
    },
    {
      title: "Introduction of cloud",
      subtitle: "- IBM",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Computer Communications",
      subtitle: "- University of Colorado",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/VG2AYKVSX0UY",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I worked with two startups as a Cybersecurity Intern, delivering hands-on security assessments by identifying vulnerabilities, executing penetration tests, and recommending mitigation strategies aligned with OWASP Top 10 using tools like Burp Suite and Splunk.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internship", // ✅ fixed spelling
      work: true,
      experiences: [
        {
          title: "CyberSecurity Intern",
          company: "Redynox",
          company_url: "#",
          logo_path: "redynox.jpg",
          duration: "Feb' 2027 - Mar' 2027",
          location: "Remote",
          description:
            "Performed vulnerability scanning and basic penetration testing to identify security risks, analyzed network traffic for potential threats, and applied fundamental cybersecurity practices to protect systems and data. Worked with security tools, documented findings, and followed best practices for risk assessment and mitigation.",
          color: "#000000",
        },
        {
          title: "CyberSecurity Intern",
          company: "Future Intern",
          company_url: "#",
          logo_path: "futurelogo.jpg",
          duration: "Dec' 2027 - Jan' 2027",
          location: "Remote",
          description:
            "Performed log analysis using Splunk to identify security anomalies and suspicious activities, conducted vulnerability assessments on DVWA by identifying and documenting common web security flaws such as SQL Injection, XSS, and CSRF, and practiced exploiting and understanding OWASP Top 10 vulnerabilities using tools like Burp Suite.",
          color: "#000000",
        },
      ],
    },

    // 🔥 Bug Bounty Section (Correctly added)
    {
      title: "Bug Bounty",
      work: true,
      experiences: [
        {
          title: "Bug Bounty Hunter - Hackerone",
          company: "Independent",
          company_url: "#",
          logo_path: "hackerone.png", // optional
          duration: "Dec' 2026 - Present",
          location: "Remote",
          description:
            "Identified and responsibly disclosed vulnerabilities including IDOR in web applications, contributing to improved access control mechanisms.",
          color: "#000000",
        },
        {
          title: "Bug Bounty Hunter - Bugcrowd",
          company: "Independent",
          company_url: "#",
          logo_path: "bugcrowd.png", // optional
          duration: "Dec' 2026 - Present",
          location: "Remote",
          description:
            "Performed manual testing to discover security misconfigurations and input validation issues, strengthening application security posture.",
          color: "#000000",
        },
        {
          title: "Bug Bounty Hunter - OpenBugBounty",
          company: "Independent",
          company_url: "#",
          logo_path: "openbug.png", // optional
          duration: "Dec' 2026 - Present",
          location: "Remote",
          description:
            "Reported web vulnerabilities such as XSS through responsible disclosure, demonstrating practical knowledge of OWASP Top 10.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a wide range of modern technologies and tools. My core expertise lies in cybersecurity, where I focus on vulnerability assessment, penetration testing, and building secure applications using industry-standard practices and tools.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile1.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with WebApp security, Bug Bounty, Android and java backend Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://medium.com/@umangmishra2327",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Gorakhpur, Uttar Pradesh, India 273201",
    locality: "UttarPradesh",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/eQPoBu89zcfcnbZi8",
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
  publicationsHeader,
  publications,
  contactPageData,
};

import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  substackLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  Headshot,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { url } from "inspector";

export const RESUME_DATA = {
  name: "James Slattery",
  initials: "JS",
  location: "Chicago, IL, USA, CST",
  locationLink: "https://www.google.com/maps/place/Chicago",
  about:
    "👋 hi, I enjoy obsessing over hard problems",
  summary:
    "An MBA student at the University of Chicago Booth School of Business with a focus on Econometrics & Statistics and Finance. Bringing a unique blend of leadership skills honed in the United States Marine Corps Reserve and analytical capabilities developed through extensive academic and professional experiences. Skilled in data analysis, financial modeling, and strategic planning, with a proven track record in delivering actionable insights and solutions in high-pressure environments.",
  avatarUrl: "/T_HS.png", // Replace with your actual avatar URL
  personalWebsiteUrl: "https://slatt.sh", // Replace with your actual website URL
  contact: {
    email: "j@slatt.id",
    tel: "+1 (206) 954-2184",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamslatt",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://www.github.com/jslatt",
        icon: GitHubIcon,
      },
      /*{
        name: "Substack",
        url: "https://jslatt.substack.com/",
        icon: XIcon
      }*/
      // Add more social profiles if needed
    ],
  },
  education: [
    {
      school: "The University of Chicago Booth School of Business",
      degree: "MBA with Concentrations in Econometrics & Statistics, Finance",
      start: "2023",
      badges: ["Advanced Investments", "Data Driven Marketing", "Corporate Finance"],
      end: "2025",
    },
    {
      school: "The University of Chicago The College",
      degree: "Bachelor of Arts in Economics",
      start: "2021",
      badges: ["Financial Accounting","Investments", "Econometrics"],
      end: "2023",
    },
  ],
  work: [
    {
      company: "United States Marine Corps Reserve",
      link: "https://www.marforres.marines.mil/", 
      badges: ["Military"],
      title: "Sergeant & Civil Affairs Specialist",
      logo: "USMCRLogo", 
      start: "2021",
      end: "2024",
      description:
        "Serving as a Civil Affairs Specialist, responsible for coordinating civil-military operations within the Indo-Pacific region and leading humanitarian operations. Managed a team of 4 Marines in a USMC innovation incubator.",
    },
    {
      company: "Russell Investments",
      link: "https://russellinvestments.com/us",
      badges: ["Internship"],
      title: "Intern, Analytics & Consulting",
      logo: "NextGenLogo", 
      start: "2023",
      end: "2023",
      description:
        "I produced analysis of the U.S. Dollar in the 2023 Q2 Economic & Market Review that provided the sales team with key insights for client communication, improving client management. I also conducted a tax-drag analysis comparing Canadian and new Russell funds, aiding strategic decisions and competitive positioning and Go-To-Market Strategy. I developed a data pipeline with Morningstar, integrating Direct's batch function with Excel automation, saving over 100 hours annually, thus boosting team productivity and resource allocation.",
    },
    {
      company: "S&P Dow Jones Indicies (S&P Global)",
      link: "https://www.spglobal.com/spdji/en/",
      badges: ["Internship"],
      title: "Summer Associate",
      start: "2022",
      end: "2023",
      description:
        "As Summer Associate at S&P Dow Jones Indices (S&P Global) within the Client Coverage & Wealth Channel, from June 2022 to May 2023, I spearheaded the enhancement of marketing strategies by analyzing webinar data to increase viewer retention by an estimated 12% and conversion rates by 22%. Additionally, I streamlined sales operations by digitizing over 310 legacy contracts into Salesforce, facilitating proactive account renewal and fee management.",
    },
    {
      company: "United States Marine Corps Reserve",
      link: "https://www.marforres.marines.mil/", 
      badges: ["Military"],
      title: "SJIU Innovation Cell Project Manager",
      logo: "USMCRLogo", 
      start: "2020",
      end: "2021",
      description:
        "Serving as a Project Manager at SJIU, I worked with small teams to build proof of concept products for the USMC. I also worked with the AFWERX SIBR/STTR award recipients to fast track sole source commerialization of key technologies. This put key technology in the hands of Marines far quicker than the traditional DOD acquisition process."
    },
    {
      company: "United States Marine Corps Reserve",
      link: "https://www.marforres.marines.mil/", 
      badges: ["Military"],
      title: "Food Service Specialist",
      logo: "USMCRLogo", 
      start: "2018",
      end: "2020",
      description:
        "Serving as a Food Service Specialist, responsible for supporting operations and coordinating feeding schedules. Keeping Marines fed and ready to fight.",
    }
  ],
  skills: [
    "Financial Statement Analysis",
    "Marketing Analytics",
    "Data Analysis",
    "Strategic Planning",
    "Python",
    "R",
    "SQL",
    "Full Stack Web Development",
    "Leadership",
    "Project Management",
  ],
  projects: [
    {
      title: "Gaia",
      techStack: [
        "GPTv3.5",
        "Next.js",
        "TailwindCSS",
        "Tomorrow.io"
      ],
      description: "This project is my submission to the 2023 Tomorrow.io Weather API Scholarship Competition.",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/jslatt/Gaia",
      },
    },
    {
      title: "noLibo",
      techStack: [
        "Meteor.js",
        "MongoDB",
        "Bootstrap",
        "Barcode Scanner"
      ],
      description: "A Meteor.js full stack application built for inflow/outflow tracking of Marines.",
      logo: ConsultlyLogo,
      link: {
        label: "GitHub",
        href: "https://github.com/jslatt/noLibo",
      },
    },
    {
      title: "Anscombe's Quartet",
      techStack: [
        "Python",
        "Regression Analysis"
      ],
      description: "A python notebook exploring the implications and learnings from the Anscombe Quartet data set. Work in progress.",
      logo: ConsultlyLogo,
      link: {
        label: "Deepnote",
        href: "https://deepnote.com/workspace/limbic-9371581f-98c3-465d-b24f-46fc5e9c2c9f/project/Anscombe-Quartet-c95e5720-b1ee-433a-b3d2-440d07f4439f/notebook/Main-8213059caa504240ac59ebb2fe9ea955",
      },
    }
  ],
} as const;

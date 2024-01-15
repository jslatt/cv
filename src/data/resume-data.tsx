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
    "MBA Candidate with a strong background in financial analytics and consulting, combining military leadership experience with business acumen",
  summary:
    "An MBA student at the University of Chicago Booth School of Business with a focus on Econometrics & Statistics and Finance. Bringing a unique blend of leadership skills honed in the United States Marine Corps Reserve and analytical capabilities developed through extensive academic and professional experiences. Skilled in data analysis, financial modeling, and strategic planning, with a proven track record in delivering actionable insights and solutions in high-pressure environments.",
  avatarUrl: "https://media.licdn.com/dms/image/D5603AQHIczJpcxeckw/profile-displayphoto-shrink_400_400/0/1705247726333?e=1710979200&v=beta&t=O2X2rO1c9kQoDa8scHWd8p9thZoBUtLRKp8O-1EQ4-s", // Replace with your actual avatar URL
  personalWebsiteUrl: "https://slatt.sh", // Replace with your actual website URL
  contact: {
    email: "j@slatt.sh",
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
      {
        name: "Substack",
        url: "https://jslatt.substack.com/",
        icon: XIcon
      }
      // Add more social profiles if needed
    ],
  },
  education: [
    {
      school: "The University of Chicago Booth School of Business",
      degree: "Master of Business Administration with Concentrations in Econometrics & Statistics, Finance",
      start: "2023",
      end: "2025",
    },
    {
      school: "The University of Chicago The College",
      degree: "Bachelor of Arts in Economics",
      start: "2021",
      end: "2023",
    },
  ],
  work: [
    {
      company: "United States Marine Corps Reserve",
      link: "https://www.marforres.marines.mil/", // Replace with the specific link if available
      badges: ["Military Service"],
      title: "Sergeant & Civil Affairs Specialist",
      logo: "USMCRLogo", // Replace with the actual logo
      start: "2018",
      end: "2024",
      description:
        "Serving as a Civil Affairs Specialist responsible for coordinating civil-military operations within the Indo-Pacific region and leading humanitarian operations. Managed a team of 4 Marines in a USMC innovation incubator.",
    },
    {
      company: "Russell Investments",
      link: "https://russellinvestments.com/us",
      badges: ["Internship"],
      title: "Intern, Analytics & Consulting",
      logo: "NextGenLogo", // Replace with the actual logo
      start: "2023",
      end: "2023",
      description:
        "Conducted extensive research on private companies to identify acquisition targets, aided in financial modeling, and provided strategic insights for acquisition processes.",
    },
    {
      company: "S&P Dow Jones Indicies (S&P Global)",
      link: "https://www.spglobal.com/spdji/en/",
      badges: ["Internship"],
      title: "Summer Associate",
      logo: "NextGenLogo", // Replace with the actual logo
      start: "2022",
      end: "2023",
      description:
        "In my role as Summer Associate at S&P Dow Jones Indices (S&P Global) within the Client Coverage & Wealth Channel, from June 2022 to May 2023, I spearheaded the enhancement of marketing strategies by analyzing webinar data to increase viewer retention by an estimated 12% and conversion rates by 22%. Additionally, I streamlined sales operations by digitizing over 310 legacy contracts into Salesforce, facilitating proactive account renewal and fee management.",
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
    // Add more skills as needed
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
    }
  ],
} as const;

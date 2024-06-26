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
  Singal,
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
  personalWebsiteUrl: "https://slatt.id", // Replace with your actual website URL
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
      {
        name: "Signal",
        url: "https://signal.me/#eu/uvBUt0BlInrvBQw32jbx1wt0YwujzBqXVy5aq0OvRLBfRBtgp9JDTrEabnWpxX1q",
        icon: Singal
      }
    ],
  },
  education: [
    {
      school: "The University of Chicago Booth School of Business",
      degree: "MBA with Concentrations in Econometrics & Statistics, Finance",
      start: "2023",
      badges: ["Advanced Investments", "Applied Regression Analysis", "Corporate Finance"],
      end: "2025",
    },
    {
      school: "The University of Chicago The College",
      degree: "Bachelor of Arts in Economics",
      start: "2021",
      badges: ["Financial Accounting","Investments", "Econometrics","Blockchain/DeFi"],
      end: "2023",
    },
  ],
  work: [
    {
      company: "NextGen Growth Partners",
      link: "https://russellinvestments.com/us",
      badges: ["Internship", "Part Time"],
      title: "MBA Associate Intern",
      logo: "NextGenLogo", 
      start: "2024",
      end: "2024",
      description:
        "Joined a search fund and aided the entrepreneur in residence with sourcing prospect deals.",
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
        "I worked as a member on the Portfolio Consulting Group, completing two key projects over the summer. This involved a comprehensive competitor analysis of funds in Canada as well as building out an atuomated data report pipeline.",
    },
    {
      company: "S&P Dow Jones Indicies (S&P Global)",
      link: "https://www.spglobal.com/spdji/en/",
      badges: ["Internship"],
      title: "Summer Associate",
      start: "2022",
      end: "2023",
      description:
        "As Summer Associate at S&P Dow Jones Indices (S&P Global) within the Wealth Channel Management team. This was a very cross functional role that worked with various teams internally.",
    },
    {
      company: "United States Marine Corps Reserve",
      link: "https://www.marforres.marines.mil/", 
      badges: ["Military"],
      title: "Civil Affairs Specialist",
      logo: "USMCRLogo", 
      start: "2021",
      end: "2024",
      description:
        "Serving as a Civil Affairs Specialist, responsible for coordinating civil-military operations within the Indo-Pacific region and leading humanitarian operations.",
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
        "I worked with small teams to build proof of concept products for the USMC. I also worked with the AFWERX SIBR/STTR award recipients to fast track sole source commerialization of key technologies. This put key technology in the hands of Marines far quicker than the traditional DOD acquisition process."
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
    },
    {
        title: "Twonk Bot",
        techStack: [
          "NoseJS",
          "Discord Bot"
        ],
        description: "A discord bot designed to spot price movements in a niche NFT market in order to take advantage of them before other who manually check spot prices.",
        logo: ConsultlyLogo,
        link: {
          label: "Github",
          href: "https://github.com/jslatt/twonkBot",
        }
    },
    {
      title: "Twonkaholic Dashboard",
      techStack: [
        "Python",
      ],
      description: "A python dashboard designed to analyze the Twonk NFT market and provide insights to traders as to price trends and fair value estimtes.",
      logo: ConsultlyLogo,
      link: {
        label: "Deepnote",
        href: "https://deepnote.com/@limbic/Twonk-Metrics-f7658545-2a4e-457c-9485-572c665e73dd",
      }
  },
  {
    title: "iBid Cracker",
    techStack: [
      "Python",
    ],
    description: "A python tool to view historical bid points for booth classes.",
    logo: ConsultlyLogo,
    link: {
      label: "Deepnote",
      href: "https://deepnote.com/workspace/Limbic-9371581f-98c3-465d-b24f-46fc5e9c2c9f/project/iBid-Craker-d3169148-d167-4543-8800-93071b050590/notebook/Main-b34f94375eab42eea8806a2c47812726",
    }
}
  ],
} as const;
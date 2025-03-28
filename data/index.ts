export const navItems = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "About",
    link: "#about",
  },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Blogs", link: "#blogs" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Ham Spam Classifier Model",
    des: "This Ham/Spam Classifier employs a Multinomial Naive Bayes model, a highly efficient algorithm for text classification. It analyzes the frequency of words in emails to accurately categorize them as ham or spam, helping you keep your inbox clean and organized..",
    img: "/ham_spam.jpg",
    iconLists: ["/python.png", "/streamlit_logo.png", "/jupyter.png"],
    link: "https://ham-spam-classifier-aditya.streamlit.app/",
  },
  {
    id: 2,
    title: "Face Mask Detection Model",
    des: "This face mask detection model utilizes a deep learning algorithm to identify individuals wearing masks. It can process images in real-time, providing a high level of accuracy in determining mask compliance..",
    img: "/face_mask.png",
    iconLists: ["/python.png", "/streamlit_logo.png", "/jupyter.png"],
    link: "https://face-mask-detection-aditya.streamlit.app/",
  },
  {
    id: 3,
    title:
      "Move stats from filesystem to database. Current stats is being store in JSON. We need to move it to MySQL with SQLAlchemy",
    des: "This tool is prominent for those who work on wikisource and earlier it was reading data from json file but this flat file system is not durable, so I have mograted stats.json to Database, and using flask initializing table automatically in our database, using this we can perform queries over the data.",
    img: "/indicwiki.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/indictechcom/indic-wsstats/pull/27",
  },
  {
    id: 4,
    title: "ISEA Project Phase 3",
    des: "Contributing on Information Security Education & Awareness Project under Meity Gov.",
    img: "/isea.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://isea.gov.in/",
  },
];

export const companies = undefined;
export const testimonials = undefined;

export const workExperience = [
  {
    id: 1,
    title: "Wiki Conributor",
    desc: "Contributed on mediawiki and other wiki sister projects.",
    className: "md:col-span-2",
    thumbnail: "/Wikimedia_logo.png",
    link: "https://www.mediawiki.org/wiki/User:Adityakumar0545",
  },
  {
    id: 2,
    title: "Google Developer Group Prayagraj Core Team",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/gdg_prayagraj.png",
    link: "https://devfest.gdgprayagraj.com/team",
  },
  {
    id: 3,
    title: "CNCF Co-organizer",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2",
    thumbnail: "/cncf.png",
    link: "https://www.cncf.io/",
  },
  {
    id: 4,
    title: "Founding Member: DCS&IT CLUB SHUATS",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf2o8O9xlWQKvworSvhJu7HtflDASIsyPSCW0OoD5viy9U5-A/viewform",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Aditya0545",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/aditya0545",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/aditya0545//",
  },
];

export const learningResources = {
  youtubeVideos: [
    {
      title: "Python Full Course For Beginners By Mosh Hamedani",
      link: "https://youtu.be/_uQrJ0TkZlc?si=_7YR2WlsJzJ0K9RY",
      notes: "Complete Python tutorial covering basics to advanced concepts",
    },
    {
      title: "Git Tutorials For Beginners By Mosh Hamedani",
      link: "https://youtu.be/8JJ101D3knE?si=k9oqR8_0CRK20Dpj",
      notes: "add notes here",
    },
    {
      title: "Data Structure and Algorithms By Mosh Hamedani",
      link: "https://youtu.be/BBpAmxU_NQo?si=ps8o_wUphNgszxei",
      notes: "add notes here",
    },
  ],
  commandReference: [
    {
      command: "git init",
      description: "Initialize a new Git repository",
    },
    {
      command: "npm create next-app@latest",
      description: "Create a new Next.js project",
    },
    {
      command: "docker build -t myapp .",
      description: "Build a Docker image from Dockerfile",
    },
  ],
  importantLinks: [
    {
      title: "Next.js Documentation",
      link: "https://nextjs.org/docs",
      notes: "Official Next.js documentation and guides",
    },
    {
      title: "React Documentation",
      link: "https://react.dev",
      notes: "Official React documentation and tutorials",
    },
  ],
};

export const blogPosts = [
  {
    id: 1,
    title: "My Journey: Road to Wiki | WikiClub Tech India",
    description:
      "Exploring my journey into the world of Wikimedia and my experience with WikiClub Tech India. A personal narrative about contributing to open knowledge and community building.",
    url: "https://medium.com/@adityakumar2019.ak/my-journey-road-to-wiki-wikiclub-tech-india-2d1a19dab521",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: 2,
    title:
      "My First Devfest: A Volunteer's Experience at Devfest 2023 Prayagraj",
    description:
      "A detailed account of my experience volunteering at Devfest 2023 Prayagraj, sharing insights and learnings from this significant tech community event.",
    url: "https://medium.com/@adityakumar2019.ak/my-first-devfest-a-volunteers-experience-at-devfest-2023-prayagraj-232035102743",
    gradient: "from-purple-600 to-pink-600",
  },
];

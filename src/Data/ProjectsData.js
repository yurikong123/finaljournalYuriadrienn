// src/Data/ProjectsData.js
import img1 from "../asset/una.jpg";
import img2 from "../asset/duha.jpg";
import img3 from "../asset/tulo.jpg";
import img4 from "../asset/upat.jpg";  // important!
import img5 from "../asset/lima.jpg";  // important!


const DUMMY_PROJECTS = [
  {
    id: "p1",
    title: "WORLDTECH INFORMATION SOLUTIONS, INC.",
    description: "Worldtech Information Solutions, Inc. is a Philippine-based IT consultancy and training company with offices in Cebu, Manila, and international presence in Australia and Singapore..",
    image: img1,
    liveUrl: "https://example.com"
  },
  {
    id: "p2",
    title: "CODECHUM",
    description: "CodeChum is an educational technology platform based in Cebu, Philippines, designed to make learning programming accessible and engaging for students and teachers.",
    image: img2,
    liveUrl: "https://example.com"
  },
  {
    id: "p3",
    title: "RIVAN IT",
    description: "IT training center offering certifications in networking, Linux, security, and VoIP, part of Rivan School of Technology (est. 1999).",
    image: img3,
    liveUrl: "https://example.com"
  },
  {
    id: "p4",
    title: "MATA TECHNOLOGIES, INC",
    description: "Mata Technologies Inc. is a homegrown provider of virtual tours for real estate in the Philippines. It",
    image: img4,
    liveUrl: "https://example.com"
  },
  {
    id: "p5",
    title: "TAGBILARAN 911",
    description: "A local emergency response center in Tagbilaran City that handles medical, fire, and safety emergencies.",
    image: img5,
    liveUrl: "https://example.com"
  }
];

const ProjectsData = { DUMMY_PROJECTS };
export default ProjectsData;

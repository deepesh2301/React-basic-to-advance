import React from "react";
import Card from "./components/Card";
// import "./Card.css";

const App = () => {
  const jobsData = [
  {
    companyName: "Google",
    companyLogo:"https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571050.jpg",
    role: "Frontend Developer",
    startedDaysAgo: 10,
    level: "Junior",
    employmentType: "Full-time",
    location: "Bhopal, India",
    payout:"$ 20"
  },
  {
    companyName: "Microsoft",
    companyLogo: "https://designwanted.com/wp-content/uploads/2023/10/Microsoft-_-Brands-_-Cover-image.png",
    role: "Backend Engineer",
    startedDaysAgo: 25,
    level: "Senior",
    employmentType: "Part-time",
    location: "Indore, India",
    payout:"$ 22"

  },
  {
    companyName: "Amazon",
    companyLogo: "https://pngimg.com/d/amazon_PNG27.png",
    role: "UI/UX Designer",
    startedDaysAgo: 5,
    level: "Junior",
    employmentType: "Full-time",
    location: "Pune, India",
    payout:"$ 25"

  },
  {
    companyName: "Netflix",
    companyLogo: "https://i.ytimg.com/vi/GV3HUDMQ-F8/maxresdefault.jpg",
    role: "React Developer",
    startedDaysAgo: 15,
    level: "Senior",
    employmentType: "Full-time",
    location: "Bangalore, India",
    payout:"$ 23"

  },
  {
    companyName: "Facebook",
    companyLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/500px-Facebook_logo_%28square%29.png",
    role: "Full Stack Developer",
    startedDaysAgo: 8,
    level: "Junior",
    employmentType: "Part-time",
    location: "Delhi, India",
    payout:"$ 21"

  },
  {
    companyName: "Tesla",
    companyLogo: "https://1000logos.net/wp-content/uploads/2018/02/Logo-Tesla.jpg",
    role: "Software Engineer",
    startedDaysAgo: 18,
    level: "Senior",
    employmentType: "Full-time",
    location: "Hyderabad, India",
    payout:"$ 24"

  },
  {
    companyName: "Adobe",
    companyLogo: "https://blog.logomaster.ai/hs-fs/hubfs/adobe-logo-3.jpg?width=662&height=441&name=adobe-logo-3.jpg",
    role: "Frontend Intern",
    startedDaysAgo: 2,
    level: "Junior",
    employmentType: "Part-time",
    location: "Noida, India",
    payout:"$ 22"

  },
  {
    companyName: "Spotify",
    companyLogo: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLW5lb24tMDExLWwyb2Jlcm5wLmpwZw.jpg",
    role: "Node.js Developer",
    startedDaysAgo: 30,
    level: "Senior",
    employmentType: "Full-time",
    location: "Mumbai, India",
    payout:"$ 24"

  },
];

  return (
    <div className="main">
      {jobsData.map(function(elem){
        return <Card
         user={elem.companyName} 
         logo={elem.companyLogo}
         role={elem.role}
         days={elem.startedDaysAgo}
         level={elem.level}
         emptype={elem.employmentType}
         location={elem.location}
         payout={elem.payout}
         />
      })}
    </div>
  );
};

export default App;

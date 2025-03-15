import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Arihant Jain",
  },
  {
    label: "Age",
    value: "20",
  },
  {
    label: "College",
    value: "Dehi Technological University",
  },
  {
    label: "Course",
    value: "B-Tech, CSE",
  },
  {
    label: "Email",
    value: "arihantjain@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 8595546840",
  },
];

const jobSummary =
  "I'm Arihant Jain, a B.Tech student at DTU with a stellar 9.40 CGPA. I'm a coding whiz with skills in C++, Python, JavaScript, and even Solidity. I've gained hands-on experience as a Frontend Developer Intern at Sponsogram and a Web Designer Intern at DTU-USIP. I've built some cool projects like an Advanced Group Expense Manager and an Online Code Compiler using React and Node.js. Not just a techie, I'm also the brain behind DECODE, an online community and YouTube channel with 200+ videos."
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                  <br/>
                </li>
              ))}
              
            </ul>
            <ul>
            
            <li  >   <a href="https://www.linkedin.com/in/arihant-jain-a2079725a/"><span className="title">LINKEDIN</span> </a> </li>
            
            <li  >   <a href="https://codeforces.com/profile/arihantjain72000"><span className="title">CODEFORCES</span> </a> </li>
            
            <li  >   <a href="https://www.linkedin.com/in/arihant-jain-a2079725a/"><span className="title">LEETCODE</span> </a> </li>
            
            <li  >   <a href="https://leetcode.com/u/im__ArihantJain/"><span className="title">CODE-CHEF</span> </a> </li>
              </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
       
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="about__content__servicesWrapper__innerContent">
          <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
          </div>
          <div>
            <DiApple size={60} color="var(--yellow-theme-main-color)" />
          </div>
        </div>
      </Animate>
    </div>    
      </div>
    </section>
  );
};
export default About;

import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    window.open("https://www.linkedin.com/in/arihant-jain-a2079725a/", '_blank');
  };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Arihant Jain
          <br />
          Full-Stack Developer & Algo-Enthusiast
          
        
        </h1>
      </div>
      <Animate
        play
        duration={1}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>LETS CONNECT</button>
        </div>
      </Animate>
    </section>
  );
};
export default Home;

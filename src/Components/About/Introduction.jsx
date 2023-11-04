import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useThemes } from "../../Context/Theme";
import profilePic from "../../assets/Photo_fw14_056.jpg";


export const Introduction = () => {
  const { themeName } = useThemes();

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={`introduction ${themeName}`}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <p>
                Hey there! I'm <span className="different">Mark Kevin Banawis</span>, a <span className="different">Software Engineer</span> by day.
                Constantly caffeinated and endlessly curious.
                I thrive on the thrill of solving tech puzzles and ironing out glitches like a digital superhero.
                Passionate about building elegant solutions and creating user-friendly experiences, 
                I wield the power of <span className="about__tech">Python</span> and <span className="about__tech">React</span> to zap up Web Applications!

                I'm addicted to learning and forever expanding my tech-savvy horizons. 🚀
              </p>
              <h4>When I'm not taming lines of code, you'll find me indulging following interests:</h4>
              <ul>
                <li className="different">
                  Building gaming PCs and troubleshooting them
                </li>
                <li className="different">
                  A bit of Guitar Enthusiast
                </li>
                <li className="different">
                  Being on a band! JAM!
                </li>
                <li className="different">
                  Loves listening to Rock, Blues, J-Rock, Alternative music
                </li>
                <li className="different">
                  Watching Anime
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

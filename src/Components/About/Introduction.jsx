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
              <h4>
                Hello, my name is {" "}
                <span className="different">Mark Kevin Banawis </span> and I am from{" "}
                <span className="different">
                  {" "}
                  Meycauayan, Bulacan (Philippines).
                </span>
                <br/>I have completed my graduation in Bachelor of Science in Information Technology (BSIT)
                from{" "} way back <span className="different">April 2018</span>.
                <br/><br/> Then, I started my full time career as a Software Engineer way back{" "}
                <span className="different">2019</span> on an <span className="different">Outsourcing Software Company</span> in Pasig, Metro Manila way back 2020.
              </h4>
              <h4>Hobbies beside coding:</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Building gaming PCs and troubleshooting them
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                A bit of Guitar Enthusiast
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Being on a band! JAM!
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Loves listening to Rock, Blues, J-Rock, Alternative music
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Watching Anime
              </h4>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

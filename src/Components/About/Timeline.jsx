import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarRateIcon from "@material-ui/icons/StarRate";
import { useThemes } from "../../Context/Theme";

export const Timeline = () => {
  const themeName = useThemes();
  const [lineColor, setLineColor] = React.useState(
    themeName === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themeName === "dark") {
      setLineColor("#fcfcfc");
    } else {
      setLineColor("#23283e");
    }
  }, [themeName]);
  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My Career <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={lineColor}>
          <VerticalTimelineElement
            date={"January 2023 - Present"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Engineer II
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Reed Elsevier Philippines
            </h4>
            <p data-aos="fade-right">
              I found my utopia with Lex Machina!
              Joining forces with an incredible team, we strive to bring the power of Legal-Analytics to our clients. 
              I play my part in enhancing our stellar Web Applications like Citadel and their Product, 
              all while jamming with my fellow tech wizards.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"February 2020 - January 2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Software Engineer I
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Indra Philippines Inc.
            </h4>
            <p data-aos="fade-right">
              Assigned on 5 exciting projects, juggling 3 of the projects assigned simultaneously.
              As a Software Engineer II, I've mastered the art of delivering countless bug fixes, mind-blowing features, and game-changing enhancements. 
              Even stabilizing projects up to a jaw-dropping 60-70% on annual summaries.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"September 2019"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Information Services Engineer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Trend Micro Inc.
            </h4>
            <p data-aos="fade-right">
              I'm that rare combo of a curious cat and a tech-obsessed human! 
              Started my engineering adventure in August 2019 with a bang, diving headfirst into an intense bootcamp. 
              <span className="about__tech">Python (Flask) and SQLAlchemy</span>,{" "}
              <span className="about__tech">Linux</span>,{" "} 
              <span className="about__tech">VMWare & Websphere</span>,{" "}
              and <span className="about__tech">Networks (Cisco)</span> were my daily companions, and boy, did we have some wild times together!

              But hey, life had different plans for me and decided to squeeze the entire bootcamp rollercoaster into just three (3) months! 
              Fast and furious, right? Though it didn't last long, I walked away with a whole new set of skills and a nifty toolkit.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"April 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<SchoolIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Student
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              University of the East (Caloocan)
            </h4>
            <label data-aos="fade-right">
              SY 2013 ~ 2018
            </label>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={"December 2017 - March 2018"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<WorkIcon />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Intern PHP Developer
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Audio Video Solutions Corporation (AVSC)
            </h4>
            <p data-aos="fade-right">
            Imagine a world where meticulous warranty management becomes a breeze – that's what 
            I achieved by developing and maintaining an <span className="different">Online Warranty System</span>. 
            Say goodbye to mountains of hard copies, and say hello to efficient tracking of client warranty records.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

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
import { Work } from "@material-ui/icons";

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
              Joined Lex Machina family that aims to deliver <span className="different">Legal-Analytics</span> to their clients.
              I help continouosly improve their Web Applications such as Citadel and their Product in aligned working with other fellow Engineers.
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
              Assigned on 5 on different projects. 3 of them are concurrently assigned to me. 
              Promoted to <span className="different">Software Engineer II</span> with success delivering numerous bug fixes, {" "}
              features & enhancements stabilizing projects up to 60-70% on annual summary.
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
              Started in August 2019 to attend <span className="different">engineering bootcamp</span> with technologies
              such as <span className="about__tech">Python (Flask)</span>, <span className="about__tech">Linux</span>, 
              <span className="about__tech">VMWare & Websphere</span>, <span className="about__tech">Networks (Cisco)</span> that lasted only{" "}
              three (3) months
            </p>
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
              My starting point of being a Full-stack Developer using <span className="about__tech">PHP, HTML, CSS, JS, MySQL</span>.{" "}
              Developed & maintain <span className="about__tech">Online Warranty System</span> to migrate numerous hard copies into SQL data.
              This helped the data team to track warranty records of their clients.
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

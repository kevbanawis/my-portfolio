import { useThemes } from "../../Context/Theme";
import GitHubCalendar from 'react-github-calendar';
import "./Github.css";

export const Github = () => {
  const { themeName } = useThemes();

  return (
    <>
      <div className={`section ${themeName}`} id="github-container" data-aos="fade-right">
        <h2 className="section__title different">
          Days I <span className="different"> Code</span>
        </h2>
        <GitHubCalendar
          username="kevbanawis"
          blockSize={20}
          blockMargin={5}
          theme={themeName}
          fontSize={16}
          showWeekdayLabels
        />
      </div>
    </>
  );
};

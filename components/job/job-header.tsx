import css from "./job.module.css";
import { ClockIcon, GlobeIcon } from "../common/icon";
import { JobImage } from "./job-image";

export interface JobHeaderProps {
  Title: string;
  Country: string;
  Genre: string;
  Production: string;
  Poster: string;
  Year: string;
}

export const JobHeader: React.FC<JobHeaderProps> = ({
  Title,
  Country,
  Genre,
  Production,
  Poster,
  Year,
}) => (
  <>
    <div className={css["title-line"]}>
      <h2>{Title}</h2>
      <div className={css["job-type"]}>{Genre}</div>
    </div>
    <div className={css["icon-line"]}>
      <ClockIcon /> {Year}
    </div>
    <div style={{ display: "flex" }}>
      <JobImage src={Poster} alt={Production} size={50} />
      <div className={css["sub-title"]}>
        <h3>{Production}</h3>
        <span className={css["icon-line"]}>
          <GlobeIcon /> {Country}
        </span>
      </div>
    </div>
  </>
);

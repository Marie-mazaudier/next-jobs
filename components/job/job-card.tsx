import Link from "next/link";

import css from "./job.module.css";
import { ClockIcon, GlobeIcon } from "../common/icon";
import { fromToday } from "../../lib/date";
import { JobImage } from "./job-image";
import { GithubJob } from "../../lib/api";

export interface JobCardProps extends GithubJob {}

export const JobCard: React.FC<JobCardProps> = ({
  id,        
  Title,
  Year,
  imdbID,
  Type,
  Poster,          

}) => (
  <Link href={`view/${imdbID}`}>
    <div className={css.card}>
    <JobImage src={Poster} alt={Poster} size={90} />
        
      <div className={css.info}>
      <h3>{Title}</h3>
      <span className={css["job-type"]}>{Type}</span>
          <div className={css["icon-line"]}>
            <span>
            <GlobeIcon />{Year}
            </span>
            <span style={{ marginLeft: "1rem" }}>
              <ClockIcon /> {Year}
            </span>
          </div>
      </div>
    </div>
  </Link>
);

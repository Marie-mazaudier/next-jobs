import css from "./job.module.css";
import { GithubFilm } from "../../lib/api";
import { fromToday } from "../../lib/date";
/*import { JobToApply } from "./job-to-apply";*/
import { JobHeader } from "./job-header";

export interface JobDescriptionProps extends GithubFilm {}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  Title,
  Plot,
  Genre,
  Production,
  Country,
  Year,
  Poster
}) => {
  return (
    <div className={css["job-description"]}>
      <div>
        <JobHeader
          Title={Title}
          Country={Country}
          Genre={Genre}
          Production={Production}
          Poster={Poster}
          Year={fromToday(Year)}
        />
        <div dangerouslySetInnerHTML={{ __html: Plot }} />
      </div>
    </div>
  );
};

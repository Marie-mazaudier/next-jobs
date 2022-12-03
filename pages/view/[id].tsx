import { useRouter } from "next/router";
import {GithubFilm } from "../../lib/api";
import { API_URL, options } from "../../lib/api";
import { useEffect } from "react";
import { Layout } from "../../components/layout";
import { JobDescription } from "../../components/job/job-description";

/*export interface GithubFilm {
  Title:      string;
  Year:       string;
  Genre:      string;
  Director:   string;
  Country:    string;
  Poster:     string;
  Production: string;
}*/

interface FilmProps {
movie: GithubFilm,
redirect:boolean,

}

export const Film : React.FC<FilmProps> =({movie, redirect}) =>{
    const router = useRouter();
    useEffect(() => {
        if (redirect) {
          router.push("/404");
        }
      }, []);
      
      const title = movie?.Title ? `${movie.Title}` : "Job Listing";

      return (
        <Layout title={title}>{Boolean(movie) && <JobDescription Title={""} Year={""} Rated={""} Released={""} Runtime={""} Genre={""} Director={""} Writer={""} Actors={""} Plot={""} Language={""} Country={""} Awards={""} Poster={""} Ratings={[]} Metascore={""} imdbRating={""} imdbVotes={""} imdbID={""} Type={""} DVD={""} BoxOffice={""} Production={""} Website={""} Response={""} {...movie} />}</Layout>
      );}


export const getServerSideProps = async (context: any) => {
    try {
      const  imdbID  = context.params;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'c68ac95ac7mshee8e1a4c569985cp168f4cjsneef730348eee',
          'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
      };
      const data = await fetch(`${API_URL}?i=${imdbID.id}&r=json&page=1`, options);
      const json = await data.json();
      return { props: { movie: json, redirect: false } };
    } catch (err) {
      return { props: { movie: {}, redirect: true } };
    }
  };
export default Film

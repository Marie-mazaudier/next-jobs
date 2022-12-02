import { API_URL,options, GithubJob } from "../lib/api";
import { Layout } from "../components/layout";
import { JobCard, JobCardProps } from "../components/job";
import { SearchBox, SearchType, SearchLocation } from "../components/search";
import { Pagination } from "../components/pagination";
import { Key, useState } from "react";
import axios from "axios";

interface Items {
  [x: string]: any;
  data : GithubJob[];
}
interface HomeProps {
     films: {
        Search: Items
    
}
}

export default function Home(props: HomeProps) {
  const [Movies, setMovies] = useState<Items[]>(props.films.Search);
  /*  const [Type, setType] = useState(false);
  const [Year, setYear] = useState("");*/
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [Titre, setTitre] = useState("world");
  const handleSearch = (Title?: string) => {  //3. on utilise la data du child components Title
    setLoading(true);
   setTitre(Title)
    
    fetch('/api', { // on envoie la recherche de titre et de page à l'api (index.tsx)
      method: "POST",
      body: JSON.stringify({
       Title,
       page,
      }),
    })
    .then((res) => res.json()) // on reçoit la réponse de la sélecta de l'api selon la req dans un object promise
    .then((Liste)=> setMovies(Liste.Search)) //on accéde à la valeur renvoyée d'un objet Promise dans un autre rappel .then() :
    .then(() => setLoading(false))
    .catch(console.log);
  };
  const handlePageChange = (count: number) => {
    setPage(count - 1);

    handleSearch(Titre);
  };
  return ( // 1. on utilise le child component searchbox en lui passant comme props la fonction handlesearch
    <Layout title="Home">
      <SearchBox onSearch={handleSearch}/> 
      <div className="responsive">
        <div className="search-widgets">
        
        </div>
        <div className="full-width">
      {Movies.map((movie) => (
        <JobCard key={movie.imdbID} {...movie} />
       
      ))}
       <Pagination
            current={page + 1}
            onChange={handlePageChange}
            hasNext={Movies.length === 10}
            disabled={loading}
          />
      </div>
      </div>
    </Layout>
    
  );
}

export const getServerSideProps = async () => { 
  try {
    const data = await fetch(`${API_URL}?s=horror&r=json&page=1`, options);
    const json = await data.json();
    
    return {
      props: {
        films: json,
      },
    };
  } catch (err) {
    return {
      props: {
        films: [],
      },
    };
  }
};

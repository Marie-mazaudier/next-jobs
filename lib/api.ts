export const API_URL = "https://movie-database-alternative.p.rapidapi.com/";
export   const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'c68ac95ac7mshee8e1a4c569985cp168f4cjsneef730348eee',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};
export interface GithubJob {
  id:     string;
  Title:  string;
  Year:   string;
  imdbID: string;
  Type:   string;
  Poster: string;
}

export interface GithubFilm {
  Title:      string;
  Year:       string;
  Rated:      string;
  Released:   string;
  Runtime:    string;
  Genre:      string;
  Director:   string;
  Writer:     string;
  Actors:     string;
  Plot:       string;
  Language:   string;
  Country:    string;
  Awards:     string;
  Poster:     string;
  Ratings:    Rating[];
  Metascore:  string;
  imdbRating: string;
  imdbVotes:  string;
  imdbID:     string;
  Type:       string;
  DVD:        string;
  BoxOffice:  string;
  Production: string;
  Website:    string;
  Response:   string;
}

export interface Rating {
  Source: string;
  Value:  string;
}


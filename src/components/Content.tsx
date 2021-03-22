import { MovieCard } from './MovieCard';
import { Header } from './Header';
import '../styles/content.scss';

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface ContentProps {
  genereMovies: Movie[];
  genereTitle: string;
}

export function Content({ genereTitle, genereMovies }: ContentProps) {
  return(
    <div className="container">
        <Header genereTitle={genereTitle} />
        <main>
          <div className="movies-list">
            {genereMovies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  );
}
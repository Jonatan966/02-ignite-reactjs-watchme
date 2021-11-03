import { useEffect, useState } from "react";

import { MovieCard } from "./MovieCard";
import { useGenres } from "../contexts/GenreContext";
import { api } from "../services/api";

import '../styles/content.scss';

interface Rating {
  Source: string;
  Value: string;
}

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<Rating>;
  Runtime: string;
}

export function Content() {
  const { selectedGenre } = useGenres();
  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {
    if (!selectedGenre) return;

    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenre?.id}`).then(response => {
      setMovies(response.data);
    });
  }, [selectedGenre]);

  return (
    <div className="movies-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.imdbID}
          title={movie.Title}
          poster={movie.Poster}
          runtime={movie.Runtime}
          rating={movie.Ratings[0].Value}
        />
      ))}
    </div>
  )
}

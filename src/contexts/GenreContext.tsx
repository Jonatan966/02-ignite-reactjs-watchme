import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { api } from "../services/api";

interface GenreContextProps {
  handleSetSelectedGenre(id: number): void;
  genres: GenreResponseProps[];
  selectedGenre?: GenreResponseProps;
}

type GenreName = 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';

interface GenreResponseProps {
  id: number;
  name: GenreName;
  title: string;
}

export const GenreContext = createContext({} as GenreContextProps)

export const GenreProvider: React.FC = ({ children }) => {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const selectedGenre = useMemo(() => {
    return genres.find(genre => genre.id === selectedGenreId);
  }, [genres, selectedGenreId])

  function handleSetSelectedGenre(id: number) {
    setSelectedGenreId(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, [])

  return (
    <GenreContext.Provider value={{
      handleSetSelectedGenre,
      genres,
      selectedGenre
    }}>
      {children}
    </GenreContext.Provider>
  )
}

export const useGenres = () => useContext(GenreContext);

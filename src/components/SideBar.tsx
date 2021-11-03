import { useGenres } from "../contexts/GenreContext";
import { Button } from "./Button";

import '../styles/sidebar.scss';

export function SideBar() {
  const { genres, handleSetSelectedGenre, selectedGenre } = useGenres();

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleSetSelectedGenre(genre.id)}
            selected={selectedGenre?.id === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

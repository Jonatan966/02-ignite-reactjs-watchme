import { useGenres } from "../contexts/GenreContext"

export function Header() {
  const { selectedGenre } = useGenres();

  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre?.title}</span></span>
    </header>
  )
}

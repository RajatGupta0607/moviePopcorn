import WatchMovie from "./WatchMovie";

export default function WatchList({ watched, handleDeleteWatched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchMovie
          movie={movie}
          handleDeleteWatched={handleDeleteWatched}
          key={movie.imdbID}
        />
      ))}
    </ul>
  );
}

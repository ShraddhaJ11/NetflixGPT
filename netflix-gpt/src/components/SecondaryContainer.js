import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black w-screen">
      <div className="-mt-40 pl-16 relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        <MovieList title="Upcoming" movies={movies.upcomingMovies} />
        {/**
         * MovieList - Popular
         * MovieList - NowPlaying
         * MovieList - Trending
         * MovieList - Horror
         */}
      </div>
    </div>
  );
};

export default SecondaryContainer;

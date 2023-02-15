import React from 'react'
import MovieOption from './MovieOption'

interface IMoviesListProps {
    moviesInfo: any;
    option: any;
    setOption: any;
}

export default function MoviesList({ moviesInfo, option, setOption }: IMoviesListProps) {
    return (
        <>
            <div className='c-movie-list'>
                {(option === 'populares') && moviesInfo.map((movie, index) => {
                    const { original_title, vote_average, release_date, image } = movie;
                    return <MovieOption key={index} title={original_title} voteAverage={vote_average} releaseDate={release_date} image={image} />
                })}
            </div>
        </>

    )
}

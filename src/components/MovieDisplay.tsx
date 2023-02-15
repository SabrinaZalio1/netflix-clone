import React from 'react'

interface IMovieDisplayProps {
    title: string;
}
export default function MovieDisplay({ title }: IMovieDisplayProps) {

    return (
        <div className='c-movie-display animate__animated animate__fadeInUp'>
            <span className='c-movie-display__subtitle'>original de <span className='c-movie-display__subtitle--bold'>liteflix</span> </span>
            <h2 className='c-movie-display__title animate__animated animate__fadeInUp animate__slow'>{title}</h2>
        </div>
    )
}

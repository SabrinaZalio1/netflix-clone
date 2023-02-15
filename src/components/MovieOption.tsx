import React, { useState } from 'react'

interface IMoviesOptionProps {
    title: string;
    voteAverage?: number;
    releaseDate: string;
    image: string;
}

export default function MovieOption({ title, voteAverage, releaseDate, image }: IMoviesOptionProps) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    return (
        <div className='c-movie-option d-flex align-items-end' style={{ backgroundImage: `url(${image})` }} onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} >
            <div className={`${!isHover ? 'c-movie-option__info w-100 d-flex flex-column justify-content-center align-items-center' : 'd-none transition: visibility 5s, opacity 20s linear;'}`}>
                <div className='c-movie-option__play-icon c-movie-option__play-icon--md d-flex align-items-center justify-content-center'>
                    <i className="material-symbols-outlined material-symbols--medium">play_arrow</i>
                </div>
                <p className='c-movie-option__title '>{title}</p>
            </div>
            <div className={`${isHover ? 'c-movie-option__info--hovered w-100 d-flex align-items-baseline flex-column' : 'd-none transition: visibility 5s, opacity 20s linear;'} `} >
                <div className='d-flex w-75 mb-2'>
                    <div className='c-movie-option__play-icon c-movie-option__play-icon--sm d-flex align-items-center justify-content-center'>
                        <i className="material-symbols-outlined material-symbols--small">play_arrow</i>
                    </div>
                    <div>
                        <span className={`c-movie-option__title`}>{title}</span>
                    </div>
                </div>
                <div className='d-flex justify-content-between w-75 mx-auto mb-2'>
                    <div className='d-flex'>
                        <i className="material-symbols-outlined material-symbol-filled">star</i>
                        <span>{voteAverage}</span>
                    </div>
                    <div>
                        <span>{releaseDate.substring(0, 4)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

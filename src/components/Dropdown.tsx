import React, { useRef, useState } from 'react'
import useHandleClickOutside from '../hooks/useHandleClickOutside';
import MoviesList from './MoviesList';

interface IDropdownProps {
    option: any;
    setOption: any;
}

export default function Dropdown({ option, setOption }: IDropdownProps) {
    const [showModal, setShowModal] = useState(false);

    // const [option, setOption] = useState<'populares' | 'mis peliculas'>('populares')

    const ref = useRef(null);
    useHandleClickOutside(ref, () => setShowModal(false));

    const onClick = () => setShowModal(!showModal);

    const handleClick = (value: 'populares' | 'mis peliculas') => setOption(value);

    return (

        <div className='c-dropdown position-relative' ref={ref}  >
            <div className='c-dropdown__container  d-flex justify-content-center' onClick={onClick}>
                <span className='c-dropdown__button' >ver:  <span className='c-dropdown__button-type-text'>{option} </span></span>
                <i className="material-symbols-outlined">expand_more</i>
            </div>

            {showModal &&
                <div className='c-dropdown__modal position-absolute'>
                    <ul>
                        <li className={`c-dropdown__modal-option ${option === 'populares' && 'c-dropdown__modal-option--active'}`} onClick={() => handleClick('populares')}>
                            populares
                            {option === 'populares' && <i className="material-symbols-outlined ">done</i>}
                        </li>
                        <li className={`c-dropdown__modal-option ${option === 'mis peliculas' && 'c-dropdown__modal-option--active'}`} onClick={() => handleClick('mis peliculas')}>
                            mis peliculas
                            {option === 'mis peliculas' && <i className="material-symbols-outlined ">done</i>}
                        </li>
                    </ul>
                </div>
            }
        </div >


    )
}

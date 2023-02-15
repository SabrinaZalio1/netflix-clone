import React, { useRef, useState } from 'react'
import AddMovieModal from './AddMovieModal';
import useHandleClickOutside from '../hooks/useHandleClickOutside';

export default function Sidebar() {
    const [show, setShow] = useState<boolean>(false);
    const ref = useRef(null);
    useHandleClickOutside(ref, () => setShow(false));
    const showSidebar = () => setShow(!show);

    return (
        <div className='c-sidebar ' ref={ref}>
            <div className='c-sidebar__button' onClick={showSidebar}>
                <i className="c-sidebar__menu-icon material-symbols-outlined c-white">sort </i>
            </div>
            {show &&
                <div className={`c-sidebar__menu ${show ? 'c-sidebar__menu-show' : 'c-sidebar__menu-hide'} `}>
                    <div className='c-sidebar__menu-actions'>
                        <div className='c-sidebar__mobile-close-button' onClick={showSidebar}>
                            <i className="c-sidebar__menu-icon material-symbols-outlined c-white">x </i>
                        </div>
                    </div>
                    <ul className='c-sidebar__menu-links'>
                        <li className='c-sidebar__menu-link'>inicio</li>
                        <li className='c-sidebar__menu-link'>series</li>
                        <li className='c-sidebar__menu-link'>peliculas</li>
                        <li className='c-sidebar__menu-link'>agregadas recientemente</li>
                        <li className='c-sidebar__menu-link'>populares</li>
                        <li><AddMovieModal /></li>
                        <li className='c-sidebar__menu-link'>cerrar sesion</li>
                    </ul>
                </div>}
        </div >

    )
}

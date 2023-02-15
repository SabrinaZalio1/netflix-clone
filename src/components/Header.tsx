import React from 'react'
import logo from '../assets/liteflix.png';
import profileImg from '../assets/profile-image.png';
import Sidebar from './Sidebar';
import AddMovieModal from './AddMovieModal';

export default function Header() {
    return (
        <>
            <div className='c-header__desktop'>
                <div className='d-flex'>
                    <img className="c-header__logo-img" src={logo} alt="liteflix logo" />
                    <AddMovieModal />
                </div>
                <div className='d-flex align-items-center'>
                    <Sidebar />
                    <i className={`c-header__icon-space material-symbols-outlined c-white`}>notifications</i>
                    <img className="c-header__profile-img" src={profileImg} alt="profile image" />
                </div>
            </div>
            <div className='c-header__mobile '>
                <Sidebar />
                <div className='animate__animated animate__slideInDown'>
                    <img className="c-header__logo-img" src={logo} alt="liteflix logo" />
                </div>
                <div className='animate__animated animate__slideInDown'>
                    <img className="c-header__profile-img" src={profileImg} alt="profile image" />
                </div>
            </div>
        </>

    )
}

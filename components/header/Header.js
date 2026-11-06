import Image from 'next/image';
import React, { useState } from 'react';
import { Link } from 'react-scroll'
import MobileMenu from '../MobileMenu/MobileMenu'
import LogoLight from '/public/images/light Yogesh K S Tech Logo.png'
import LogoDark from '/public/images/dark Glossy 3D Yogesh KS Logo.png'
import NavLink from 'next/link'
import { useTheme } from '../../context/ThemeContext'

import { useRouter } from 'next/router';

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const { theme } = useTheme();
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const isAboutPage = router.pathname === '/about';
    const currentLogo = props.Logo || (theme === 'light' ? LogoLight : LogoDark);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`tp-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <NavLink onClick={ClickHandler} className="navbar-brand" href="/"><Image src={currentLogo} alt="Yogesh K S" priority style={{ height: 'auto', maxHeight: '63px', maxWidth: '198px', width: 'auto' }} /></NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        {!isHomePage ? (
                                            <>
                                                <li><NavLink href="/">Home</NavLink></li>
                                                <li><NavLink href="/about" className={isAboutPage ? "active" : ""}>About</NavLink></li>
                                                <li><NavLink href="/#service">Service</NavLink></li>
                                                <li>{isAboutPage ? (
                                                    <Link activeClass="active" to="project" spy={true} smooth={true} duration={500} offset={-95}>Portfolio</Link>
                                                ) : (
                                                    <NavLink href="/#project">Portfolio</NavLink>
                                                )}</li>
                                                <li>{isAboutPage ? (
                                                    <Link activeClass="active" to="expertise" spy={true} smooth={true} duration={500} offset={-95}>Expertise</Link>
                                                ) : (
                                                    <NavLink href="/#expertise">Expertise</NavLink>
                                                )}</li>
                                                {/* <li><NavLink href="/#blog">Blog</NavLink></li> */}
                                                <li><NavLink href="/#contact">Contact</NavLink></li>
                                            </>
                                        ) : (
                                            <>
                                                <li><Link activeClass="active" to="home" spy={true} smooth={true} duration={500} offset={-100}>Home</Link></li>
                                                <li><NavLink href="/about">About</NavLink></li>
                                                <li><Link activeClass="active" to="service" spy={true} smooth={true} duration={500} offset={-95}>Service</Link></li>
                                                <li><Link activeClass="active" to="project" spy={true} smooth={true} duration={500} offset={-95}>Portfolio</Link></li>
                                                <li><Link activeClass="active" to="expertise" spy={true} smooth={true} duration={500} offset={-95}>Expertise</Link></li>
                                                {/* <li><Link activeClass="active" to="blog" spy={true} smooth={true} duration={500} offset={-95}>Blog</Link></li> */}
                                                <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={500} offset={-95}>Contact</Link></li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right" id="home">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button  className="search-toggle-btn" onClick={() => setMenuState(!menuActive)}><i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
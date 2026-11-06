import React, { useState } from 'react';
import ListItem from "@mui/material/List";
import { Link} from 'react-scroll'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: 'home',
    },
    {
        id: 2,
        title: 'About',
        link: 'about',
    },
    {
        id: 3,
        title: 'Service',
        link: 'service',
    },
    {
        id: 4,
        title: 'Portfolio',
        link: 'portfolio',
    },
    {
        id: 5,
        title: 'Blog',
        link: 'blog',
    },
    {
        id: 5,
        title: 'Contact',
        link: 'contact',
    }

]


import { useRouter } from 'next/router';
import NavLink from 'next/link';

const MobileMenu = () => {
    const [menuActive, setMenuState] = useState(false);
    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const isAboutPage = router.pathname === '/about';

    const ClickHandler = () => {
        window.scrollTo(10, 0);
        setMenuState(false);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {!isHomePage ? (
                        <>
                            <ListItem><NavLink href="/" onClick={ClickHandler}>Home</NavLink></ListItem>
                            <ListItem><NavLink href="/about" onClick={ClickHandler}>About</NavLink></ListItem>
                            <ListItem><NavLink href="/#service" onClick={ClickHandler}>Service</NavLink></ListItem>
                            <ListItem>{isAboutPage ? (
                                <Link to="project" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Portfolio</Link>
                            ) : (
                                <NavLink href="/#project" onClick={ClickHandler}>Portfolio</NavLink>
                            )}</ListItem>
                            <ListItem>{isAboutPage ? (
                                <Link to="expertise" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Expertise</Link>
                            ) : (
                                <NavLink href="/#expertise" onClick={ClickHandler}>Expertise</NavLink>
                            )}</ListItem>
                            {/* <ListItem><NavLink href="/#blog" onClick={ClickHandler}>Blog</NavLink></ListItem> */}
                            <ListItem><NavLink href="/#contact" onClick={ClickHandler}>Contact</NavLink></ListItem>
                        </>
                    ) : (
                        <>
                            <ListItem><Link to="home" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Home</Link></ListItem>
                            <ListItem><NavLink href="/about" onClick={ClickHandler}>About</NavLink></ListItem>
                            <ListItem><Link to="service" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Service</Link></ListItem>
                            <ListItem><Link to="project" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Portfolio</Link></ListItem>
                            <ListItem><Link to="expertise" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Expertise</Link></ListItem>
                            {/* <ListItem><Link to="blog" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Blog</Link></ListItem> */}
                            <ListItem><Link to="contact" spy={true} smooth={true} duration={500} onClick={ClickHandler}>Contact</Link></ListItem>
                        </>
                    )}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
import React from 'react'
import Link from 'next/link'
import LogoLight from '/public/images/light Yogesh K S Tech Logo.png'
import LogoDark from '/public/images/dark Glossy 3D Yogesh KS Logo.png'
import Image from 'next/image'
import { useTheme } from '../../context/ThemeContext'

const Footer = (props) => {
    const { theme } = useTheme();
    const currentLogo = theme === 'light' ? LogoLight : LogoDark;

    return (
        <div className="tp-site-footer text-center">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="footer-image">
                            <Link className="logo" href="/"><Image src={currentLogo} alt="Yogesh K S" style={{ height: 'auto', maxHeight: '68px', maxWidth: '216px', width: 'auto' }} /></Link>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="link-widget">
                            <ul>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/yogesh-k-s-8966a8402/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <i className="ti-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://wa.me/917676782970"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhatsApp"
                                    >
                                        <i className="fa fa-whatsapp"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:yogeshks3998@gmail.com"
                                        aria-label="Email"
                                    >
                                        <i className="ti-email"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="copyright">
                            <p>© {new Date().getFullYear()} Yogesh K S. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
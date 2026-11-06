import React, { Fragment } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import erimg from '/public/images/error-404.png'
import Image from 'next/image'


const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <Fragment>
            <Head>
                <title>404 - Page Not Found | Yogesh K S</title>
                <meta name="description" content="The page you requested could not be found." />
            </Head>
            <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>Oops! Page Not Found!</h3>
                                <p>We’re sorry but we can’t seem to find the page you requested. This might be because you have typed the web address incorrectly.</p>
                                <Link onClick={ClickHandler} href="/" className="theme-btn"> Back to home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </Fragment>
    )
}

export default Error;
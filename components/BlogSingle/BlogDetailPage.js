import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../Navbar/Navbar';
import Footer from '../footer/Footer';
import BackToTop from '../backToTop/backToTop';
import blogs from '../../api/blogs';
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg';
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg';
import blog5 from '/public/images/blog-details/comments-author/img-3.jpg';
import blog6 from '/public/images/blog-details/author.jpg';
import gl1 from '/public/images/blog-details/1.jpg';
import gl2 from '/public/images/blog-details/2.jpg';

const BlogDetailPage = ({ id }) => {
    const blog = blogs.find((b) => String(b.id) === String(id)) || blogs[0];
    const currentIndex = blogs.findIndex((b) => String(b.id) === String(blog.id));
    const prevBlog = blogs[currentIndex > 0 ? currentIndex - 1 : blogs.length - 1];
    const nextBlog = blogs[currentIndex < blogs.length - 1 ? currentIndex + 1 : 0];

    const [commentSubmitted, setCommentSubmitted] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        setCommentSubmitted(true);
    };

    return (
        <Fragment>
            <Head>
                <title>{blog.title} - Yogesh K S | Blog</title>
                <meta name="description" content={blog.description || blog.title} />
            </Head>

            <Navbar />

            {/* Breadcrumb Header */}
            <div className="tp-page-header-simple" style={{ paddingTop: '130px', paddingBottom: '20px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <nav className="tp-breadcrumb-nav" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
                                <Link href="/" style={{ color: '#e5540a', textDecoration: 'none' }}>Home</Link>
                                <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
                                <Link href="/#blog" style={{ color: '#e5540a', textDecoration: 'none' }}>Blog</Link>
                                <span style={{ margin: '0 10px', opacity: 0.5 }}>/</span>
                                <span style={{ opacity: 0.8 }}>{blog.title}</span>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Blog Content Area - Exact Popup Inner UI */}
            <section className="tp-blog-single-section" style={{ background: 'transparent', paddingTop: '10px', paddingBottom: '80px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-12">
                            <div className="tp-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <Image src={blog.blogSingleImg || blog.screens} alt={blog.title} priority />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> By <Link href="/#about">{blog.author}</Link></li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Comments {blog.comment}</li>
                                            <li><i className="fi flaticon-calendar"></i> {blog.create_at}</li>
                                        </ul>
                                    </div>
                                    <h2>{blog.title}</h2>
                                    <p>
                                        When building modern web applications, choosing the right architecture and workflow makes all the difference. 
                                        From responsive layout design and semantic HTML to clean JavaScript logic and performant backend APIs, 
                                        every layer contributes to an experience that users find reliable and delightful.
                                    </p>
                                    <blockquote>
                                        "Good code is its own best documentation. As you're about to add a comment, ask yourself, 
                                        'How can I improve the code so that this comment isn't needed?'"
                                    </blockquote>
                                    <p>
                                        Focusing on practical solutions over unnecessary complexity helps keep products maintainable and scalable. 
                                        Whether you are building a startup MVP, an interactive dashboard, or a customer-facing portal, 
                                        iterating rapidly with clean patterns ensures you meet real business goals effectively.
                                    </p>

                                    <div className="gallery">
                                        <div>
                                            <Image src={gl1} alt="Project detail 1" />
                                        </div>
                                        <div>
                                            <Image src={gl2} alt="Project detail 2" />
                                        </div>
                                    </div>
                                </div>

                                <div className="tag-share clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/#service">Development</Link></li>
                                            <li><Link href="/#project">Portfolio</Link></li>
                                            <li><Link href="/#service">Full Stack</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="tag-share-s2 clearfix">
                                    <div className="tag">
                                        <span>Social: </span>
                                        <ul>
                                            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">facebook</a></li>
                                            <li><a href="https://twitter.com" target="_blank" rel="noreferrer">twitter</a></li>
                                            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin</a></li>
                                            <li><a href="https://github.com" target="_blank" rel="noreferrer">github</a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="author-box">
                                    <div className="author-avatar">
                                        <Image src={blog6} alt="Yogesh K S" />
                                    </div>
                                    <div className="author-content">
                                        <span className="author-name" style={{ fontSize: '18px', fontWeight: 600 }}>Author: {blog.author}</span>
                                        <p>
                                            Full Stack Developer specialized in building scalable web apps, custom dashboards, 
                                            and business websites using React, Next.js, Node.js, and modern cloud technologies.
                                        </p>
                                        <div className="socials">
                                            <ul className="social-link">
                                                <li><a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="ti-facebook"></i></a></li>
                                                <li><a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="ti-linkedin"></i></a></li>
                                                <li><a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="ti-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href={`/blog/${prevBlog.id}`}>
                                            <span className="post-control-link">Previous Post</span>
                                            <span className="post-name">{prevBlog.title}</span>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href={`/blog/${nextBlog.id}`}>
                                            <span className="post-control-link">Next Post</span>
                                            <span className="post-name">{nextBlog.title}</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">Comments ({blog.comment})</h3>
                                        <ol className="comments">
                                            <li className="comment even thread-even depth-1">
                                                <div id="div-comment-1">
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>Alex Morgan <span className="comments-date">January 15, 2024 at 10:30am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>Great breakdown of the technical decisions and architecture. Really enjoyed the insights on practical development workflows!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog4} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>Sophia Patel <span className="comments-date">February 2, 2024 at 2:15pm</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>The emphasis on clean code over unnecessary dependencies is spot on. Thanks for sharing your experience!</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Leave a Comment</h3>
                                        {commentSubmitted ? (
                                            <div className="alert alert-success" style={{ marginBottom: '20px', borderRadius: '4px' }}>
                                                Thank you! Your comment has been posted successfully.
                                            </div>
                                        ) : (
                                            <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                                <div className="form-textarea">
                                                    <textarea id="comment" placeholder="Write Your Comments..." required></textarea>
                                                </div>
                                                <div className="form-inputs">
                                                    <input placeholder="Name" type="text" required />
                                                    <input placeholder="Email" type="email" required />
                                                    <input placeholder="Website" type="url" />
                                                </div>
                                                <div className="form-submit">
                                                    <input id="submit" value="Post Comment" type="submit" />
                                                </div>
                                            </form>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <BackToTop />
        </Fragment>
    );
};

export default BlogDetailPage;

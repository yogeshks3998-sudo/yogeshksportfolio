import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs';
import Link from 'next/link';
import Image from 'next/image';

const BlogSection = () => {
    const [number, setCount] = useState(3);
    const [buttonActive, setButtonState] = useState(false);

    return (
        <section className="tp-blog-section section-padding" id="blog">
            <div className="container">
                <div className="tp-section-title">
                    <span>Latest Blog</span>
                    <h2>My Latest News</h2>
                </div>
                <div className="tp-blog-items">
                    <div className="row">
                        {blogs.slice(0, number).map((blog, bl) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={bl}>
                                <div className="tp-blog-item">
                                    <div className="tp-blog-img">
                                        <Link href={`/blog/${blog.id}`}>
                                            <Image src={blog.screens} alt={blog.title} />
                                        </Link>
                                        <div className="thumb">{blog.thumb}</div>
                                    </div>
                                    <div className="tp-blog-content">
                                        <ul>
                                            <li>{blog.create_at}</li>
                                            <li>By <Link href={`/blog/${blog.id}`}>{blog.author}</Link></li>
                                        </ul>
                                        <h2>
                                            <Link href={`/blog/${blog.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                                {blog.title}
                                            </Link>
                                        </h2>
                                        <p>{blog.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={`sec-title-btn text-center mt-3 ${buttonActive ? "d-none" : ""}`}>
                        <span onClick={() => setButtonState(!buttonActive)}>
                            <button className="theme-btn" onClick={() => setCount(number + number)}>
                                View All Blog
                            </button>
                        </span>
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Latest Blog</h1>
            </div>
        </section>
    );
};

export default BlogSection;
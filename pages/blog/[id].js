import React from 'react';
import BlogDetailPage from '../../components/BlogSingle/BlogDetailPage';
import blogs from '../../api/blogs';

const BlogPage = ({ id }) => {
    return <BlogDetailPage id={id} />;
};

export const getStaticPaths = async () => {
    const paths = blogs.map((blog) => ({
        params: { id: String(blog.id) },
    }));
    return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            id: params.id || '1',
        },
    };
};

export default BlogPage;

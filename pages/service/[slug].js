import React from 'react';
import ServiceDetailPage from '../../components/ServiceSingle/ServiceDetailPage';

const ServicePage = ({ slug }) => {
    return <ServiceDetailPage slug={slug} />;
};

export const getStaticPaths = async () => {
    const paths = [
        { params: { slug: 'website-development' } },
        { params: { slug: 'web-application-development' } },
        { params: { slug: 'cms-wordpress-development' } },
        { params: { slug: 'saas-custom-software' } },
        { params: { slug: 'e-commerce-development' } },
        { params: { slug: '1' } },
        { params: { slug: '2' } },
        { params: { slug: '3' } },
        { params: { slug: '4' } },
        { params: { slug: '5' } },
    ];
    return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            slug: params.slug || 'website-development',
        },
    };
};

export default ServicePage;

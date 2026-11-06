import React from 'react';
import ServiceDetailPage from '../../components/ServiceSingle/ServiceDetailPage';

const ServiceSinglePage = ({ id }) => {
    return <ServiceDetailPage slug={id} />;
};

export const getStaticPaths = async () => {
    const paths = [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } },
        { params: { id: '4' } },
        { params: { id: '5' } },
    ];
    return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }) => {
    return {
        props: {
            id: params.id || '1',
        },
    };
};

export default ServiceSinglePage;

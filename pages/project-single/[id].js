import React from 'react';
import ProjectDetailPage from '../../components/ProjectSingle/ProjectDetailPage';
import Projects from '../../api/project';

const ProjectSinglePage = ({ id }) => {
    return <ProjectDetailPage id={id} />;
};

export const getStaticPaths = async () => {
    const paths = Projects.map((project) => ({
        params: { id: String(project.Id) },
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

export default ProjectSinglePage;

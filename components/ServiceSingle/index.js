
import React, { useState, Fragment } from 'react';
import { Dialog, Grid } from '@mui/material';
import Contact from './contact';
import Image from 'next/image';
import { getServiceDetail } from '../../api/serviceDetailData';

const ServiceSingle = ({ maxWidth, open, onClose, title, dImg, sImg1, sImg2 }) => {
    const detail = getServiceDetail(title);

    const mainImg = dImg || detail.defaultImg;
    const subImg1 = sImg1 || detail.img1;
    const subImg2 = sImg2 || detail.img2;

    return (
        <Fragment>
            <Dialog
                open={open}
                onClose={onClose}
                className="modalWrapper quickview-dialog"
                maxWidth={maxWidth}
            >
                <Grid className="modalBody modal-body">
                    <button className='modal-close' onClick={onClose}><i className='fa fa-close'></i></button>
                    <div className="tp-service-single-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-12">
                                    <div className="tp-service-single-wrap">
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-main-img">
                                                {mainImg && <Image src={mainImg} alt={detail.title} />}
                                            </div>
                                            <div className="tp-service-single-title">
                                                <h3>{detail.title}</h3>
                                            </div>
                                            <p style={{ fontWeight: 500, fontSize: '20px', marginBottom: '15px' }}>{detail.subheadline}</p>
                                            <p>{detail.description1}</p>
                                            <p>{detail.description2}</p>
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        {subImg1 && <Image src={subImg1} alt="" />}
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="tp-p-details-img">
                                                        {subImg2 && <Image src={subImg2} alt="" />}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>Our Capabilities</h3>
                                            </div>
                                            <p>{detail.capabilitiesIntro}</p>
                                            <ul>
                                                {detail.deliverables.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>Our Approach</h3>
                                            </div>
                                            <p>{detail.approach}</p>
                                        </div>
                                        <div className="tp-service-single-item list-widget">
                                            <div className="tp-service-single-title">
                                                <h3>Our Work Process</h3>
                                            </div>
                                            <ul>
                                                {detail.workProcess.map((step, idx) => (
                                                    <li key={idx}>{step}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-single-title">
                                                <h3>Related Service</h3>
                                            </div>
                                            <div className="tp-service-area">
                                                <div className="row align-items-center">
                                                    {detail.relatedServices.map((service, srv) => (
                                                        <div className="col-lg-4 col-md-6 col-12" key={srv}>
                                                            <div className="tp-service-item">
                                                                <i className={`fi ${service.icon}`}></i>
                                                                <h2>{service.title}</h2>
                                                                <p>{service.description}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tp-service-single-item">
                                            <div className="tp-service-contact-area">
                                                <div className="tp-contact-title">
                                                    <h2>{detail.contactTitle}</h2>
                                                    <p>{detail.contactSubtitle}</p>
                                                </div>
                                                <div className="tp-contact-form-area">
                                                    <Contact defaultService={detail.title} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Dialog>
        </Fragment>
    );
}

export default ServiceSingle;


import React, { useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';


const Contact = ({ defaultService = '' }) => {
    const [submitted, setSubmitted] = useState(false);

    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: defaultService || '',
        message: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            setSubmitted(true);
            setForms({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
            {submitted && (
                <div className="alert alert-success" style={{ marginBottom: '20px', borderRadius: '4px' }}>
                    Thank you! Your project enquiry has been submitted. I will review your requirements and get back to you shortly.
                </div>
            )}
            <div className="row">
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            value={forms.name}
                            type="text"
                            name="name"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Enter your name" />
                    </div>
                    {validator.message('name', forms.name, 'required')}
                </div>
                <div className="col col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input
                            className="form-control"
                            value={forms.email}
                            type="email"
                            name="email"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            placeholder="Enter your email address" />
                        {validator.message('email', forms.email, 'required|email')}
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <select className="form-control"
                            onBlur={(e) => changeHandler(e)}
                            onChange={(e) => changeHandler(e)}
                            value={forms.subject}
                            name="subject">
                            <option value="">Choose a Service</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Web Application Development">Web Application Development</option>
                            <option value="CMS & WordPress Development">CMS & WordPress Development</option>
                            <option value="SaaS & Custom Software">SaaS & Custom Software</option>
                            <option value="E-commerce Development">E-commerce Development</option>
                            <option value="API & Backend Integration">API & Backend Integration</option>
                            <option value="Website Optimization & Maintenance">Website Optimization & Maintenance</option>
                            <option value="Technical SEO & Website Performance">Technical SEO & Website Performance</option>
                            <option value="Other / Not Sure Yet">Other / Not Sure Yet</option>
                        </select>
                        {validator.message('subject', forms.subject, 'required')}
                    </div>
                </div>
                <div className="col fullwidth col-lg-12">
                    <textarea
                        className="form-control"
                        onBlur={(e) => changeHandler(e)}
                        onChange={(e) => changeHandler(e)}
                        value={forms.message}
                        name="message"
                        placeholder="Tell me a little about your project, requirements, and goals...">
                    </textarea>
                    {validator.message('message', forms.message, 'required')}
                </div>
            </div>
            <div className="submit-area">
                <button type="submit" className="theme-btn-s2">Send Project Enquiry</button>
            </div>
        </form>
    );
};

export default Contact;
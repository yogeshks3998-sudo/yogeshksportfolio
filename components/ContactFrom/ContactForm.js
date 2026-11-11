import React, { useState, useRef } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import emailjs from '@emailjs/browser';

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
    const formRef = useRef(null);
    const [forms, setForms] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState(null); // 'success' | 'error' | null
    const [, forceUpdate] = useState();

    const [validator] = useState(
        new SimpleReactValidator({
            className: 'errorMessage'
        })
    );

    const changeHandler = e => {
        const { name, value } = e.target;
        setForms(prev => ({ ...prev, [name]: value }));
        if (status) {
            setStatus(null);
        }
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const isEmailValid = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const submitHandler = async e => {
        e.preventDefault();
        if (isSubmitting) return;

        const nameValid = forms.from_name && forms.from_name.trim().length > 0;
        const emailValid = forms.from_email && forms.from_email.trim().length > 0 && isEmailValid(forms.from_email.trim());
        const messageValid = forms.message && forms.message.trim().length > 0;

        if (!validator.allValid() || !nameValid || !emailValid || !messageValid) {
            validator.showMessages();
            forceUpdate({});
            return;
        }

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            console.error('EmailJS configuration error: environment variables are missing.');
            setStatus('error');
            return;
        }

        setIsSubmitting(true);
        setStatus(null);

        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current,
                {
                    publicKey: PUBLIC_KEY
                }
            );
            setStatus('success');
            setForms({
                from_name: '',
                from_email: '',
                message: ''
            });
            validator.hideMessages();
        } catch (error) {
            console.error('EmailJS submission error:', error);
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            ref={formRef}
            method="post"
            noValidate
            className="contact-validation-active"
            onSubmit={submitHandler}
        >
            <div className="row align-items-center">
                <div className="col-md-6 col-md-6 col-12">
                    <div className="form-group">
                        <label>Name*</label>
                        <input
                            value={forms.from_name}
                            type="text"
                            name="from_name"
                            id="from_name"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Name"
                            autoComplete="name"
                        />
                        {validator.message('name', forms.from_name, 'required', {
                            messages: { required: 'Name is required' }
                        })}
                    </div>
                </div>
                <div className="col-md-6 col-md-6 col-12">
                    <div className="form-group">
                        <label>Email*</label>
                        <input
                            value={forms.from_email}
                            type="email"
                            name="from_email"
                            id="from_email"
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            className="form-control"
                            placeholder="Your Email"
                            autoComplete="email"
                        />
                        {validator.message('email', forms.from_email, 'required|email', {
                            messages: {
                                required: 'Email is required',
                                email: 'Please enter a valid email address'
                            }
                        })}
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="fullwidth form-group">
                        <label>Message*</label>
                        <textarea
                            onBlur={changeHandler}
                            onChange={changeHandler}
                            value={forms.message}
                            name="message"
                            id="message"
                            className="form-control"
                            placeholder="Message"
                        ></textarea>
                        {validator.message('message', forms.message, 'required', {
                            messages: { required: 'Message is required' }
                        })}
                    </div>
                </div>
                <div className="col-md-5 order-md-1 order-2 col-12">
                    <div className="submit-area">
                        <button
                            type="submit"
                            className="theme-btn"
                            disabled={isSubmitting}
                            style={{
                                opacity: isSubmitting ? 0.75 : 1,
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                pointerEvents: isSubmitting ? 'none' : 'auto'
                            }}
                        >
                            {isSubmitting ? 'Sending...' : 'Submit now'}
                        </button>
                        <div
                            id="loader"
                            style={{
                                display: isSubmitting ? 'inline-block' : 'none',
                                marginLeft: '12px',
                                verticalAlign: 'middle'
                            }}
                        >
                            <i className="ti-reload"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-7 order-md-2 order-1 col-12">
                    <div className="contact-info">
                        <ul style={{ flexWrap: 'wrap', gap: '12px' }}>
                            <li>
                                <a
                                    href="https://wa.me/917676832079"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <i className="fa fa-whatsapp"></i> +91 7676832079
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:yogeshks3998@gmail.com"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <i className="fi flaticon-mail"></i> yogeshks3998@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/yogesh-k-s-8966a8402/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: 'inherit', textDecoration: 'none' }}
                                >
                                    <i className="ti-linkedin"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-12">
                    <div
                        id="success"
                        role="alert"
                        style={{
                            display: status === 'success' ? 'block' : 'none',
                            marginTop: '20px',
                            padding: '12px 18px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            fontWeight: 500
                        }}
                    >
                        Thank you! Your message has been sent successfully.
                    </div>
                    <div
                        id="error"
                        role="alert"
                        style={{
                            display: status === 'error' ? 'block' : 'none',
                            marginTop: '20px',
                            padding: '12px 18px',
                            borderRadius: '4px',
                            textAlign: 'center',
                            fontWeight: 500
                        }}
                    >
                        Unable to send your message. Please try again.
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;

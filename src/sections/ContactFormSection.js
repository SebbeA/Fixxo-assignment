import React, { useState } from 'react'

// From Hans video

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name)
            errors.name = "You must enter a name"
        else if(values.name.length < 2)
            errors.name = "Your name must at least have 2 characters"

        if(!values.email)
            errors.email = "You must enter an email"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid email (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "Your comment must be at least 5 characters long"

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else 
            setSubmitted(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(contactForm))
    }

    return (
        <section className="contact-form">
            <div className="container">
                {
                    submitted ? 
                    (<div className="comment">
                        <div>Thank you for your comment!</div>
                    </div>)
                    :
                    (
                        <>
                        <h2>Come in Contact with Us</h2>
                        <form onSubmit={handleSubmit} noValidate>
                            <div>
                                <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                                <div className="errorMessage">{formErrors.name}</div>
                            </div>
                            <div>
                                <input id="email" type="email" placeholder="Your Email" value={contactForm.email} onChange={handleChange} />
                                <div className="errorMessage">{formErrors.email}</div>
                            </div>
                            <div className="textarea">
                                <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange} ></textarea>
                                <div className="errorMessage">{formErrors.comment}</div>
                            </div>
                            <div>
                                <button type="submit" className="button-theme">Post Comments</button>
                            </div>
                        </form>
                        </>
                    )
                }
            </div>
        </section>
    )
}

export default ContactFormSection
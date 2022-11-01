import React, { useState } from 'react'
import { validate } from '../scripts/validation'

const ContactFormSection = () => {
  let currentPage = "Contact Us"
  window.top.document.title = `${currentPage} || Fixxo` 

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comments, setComments] = useState('')
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const {id, value} = e.target

    switch(id) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'comments':
        setComments(value)
        break
    }

    setErrors({...errors, [id]: validate(e)})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors(validate(e, {name, email, comments}))
  
    if (errors.name === null && errors.email === null && errors.comments === null) {
      setSubmitted(true)
      setName('')
      setEmail('')
      setComments('')
      setErrors({})
    } else {
      setSubmitted(false)
    }
  }

    return (
        <section className="contact-form">
            <div className="container">

                {
                submitted ? (
                <div className="alert alert-success text-center mb-5" role="alert">
                <h3>Thank you for your comments</h3> 
                <p>We will contact you as soon as possible.</p>
                </div>  ) : (<></>)
                }
                
                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" value={name} onChange={handleChange} className={(errors.name ? 'error': '')} />
                        <div className="errorMessage">{errors.name}</div>
                    </div>
                    <div>
                        <input id="email" type="email" placeholder="Your Email" value={email} onChange={handleChange} className={(errors.email ? 'error': '')} />
                        <div className="errorMessage">{errors.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comments" placeholder="Comments" value={comments} onChange={handleChange} className={(errors.comments ? 'error': '')} style={(errors.comments ? {border: '1px solid #FF7373'}: {} )} ></textarea>
                        <div className="errorMessage">{errors.comments}</div>
                    </div>
                    <div>
                        <button type="submit" className="button-theme">Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactFormSection
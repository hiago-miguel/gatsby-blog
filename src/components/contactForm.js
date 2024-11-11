// src/components/ContactForm.js
import React, { useState } from "react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    description: "",
  })

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!formData.name) newErrors.name = "Name is required."
    if (!formData.email) {
      newErrors.email = "Email is required."
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email."
    }
    if (!formData.description) newErrors.description = "Description is required."

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      // Form submission handled by Netlify
      document.getElementById("contact-form").submit()
    }
  }

  return (
    <form
      id="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
      action="/thank-you"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm

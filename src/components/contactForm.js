// src/components/ContactForm.js
import React from "react"

const ContactForm = () => (
  <form name="contact" method="POST" data-netlify="true" className="blog-post">
    <p>
      <label>Name: <input type="text" name="name" /></label>
    </p>
    <p>
      <label>Email: <input type="email" name="email" /></label>
    </p>
    <p>
      <label>Message: <textarea name="message"></textarea></label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>

  // <form
  //   name="contact"
  //   method="POST"
  //   data-netlify="true"
  //   action="/thank-you"
  // >
  //   <input type="hidden" name="form-name" value="contact" />

  //   <div>
  //     <label htmlFor="name">Name:</label>
  //     <input type="text" name="name" id="name" required />
  //   </div>

  //   <div>
  //     <label htmlFor="email">Email:</label>
  //     <input type="email" name="email" id="email" required />
  //   </div>

  //   <div>
  //     <label htmlFor="description">Description:</label>
  //     <textarea name="description" id="description" required></textarea>
  //   </div>

  //   <button type="submit">Send</button>
  // </form>
)

export default ContactForm
---
title: "Creating a Gatsby Form with Netlify Forms 📬"
date: "2024-11-11"
description: How to create simple form with Gatsby & Netlify Forms!
---

So, you've got a Gatsby site running, and now you want to add a form to collect data—like emails, feedback, or contact messages. Good news: Gatsby works beautifully with Netlify Forms, which offers a simple, no-server setup for handling form submissions. Let’s dive into how to set this up!

## Why Netlify Forms? 🤔

- **No Backend Required**: Netlify takes care of form submissions for you, so there’s no need for additional server setup.
- **Built-in Spam Protection**: It has honeypot fields and reCAPTCHA support.
- **Customizable Notifications**: You can receive submissions directly via email, Slack, or even Zapier.

## Step 1: Set Up a Basic Form in Gatsby

Create a new page for your form. In your Gatsby project, add a file called `contact.js` in the `src/pages` folder with the following code:

```jsx
import React from 'react';

const ContactForm = () => {
  return (
    <form 
      name="contact" 
      method="POST" 
      data-netlify="true" 
      netlify-honeypot="bot-field" 
      action="/thank-you"
    >
      {/* Netlify form requirements */}
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <p>
        <label>
          Name: <input type="text" name="name" required />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" required />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message" required></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
```

Here’s a breakdown of what’s going on:

* **name="contact":** The name you give here should match what you set in the hidden input (which is required for Netlify).
* **method="POST":** Needed for Netlify to capture the form data.
* **data-netlify="true":** This attribute activates Netlify Forms.
* **netlify-honeypot="bot-field":** Adds a hidden field to trap spam bots.
* **action="/thank-you":** Redirects users to a thank-you page upon form submission.

## Step 2: Create a Thank-You Page
You can create a simple thank-you page in the src/pages folder named thank-you.js:

```jsx
import React from 'react';

const ThankYou = () => (
  <div>
    <h1>Thank you for reaching out!</h1>
    <p>We'll get back to you soon.</p>
  </div>
);

export default ThankYou;
```

## Step 3: Enable the Form in Netlify
If your Gatsby site is already hosted on Netlify, you’re almost done! Just commit and push your changes to trigger a rebuild. Once Netlify detects the form, it will start collecting submissions automatically.

### Testing Your Form
Go to your site and submit a test entry. Then, head to your Netlify dashboard:

1. Go to **Forms** in the Netlify dashboard.
2. You should see your new form listed there as "contact" (or whatever name you gave it).
3. Check for your test submission!


## Troubleshooting Tips 🛠️
Form Not Showing in Netlify? Make sure the form name matches in both `name` and `form-name`.
No Form Submissions? Double-check that you’re using `method="POST"` and `data-netlify="true"`.
Testing Locally? Use `gatsby build` and `gatsby serve` to test as gatsby develop doesn’t trigger Netlify Forms.

## Conclusion

That’s it! You now have a fully functional contact form in your Gatsby site powered by Netlify Forms. 🎉 Happy coding!
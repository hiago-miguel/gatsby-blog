---
title: "Deploying Your Gatsby Project with Netlify 🚀"
date: "2024-11-03"
description: "With Netlify you can deploy your project for free! We're going to check this fantastic tool!"
---

Congratulations! You’ve built your Gatsby site, and it’s looking amazing. Now it’s time to make it live on the web, and Netlify is one of the best platforms for deploying Gatsby sites. It’s free for personal projects, easy to set up, and optimized for static sites—perfect for Gatsby! Here’s how to get started.

## Why Choose Netlify? 🤔

- **Easy Integration with Git**: Deploy directly from your GitHub, GitLab, or Bitbucket repository.
- **Free Custom Domain and SSL**: You can add your own domain and secure it with HTTPS.
- **Continuous Deployment**: Netlify will automatically deploy any updates pushed to your Git repo.
- **Built-in Forms, Functions, and Analytics**: No extra backend setup needed for features like forms or serverless functions.
- **Global CDN**: Netlify’s CDN makes your site fast and reliable worldwide.

## Prerequisites 📋

Before you start, make sure you have:
1. **A GitHub, GitLab, or Bitbucket Account**: Your project repository should be on one of these platforms.
2. **Netlify Account**: [Sign up on Netlify](https://app.netlify.com/signup).
3. **Gatsby Project Ready to Go**: If you haven’t built your project yet, run `gatsby build` to create the `public` folder, which contains your site’s optimized files.

## Step 1: Push Your Gatsby Project to Git 📂

If your project isn’t already version-controlled, initialize a Git repository in your project directory:

```bash
git init
git add .
git commit -m "Initial commit"
```

Now push it to GitHub, GitLab, or Bitbucket:
```bash
# For GitHub
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main
```

Replace `yourusername` and `your-repo-name` with your GitHub username and your repository’s name.

## Step 2: Connect Your Project to Netlify 🔗
1. Log in to Netlify and go to your Netlify Dashboard.
2. Click "Add New Site" and select "Import an Existing Project".
3. Choose your Git provider (GitHub, GitLab, or Bitbucket), and grant Netlify permission to access your repository.
4. Select the repository where your Gatsby project is hosted.

## Step 3: Configure Your Build Settings 🛠️

Netlify will ask you to configure the build settings for your project:

1. Build Command: gatsby build
2. Publish Directory: public

Your build command tells Netlify how to build your Gatsby site, and the publish directory tells it where to find the optimized site files. Gatsby automatically generates everything you need in the public folder during the build.

After you’ve set these values, click "Deploy Site".

## Step 4: Wait for the Deployment 🚦
Netlify will start building and deploying your site. You’ll see logs for each step in the deployment process. This may take a minute or two as Netlify installs dependencies, builds your project, and prepares it for the web.

Once it’s complete, you’ll get a live URL for your site! 🎉

## Step 5: Customize Your Domain (Optional) 🌐
By default, Netlify will assign a random name to your site (e.g., mystifying-mcclintock.netlify.app). You can change it to something more memorable:

1. Go to Site Settings > Domain Management.
2. Click on Options next to the generated site name, and choose Edit Site Name.
3. Type in a custom name, and save.

If you have a custom domain (e.g., www.yoursite.com), you can also add it in the Domain Settings and follow the instructions to set up DNS.

## Step 6: Enable HTTPS for Security 🔒
Netlify automatically provides a free SSL certificate for all sites hosted on their platform. To enable HTTPS:
1. Go to Site Settings > Domain Management > HTTPS.
2. Click Verify DNS Configuration if needed.
3. Enable Automatic HTTPS for your custom domain (if you’re using one).

## Optional: Set Up Continuous Deployment 🔄
One of the best things about Netlify is that it automates deployments. Anytime you push a change to your Git repo, Netlify will automatically rebuild and redeploy your site with the latest changes. No need to manually redeploy!

## Optional: Add Environment Variables 🗝️
If your Gatsby project relies on environment variables (e.g., API keys), you can set them in Netlify to keep them secure:

1. Go to Site Settings > Build & Deploy > Environment.
2. Click Edit Variables.
3. Add each variable you need (e.g., GATSBY_API_KEY) and its value.
4. Click Save.

## Troubleshooting Tips 🛠️
Deployment Failed? Check the build logs to identify any errors. Common issues include missing dependencies or incorrect build commands.
Site Not Updating? Make sure to push your changes to your Git provider. Netlify only redeploys when it detects new commits.
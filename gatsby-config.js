if (process.env.NODE_ENV === undefined) {
  require("dotenv").config({
    path: `.env.production`,
  })
} else {
  require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
  })
}


const cspDirectives = [
  "default-src 'self' https://identity.netlify.com/ https://www.netlifystatus.com",
  "connect-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com https://maps.googleapis.com https://maps.gstatic.com https://script.google.com https://identity.netlify.com  https://www.netlifystatus.com",
  "font-src 'self' https://fonts.gstatic.com https://fonts.googleapis.com",
  "frame-src 'self' ",
  "img-src 'self' blob: data: https://maps.gstatic.com *.googleapis.com *.ggpht",
  "object-src 'self' 'unsafe-inline' data: https://www.netlify.com https://identity.netlify.com https://www.netlifystatus.com",  
  "prefetch-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://maps.gstatic.com https://www.netlify.com https://identity.netlify.com/ https://www.netlifystatus.com",  
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://identity.netlify.com https://unpkg.com https://www.netlifystatus.com https://script.google.com",  
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com",  
  "manifest-src 'self'", 
]

const directivesToCspHeader = headers => headers.join(';')

module.exports = {
  siteMetadata: {
    title: 'Gatsby + Netlify CMS',
    description: 'Gatsby + Netlify CMS site with custom previews',
    author: 'jf-home',
    siteUrl: 'https://www.xyz.com',
    trailingSlash: 'always',
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby + Netlify CMS`,
        short_name: `Gatsby + Netlify CMS`,
        start_url: `/`,
        display: `standalone`,
        icon: `${__dirname}/src/images/avatar.png`, 
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/content`,
      },
    },

    `gatsby-plugin-image`, 
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {placeholder: 'none', quality: 90, formats: ['auto', 'webp']},
      },
    },
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: { 
              name: "assets", 
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { 
              maxWidth: 3000, 
            },
          },
        ],
      },
    },

    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        headers: {
          '/*': [
            'X-Frame-Options: DENY',
            'X-XSS-Protection: 1; mode=block',
            'X-Content-Type-Options: nosniff',
            `Content-Security-Policy: ${directivesToCspHeader(cspDirectives)}`,
            'Referrer-Policy: no-referrer-when-downgrade',
          ],
        },
      },
    },

    `gatsby-transformer-remark-frontmatter`, 

    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    },

    `gatsby-plugin-svgr`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`
  ],
}
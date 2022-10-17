const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const axios = require('axios')
const fs = require('fs')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`  && node.frontmatter.template) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            template: { in: ["about", "legal"] }
          }
        }
        sort: { fields: frontmatter___template, order: ASC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              template
              title
            }
            rawMarkdownBody
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(
        `./src/templates/${String(node.frontmatter.template)}.js`
      ),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })
}

const path = require('path')
var _ = require('lodash')


// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
      categories: allMdx {
        distinct(field: frontmatter___category)
      }
      tags: allMdx {
        group(field: frontmatter___tags){
          fieldValue
        }
      }
    }
  `)

  result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
    createPage({
      path: `/posts/${slug}`,
      component: path.resolve(`src/templates/post-template.js`),
      context: {
        slug,
      },
    })
  })

  result.data.categories.distinct.forEach((category) => {
    createPage({
      path: `/${category}`,
      component: path.resolve(`src/templates/category-template.js`),
      context: {
        category: category
      }
    })
  })

  result.data.tags.group.forEach((tag) => {
    let {fieldValue: theTag} = tag
    theTag = _.kebabCase(theTag)
    createPage({
      path: `tags/${theTag}`,
      component: path.resolve(`src/templates/tags-template.js`),
      context: {
        tag: theTag
      }
    })
  })
 
}

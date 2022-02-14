import { graphql, useStaticQuery } from "gatsby"

const GetWebsiteData = () => {
  const pageQuery = graphql`
    {
      allHubspotForm {
        nodes {
          portalId
          name
          submitText
          redirect
          formFieldGroups {
            fields {
              label
              name
              required
              fieldType
              placeholder
              enabled
            }
          }
          inlineMessage
        }
      }

      site {
        siteMetadata {
          title
          description
        }
      }

      allContentfulAboutPage {
        nodes {
          title
          subtitle
          id
          content {
            raw
          }
        }
      }

      allContentfulContactPage {
        nodes {
          subtitle
          title
          description
        }
      }

      allContentfulProjectsPage {
        edges {
          node {
            subtitle
            title
            projects {
              id
              image {
                gatsbyImageData(
                  layout: CONSTRAINED
                  placeholder: DOMINANT_COLOR
                  jpegProgressive: true
                )
              }
              title
              content {
                tools
                links {
                  Github
                  Live
                }
              }
            }
          }
        }
      }
    }
  `
  return useStaticQuery(pageQuery)
}

export default GetWebsiteData

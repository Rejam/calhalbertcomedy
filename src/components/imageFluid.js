export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 800) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

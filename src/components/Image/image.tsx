import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface PropsType {
  name: string
}
//
export default (props: PropsType) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      cart: file(relativePath: { eq: "shopping-cart.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      search: file(relativePath: { eq: "search.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      fone: file(relativePath: { eq: "fone.png" }) {
        childImageSharp {
          fluid(maxWidth: 3000) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      activity: file(relativePath: { eq: "activity.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      bluetooth: file(relativePath: { eq: "bluetooth.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      battery: file(relativePath: { eq: "battery.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  //activity
  return (
    <>
      {
        (() => {
          switch (props.name) {
            case "logo":
              return <Img className="image-logo" fluid={data.logo.childImageSharp.fluid} alt="Logo" />
            case "cart":
              return <Img className="image-cart" fluid={data.cart.childImageSharp.fluid} alt="Cart" />
            case "search":
              return <Img className="image-search" fluid={data.search.childImageSharp.fluid} alt="Search" />
            case "fone":
              return <Img className="image-fone" fluid={data.fone.childImageSharp.fluid} alt="Fone" />
            case "activity":
              return <Img className="image-activity" fluid={data.activity.childImageSharp.fluid} alt="Activity" />
            case "bluetooth":
              return <Img className="image-bluetooth" fluid={data.bluetooth.childImageSharp.fluid} alt="Bluetooth" />
            case "battery":
              return <Img className="image-battery" fluid={data.battery.childImageSharp.fluid} alt="Battery" />
            default:
              break;
          }
        })()
      }
    </>
  )
}

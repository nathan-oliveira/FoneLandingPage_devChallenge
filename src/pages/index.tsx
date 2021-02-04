import React from "react"

import Layout from "../components/Layout/layout"
import SEO from "../components/seo"
import Product from '../components/Product/product'

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <Product />
    </Layout>
  )
}

import React from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';


export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
		uri
      }
    }
  }
`

//const PageTemplate = props => {
  //return <pre>{JSON.stringify(props, null, 2)}</pre>
const PageTemplate = ({ data }) => {
   const page = data.wpgraphql.page
   return (
     <Layout>

        <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
		
       </Layout>
   )
}

export default PageTemplate
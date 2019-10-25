import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout.js";


/*
how doe this work??? Especially this part:
({ node }, index) =>


{data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.base}</td>
                <td>{node.prettySize}</td>
                <td>{node.relativeDirectory}</td>
                <td>{node.name}</td>
              </tr>
            ))}




*/

export default ( {data} ) => {
    console.log(data)
    return (
        <Layout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>base</th>
              <th>prettySize</th>
              <th>relativeDirectory</th>
              <th>name</th>
            </tr>
          </thead>
          <tbody> 
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.base}</td>
                <td>{node.prettySize}</td>
                <td>{node.relativeDirectory}</td>
                <td>{node.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
    )

    }

export const query = graphql` 
query {
    allFile {
      edges {
        node {
          id
          base
          prettySize
          relativeDirectory
          name
        }
      }
    }
  }
  ` 
  
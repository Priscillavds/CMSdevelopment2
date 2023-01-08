import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'

const CharactersPage = ({data: {allWpCharacter: {edges}}}) => {
    return (
        <Layout pageTitle="Characters">
            {edges.map((item) => {
                const character = item.node.characterFields;
                const image = getImage(item.node.characterFields.picture.localFile);
                return <>
                    <h2 key={item.node.id}>{character.name}</h2>
                    <GatsbyImage image={image} alt={item.node.characterFields.picture.altText}></GatsbyImage>
                    
                </>
            })}

        </Layout>
    )
}

export const query = graphql`
query {
    allWpCharacter {
      edges {
        node {
          id
          characterFields {
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
            name
          }
        }
      }
    }
  }
  
`


export default CharactersPage
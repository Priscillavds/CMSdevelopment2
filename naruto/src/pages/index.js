// Stap 1: Importeer React
import * as React from 'react'
import { graphql } from 'gatsby'
import Character from '../components/character'
import Layout from '../components/layout'
// Stap 2: definieer je component
const IndexPage = ({data:{homePageFields}}) => {
  return (
    <Layout pageTitle="Naruto">
      <div dangerouslySetInnerHTML={{__html: homePageFields.description,}}/>

      <h2>favorite Characters</h2>
      <p>{homePageFields.characters.map(character => {
        return <Character key={character.id} slug={`characters/${character.slug}`} character={character} />
      })}</p>
    </Layout>
  )
}


export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homePageFields {
      description
      title
      favoriteCharacters {
        ... on WpCharacter {
          id
          slug
          characterFields {
            name
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
    }
  }
}
`

// Stap 3: Exporteer je component
export default IndexPage
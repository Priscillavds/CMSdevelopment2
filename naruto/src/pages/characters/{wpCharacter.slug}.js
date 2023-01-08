import { graphql } from 'gatsby'
import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import CharactersPage from '.'
import Layout from '../../components/layout'

const CharacterPage = ({data:{wpCharacters:{characterFields:character},},}) => {
  const image = getImage(character.picture.localFile);
  return (
    <Layout pageTitle="Characters Template">
      <div> 
        <h2>{character.name}</h2>
        <GatsbyImage image={image} alt={character.picture.altText}></GatsbyImage>
        <h3>description: </h3>
        <div dangerouslySetInnerHTML={{__html: character.description}} />
        <h3>background: </h3>
        <div dangerouslySetInnerHTML={{__html: character.background}} />
        <h3>personalityTrait</h3>
        <p>{character.personalityTrait}</p>
        <h3>ninjaRank</h3>
        <p>{character.ninjaRank}</p>
        <h3>abilities</h3>
        <p>{character.abilities}</p>
        <h3>friends</h3>
        <p>{character.friends}</p>
        <h3>height</h3>
        <p>{character.height}</p>
        <h3>weight</h3>
        <p>{character.weight}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query sxdfghj($id: String) {
    wpCharacter(id: {eq: $id}) {
      characterFields {
        name
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        description
        background
        personalityTrait
        ninjaRank
        abilities
        friends
        height
        weight
      }
    }
  }  
`


export default CharacterPage
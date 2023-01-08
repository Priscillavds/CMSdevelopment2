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
      <section className={form}>
        <form name="contact" method="POST" data-netlify="true">
            <label>First Name:</label>
            <input type="text" name="firstname" required={true} />
            <label>Last Name:</label>
            <input type="text" name="lastname" required={true} />
            <label>Email:</label>
            <input type="email" name="email" required={true} />
            <label>Subject:</label>
            <input type="text" name="subject" required={true} />
            <label>Message:</label>
            <textarea name="message" required={true}></textarea>
            <input type="hidden" name="form-name" value="contact"/>
            <button type="submit">Send</button>
        </form>
      </section>
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
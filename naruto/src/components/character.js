import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Character = ({ character, slug }) => {
  const favpicture = getImage(character.characterFields.picture.localFile)
  return (
    <Link to={slug}>
      <GatsbyImage
        image={favpicture}
        alt={character.characterFields.picture.altText}
      />
      <article>
        {character.characterFields.name && <p>{character.characterFields.name}</p>}
      </article>
    </Link>
  )
}

export default Character;
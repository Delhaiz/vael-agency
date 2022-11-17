import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"
import {
  header,
  headerInfo,
  headerPicture,
  artistName,
  fullName,
  artistRoles,
  artistDescription,
  artistInfo,
  artistPictures,
  artistPicture,
} from "../../page.module.css"

const ArtistPage = ({
  data: {
    wpArtist: {
      artistMeta: artist,
      roles: { nodes: roles },
    },
  },
}) => {
  const image = getImage(artist.profilePicture.localFile)
  const image1 = getImage(artist.picture1.localFile)
  const image2 = getImage(artist.picture2.localFile)
  const image3 = getImage(artist.picture3.localFile)
  return (
    <Layout pageTitle="Artist Template">
      // Header JSX
      <section className={artistPictures}>
       {image1 && (
          <GatsbyImage
            className={artistPicture}
            image={image1}
            alt={artist.picture1.altText}
          />
        )}
        {image2 && (
          <GatsbyImage
            className={artistPicture}
            image={image2}
            alt={artist.picture2.altText}
          />
        )}
        {image3 && (
          <GatsbyImage
            className={artistPicture}
            image={image3}
            alt={artist.picture3.altText}
          />
        )}
      </section>
    </Layout>
  )
}

export const query = graphql`
query ($slug: String) {
  wpArtist(slug: {eq: $slug}) {
    artistMeta {
      firstName
      lastName
      email
      description
      artistName
      height
      origin
      phoneNumber
      shirtSize
      shoeSize
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      picture1 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      picture2 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
      picture3 {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
    roles {
      nodes {
        name
      }
    }
  }
}

`

export default ArtistPage
import { gql } from "@apollo/client";


export const CHARACTERS_QUERY = gql`
  query charactersQuery ($character: String!, $page: Int!) {
    characters(page: $page, filter: {name: $character }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`; 


export const CHARACTER_QUERY = gql`
  query characterQuery ($id: ID!) {
  character( id: $id) {
        id
        name
        status
        species
        type
        gender
        location{
          id
          name
          type
          dimension
          created
          residents{
            id
            name
            status
          }
        }
        origin {
          id
          name
          type
          dimension
          created
          residents{
            id
            name
            status
          }
        }
        image
        created
  }
}

`; 


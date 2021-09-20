import React, {createContext, useState, useEffect} from 'react';
import {CHARACTERS_QUERY} from '../pages/queries';
import { useQuery } from "@apollo/client";




// Create context
export const CharactersContext = createContext();


// Create Provider
const CharacterProvider = (props) =>{
    const [character, setCharacter] = useState('');
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);

    const { data: dataCharacters,
            loading: loadingCharacters,
            error: errorCharacters,
            refetch: refetchPage,
        } = useQuery(CHARACTERS_QUERY, {
        variables: {character : character, page: page }
      });


    const refetchPaginator = (page) => {
        setPage(page);
    }

    const refetchCharacters = (char) => {
        setCharacters(char);
    }

    useEffect(() => {
        refetchPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, characters])



    return(
        <CharactersContext.Provider
            value={{
                page,
                setCharacter,
                setCharacters,
                character,
                characters,
                dataCharacters,
                loadingCharacters,
                errorCharacters,
                refetchPaginator,
                refetchCharacters
            }}
        >
            {props.children}
        </CharactersContext.Provider>
    )
}

export default CharacterProvider;
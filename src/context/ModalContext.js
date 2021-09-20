import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTER_QUERY } from "../pages/queries";

//Create context
export const ModalContext = createContext();

// Create Provider
const ModalProvider = (props) => {
  // Provider State
  const [idcharacter, setIdCharacter] = useState("1");

  const {
    data: dataSingleCharacter,
    loading: loadingSingleCharacter,
    error: errorSingleCharacter,
    refetch: refetchSingleCharacter,
  } = useQuery(CHARACTER_QUERY, {
    variables: { id: idcharacter },
  });
  const refetchFunc = (id) => {
    setIdCharacter(id);
  };

  useEffect(() => {
    refetchSingleCharacter();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idcharacter]); 



  if (idcharacter.trim() === "") {
    return;
  }

  return (
    <ModalContext.Provider
      value={{
        idcharacter,
        dataSingleCharacter,
        loadingSingleCharacter,
        errorSingleCharacter,
        refetchFunc,
        setIdCharacter,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

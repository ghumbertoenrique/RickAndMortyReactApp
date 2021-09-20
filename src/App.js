import React from 'react';
import SearchBar from './components/SearchBar';
import Header from './components/Header';
import CharList from './components/CharList';

import CharacterProvider from './context/CharatersContext';
import ModalProvider from './context/ModalContext';

function App() {

  return (
      <CharacterProvider>
        <ModalProvider>
        <Header/>
        <SearchBar />
        <CharList/>
        </ModalProvider>
    </CharacterProvider>
  );
}

export default App;

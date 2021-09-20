import React,{useContext} from 'react';
import { CharactersContext } from '../context/CharatersContext';
import styled from '@emotion/styled';
import Loading from './Loading';
import CharCard from './CharCard';
import rightArrow from '../img/Vector2.svg'

const PaginationNumber = styled.button`

    background: transparent;
    border: 0;
    color: #fff;
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;

    &:hover{
      color: #CBD736;
    }
    &.active {
      color: #CBD736;
      font-weight: 700;
      font-size: 25px;
    }

`;

const LeftArrow = styled.button`
    transform: rotateY(180deg);

`;

const NotFound = styled.div`
  	-webkit-animation: NotFound 1.5s ease-in-out both;
	           animation: NotFound 1.5s ease-in-out both;

  @-webkit-keyframes NotFound {
      from {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-transform-origin: center center;
                transform-origin: center center;
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
      }
        10% {
          -webkit-transform: scale(0.91);
                  transform: scale(0.91);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        17% {
          -webkit-transform: scale(0.98);
                  transform: scale(0.98);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        33% {
          -webkit-transform: scale(0.87);
                  transform: scale(0.87);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        45% {
          -webkit-transform: scale(1);
                  transform: scale(1);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
      }
      @keyframes NotFound {
        from {
          -webkit-transform: scale(1);
                  transform: scale(1);
          -webkit-transform-origin: center center;
                  transform-origin: center center;
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        10% {
          -webkit-transform: scale(0.91);
                  transform: scale(0.91);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        17% {
          -webkit-transform: scale(0.98);
                  transform: scale(0.98);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        33% {
          -webkit-transform: scale(0.87);
                  transform: scale(0.87);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        45% {
          -webkit-transform: scale(1);
                  transform: scale(1);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
      }


`;

const CharList = () => {
    // get context state
    const { character,
            dataCharacters,
            loadingCharacters,
            errorCharacters,
            refetchCharacters,
            refetchPaginator,
            page

          } = useContext(CharactersContext);




    //Return null if not char is selected
    if(character.trim() === ""){ return null };

    if (loadingCharacters) return <Loading/>;
    if (errorCharacters) return (<NotFound className="alert alert-danger container" role="alert">
    The character you are looking for does not exist, try again
  </NotFound>)
    refetchCharacters(dataCharacters.characters.results);
    const infoPage = dataCharacters.characters.info;
    const arrayPage = [...Array(infoPage.pages)]
    return (       
    <div className="container d-flex flex-column align-items-center" >
      <div className="row">
          {  }
          {dataCharacters.characters.results.map((char) => (
            <CharCard 
              key={char.id} 
              char={char}
            />
          ))}
        </div>
        {/* pagination */}
        {infoPage.pages > 1 ? (
          <nav >
          <div className="pagination">
            {infoPage.prev ? 
            (<LeftArrow 
              className="btn"
              onClick={ ()=> refetchPaginator(infoPage.prev) }
              >
                <img src={rightArrow} alt="Go back" />
              </LeftArrow>) 
              : null}

              {arrayPage.map((e, i) => {
                  return (                   
                  <PaginationNumber 
                    key={i}   
                    onClick={ ()=> refetchPaginator(i+1) }
                    className={ i+1 === page ? "active" :null}
                  >{i+1}</PaginationNumber>
                  )})}
            
            {infoPage.next ? 
            (<button 
              className="btn"
              onClick={ ()=> refetchPaginator(infoPage.next) }
            >               
            <img src={rightArrow} alt="Go back" />
            </button>) 
            : null }

          </div>
        </nav>
        ) : null}
        

      </div> );
}
 
export default CharList;
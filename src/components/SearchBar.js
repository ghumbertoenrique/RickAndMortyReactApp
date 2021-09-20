import React,{ useState, useContext,Fragment} from 'react';
import styled from '@emotion/styled';
import { CharactersContext } from '../context/CharatersContext';

const Input = styled.input`
  background-color:rgba(0,0,0,0)!important;
  border: 2px solid #fff;
  border-radius: 8px;
  color: #fff;
  outline: none;
  &:focus{
    background-color:rgba(0,0,0,0);
    color: #fff;
    border-color: #fff!important;
    box-shadow: none;
  }
  &:active{
    background-color:rgba(0,0,0,0);
  }
`

const Button = styled.button`
    border: 2px solid #FFFFFF;
    border-radius: 8px;
    color: #FFFFFF;
    transition: transform .3s ease;
    &:hover{
        color: #fff;
        transform: scale(1.1);
    }
    &:focus{
        box-shadow: none;
    }
`

const Error = styled.div`
    -webkit-animation: Error 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
	        animation: Error 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
    
    @-webkit-keyframes Error {
    0%,
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
        -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
        -webkit-transform: translateX(10px);
                transform: translateX(10px);
    }
    80% {
        -webkit-transform: translateX(8px);
                transform: translateX(8px);
    }
    90% {
        -webkit-transform: translateX(-8px);
                transform: translateX(-8px);
    }
    }
    @keyframes Error {
    0%,
    100% {
        -webkit-transform: translateX(0);
                transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70% {
        -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
    }
    20%,
    40%,
    60% {
        -webkit-transform: translateX(10px);
                transform: translateX(10px);
    }
    80% {
        -webkit-transform: translateX(8px);
                transform: translateX(8px);
    }
    90% {
        -webkit-transform: translateX(-8px);
                transform: translateX(-8px);
    }
    }

`;



const SearchBar = () => {

    // states 
    const [searchterm, setSearchTerm] = useState('');
    const [error, setError] = useState(false);

    // context
    const { setCharacter, refetchPaginator } = useContext(CharactersContext);

    //Validate data

    const sendSearchTerm = e =>{
        e.preventDefault();

        if(searchterm.trim() === "") {
            setError(true);
            return;
        }
        setError(false);
        //Sent term to context 
        setCharacter(searchterm);
        refetchPaginator(1);

    }

    return (
        <Fragment>
        <form 
            className="d-flex justify-content-center"
            onSubmit={ sendSearchTerm }
        >
            <div className="form-group m-3">
                <Input
                    type="text"
                    className="form-control"
                    placeholder="Search Character"
                    name = "searchterm"
                    onChange={ e => { setSearchTerm(e.target.value) } }
                />
            </div>
            <Button 
                type="submit" 
                className="btn m-3"
            >Search</Button>
        </form>
        {error 
        ? (
        <Error className="container d-flex justify-content-center">
            <p className="alert alert-danger">
                "Please write something, don't be a morty" 
            </p> 
        </Error>) 
        :null}

        </Fragment>

     );
}
 
export default SearchBar;
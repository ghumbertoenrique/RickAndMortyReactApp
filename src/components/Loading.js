import React from 'react';
import styled from '@emotion/styled';
import loadingImg from '../img/loading.png';

const LoadingContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(20px);
`;

const Img = styled.img`
    border: 2px solid #909090;
    border-radius: 10px;

`;

const ContainerImg = styled.div`

-webkit-animation: ContainerImg  1.5s ease-in-out infinite both;
	        animation: ContainerImg   1.5s ease-in-out infinite both;

@-webkit-keyframes ContainerImg {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
@keyframes ContainerImg {
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}


`;

const P = styled.p`
    color: #fff;
    text-align: center;
    margin-top: 10px;
    font-size: 1.4rem;
`;

const Loading = () => {
    return ( 
        <LoadingContainer>
            <ContainerImg >             
                <Img src={loadingImg} alt="search rick and morty app" />
                <P>Loading</P>
            </ContainerImg>
        </LoadingContainer>
     );
}
 
export default Loading;
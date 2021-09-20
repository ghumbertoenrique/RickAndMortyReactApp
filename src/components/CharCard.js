import React,{useContext, useState} from 'react';
import styled from '@emotion/styled';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { ModalContext } from '../context/ModalContext';
import Loading from './Loading';
import residents from '../img/Group4.svg';

// Material IU config
function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

// Material UI Modal Styles

const ModalLeftDiv = styled.div`
    width: 389;
    height: 799;
    z-index: 9999;
    position: relative;
    @media (max-width: 1279.95px){
      width: auto!important;
      height: 94px;
      background-color: transparent;
    }
`;

const ModalBtnResponsive = styled.button`
      display: none;

      @media (max-width: 1279.95px) {
        position: fixed;
        top: 0;
        display: block;
        }
`;

const LeftDivBgContainer = styled.div`
      overflow: hidden;
      position: absolute;
      z-index: 0;
      @media (max-width: 1279.95px) {
        width: 100%;
        background-color: #000;
        border-radius: 8px 8px 0 0;
      }
`;

const LeftDivBg = styled.div`
    background: #fff;
    width: 389px;
    height: 799px;
    z-index: 0;
    background-size: cover;
    filter: blur(25px) brightness(0.3);
    border: 1px solid transparent;
    @media (max-width: 1279.95px) {
      width: auto!important;
      height: 95px;
    }
`;

const RightDiv = styled.div`
    background: #000;
    width: 645px;
    padding: 99px 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 1279.95px) {
      width: auto;
      padding: 40px 20px;
    }
`;

const TitleModal = styled.h2`
    color: #CBD736;
    font-weight: 100;
    text-transform: uppercase;
    font-size :13px;
    letter-spacing: 0.65em;
`;

const PModal = styled.p`
    color : #D3D3D3;
`;

const SpanOriginModal = styled.span`
    color: #8C8C8C;
    font-size:14px;
`;

const  TitleOriginModal = styled.p`
  font-size: 28px;
  color: #fff;
  font-weight: 400;
  margin-bottom: 0;
`;

const SubtitleOriginModal = styled.span`
  font-size: 18px;
  color: #D3D3D3;
`;

const useStyles = makeStyles(theme => ({
  modal: {
    position: 'absolute',
    display: 'flex',
    width: 1034,
    height: 799,
    backgroundColor: '#000',
    padding: 0,
    [theme.breakpoints.down('md')]: {
      width: 347,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      top: '50%!important',
      paddingTop : '30%',
      backgroundColor: 'transparent',
      overflow: 'scroll',
    },
  },

   cardModal:{
    '-webkit-filter': 'grayscale(0)',
    filter: 'grayscale(0)',
    top: '40%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    height: 598,
    width: 401,
    'background-size': 'cover',
    'background-position': 'center',
    [theme.breakpoints.down('md')]: {
      height: 173,
      width: 178,
      top: '0',
      left: '50%',
    },
  },
}));

//Card styles

const Card = styled.div`
    border: 1px solid #fff;
    border-radius: 12px;
    transition: all .3s ease;
    cursor: pointer;
    filter: grayscale(1);
    -webkit-filter: grayscale(1);


    &:hover{
        box-shadow: 0px -1px 7px 10px rgba(255,249,0,0.75);
        -webkit-box-shadow: 0px -1px 7px 10px rgba(255,249,0,0.75);
        -moz-box-shadow: 0px -1px 7px 10px rgba(255,249,0,0.75);
        filter: grayscale(0) saturate(100);
         -webkit-filter: grayscale(0) saturate(2);

    }
`;

const CardImg = styled.img`
    border-radius: 12px;
`;

const CardBody = styled.div`
    color: #fff;
    position: absolute;
    width: 100%;
    bottom: 0;
    padding: 5px 10px;
    background-color: rgba(0,0,0,0.8);
    border-radius: 0px 0px 12px 12px;

`;

const CardTitle = styled.p`
    font-size: 1rem;
`;

const CharCard = ({char}) => {
  // get query response from context
  const {  dataSingleCharacter,loadingSingleCharacter, errorSingleCharacter, refetchFunc} = useContext(ModalContext);
    //Material Modal Config
    const [modalStyle] = useState(getModalStyle);  
    const [open, setOpen] = useState(false);

    const classes = useStyles();

    const handleOpen = () => {setOpen(true);}
    const handleClose = () => setOpen(false);

    if(errorSingleCharacter)  console.log(errorSingleCharacter.error);
    if (loadingSingleCharacter || !dataSingleCharacter) return <Loading/> ;
    const charData = dataSingleCharacter.character;

    return (
        <div
        className="col-lg-3 col-md-6 p-4 border-rounded"
        >
          <Card 
          className="card"
          onClick={() => {
            refetchFunc(char.id);
              handleOpen();
          }}
          >
            <CardImg className="card-img-top" src={char.image} alt={char.name}/>
            <CardBody className="card-body">
              <CardTitle className="card-title mb-0">{char.name}  </CardTitle>
              <p className="card-text">{char.species}</p>
            </CardBody>
          </Card>

          {/* Modal */}

          {dataSingleCharacter.character ? (
            <Modal
            open={open}
            onClose={ ()=> {
                handleClose();
            } }
            style={{ 'backdrop-filter': 'blur(12px)'}}
          >   
            { loadingSingleCharacter 
              ? <Loading /> 
              : <div style={modalStyle} className={classes.modal}>             
          
                {/* Img */}
                <LeftDivBgContainer>
                  <LeftDivBg 
                  style={{ 'backgroundImage': `url(${charData.image})`,}}
                  ></LeftDivBg>
                </LeftDivBgContainer>
                {/* left half content */}
                <ModalLeftDiv >
                  <button 
                  className="btn btn-outline-light m-4 px-4 btn-lg d-none d-xl-block d-md-none"
                  onClick={() => {
                      handleClose();
                  }}
                  >Close</button>
                  <ModalBtnResponsive 
                  className="btn btn-outline-light m-4 px-4 btn-lg border-0"
                  onClick={() => {
                      handleClose();
                  }}
                  >X</ModalBtnResponsive>
                  <Card 
                      className={`card  ${classes.cardModal}`}
                      style={{'backgroundImage':`url(${charData.image})` }}
                      >
                        <CardBody className="card-body">
                      <CardTitle className="card-title mb-0">{charData.name}  </CardTitle>
                      <p className="card-text">{charData.species}</p>
                      </CardBody>
                  </Card>
                </ModalLeftDiv>
                {/* right half content */}
                <RightDiv>
                  <div>
                  <TitleModal>About</TitleModal>
                  <PModal> 
                      {` ${charData?.name} is a ${charData?.gender} ${charData?.species}. `} 
                      {charData.gender === 'Male' ? 'He' : 'She'}
                      {` is ${charData.status}, las seen in ${charData.location?.name}`}
                    </PModal>
                  </div>
                  <div>
                  <TitleModal>origin</TitleModal>
                  <SpanOriginModal>{charData.origin?.type ? charData.origin?.type : null} </SpanOriginModal>
                  <TitleOriginModal> {charData.origin?.name ? charData.origin?.name : "Unknown"} </TitleOriginModal>
                  <SubtitleOriginModal>{charData.origin?.dimension} </SubtitleOriginModal>
                  <p><img src={residents} alt="img" /> {charData.origin?.residents.length} Residents </p>

                  </div>
                  <div>
                  <TitleModal>location</TitleModal>
                  <SpanOriginModal>{charData.location?.type} </SpanOriginModal>
                  <TitleOriginModal> {charData.location?.name ? charData.location?.name : "Unknown"} </TitleOriginModal>
                  <SubtitleOriginModal>{charData.location?.dimension} </SubtitleOriginModal>
                  <p><img src={residents} alt="img" /> {charData.location?.residents.length} Residents </p>

                  </div>

                </RightDiv>
            </div>
            }
          </Modal>
          ) : null}
          


        
        </div>

     );
}
 
export default CharCard;
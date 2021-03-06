import React from "react";
import styled, { css } from "styled-components";
import Disconnect from "./Disconnect";
import { ArrowLeft, X } from "react-feather"
import { useWeb3React } from "@web3-react/core"
import useAuth from "../../hooks/useAuth";
import WalletOptions from "./WalletOptions";

export const FormWrapper = styled.div`


    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 420px;
    // height: 610px;
    opacity: 0;
    background-color: rgb(27,32,52);
    text-align: right;
    padding: 30px 15px;
    padding-top: 40px;
    border: 1.5px solid rgb(41, 50, 67);
    border-radius: 10px;
    pointer-events: none;
    z-index: -10000;
    // transition: opacity 0.03s ease-in-out !important;
    ${(props) => props.visible && css`
    z-index: 100000000;
        opacity: 1;
        pointer-events: all;
        // transition: opacity 0.03s ease-in-out !important;
    `}

`


export const Backdrop = styled.div`

    position: fixed;
    height: 100vh;
    width: 100vw;
    opacity: 0;
    pointer-events: none;
    backdrop-filter: blur(5px);
    // background: #23233999;
/background: -webkit-linear-gradient(top, #23233999, #040717);
/background: -moz-linear-gradient(top, #23233999, #040717);
background: rgba(2,8,26, 0.65);
    // transition: opacity 0.2s ease-in-out !important;
    z-index: 100000000;
    ${(props) => props.visible && css`

        opacity: 1;
        pointer-events: all;
        transition: opacity 0.03s ease-in !important;
    `}

   
`;

export const ButtonContainer = styled.div`

    // width: 300px;
    // height: 100%;
    background: rgb(14, 22, 39);
    border-radius: 10px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 1px;
    padding-bottom: 15px;
    flex-direction: space-between;


   

`;

export const DisclaimerContainer = styled.div`

    // width: 300px;
    // height: 100%;
    background: rgb(14, 22, 39);
    border-radius: 10px;
    padding-left: 10px;
    padding-right: 10px;
    // padding-top: 12px;
    // padding-bottom: 12px;
    margin-bottom: 20px;
    flex-direction: space-between;
`;

export const ConnectButton = styled.div`

    height: 60px;
    width: 100%;
    background:  rgb(27,32,52);
    border-radius: 10px;
    margin-top: 20px;
    
    border: 1px solid rgb(37, 46, 63);
   
    &:hover {

        border: ${(props) => !props.active ? `1px solid rgb(77, 102, 235)` : ` 1px solid rgb(75,75,92)`};
        // height: 60.5px;

    }

    ${(props) => props.active && css`

        background:  rgb(37,42,62);
        border: 1px solid rgb(75,75,92);
        
    `}
`
export const TitleContainer = styled.div`

    height: 40px;
    // display: flex;
    // align-items: center;
    margin-right: ${(props) => props.margin};
    
    
    

`;


export const Logo = styled.div`

   width: ${(props) => props.width}px;
   height: ${(props) => props.width}px;
   float: right;
   line-height: 75px;
`;

export const ModalTitle = styled.div`

    
    font-size: 20px;
    // font-weight: bold;
    align-items: left;
    color: white;
    display: flex;
    padding-left: 20px;
    line-height: 60px;
    // float-left;
    left: 0%;

    .sp {

        padding-right: 10px;
    }
   
    
    
`;

export const ModalTextWrapper = styled.div`

    
    justify-content: left !important;
    word-wrap: break-word !important;
    word-wrap: break-word;
    align-items: left !important;
   
    overflow: hidden;
    // margin-bottom: 15px;
`;
export const ModalText = styled.p`

    
    font-size: 16px;
    // line-height: 30px;
    // font-weight: bold;
    color: rgb(141,141,149);
    // padding: 8px 12px;
    justify-content: left !important;
    word-wrap: break-word;
    align-items: left  !important;
    text-align: left;
    // font-weight: bold;
    
   
    
    
`;

export const ButtonWrapper = styled.div`

    // padding: 10px;
    width: 100%;
    position: absolute;
    right:    42%;
    bottom:   5%;
    align-tems: center !important;
    justify-content: center !important;
`

export const VerifyButton = styled.button`

    background: rgb(89,115,254);
    border: none;
    border-radius: 10px;
    width: ${(props) => props.height}px;
    height: 40px;
    width: 85%;
    background: ${(props) => props.col};
    padding: 5px 10px;
    color: #fff;
    font-size: ${(props) => props.fontsize}px;
    outline: none;
    border: none;
    cursor: pointer;
    // vertical-align: middle;
    position: absolute;
    right:    7%;
    bottom:   5%;
    align-tems: center !important;
    justify-content: center !important;

    


    &:hover {
        transition: all 0.2s ease-in-out;
        background: rgb(77, 102, 235);
    }
`

export const IconWrapper = styled.div`

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    height: 60px;
    width: 100%;
    margin-bottom: 25px;
`
export const IconContainer = styled.div`

    display: flex;
    width: 100%;
    height: 60px;

`
export const Icon = styled.div`

    margin: 5px 0px;
    width: 75px;
    height: 60px;
    border: 2px solid rgb(22,181,127);
    background:rgb(47,47,60);
    text-align: center;
    border-radius: 50%;
    line-height: 60px;
    // left: 0%;
`;

export const TextContainer = styled.div`

    // display: flex;
    // width: 100%;
    padding-left: 30px;
    padding-right: 20px;
    padding-top: 5px;
    height: 60px;
    color: rgb(141,141,149);
    text-align: left;
    word-wrap: break-word;
    

`
export const IconText = styled.div`

    padding-bottom: 10px;
    height: 20px;
    font-size: ${(props) => props.size}px;
    font-weight: ${(props) => props.bold};
    color: ${(props) => props.colour};
    word-wrap: break-word;
`

export const SeperatorText = styled.div`

    height: 23px;
    font-size: 16px;
    font-weight: bold;
    color: White;
    text-align: center;
`

export const IconContents2 = styled.i`

    // position: absolute:
    bottom: 10%;
    text-align: left;
    width: 50%;
    padding-left: 52px;
    padding-bottom: 90px;
    font-size: 25px;
    color: rgb(141,141,149);;
`

export const IconContents = styled.i`

    // position: absolute:
    bottom: 10%;
    text-align: left;
    width: 50%;
    padding-left: 52px;
    padding-bottom: 206px;
    font-size: 25px;
    color: rgb(141,141,149);
`

export const ErrorText = styled.div`

  position: absolute;
  left: 11%;
  top: 1.7%;
  color: White;
  font-size: 17px;

  &:hover {

    cursor:pointer;
}
`

export const BackIcon = styled(ArrowLeft)`

    position: absolute;
    left: 5%;
    top: 1.7%;
    cursor: pointer;
    color: White;

    &:hover {

        cursor:pointer;
    }
`

export const CloseIcon = styled(X)`

    position: absolute;
    left: 90%;
    top: 1.7%;
    cursor: pointer;
    color: White;

    &:hover {

        cursor:pointer;
    }
`



const Web3Modal = ({visible, close, toggleAccountDetails}) => {
    
    const { active } = useWeb3React()
    const { connectOn, disconnect } = useAuth()
    const provider = localStorage.getItem("provider")
    const closeAllModals = () => { 
        toggleAccountDetails()
        close()
    }

    const back= (provider) => {
        if(!localStorage.getItem("provider")) {
            close()
            toggleAccountDetails()
        }
        setTimeout(() => {
            connectOn(provider)
        }, 1200)
    }

    return (
        <>
         <Backdrop 
            visible={visible} 
            onClick={provider ? () => closeAllModals() : close}
        ></Backdrop>
        <FormWrapper visible={visible}>
            <ErrorText onClick={close}>Back</ErrorText>
                <BackIcon size={20} onClick={close}></BackIcon>
                <CloseIcon 
                    size={25} 
                    onClick={provider ? () => closeAllModals() : close}
                ></CloseIcon>
                <DisclaimerContainer>
                    <ModalTextWrapper>
                        <ModalText>
                            Welcome to the <span style={{color:"rgb(77, 102, 235)"}}>
                            Ren Bridge.</span> You can connect and use our app with 
                            the<span style={{color:"rgb(77, 102, 235)"}}> Wallet Providers
                            </span> below.
                        </ModalText>
                    </ModalTextWrapper>
                </DisclaimerContainer>
                <ButtonContainer>
                    <WalletOptions 
                        provider={provider} 
                        active={active} 
                        back={back}
                    />
                    <Disconnect 
                        to={"/"} 
                        connect={disconnect} 
                        close={closeAllModals}
                    />
                </ButtonContainer>
            </FormWrapper>
        </>
    )
}

export default Web3Modal;
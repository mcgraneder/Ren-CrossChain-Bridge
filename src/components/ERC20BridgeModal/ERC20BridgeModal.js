import React, { useState } from "react";
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { 
         BridgeModalWrapper, 
         ChainSelector, 
         ChainSelectorWrapper, 
         ChainSelectorIcon, 
         ChainSelectorIconWrapper, 
         ChainSelectorText, 
         ChainSelectorTextWrapper, 
         DropdownContainer, 
         BalanceContainer, 
         BalanceWrapper, 
         MintFormWrapper, 
         ButtonWrapper, 
         MintFormContainer, 
         MintToggleButton, 
         ReleaseToggleButton, 
         MinFormToggleButtonContainer, 
         MintFormTextWrapper2, 
         MintFormText2,
         Balancetext
} from "./ERC20BridgeModalStyles";
import { useWeb3React } from "@web3-react/core";
import { LoginStyledContainer } from "../Home/StyledContainer";
import { BridgeModalContainer } from "../BridgeModal/BridgeModalStyles";
export const MintForm = styled.div`

    margin-top: 10px;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-right: 10px;
    // padding: 3px;
    height: 50px;
    // width: 100%;
    background: transparent;
    border: 1px solid rgb(34,43,68);
    border-radius: 10px;

    &:hover {

        background:  rgb(34,43,68);
    }
`

export const BridgeSelectorContainer = styled.div`

    // width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    // background: White;
    display: flex;
    height: 45px;
    // padding-bottom: -px;
    // border: 1px solid rgb(34,43,68);
`

export const ERC20BridgeToggleButton = styled.div`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 20px;
    // border-right: 1.5px solid rgb(14, 22, 39);
    background: rgb(14, 22, 39);
    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    // border: 1px solid rgb(75,135,220);
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: rgb(75,135,220);
    text-decoration: none;
    &:hover {

        cursor: pointer
    }

`
export const LegacyBridgeToggleButton = styled(Link)`

   
    width: 50%;
    height: 100%;
    border-top-${(props) => props.side}-radius: 20px;
    // border-right: 1.5px solid rgb(14, 22, 39);
    background: rgb(27,32,52);
    font-size: 18px;
    font-weight: bold;
    font-family: 'Open Sans', sans-serif;
    // border: 1none};
    // border-bottom: 1.5px solid rgb(75,135,220);
    color: rgb(77,82,102)};
    text-decoration: none;

    &:hover {

        cursor: pointer
    }

`

const ERC20BridgeModal = ({close, balance }) => {

    const [toggle, setToggle] = useState(true)
    const { active } = useWeb3React()

    const setToggleValue = () => {
        setToggle(!toggle);
    }

    return (

        <>
        <LoginStyledContainer>
            
            <BridgeModalContainer>
            <BridgeSelectorContainer>
            <LegacyBridgeToggleButton side={"left"} colour={"rgb(14, 22, 39)"} to="/bridge">
                            <MintFormTextWrapper2>
                                <MintFormText2>Legacy Bridge</MintFormText2>
                            </MintFormTextWrapper2>
                        </LegacyBridgeToggleButton>
                        <ERC20BridgeToggleButton side={"right"}>
                            <MintFormTextWrapper2>
                                <MintFormText2>ERC20 Bridge</MintFormText2>
                            </MintFormTextWrapper2>
                        </ERC20BridgeToggleButton>
            </BridgeSelectorContainer>
            <BridgeModalWrapper>
                <ChainSelector marginbottom={"2px"}>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper>
                            <ChainSelectorIcon src={BitcoinLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText>Origin Chain</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                </ChainSelector>
                <ChainSelector marginbottom={"2px"}>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper >
                            <ChainSelectorIcon src={EthereumLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText> Destination Chain</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                    </ChainSelector>
                    <ChainSelector marginbottom={"30px"}>
                    <ChainSelectorWrapper>
                        <ChainSelectorIconWrapper >
                            <ChainSelectorIcon src={EthereumLogo} width={"30px"}></ChainSelectorIcon>
                        </ChainSelectorIconWrapper>
                        <ChainSelectorTextWrapper>
                            <ChainSelectorText> Asset</ChainSelectorText>
                        </ChainSelectorTextWrapper>
                        <DropdownContainer>
                            <ChainSelectorIcon src={chevronDownLogo} width={"15px"}></ChainSelectorIcon>
                        </DropdownContainer>
                    </ChainSelectorWrapper>
                    </ChainSelector>

                    <BalanceContainer>
                        <BalanceWrapper>
                            <Balancetext size={"45px"} colour={"#adadad"}>{balance} renBTC</Balancetext>
                            <Balancetext size={"17px"} colour={"White"}>= $368.46 </Balancetext>
                        </BalanceWrapper>                
                    </BalanceContainer>
                <MintFormContainer>
                    <MinFormToggleButtonContainer>
                        <MintToggleButton side={"left"} colour={"rgb(14, 22, 39)"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Mint</MintFormText2>
                            </MintFormTextWrapper2>
                        </MintToggleButton>
                        <ReleaseToggleButton side={"right"} active={toggle} onClick={setToggleValue}>
                            <MintFormTextWrapper2>
                                <MintFormText2>Release</MintFormText2>
                            </MintFormTextWrapper2>
                        </ReleaseToggleButton>
                    </MinFormToggleButtonContainer>
                    <MintFormWrapper>
                        <ButtonWrapper>
                            <HomeConnectButton width={"440px"} active={active} left={"82%"} top={"31%"} close={close} onclick={close} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={"Start Mint"}></HomeConnectButton>
                        </ButtonWrapper>
                    </MintFormWrapper>
                </MintFormContainer>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </LoginStyledContainer>
        </>
    )
}

export default ERC20BridgeModal;
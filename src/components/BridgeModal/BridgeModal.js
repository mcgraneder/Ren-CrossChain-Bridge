import React, { useState } from "react";
import BitcoinLogo from "../assets/Bitcoin.svg"
import chevronDownLogo from "../assets/cheverondown.png"
import EthereumLogo from "../assets/Ethereum.svg"
import HomeConnectButton from "../Home/HomeConnectButton";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import arrowDown from "../assets/arrowDown.svg"
import DropdownMenu from "../WalletModal/DropdownMenu";
import { ArrowContainer12, 
         ArrowLogo12, 
         ArrowLogoContainer12, 
         StyledContainer, 
         BridgeModalContainer, 
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
} from "./BridgeModalStyles";
import { useWeb3React } from "@web3-react/core";
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

const BrideModal = ({close, balance, setBalance}) => {

    const [toggle, setToggle] = useState(true)
    const [height, setHeight] = useState("")
    const [ac, setAc] = useState(false)
    const [web3, setWeb3] = useState()
    const [loading, setLoading] = useState(true)
    const [dropDownActive, setDropDownActive] = useState(false)
    const { active } = useWeb3React()

    const setToggleValue = () => {

        setToggle(!toggle);
    }

    const setDropdownValue1 = () => {

        
       
        setDropDownActive(!dropDownActive);
        setHeight("64px")
    }

    const setDropdownValue2 = () => {

        console.log("hello")
        setDropDownActive(!dropDownActive);
        setHeight("128px")
    }

    const setDropdownValue3 = () => {

        if(!dropDownActive) return
        setDropDownActive(!dropDownActive);
        setHeight("128px")
    }

    return (

        <>
        <StyledContainer onClick={() => setDropdownValue3()}>
            
            <BridgeModalContainer>
            <BridgeModalWrapper>
                <ChainSelector>
                    <ChainSelectorWrapper onClick={() => setDropdownValue1()}>
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
                { dropDownActive && <DropdownMenu height={height}></DropdownMenu>}
                 <ArrowContainer12>
                    <ArrowLogoContainer12>
                        <ArrowLogo12 src={arrowDown}></ArrowLogo12>
                    </ArrowLogoContainer12>
                </ArrowContainer12>
                <ChainSelector>
                    <ChainSelectorWrapper onClick={() => setDropdownValue2()}>
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

                    <BalanceContainer>
                        <BalanceWrapper>
                            <Balancetext size={"45px"} colour={"#adadad"}>{balance} renBTC</Balancetext>
                            <Balancetext size={"17px"} colour={"White"}>= $368.46 </Balancetext>
                        </BalanceWrapper>                
                    </BalanceContainer>
                {/* <ArrowContainer>
                    <ArrowLogoContainer>
                        <ArrowLogo src={arrowDown}></ArrowLogo>
                    </ArrowLogoContainer>
                </ArrowContainer> */}
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
                        {/* <MintForm>
                        <MintFormmWrapper>
                            <MintFormTextWrapper>
                                <MintFormText>0x13480Ea818fE2F27b82DfE7DCAc3Fd3E63A94113</MintFormText>
                            </MintFormTextWrapper>
                            <DropdownContainer2>
                                <MintFormIcon src={chainLogo} width={"18px"}></MintFormIcon>
                            </DropdownContainer2>
                            </MintFormmWrapper>
                            
                        </MintForm> */}
                        <ButtonWrapper>
                            <HomeConnectButton width={"440px"} active={active} left={"82%"} top={"31%"} close={close} onclick={close} height="60px" fontsize="17" colour="rgb(20, 29, 49)" text={"Start Mint"}></HomeConnectButton>
                        </ButtonWrapper>
                    </MintFormWrapper>
                    
                </MintFormContainer>
            </BridgeModalWrapper>
            </BridgeModalContainer>
        </StyledContainer>
        </>
    )
}

export default BrideModal;
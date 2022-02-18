import styled, { keyframes } from "styled-components"
import React, { useState, useCallback } from "react"
import { CheckCircle, X } from "react-feather"
import usePendingTransaction from "../../hooks/usePendingTransaction"
import { useEffect } from "react/cjs/react.development"
import usePendingTransactions from "../../hooks/usePendingTransaction"
export const TransactionPopupWrapper = styled.div`

    position: absolute;
    top: 0;
    right: 0.75%;
    width: 350px;
    height: 100vh;
    // height: 575px;
    text-align: right;
    padding: 20px 20px;
    padding-top: 100px;
    // background: White;
    // z-index: -1;
    transition: width 0.15s ease-in-out;
`

export const Container = styled.div`

    position: relative;
    display: ${(props) => props.display ? "none" : "block"};
    z-index: 100000;

    animation: SlideLeft 0.3s;
    animation-fill-mode: left;

    @keyframes SlideLeft {

        100% {

            width: 100%;
            
        }

        0% {

            width: 0%;
        }
    }
`
export const TransactionPopupContainer = styled.div`

    
    height: 90px;
    width: 100%;
    background-color: rgb(17,20,39); //b 72
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 30px;
    border: 1px solid  rgb(25,30,82);
    transition: width 0.15s ease-in-out;
    // white-space: nowrap;
  overflow: hidden;
`

export const IconContainer = styled.div`

    position: absolute;
    left: 0;
    top: 0;
    margin-left: 10px;
    margin-right: 10px;
    height: 100%;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
  overflow: hidden;
`

export const TextContainer = styled.div`

    position: absolute;
    left: 70px;
    top: 0;
    margin-top: 11px;
    margin-right: 20px;
    // width: 100%;
    // height: 50%;
    // background: White;
    // white-space: nowrap;
  overflow: hidden;

`

export const Text = styled.div`

    margin-bottom: 10px;
    margin-right: 23px;
    font-family: 'Open Sans', sans-serif;
    text-align: left;
    font-size: ${(props) => props.size};
    color: ${(props) => props.color};
    font-weight: ${(props) => props.weight ? "bold" : "400"};
    // white-space: nowrap;
  overflow: hidden;
`

export const CloseIcon = styled(X)`

    position: absolute;
    left: 89%;
    top: 10%;
    cursor: pointer;
    color:White;
    z-index: 10;
    white-space: nowrap;
  overflow: hidden;
  z-index: 100000;

  &:hover {

    cursor: pointer;
  }
`

export const Progress = styled.div`

`

export const ProgressBar = styled.div`

    border-radius: 10px;
    // border: 1px solid White;
    animation animate-positive 2s;
    // position: absolute;
    top: 19.6%;
    right: 3.3%;
    margin-top: 91px;
    background: rgb(23,104,219);
    width:  ${(props) => props.active ? "0px" : "350px"};
    height: 3px;
    transition: width 21s ease-in-out;
    
`

export const ProgressValue = styled.div`

    // width: 350px;
    // height: 3px;
    // line-height: 5px;
    // background: black;

    // @-webkit-keyframes animate-positive{

    //     0% {

    //         width: 0;
    //     }
    // }

    // @keyframes animate-positive{

    //     100% {

    //         width: 350px;
    //     }
    // }


`



// function DepositSummary({ info }: { info: ExactInputSwapTransactionInfo | ExactOutputSwapTransactionInfo }) {
//   if (info.tradeType === TradeType.EXACT_INPUT) {
//     return (
//       <Trans>
//         Swap exactly{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.inputCurrencyAmountRaw}
//           currencyId={info.inputCurrencyId}
//           sigFigs={6}
//         />{' '}
//         for{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.expectedOutputCurrencyAmountRaw}
//           currencyId={info.outputCurrencyId}
//           sigFigs={6}
//         />
//       </Trans>
//     )
//   } else {
//     return (
//       <Trans>
//         Swap{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.expectedInputCurrencyAmountRaw}
//           currencyId={info.inputCurrencyId}
//           sigFigs={6}
//         />{' '}
//         for exactly{' '}
//         <FormattedCurrencyAmountManaged
//           rawAmount={info.outputCurrencyAmountRaw}
//           currencyId={info.outputCurrencyId}
//           sigFigs={6}
//         />
//       </Trans>
//     )
//   }
// }

const TransactionNotification = ({deposits, setDeposits, setIsActive, id,}) => {

    const [loadBar, setLoadBar] = useState(false)
    const [display, setDisplay]= useState(false)

    // const {deposits, setDeposits} = usePendingTransactions()
   
    const filteredNotificationArray = deposits.filter((notification, i) => notification.id !== id)

    useEffect(() => {

        const timeoutId = setTimeout(() => {
            setDisplay(true)
            setDeposits(filteredNotificationArray)
        }, 20000)
        
        return () => clearTimeout(timeoutId)
    }, [])

    const click = () => {

        console.log("heyy")
        setDeposits(deposits.filter(notification => id !== notification.id))
    }


    return (

        <>
            <Container display={display}>
                <TransactionPopupContainer active={true}>
                    <CloseIcon strokeWidth={3} onClick={click}/>
                    <IconContainer>
                        <CheckCircle strokeWidth={1.5} size="35" color={"rgb(38,162,91)"} />
                    </IconContainer>
                    <TextContainer>
                        <Text size={"16px"} color={"White"} weight={true}>
                            Deposited Exactly 0.00036 Ren BTC at a price of $100
                        </Text>
                        <Text size={"15px"} color={"rgb(13,94,209)"} weight={true}>
                            View on explorer
                        </Text>
                    </TextContainer>
                    <ProgressBar1 
                                deposits={deposits} 
                                setDeposits={setDeposits}/>
                        

                    {/* <ProgressBar1 active={loadBar}/> */}
                    
                </TransactionPopupContainer>
            </Container>
            </>
           
       
    )
}

export const ProgressBar1 = ({deposits, key, id}) => {

    const [active, setActive] = useState(false)

    console.log(id)
    useEffect(() => {

        setActive(false)
        setTimeout(() => {

            setActive(true)
        }, 100)
    }, [deposits])

    return(

        <Progress>
            <ProgressBar active={active}>
                <ProgressValue>

                </ProgressValue>
            </ProgressBar>
        </Progress>
    )

}

const DepositSummary = ({deposits, setDeposits, setIsActive, showNotifications, setShowNotifications}) => {


    useEffect (() => {
        if(deposits.length > 0) {
            setIsActive(true)
        }
        if(deposits.length == 1) setShowNotifications(false)
    }, [deposits])

    return (

       
            <TransactionPopupWrapper active={deposits.length > 0 ? true : false}>
                        { deposits.length > 0 && deposits.map((item, i) => {

                        console.log(i)
                        if(i > 0){
                        return <div className="objectname">
                            <TransactionNotification 
                                id={item.id}
                                amount={item.amount} 
                                setIsActive={setIsActive}
                                deposits={deposits}
                                setDeposits={setDeposits}/>
                            </div>
                        
                        }})}
            </TransactionPopupWrapper>
    )
}

export default DepositSummary;
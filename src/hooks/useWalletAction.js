import React, { useState, useEffect, useContext } from "react";
import WalletModal from "../components/WalletModal/WalletModal";
import useBalance from "../hooks/useBalance";
import TokenListModal from "../components/TokenListModal/TokenListModal";
import { getContract } from "../utils/utils";
import abi from "../utils/Abis/ABI.json"
import abi2 from "../utils/Abis/AB12.json"
import { useWeb3React } from "@web3-react/core";
import { v4 } from "uuid"
import Web3 from "web3";
import { ConfirmationModal, 
        PendingModal, 
        TransactionSubmittedModal, 
        RejectionModal 
} from "../components/TransactionConfirmationModal/PendingModal";
import { TransactionStateContext } from "../contexts/transactionContext";
import { useNotification } from "../hooks/useNotification";
import EthereumLogo from "../components/assets/eth.png"
import useContract from "../hooks/useContract";
const RenAddress = "0x0A9ADD98C076448CBcFAcf5E457DA12ddbEF4A8f"
const BridgeAddress = "0x4a01392b1c5D62168375474fb66c2b7a90Da9D8B"

export const TRANSACTION_TYPES = {
    APPROVAL: "APPROVAL",
    DEPOSIT: "DEPOSIT",
    WITHDRAWAL: "WITHDRAWAL"
};

export const MODAL_VIEWS = {
    NONE: "NONE",
    CONFIRM: "CONFIRM",
    PENDING: "PENDING",
    SUBMITTED: "SUBMITTED",
    REJECTED: "REJECTED"
};

export const BUTTON_STATES = {
    ENTER_AMOUNT: "ENTER_AMOUNT",
    INSUFFICENT_BALANCE: "INSUFFICENT_BALANCE",
    INSUFFICENT_APPROVAL: "INSUFFICENT_APPROVAL",
    PENDING: "PENDING"
}


const WalletPage = () => {

    const [confirm, setConfirm] = useState(false)
    const [pending1, setPending1] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [rejected, setRejected] = useState(false)
    const [text, setText] = useState("")
    const [showTokenModal, setShowTokenModal] = useState(false)
    const [TransactionType, setTransactionType] = useState("DEPOSIT")
    const [gas, setGas] = useState(0)
    const [transactionBlock, setTransactionBlock] = useState(true)
    const [sufficentApproval, setSufficentApproval] = useState(true)
    const {library, account, chainId } = useWeb3React()


    const { setPending, transactions, setTransactions } = useContext(TransactionStateContext)
    const { balance, setBalance } = useBalance()
    const ren  = useContract(RenAddress, abi2)
    const bridge= useContract(BridgeAddress, abi)
  
   

    const dispatch = useNotification();

    const HandleNewNotification = (title, success) => {
        dispatch({
            type: 'info',
            message: 'view transaction on explorer',
            title: title,
            EthereumLogo,
            position: "topR" || 'topR',
            success: success
        });
    }

    const toggleTokenModal = () => setShowTokenModal(!showTokenModal)
    const handleTransaction = async(contractFunction) => {
        setConfirm(false)
        setPending1(true)
      
        if(text === "") return

        var params
        var amount = Web3.utils.toWei(text.toString(), "Gwei")
        var title

        if(TransactionType === TRANSACTION_TYPES.WITHDRAWAL) {
            params = [account, amount, "BTC"]
            title = `withdrawed Exactly ${amount} Ren BTC at a price of $200`

        } else if (TransactionType === TRANSACTION_TYPES.DEPOSIT) {
            params = [account, BridgeAddress, amount, "BTC"]
            title = `deposited Exactly ${amount} Ren BTC at a price of $200`

        } else {
            params = [BridgeAddress, amount]
            title = `Approved Contract for renBTC`
        }

        try {
            await contractFunction(...params)
            .then((result) => {
                setPending1(false)
                setPending(true)
                setSubmitted(true)
                setTransactionBlock(false)

                result.wait().then((result) => {
                    setPending(false)
                    if (TransactionType === TRANSACTION_TYPES.APPROVAL) {
                        setSufficentApproval(true)
                    }
                    setTransactionBlock(true)

                    const id = v4()
                    setTransactions([
                        ...transactions,
                        {
                            id: id,
                            type: TransactionType,
                            from: account,
                            amount: text,
                            txHash: result.transactionHash,
                            time: 2
                        },
                    ]);

                    HandleNewNotification(title, true)
                    bridge.getContractTokenbalance("BTC")
                    .then((balance) => {
                        balance = Web3.utils.fromWei(balance.toString(), "Gwei")             
                        var bal = Number(balance)
                        bal = bal.toFixed(6)
                        setBalance(bal)
                    });
                })
    
            });

        } catch(error) {
            console.log(error)
            const errorCodes = [4001, -32603]
            setPending1(false)
            setRejected(true)
            setTransactionBlock(true)

            if (!errorCodes.includes(error.code)) {
                if(error === "User denied transaction signature.") return
                title = "Transaction Failed Unexpectedly!"
                HandleNewNotification(title, false)
            } 
        }
    }

    const closeSbmissionModal = () => {
        setSubmitted(false)
        if(TransactionType !== "APPROVAL") {
            setTimeout(() => {
                setText("")
            }, 300)
        }
    }
    
    return { handleTransaction}
}

export default React.memo(WalletPage)

import React, { useEffect } from 'react';
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core"
import { 
    injected, 
    fortmatic, 
    portis, 
    torus, 
    walletconnect 
} from "../connectors/provider";
import { PROVIDERS } from '../constants/wallets';
import { useHistory } from 'react-router-dom';


function useAuth() {

    var { active, account, library, activate, deactivate } = useWeb3React()
    let history = useHistory()


    const disconnect= React.useCallback(() => {
        try {
            deactivate()
            // window.location.href = "/"
            localStorage.removeItem("currentAccount");
            localStorage.removeItem("provider");
        } catch (err) {
            console.error(err)
            // history.push("/")
        }
    }, [deactivate])

//use network pollinhg intervak to warn usr their offline
const connectOnLoad = React.useCallback(() => {
    var provider = localStorage.getItem("provider")
    if ( provider == null) return
    if (provider === PROVIDERS.FORTMATIC) provider = fortmatic
    if (provider === PROVIDERS.INJECTED) provider = injected
    if (provider === PROVIDERS.WALLETCONNECT) return 
    if (provider === PROVIDERS.PORTIS) provider = portis
    if (provider === PROVIDERS.TORUS) provider = torus

    if (provider === injected) {
        activate(provider, undefined, true).catch((error) => {
            if (error instanceof UnsupportedChainIdError) {
                activate(provider) // a little janky...can't use setError because the connector isn't set
              } else {
                disconnect()
                history.push("/")
            } 
        })
    } else {
        setTimeout(async () => {
            activate(provider, undefined, true).catch((error) => {
                if (error instanceof UnsupportedChainIdError) {
                    activate(provider) // a little janky...can't use setError because the connector isn't set
                        // disconnect()
                    history.push("/")
                  } else {
                    disconnect()
                    history.push("/")
                 } 
            })
           
        }, 2000)
    }   
}, [activate, disconnect, history])

    useEffect(() => {
        if(library) localStorage.setItem("currentAccount", account);
        if (!library) {
            connectOnLoad()
    }
    }, [library, connectOnLoad, account])

function connectOn(provider1) {   
    if(active) {
        alert("You must dissconnect first")
        return
    }
    localStorage.setItem("provider", provider1.provider)

    activate(provider1.connector, undefined, true).then(() => {
        console.log("connecting")

        //change to this soon instad of redirect in home.js
        // history.replace("/bridge")
    })
    .catch((error) => {
        if (error instanceof UnsupportedChainIdError) {
            activate(provider1.connector) // a little janky...can't use setError because the connector isn't set
        } else {
            disconnect()
            localStorage.removeItem("provider");
        } 
    })
}


  return { connectOnLoad, disconnect, connectOn}
}

export default useAuth
import React, { useEffect, useState } from "react"
import axios from "axios"
import GetPersonalData from "./GetPersonalData"

function GetPlayer({nickname, realm, urlPlayerList}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (nickname !== undefined) {
            console.log("Retrieving Player List")
            axios.get("playerList.json").then(response => {
                setData(response.data)
            })
        }
    }, [nickname, urlPlayerList]); // [] prevents looping: https://stackoverflow.com/questions/67750003/useeffect-infinite-loop-with-axios

    if (nickname !== undefined && data !== null) {
        var match = false

        if (data.status === "error") {
            return (
                <div id="error">
                    <h4>Status: <span id="errorStatus">{data.status}</span></h4>
                    <h4>Code: <span id="errorCode">{data.error.code}</span></h4>
                    <h4>Message: <span id="errorMessage">{data.error.message}</span></h4>
                    <h4>Field: <span id="errorField">{data.error.field}</span></h4>
                    <h4>Value: <span id="errorValue">{data.error.value}</span></h4>
                    <p>You may need to update the IP Address List on the WarGaming Developer site</p>
                </div>
            )
        }

        if (data.meta.count !== 0) {
            for (var i = 0; i < data.meta.count; i++) {
                if (nickname === data.data[i].nickname) {
                    match = true
                    return (
                        <GetPersonalData nickname={data.data[i].nickname} id={data.data[i].account_id} realm={realm} />
                    )
                }

                else {
                    match = false;
                }
            }
        }

        if (match === false) {
            console.log("User does not Exists!") // Duplication error due to nature of React / way the code is structured?
            
            return (
                <div id="noPlayer">
                    <p>User does not Exists!</p>
                </div>
            )
        }
    }
}

export default GetPlayer
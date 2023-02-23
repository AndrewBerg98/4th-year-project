import React, { useEffect, useState } from "react"
import axios from "axios"
import GetPersonalData from "./GetPersonalData"
import "./styles/GetPlayer.css"

function GetPlayer({nickname, realm, urlPlayerList, source}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (nickname !== undefined) {
            console.log("Fetching Player List")

            if (source === "local") {
                console.log("Collecting Data From LOCAL SOURCE")
                axios.get("playerList.json").then(response => {
                    setData(response.data)
                })
            }

            else if (source === "api") {
                console.log("Collecting Data From API")
                axios.get(urlPlayerList).then(response => {
                    setData(response.data)
                })
            }

            else (
                console.log("DATA SOURCE Not Specified")
            )
        }
    }, [nickname, urlPlayerList, source])

    function ToggleIP() {
        if (document.getElementById("errorValueActual").style.display === "none") {
            document.getElementById("errorValue").style.display = "none"
            document.getElementById("errorValueActual").style.display = "inline-block"
        }

        else if (document.getElementById("errorValueActual").style.display !== "none") {
            document.getElementById("errorValue").style.display = "inline-block"
            document.getElementById("errorValueActual").style.display = "none"
        }
    }

    if (nickname !== undefined && data !== null) {
        var match = false

        if (data.status === "error") {
            return (
                <div id="error">
                    <h4>Status: <span id="errorStatus">{data.status}</span></h4>
                    <h4>Code: <span id="errorCode">{data.error.code}</span></h4>
                    <h4>Message: <span id="errorMessage">{data.error.message}</span></h4>
                    <h4>Field: <span id="errorField">{data.error.field}</span></h4>
                    <h4>Value: <span id="errorValue" onClick={() => ToggleIP()} style={{display: "inline-block"}}><i>Hover to Show Your IP</i></span><span id="errorValueActual" onClick={() => ToggleIP()} style={{display: "none"}}>{data.error.value}</span>
                    </h4>
                    <p>You may need to update the IP Address List on the WarGaming Developer site:</p>
                    <a href="https://developers.wargaming.net/applications/" target="_blank" rel="noopener noreferrer">https://developers.wargaming.net/applications/</a>
                </div>
            )
        }

        if (source === "local") {
            for (var n = 0; n < data.data.length; n++) {
                if (nickname === data.data[n].nickname && match === false) {
                    match = true
                }
            }
        }

        if (source === "api") {
            if (data.data.length !== 0) {
                if (nickname === data.data[0].nickname) {
                    match = true
                }
            }

            else {
                match = false
            }
        }

        if (data.meta.count !== 0 && match === true) {
            for (var i = 0; i < data.meta.count; i++) {
                if (nickname === data.data[i].nickname && match === true) {
                    return (
                        <GetPersonalData nickname={data.data[i].nickname} id={data.data[i].account_id} realm={realm} source={source} />
                    )
                }
            }
        }

        else if (match === false) {
            return (
                <div id="noPlayer">
                    <p>{nickname} does not Exists!</p>
                </div>
            )
        }
    }
}

export default GetPlayer
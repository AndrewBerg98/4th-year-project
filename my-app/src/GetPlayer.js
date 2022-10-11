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
        var match = false;

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
            alert("User does not Exists!");
            
            return (
                <div id="noPlayer">
                    <p>User does not Exists!</p>
                </div>
            )
        }
    }
}

export default GetPlayer
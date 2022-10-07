import React, { useEffect, useState } from "react";
import axios from "axios";

/*

    BUG LIST:

    1. Component renders -> "nickname" is submitted -> Axios API request runs -> API data does NOT return -> component re-runs again but only returns data problem, nothing else.
       Not really a big issue as the API only runs once, I think?, but is it inefficent to go back to render properly? or is this intended?

*/

function GetPlayer({nickname, url}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        if (nickname !== undefined) {
            console.log("Running AXIOS")
            axios.get("playerList.json").then(response => {
                setData(response.data)
            })
        }
    }, [nickname, url]); // [] prevents looping: https://stackoverflow.com/questions/67750003/useeffect-infinite-loop-with-axios

    if (nickname !== undefined && data !== null) {
        console.log("Returning Data")

        if (data.meta.count === 0) {
            return (
                <div id="NoPlayer">
                    <p>User Does Not Exists!</p>
                </div>
            )
        }

        return (
            <div id="GetPlayer">
                <p>Status: {data.status}</p>
                <p>Nickname: {data.data[0].nickname}</p>
                <p>Account ID: {data.data[0].account_id}</p>
            </div>
        )
    }
}

export default GetPlayer;
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
        var match = false;

        if (data.meta.count !== 0) {
            for (var i = 0; i < data.meta.count; i++) {
                if (nickname === data.data[i].nickname) {
                    match = true;
                    return (
                        <div id="GetPlayer">
                            <p>Nickname: {data.data[i].nickname}</p>
                            <p>Account ID: {data.data[i].account_id}</p>
                        </div>
                    )
                }

                else {
                    match = false;
                }
            }
        }

        if (match === false) {
            return (
                <div id="NoPlayer">
                    <p>User does not exists!</p>
                </div>
            )
        }
    }
}

export default GetPlayer;
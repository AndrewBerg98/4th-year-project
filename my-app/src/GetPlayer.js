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
                        <div id="playerAccount">
                            { /* Resolved <tr> cannot be child of <table>: https://stackoverflow.com/questions/61498491/how-to-fix-validatedomnesting-td-cannot-appear-as-a-child-of-tbody-an */ }
                            <table id="getPlayer">
                                <thead>
                                    <tr>
                                        <th colSpan="2">
                                            Account
                                        </th>
                                    </tr>
                                    <tr>
                                        <td id="tableLeft">
                                            <table>
                                                <thead>
                                                    <tr><td>Nickname</td></tr>
                                                    <tr><td>Account ID</td></tr>
                                                </thead>
                                            </table>
                                        </td>
                                        <td id="tableRight">
                                            <table>
                                                <thead>
                                                    <tr><td>{data.data[i].nickname}</td></tr>
                                                    <tr><td>{data.data[i].account_id}</td></tr>
                                                </thead>
                                            </table>
                                        </td>
                                    </tr>
                                </thead>
                                <GetPersonalData nickname={data.data[i].nickname} id={data.data[i].account_id} realm={realm} />
                            </table>
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
                <div id="noPlayer">
                    <p>User does not exists!</p>
                </div>
            )
        }
    }
}

export default GetPlayer
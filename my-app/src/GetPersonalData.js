import { useEffect, useState } from "react"
import axios from "axios"

function GetPersonalData({nickname, id, realm}) {
    const extra = "&extra="
    // eslint-disable-next-line
    const and = "%2C+"
    const statRandom = "statistics.random"
    const urlGetPersonalData = "https://api.worldoftanks." + realm + "/wot/account/info/?application_id=f1dd0d3153a024d45038753a127d9106&account_id=" + id + extra + statRandom
    const [data, setData] = useState(null)

    // Show date in text format: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    function hideAccountDetails() {
        if (document.getElementById("content").style.display === "none") {
            document.getElementById("content").style.display = "block"
        }

        else {
            document.getElementById("content").style.display = "none"
        }
    }

    useEffect(() => {
        if(id !== undefined) {
            console.log("Retrieving Player's Personal Data")
            axios.get("playerPersonalData.json").then(response => {
                setData(response.data)
            })
        }
    }, [id, realm, urlGetPersonalData])

    if (id !== undefined && data !== null) {
        var match = false

        if (data.meta.count !== 0) {
            for (var i = 0; i < 1; i++) {
                if (id === data.data[id].account_id && match === false) { // Helped with getting nested data within JSON that starts with numbers: https://stackoverflow.com/questions/28149462/how-to-print-json-data-in-console-log
                    match = true
                    console.log(nickname + "'s", "Personal Data: ", data.data[id])

                    return (
                        <div id="playerAccount">
                            { /* Resolved <tr> cannot be child of <table>: https://stackoverflow.com/questions/61498491/how-to-fix-validatedomnesting-td-cannot-appear-as-a-child-of-tbody-an */ }
                            <table id="getPlayerTable">
                                <thead id="getPersonalData">
                                    <tr id="title">
                                        <th colSpan="2">
                                            <button onClick={hideAccountDetails}>Account Details</button>
                                        </th>
                                    </tr>
                                    <tr id="content">
                                        <td id="tableLeft">
                                            <table>
                                                <thead>
                                                    <tr id="nickName"><td>Nickname</td></tr>
                                                    <tr id="accountID"><td>Account ID</td></tr>
                                                    <tr id="lastBattle"><td>Last Battle</td></tr>
                                                    <tr id="logoutAt"><td>Logout At</td></tr>
                                                    <tr id="createdAt"><td>Created At</td></tr>
                                                    <tr id="updatedAt"><td>Updated At</td></tr>
                                                    <tr id="globalRating"><td>Global Rating</td></tr>
                                                    <tr id="clanID"><td>Clan ID</td></tr>
                                                </thead>
                                            </table>
                                        </td>
                                        <td id="tableRight">
                                            <table>
                                                <thead>
                                                    <tr id="nickNameValue">
                                                        <td><p>{data.data[id].nickname}</p></td>
                                                    </tr>
                                                    <tr id="accountIDValue">
                                                        <td><p>{data.data[id].account_id}</p></td>
                                                    </tr>
                                                    <tr id="lastBattleValue">
                                                        <td>
                                                            <p>{new Date(data.data[id].last_battle_time * 1000).toLocaleString("en-IE", dateOptions)}</p>
                                                            <p>{new Date(data.data[id].last_battle_time * 1000).toLocaleTimeString("en-IE")}</p>
                                                        </td>
                                                    </tr>
                                                    <tr id="logoutAtValue">
                                                        <td>
                                                            <p>{new Date(data.data[id].logout_at * 1000).toLocaleString("en-IE", dateOptions)}</p>
                                                            <p>{new Date(data.data[id].logout_at * 1000).toLocaleTimeString("en-IE")}</p>
                                                        </td>
                                                    </tr>
                                                    <tr id="createdAtValue">
                                                        <td>
                                                            <p>{new Date(data.data[id].created_at * 1000).toLocaleString("en-IE", dateOptions)}</p>
                                                            <p>{new Date(data.data[id].created_at * 1000).toLocaleTimeString("en-IE")}</p>
                                                        </td>
                                                    </tr>
                                                    <tr id="updatedAtValue">
                                                        <td>
                                                            <p>{new Date(data.data[id].updated_at * 1000).toLocaleString("en-IE", dateOptions)}</p>
                                                            <p>{new Date(data.data[id].updated_at * 1000).toLocaleTimeString("en-IE")}</p>
                                                        </td>
                                                    </tr>
                                                    <tr id="globalRatingValue">
                                                        <td><p>{data.data[id].global_rating}</p></td>
                                                    </tr>
                                                    <tr id="clanIDValue">
                                                        {/* Showed how to add expressions between tags: https://github.com/AOEpeople/geb-spock-reports/issues/9 */}
                                                        <td><p>{data.data[id].clan_id === null ? "X" : data.data[id].clan_id}</p></td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </td>
                                    </tr>
                                </thead>
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
            console.log("No Personal Data Exists for that User")
        }
    }
}

export default GetPersonalData
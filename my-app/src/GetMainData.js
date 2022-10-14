import "./Styles/GetMainData.css"

function GetMainData({data, id, dateOptions}) {
    function hideAccountDetails() {
        if (document.getElementById("mainContent").style.display === "none") {
            document.getElementById("mainContent").style.display = "contents"
        }

        else {
            document.getElementById("mainContent").style.display = "none"
        }
    }

    return (
        /* Resolved <tr> cannot be child of <table>: https://stackoverflow.com/questions/61498491/how-to-fix-validatedomnesting-td-cannot-appear-as-a-child-of-tbody-an */
        <table id="mainDataTable">
            <thead>
                <tr id="mainTitle">
                    <th colSpan="2">
                        <button onClick={hideAccountDetails}>Account Details</button>
                    </th>
                </tr>
                <tr id="mainContent">
                    <td id="mainSectionLeft">
                        <table>
                            <thead>
                                <tr id="nickName"><td>Nickname</td></tr>
                                <tr id="accountID"><td>Account ID</td></tr>
                                <tr id="lastBattle"><td>Last Battle</td></tr>
                                <tr id="logoutAt"><td>Logged Out</td></tr>
                                <tr id="createdAt"><td>Registration Date</td></tr>
                                <tr id="updatedAt"><td>Profile Updated</td></tr>
                                <tr id="globalRating"><td>Global Rating</td></tr>
                                <tr id="clanID"><td>Clan ID</td></tr>
                            </thead>
                        </table>
                    </td>
                    <td id="mainSectionRight">
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
                                        <p>{new Date(data.data[id].last_battle_time * 1000).toLocaleString("en-IE", dateOptions)}<br/>
                                        {new Date(data.data[id].last_battle_time * 1000).toLocaleTimeString("en-IE")}</p>
                                    </td>
                                </tr>
                                <tr id="logoutAtValue">
                                    <td>
                                        <p>{new Date(data.data[id].logout_at * 1000).toLocaleString("en-IE", dateOptions)}<br/>
                                        {new Date(data.data[id].logout_at * 1000).toLocaleTimeString("en-IE")}</p>
                                    </td>
                                </tr>
                                <tr id="createdAtValue">
                                    <td>
                                        <p>{new Date(data.data[id].created_at * 1000).toLocaleString("en-IE", dateOptions)}<br/>
                                        {new Date(data.data[id].created_at * 1000).toLocaleTimeString("en-IE")}</p>
                                    </td>
                                </tr>
                                <tr id="updatedAtValue">
                                    <td>
                                        <p>{new Date(data.data[id].updated_at * 1000).toLocaleString("en-IE", dateOptions)}<br/>
                                        {new Date(data.data[id].updated_at * 1000).toLocaleTimeString("en-IE")}</p>
                                    </td>
                                </tr>
                                <tr id="globalRatingValue">
                                    <td><p>{data.data[id].global_rating}</p></td>
                                </tr>
                                <tr id="clanIDValue">
                                    {/* Showed how to add expressions between tags: https://github.com/AOEpeople/geb-spock-reports/issues/9 */}
                                    <td><p>{data.data[id].clan_id === null ? <i>NaN</i> : data.data[id].clan_id}</p></td>
                                </tr>
                            </thead>
                        </table>
                    </td>
                </tr>
            </thead>
        </table>
    )
}

export default GetMainData
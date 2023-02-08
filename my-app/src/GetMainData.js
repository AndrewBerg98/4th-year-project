import "./styles/GetMainData.css"

function GetMainData({personalData, id, dateOptions}) {
    function toggleMainDetails() {
        if (document.getElementById("mainRows").style.display === "none") {
            document.getElementById("mainRows").style.display = "contents"
        }

        else {
            document.getElementById("mainRows").style.display = "none"
        }
    }

    return (
        <table id="mainDataTable">
            <thead>
                <tr id="mainDataTableTitle">
                    <th colSpan="2">
                        <button onClick={toggleMainDetails}>Account Details</button>
                    </th>
                </tr>
            </thead>

            <tbody id="mainRows">
                <tr id="mainRow"><td>Nickname</td><td>{personalData.data[id].nickname}</td></tr>
                <tr id="mainRow"><td>Account ID</td><td>{personalData.data[id].account_id}</td></tr>
                <tr id="mainRow"><td>Last Battle</td><td>{new Date(personalData.data[id].last_battle_time * 1000).toLocaleString("en-IE", dateOptions)} <br/> {new Date(personalData.data[id].last_battle_time * 1000).toLocaleTimeString("en-IE")}</td></tr>
                <tr id="mainRow"><td>Logged Out</td><td>{new Date(personalData.data[id].logout_at * 1000).toLocaleString("en-IE", dateOptions)} <br/> {new Date(personalData.data[id].logout_at * 1000).toLocaleTimeString("en-IE")}</td></tr>
                <tr id="mainRow"><td>Registration Date</td><td>{new Date(personalData.data[id].created_at * 1000).toLocaleString("en-IE", dateOptions)} <br/> {new Date(personalData.data[id].created_at * 1000).toLocaleTimeString("en-IE")}</td></tr>
                <tr id="mainRow"><td>Last Profile Update</td><td>{new Date(personalData.data[id].updated_at * 1000).toLocaleString("en-IE", dateOptions)} <br/> {new Date(personalData.data[id].updated_at * 1000).toLocaleTimeString("en-IE")}</td></tr>
                <tr id="mainRow"><td>Global Rating</td><td>{personalData.data[id].global_rating}</td></tr>
                <tr id="mainRow"><td>Clas ID</td><td>{personalData.data[id].clan_id === null ? <i>NaN</i> : personalData.data[id].clan_id}</td></tr>
            </tbody>
        </table>
    )
}

export default GetMainData
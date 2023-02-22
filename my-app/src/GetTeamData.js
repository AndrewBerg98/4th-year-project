import "./styles/GetTeamData.css"

function GetTeamData({personalData, id, dateOptions}) {
    function toggleTeamDetails() {
        if (document.getElementById("teamRows").style.display === "none") {
            document.getElementById("teamRows").style.display = "contents"
        }

        else {
            document.getElementById("teamRows").style.display = "none"
        }
    }

    return (
        <table id="teamDataTable">
            <thead>
                <tr id="teamDataTableTitle">
                    <th colSpan="2">
                        <button onClick={toggleTeamDetails}>Team Battles</button>
                    </th>
                </tr>
            </thead>

            <tbody id="teamRows">
                <tr id="teamRows"><td></td><td></td></tr>
            </tbody>
        </table>
)
}

export default GetTeamData
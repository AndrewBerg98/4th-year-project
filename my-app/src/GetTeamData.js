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

    function toggleDamageDealingData() {
        for (var i = 0; i < document.getElementsByClassName("damageDealingsRow").length; i++) {
            if (document.getElementsByClassName("damageDealingsRow")[i].style.display !== "none") {
                document.getElementsByClassName("damageDealingsRow")[i].style.display = "none"
            }

            else {
                document.getElementsByClassName("damageDealingsRow")[i].style.display = "table-row"
            }
        }
    }

    var teamDataStats = personalData.data[id].statistics.team

    return (
        <table id="teamDataTable">
            <thead>
                <tr id="teamDataTableTitle">
                    <th colSpan="2">
                        <button onClick={toggleTeamDetails}>Team Battles</button>
                    </th>
                </tr>
            </thead>

            <tbody id="damagedealings">
                <tr><th colSpan="2"><button onClick={toggleDamageDealingData}>Damage Dealing Related</button></th></tr>
                <tr className="damageDealingsRow"><td>Explosion Hits</td><td>{Number(teamDataStats.explosion_hits).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Penetrations</td><td>{Number(teamDataStats.piercings).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Accuracy</td><td>{Number(teamDataStats.hits_percents).toLocaleString() + "%"}</td></tr>
                <tr className="damageDealingsRow"><td>Avg. Damage Assisted</td><td>{Number(teamDataStats.avg_damage_assisted).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Avg. Damage Assisted - Tracking</td><td>{Number(teamDataStats.avg_damage_assisted_track).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Frags</td><td>{Number(teamDataStats.frags).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Stuns</td><td>{Number(teamDataStats.stun_number).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Hits</td><td>{Number(teamDataStats.hits).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Damage Dealt</td><td>{Number(teamDataStats.damage_dealt).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Shots</td><td>{Number(teamDataStats.shots).toLocaleString()}</td></tr>
            </tbody>
        </table>
)
}

export default GetTeamData
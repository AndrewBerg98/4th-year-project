import "./styles/GetRandomData.css"

/*

    NOT IN USE ANYMORE!!!

*/

function GetRandomData({personalData, id}) {
    function toggleRandomDetails() {
        if (document.getElementById("damagedealings").style.display === "none") {
            document.getElementById("damagedealings").style.display = "table-row-group"
            document.getElementById("damagereceivings").style.display = "table-row-group"
            document.getElementById("spottingandassistance").style.display = "table-row-group"
            document.getElementById("baseactivities").style.display = "table-row-group"
            document.getElementById("misc").style.display = "table-row-group"
        }

        else {
            document.getElementById("damagedealings").style.display = "none"
            document.getElementById("damagereceivings").style.display = "none"
            document.getElementById("spottingandassistance").style.display = "none"
            document.getElementById("baseactivities").style.display = "none"
            document.getElementById("misc").style.display = "none"
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

    function toggleDamageReceivingData() {
        for (var i = 0; i < document.getElementsByClassName("damageReceivingsRow").length; i++) {
            if (document.getElementsByClassName("damageReceivingsRow")[i].style.display !== "none") {
                document.getElementsByClassName("damageReceivingsRow")[i].style.display = "none"
            }

            else {
                document.getElementsByClassName("damageReceivingsRow")[i].style.display = "table-row"
            }
        }
    }

    function toggleSpottingAndAssistanceData() {
        for (var i = 0; i < document.getElementsByClassName("spotAndAssist").length; i++) {
            if (document.getElementsByClassName("spotAndAssist")[i].style.display !== "none") {
                document.getElementsByClassName("spotAndAssist")[i].style.display = "none"
            }

            else {
                document.getElementsByClassName("spotAndAssist")[i].style.display = "table-row"
            }
        }
    }

    function toggleBaseActivitiesData() {
        for (var i = 0; i < document.getElementsByClassName("baseActivities").length; i++) {
            if (document.getElementsByClassName("baseActivities")[i].style.display !== "none") {
                document.getElementsByClassName("baseActivities")[i].style.display = "none"
            }

            else {
                document.getElementsByClassName("baseActivities")[i].style.display = "table-row"
            }
        }
    }

    function toggleMiscData() {
        for (var i = 0; i < document.getElementsByClassName("miscRow").length; i++) {
            if (document.getElementsByClassName("miscRow")[i].style.display !== "none") {
                document.getElementsByClassName("miscRow")[i].style.display = "none"
            }

            else {
                document.getElementsByClassName("miscRow")[i].style.display = "table-row"
            }
        }
    }

    var randomDataStats = personalData.data[id].statistics.random

    return (
        <table id="randomDataTable">
            <thead>
                <tr id="randomDataTableTitle">
                    <th colSpan="2">
                        <button onClick={toggleRandomDetails}>Random Battles</button>
                    </th>
                </tr>
            </thead>
        
            <tbody id="damagedealings">
                <tr><th colSpan="2"><button onClick={toggleDamageDealingData}>Damage Dealing Related</button></th></tr>
                <tr className="damageDealingsRow"><td>Explosion Hits</td><td>{Number(randomDataStats.explosion_hits).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Penetrations</td><td>{Number(randomDataStats.piercings).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Accuracy</td><td>{Number(randomDataStats.hits_percents).toLocaleString() + "%"}</td></tr>
                <tr className="damageDealingsRow"><td>Avg. Damage Assisted</td><td>{Number(randomDataStats.avg_damage_assisted).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Avg. Damage Assisted - Tracking</td><td>{Number(randomDataStats.avg_damage_assisted_track).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Frags</td><td>{Number(randomDataStats.frags).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Stuns</td><td>{Number(randomDataStats.stun_number).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Hits</td><td>{Number(randomDataStats.hits).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Damage Dealt</td><td>{Number(randomDataStats.damage_dealt).toLocaleString()}</td></tr>
                <tr className="damageDealingsRow"><td>Shots</td><td>{Number(randomDataStats.shots).toLocaleString()}</td></tr>
            </tbody>

            <tbody id="damagereceivings">
                <tr><th colSpan="2"><button onClick={toggleDamageReceivingData}>Damage Receiving Related</button></th></tr>
                <tr className="damageReceivingsRow"><td>Avg. Damage Blocked</td><td>{Number(randomDataStats.avg_damage_blocked).toLocaleString()}</td></tr>
                <tr className="damageReceivingsRow"><td>Direct Hits Received</td><td>{Number(randomDataStats.direct_hits_received).toLocaleString()}</td></tr>
                <tr className="damageReceivingsRow"><td>Penetrations Received</td><td>{Number(randomDataStats.piercings_received).toLocaleString()}</td></tr>
                <tr className="damageReceivingsRow"><td>Damage Received</td><td>{Number(randomDataStats.damage_received).toLocaleString()}</td></tr>
                <tr className="damageReceivingsRow"><td>Non-Damagings Received</td><td>{Number(randomDataStats.no_damage_direct_hits_received).toLocaleString()}</td></tr>
                <tr className="damageReceivingsRow"><td>Explosion Hits Received</td><td>{Number(randomDataStats.explosion_hits_received).toLocaleString()}</td></tr>
                <tr className="damageReceivingsRow"><td>Tanking Factor</td><td>{Number(randomDataStats.tanking_factor).toLocaleString()}</td></tr>
            </tbody>

            <tbody id="spottingandassistance">
                <tr><th colSpan="2"><button onClick={toggleSpottingAndAssistanceData}>Spotting or Assistance</button></th></tr>
                <tr className="spotAndAssist"><td>Spotted</td><td>{Number(randomDataStats.spotted).toLocaleString()}</td></tr>
                <tr className="spotAndAssist"><td>Avg. Damage Assisted - Radio</td><td>{Number(randomDataStats.avg_damage_assisted_radio).toLocaleString()}</td></tr>
                <tr className="spotAndAssist"><td>Stun Assisted Damage</td><td>{Number(randomDataStats.stun_assisted_damage).toLocaleString()}</td></tr>
            </tbody>

            <tbody id="baseactivities">
                <tr><th colSpan="2"><button onClick={toggleBaseActivitiesData}>Base Activities</button></th></tr>
                <tr className="baseActivities"><td>Dropped Capture Points</td><td>{Number(randomDataStats.dropped_capture_points).toLocaleString()}</td></tr>
                <tr className="baseActivities"><td>Capture Points</td><td>{Number(randomDataStats.capture_points).toLocaleString()}</td></tr>
            </tbody>

            <tbody id="misc">
                <tr><th colSpan="2"><button onClick={toggleMiscData}>Others</button></th></tr>
                <tr className="miscRow"><td>Stunning Vehicles Driven</td><td>{Number(randomDataStats.battles_on_stunning_vehicles).toLocaleString()}</td></tr>
                <tr className="miscRow"><td>Experience</td><td>{Number(randomDataStats.xp).toLocaleString()}</td></tr>
                <tr className="miscRow"><td>Battles Survived</td><td>{Number(randomDataStats.survived_battles).toLocaleString()}</td></tr>
                <tr className="miscRow"><td>Draws</td><td>{Number(randomDataStats.draws).toLocaleString()}</td></tr>
                <tr className="miscRow"><td>Battles</td><td>{Number(randomDataStats.battles).toLocaleString()}</td></tr>
                <tr className="miscRow"><td>Battle Avg. Exp</td><td>{Number(randomDataStats.battle_avg_xp).toLocaleString()}</td></tr>
                <tr className="miscRow"><td>Wins</td><td>{Number(randomDataStats.wins).toLocaleString()}</td></tr>
                <tr className="miscRow"><td>Losses</td><td>{Number(randomDataStats.losses).toLocaleString()}</td></tr>
            </tbody>
        </table>
    )
}

export default GetRandomData
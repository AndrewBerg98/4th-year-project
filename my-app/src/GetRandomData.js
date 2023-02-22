import "./styles/GetRandomData.css"

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

    // for (var w = 0; w < document.getElementsByClassName("ratingWRValue").length; w++) {
    //     console.log("SEC 1")
    //     var ratingWRValue = Number(document.getElementsByClassName("ratingWRValue")[w].innerHTML.replace("%", ''))

    //     // Very Bad
    //     if (ratingWRValue < 46) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(147, 13, 13)"
    //     }

    //     // Bad
    //     else if (ratingWRValue === 46) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(205, 51, 51)"
    //     }

    //     // Below Average
    //     else if (ratingWRValue === 47) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(204, 122, 0)"
    //     }

    //     // Average
    //     else if (ratingWRValue >= 48 && ratingWRValue <= 49) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(204, 184, 0)"
    //     }

    //     // Above Average
    //     else if (ratingWRValue >= 50 && ratingWRValue <= 51) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(132, 155, 36)"
    //     }

    //     // Good
    //     else if (ratingWRValue >= 52 && ratingWRValue <= 53) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(77, 115, 38)"
    //     }

    //     // Very Good
    //     else if (ratingWRValue >= 54 && ratingWRValue <= 55) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(64, 153, 191)"
    //     }

    //     // Great
    //     else if (ratingWRValue >= 56 && ratingWRValue <= 59) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(57, 114, 198)"
    //     }

    //     // Unicum
    //     else if (ratingWRValue >= 60 && ratingWRValue <= 64) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(121, 61, 182)"
    //     }

    //     // Super Unicum
    //     else if (ratingWRValue >= 65) {
    //         document.getElementsByClassName("ratingWRColor")[w].style.backgroundColor = "rgb(64, 16, 112)"
    //     }

    //     else {
    //         console.log("NaN")
    //     }
        
    //     // {
    //         // var ratingWN8Value = document.getElementsByClassName("wn8rating")[0].innerHTML.replace(",", '')
    //         // var ratingWN8Color = document.getElementsByClassName("wn8rating")[0].style.backgroundColor

    //     //     // Very Bad
    //     //     if (ratingValue < 300) {
    //     //         ratingColor = "rgb(147, 13, 13)"
    //     //     }

    //     //     // Bad
    //     //     else if (ratingValue >= 300 && ratingValue <= 449 ) {
    //     //         ratingColor = "rgb(205, 51, 51)"
    //     //     }

    //     //     // Below Average
    //     //     else if (ratingValue >= 450 && ratingValue <= 649 ) {
    //     //         ratingColor = "rgb(204, 122, 0)"
    //     //     }

    //     //     // Average
    //     //     else if (ratingValue >= 650 && ratingValue <= 899 ) {
    //     //         ratingColor = "rgb(204, 184, 0)"
    //     //     }

    //     //     // Above Average
    //     //     else if (ratingValue >= 900 && ratingValue <= 1199 ) {
    //     //         ratingColor = "rgb(132, 155, 36)"
    //     //     }

    //     //     // Good
    //     //     else if (ratingValue >= 1200 && ratingValue <= 1599 ) {
    //     //         ratingColor = "rgb(77, 115, 38)"
    //     //     }

    //     //     // Very Good
    //     //     else if (ratingValue >= 1600 && ratingValue <= 1999 ) {
    //     //         ratingColor = "rgb(64, 153, 191)"
    //     //     }

    //     //     // Great
    //     //     else if (ratingValue >= 2000 && ratingValue <= 2449 ) {
    //     //         ratingColor = "rgb(57, 114, 198)"
    //     //     }

    //     //     // Unicum
    //     //     else if (ratingValue >= 2450 && ratingValue <= 2899 ) {
    //     //         ratingColor = "rgb(121, 61, 182)"
    //     //     }

    //     //     // Super Unicum
    //     //     else if (ratingValue >= 2900) {
    //     //         ratingColor = "rgb(64, 16, 112)"
    //     //     }
    //     // }
    // }

    var randomDataStats = personalData.data[id].statistics.random;

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
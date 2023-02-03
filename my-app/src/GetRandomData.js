import "./styles/GetRandomData.css"

function GetRandomData({data, id}) {
    function toggleRandomDetails() {
        if (document.getElementById("randomRows").style.display === "none") {
            document.getElementById("randomRows").style.display = "table-row-group"
        }

        else {
            document.getElementById("randomRows").style.display = "none"
        }
    }

    var randomDataStats = data.data[id].statistics.random;

    return (
        <table id="randomDataTable">
            <thead>
                <tr id="randomDataTableTitle">
                    <th colSpan="2">
                        <button onClick={toggleRandomDetails}>Random Battle</button>
                    </th>
                </tr>
            </thead>

            <tbody id="randomRows">
                <tr id="randomRow"><td>Battles</td><td>{Number(randomDataStats.battles).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Wins</td><td>{Number(randomDataStats.wins).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Losses</td><td>{Number(randomDataStats.losses).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Draws</td><td>{Number(randomDataStats.draws).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Battles Survived</td><td>{Number(randomDataStats.survived_battles).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Total Experience</td><td>{Number(randomDataStats.xp).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Average Experience</td><td>{Number(randomDataStats.battle_avg_xp).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Frags</td><td>{Number(randomDataStats.frags).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Hits</td><td>{Number(randomDataStats.hits).toLocaleString()}</td></tr>
                <tr id="randomRow"><td>Accuracy</td><td>{Number(randomDataStats.hits_percents).toLocaleString() + "%"}</td></tr>
            </tbody>
        </table>
    )
}

export default GetRandomData
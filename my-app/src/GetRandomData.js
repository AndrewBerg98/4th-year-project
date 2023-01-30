import "./styles/GetRandomData.css"

function GetRandomData({data, id}) {
    function toggleRandomDetails() {
        if (document.getElementById("randomContent").style.display === "none") {
            document.getElementById("randomContent").style.display = "contents"
        }

        else {
            document.getElementById("randomContent").style.display = "none"
        }
    }

    // function toggleRandomBattle_Battles() {
    //     for (var i = 0; i < document.getElementsByClassName("randomBattle_Battles").length; i++) {
    //         if (document.getElementsByClassName("randomBattle_Battles")[i].style.display === "none") {
    //             document.getElementsByClassName("randomBattle_Battles")[i].style.display = "table-row"
    //         }
    
    //         else {
    //             document.getElementsByClassName("randomBattle_Battles")[i].style.display = "none"
    //         }
    //     }
    // }

    var item = data.data[id].statistics.random;

    return (
        <table id="randomDataTable">
            <thead>
                <tr id="randomTitle">
                    <th colSpan="2"><button onClick={toggleRandomDetails}>Random Battle</button></th>
                </tr>
                <tr id="randomContent">
                    <td id="randomSectionLeft">
                        <table>
                            <thead>
                                <tr id="battles" className="randomBattle_Battles"><td>Battles</td></tr>
                                <tr id="wins" className="randomBattle_Battles"><td>Wins</td></tr>
                                <tr id="losses" className="randomBattle_Battles"><td>Losses</td></tr>
                                <tr id="draws" className="randomBattle_Battles"><td>Draws</td></tr>
                                <tr id="survivedBattles" className="randomBattle_Battles"><td>Battles Survived</td></tr>

                                <tr id="xp"><td>Total Exp.</td></tr>
                                <tr id="avgBattleXP"><td>Average Exp.</td></tr>

                                <tr id="frags"><td>Frags</td></tr>
                                <tr id="hits"><td>Hits</td></tr>
                                <tr id="hitsPercentage"><td>Accuracy</td></tr>
                            </thead>
                        </table>
                    </td>

                    <td id="randomSectionRight">
                        <table>
                            <thead>
                                <tr id="battlesValue" className="randomBattle_Battles"><td>{Number(item.battles).toLocaleString()}</td></tr>
                                <tr id="winsValue" className="randomBattle_Battles"><td>{Number(item.wins).toLocaleString()}</td></tr>
                                <tr id="lossesValue" className="randomBattle_Battles"><td>{Number(item.losses).toLocaleString()}</td></tr>
                                <tr id="drawsValue" className="randomBattle_Battles"><td>{Number(item.draws).toLocaleString()}</td></tr>    
                                <tr id="survivedBattlesValue" className="randomBattle_Battles"><td>{item.draws}</td></tr>

                                <tr id="xpValue"><td>{Number(item.xp).toLocaleString()}</td></tr>
                                <tr id="avgBattleXPValue"><td>{Number(item.battle_avg_xp).toLocaleString()}</td></tr>

                                <tr id="fragsValue"><td>{Number(item.frags).toLocaleString()}</td></tr>
                                <tr id="hitsValue"><td>{Number(item.hits).toLocaleString()}</td></tr>
                                <tr id="hitsPercentageValue"><td>{item.hits_percents + "%"}</td></tr>
                            </thead>
                        </table>
                    </td>
                </tr>
            </thead>
        </table>
    )
}

export default GetRandomData
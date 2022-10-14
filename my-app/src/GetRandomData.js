import "./Styles/GetRandomData.css"

function GetRandomData({data, id}) {
    function hideRandomDetails() {
        if (document.getElementById("randomContent").style.display === "none") {
            document.getElementById("randomContent").style.display = "contents"
        }

        else {
            document.getElementById("randomContent").style.display = "none"
        }
    }

    return (
        <table id="randomDataTable">
            <thead>
                <tr id="randomTitle">
                    <th colSpan="2">
                        <button onClick={hideRandomDetails}>Random Battle</button>
                    </th>
                </tr>
                <tr id="randomContent">
                    <td id="randomSectionLeft">
                        <table>
                            <thead>
                                <tr id="battles"><td>Battles</td></tr>
                                <tr id="wins"><td>Wins</td></tr>
                                <tr id="losses"><td>Losses</td></tr>
                                <tr id="draws"><td>Draws</td></tr>
                            </thead>
                        </table>
                    </td>
                    <td id="randomSectionRight">
                        <table>
                            <thead>
                                <tr id="battlesValue">
                                    <td><p>{data.data[id].statistics.random.battles}</p></td>
                                </tr>
                                <tr id="winsValue">
                                    <td><p>{data.data[id].statistics.random.wins}</p></td>
                                </tr>
                                <tr id="lossesValue">
                                    <td><p>{data.data[id].statistics.random.losses}</p></td>
                                </tr>
                                <tr id="drawsValue">
                                    <td><p>{data.data[id].statistics.random.draws}</p></td>
                                </tr>
                            </thead>
                        </table>
                    </td>
                </tr>
            </thead>
        </table>
    )
}

export default GetRandomData
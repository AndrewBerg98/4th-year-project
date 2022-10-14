import { useEffect, useState } from "react"
import axios from "axios"
import GetMainData from "./GetMainData"
import GetRandomData from "./GetRandomData"

function GetPersonalData({nickname, id, realm}) {
    const extra = "&extra="
    // eslint-disable-next-line
    const and = "%2C+"
    const statRandom = "statistics.random"
    const urlGetPersonalData = "https://api.worldoftanks." + realm + "/wot/account/info/?application_id=" + process.env.REACT_APP_APIKEY + "&account_id=" + id + extra + statRandom
    const [data, setData] = useState(null)

    // Show date in text format: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    function toggleMainDetails() {
        if (document.getElementById("mainDataTable").style.display === "none") {
            document.getElementById("mainDataTable").style.display = "table"
            document.getElementById("mainDetails").style.backgroundColor = "rgb(2, 80, 196)"
            document.getElementById("mainDetails").setAttribute("class", "Active") // How to add another id with JavaScript: https://www.delftstack.com/howto/javascript/add-id-to-element-using-javascript/#:~:text=element%20using%20JavaScript.-,Use%20setAttribute()%20Function%20to%20Add%20id%20to%20an%20Element,setAttribute()%20takes%20two%20parameters.
        
        }

        else if (document.getElementById("mainDataTable").style.display === "table") {
            document.getElementById("mainDataTable").style.display = "none"
            document.getElementById("mainDetails").style.backgroundColor = "rgb(82, 82, 82)"
            document.getElementById("mainDetails").setAttribute("class", "Inactive")
        }

        else {
            document.getElementById("mainDataTable").style.display = "table"
            document.getElementById("mainDetails").style.backgroundColor = "rgb(2, 80, 196)"
            document.getElementById("mainDetails").setAttribute("class", "Active")
        }
    }

    function toggleRandomDetails() {
        if (document.getElementById("randomDataTable").style.display === "none") {
            document.getElementById("randomDataTable").style.display = "table"
            document.getElementById("randomDetails").style.backgroundColor = "rgb(2, 80, 196)"
            document.getElementById("randomDetails").setAttribute("class", "Active")
        }

        else if (document.getElementById("randomDataTable").style.display === "table") {
            document.getElementById("randomDataTable").style.display = "none"
            document.getElementById("randomDetails").style.backgroundColor = "rgb(82, 82, 82)"
            document.getElementById("randomDetails").setAttribute("class", "Inactive")
        }

        else {
            document.getElementById("randomDataTable").style.display = "table"
            document.getElementById("randomDetails").style.backgroundColor = "rgb(2, 80, 196)"
            document.getElementById("randomDetails").setAttribute("class", "Active")
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
                    document.title = (nickname + " - WOTPlayer") // Dynamically change title: https://stackoverflow.com/questions/413439/how-to-dynamically-change-a-web-pages-title
                    
                    return (
                        <>
                            <div id="subMenu">
                                <button id="mainDetails" class="Inactive" onClick={toggleMainDetails}>Main</button>
                                <button id="allDetails" class="Inactive">All</button>
                                <button id="regularTeamDetails" class="Inactive">Regular Team</button>
                                <button id="companyDetails" class="Inactive">Company</button>
                                <button id="randomDetails" class="Inactive" onClick={toggleRandomDetails}>Random</button>
                                <button id="strongholdDetails" class="Inactive">Stronghold</button>
                                <button id="historialDetails" class="Inactive">Historical</button>
                                <button id="teamDetails" class="Inactive">Team</button>
                            </div>

                            <div id="playerAccount">
                                <GetMainData data={data} id={id} dateOptions={dateOptions} />
                                <GetRandomData data={data} id={id} />
                            </div>
                        </>
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
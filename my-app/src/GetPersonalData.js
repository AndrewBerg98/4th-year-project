import { useEffect, useState } from "react"
import axios from "axios"
import GetMainData from "./GetMainData"
import GetRandomData from "./GetRandomData"
import GetVehicleData from "./GetVehicleData"

function GetPersonalData({nickname, id, realm, source}) {
    const extra = "&extra="
    // eslint-disable-next-line
    const and = "%2C+"
    const statRandom = "statistics.random"
    const urlGetPersonalData = "https://api.worldoftanks." + realm + "/wot/account/info/?application_id=" + process.env.REACT_APP_APIKEY + "&account_id=" + id + extra + statRandom
    const [personalData, setPersonalData] = useState(null)

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
            document.getElementById("mainDetails").setAttribute("class", "Active")
        
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
        if(id !== undefined && source === "local") {
            console.log("Fetching Personal Data From LOCAL SOURCE")
            axios.get("playerPersonalData.json").then(response => {
                setPersonalData(response.data)
            })
        }

        else if (id !== undefined && source === "api") {
            console.log("Fetching Personal Data From API")
            axios.get(urlGetPersonalData).then(response => {
                setPersonalData(response.data)
            })
        }

        else {
            console.log("ID or SOURCE LOCAL Unspecified")
        }
    }, [id, realm, urlGetPersonalData, source])

    if (id !== undefined && personalData !== null) {
        var match = false

        if (personalData.meta.count !== 0) {
            for (var i = 0; i < 1; i++) {
                if (id === personalData.data[id].account_id && match === false) {
                    match = true
                    document.title = (nickname + " - WOTPlayer")
                    
                    return (
                        <>
                            <div id="subMenu">
                                <button id="mainDetails" className="Inactive" onClick={toggleMainDetails}>Main</button>
                                <button id="allDetails" className="Inactive">All</button>
                                <button id="regularTeamDetails" className="Inactive">Regular Team</button>
                                <button id="companyDetails" className="Inactive">Company</button>
                                <button id="randomDetails" className="Inactive" onClick={toggleRandomDetails}>Random</button>
                                <button id="strongholdDetails" className="Inactive">Stronghold</button>
                                <button id="historialDetails" className="Inactive">Historical</button>
                                <button id="teamDetails" className="Inactive">Team</button>
                            </div>

                            <div id="playerAccount">
                                <GetMainData personalData={personalData} id={id} dateOptions={dateOptions} />
                                <GetRandomData personalData={personalData} id={id} />
                                <GetVehicleData id={id} realm={realm} source={source} />
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
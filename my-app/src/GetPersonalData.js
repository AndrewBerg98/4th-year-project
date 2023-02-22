import { useEffect, useState } from "react"
import axios from "axios"
import GetMainData from "./GetMainData"
import GetRandomData from "./GetRandomData"
import GetVehicleData from "./GetVehicleData"
import GetTeamData from "./GetTeamData"

function GetPersonalData({nickname, id, realm, source}) {
    const extra = "&extra="
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
        var mainDataTable = document.getElementById("mainDataTable")
        var mainDetails = document.getElementById("mainDetails")

        if (mainDataTable.style.display === "none") {
            mainDataTable.style.display = "table"
            mainDetails.style.backgroundColor = "rgb(2, 80, 196)"
            mainDetails.setAttribute("class", "Active")
        
        }

        else if (mainDataTable.style.display === "table") {
            mainDataTable.style.display = "none"
            mainDetails.style.backgroundColor = "rgb(82, 82, 82)"
            mainDetails.setAttribute("class", "Inactive")
        }

        else {
            mainDataTable.style.display = "table"
            mainDetails.style.backgroundColor = "rgb(2, 80, 196)"
            mainDetails.setAttribute("class", "Active")
        }
    }

    function toggleRandomDetails() {
        var randomDataTable = document.getElementById("randomDataTable")
        var randomDetails = document.getElementById("randomDetails")

        if (randomDataTable.style.display === "none") {
            randomDataTable.style.display = "table"
            randomDetails.style.backgroundColor = "rgb(2, 80, 196)"
            randomDetails.setAttribute("class", "Active")
        }

        else if (randomDataTable.style.display === "table") {
            randomDataTable.style.display = "none"
            randomDetails.style.backgroundColor = "rgb(82, 82, 82)"
            randomDetails.setAttribute("class", "Inactive")
        }

        else {
            randomDataTable.style.display = "table"
            randomDetails.style.backgroundColor = "rgb(2, 80, 196)"
            randomDetails.setAttribute("class", "Active")
        }
    }

    function toggleTeamDetails() {
        var teamDataTable = document.getElementById("teamDataTable")
        var teamDetails = document.getElementById("teamDetails")

        if (teamDataTable.style.display === "none") {
            teamDataTable.style.display = "table"
            teamDetails.style.backgroundColor = "rgb(2, 80, 196)"
            teamDetails.setAttribute("class", "Active")
        }

        else if (teamDataTable.style.display === "table") {
            teamDataTable.style.display = "none"
            teamDetails.style.backgroundColor = "rgb(82, 82, 82)"
            teamDetails.setAttribute("class", "Inactive")
        }

        else {
            teamDataTable.style.display = "table"
            teamDetails.style.backgroundColor = "rgb(2, 80, 196)"
            teamDetails.setAttribute("class", "Active")
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
                                <button id="teamDetails" className="Inactive" onClick={toggleTeamDetails}>Team</button>
                            </div>

                            <div id="playerAccount">
                                <GetMainData personalData={personalData} id={id} dateOptions={dateOptions} />
                                <GetTeamData personalData={personalData} id={id} dateOptions={dateOptions} />
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
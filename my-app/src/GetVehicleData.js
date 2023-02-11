import { useEffect, useState } from "react"
import axios from "axios"
import "./styles/GetVehicleData.css"

function GetVehicleData({id, realm, source}) {
    const GetPlayerVehicleList = "https://api.worldoftanks." + realm + "/wot/account/tanks/?application_id=" + process.env.REACT_APP_APIKEY + "&account_id=" + id
    const GetVehicleList = "https://api.worldoftanks." + realm + "/wot/encyclopedia/vehicles/?application_id=" + process.env.REACT_APP_APIKEY
    const GetIndividualVehicleDetails = "https://api.worldoftanks." + realm + "/wot/encyclopedia/vehicles/?application_id=" + process.env.REACT_APP_APIKEY
    const GetPlayerTankStats = "https://api.worldoftanks." + realm + "/wot/tanks/stats/?application_id=" + process.env.REACT_APP_APIKEY + "&account_id=" + id
    const GetPlayerTankAchievements = "https://api.worldoftanks." + realm + "/wot/tanks/achievements/?application_id=" + process.env.REACT_APP_APIKEY + "&account_id=" + id
    // const GetPlayerAccountAchievements = "https://api.worldoftanks." + realm + "/wot/account/achievements/?application_id=" + process.env.REACT_APP_APIKEY + "&account_id=" + id

    const [playerVehicles, setPlayerVehicles] = useState(null)
    const [vehicleList, setVehicleList] = useState(null)
    const [individualVehicleDetails, setIndividualVehicleDetails] = useState(null)
    const [playerTankStats, setPlayerTankStats] = useState(null)
    const [playerTankAchievements, setPlayerTankAchievements] = useState(null)
    const completeData = []

    useEffect(() => {
        if(id !== undefined && source === "local") {
            console.log("Fetching Personal Data From LOCAL SOURCE")

            axios.get("playerVehicles.json").then(response => {
                setPlayerVehicles(response.data)
            })

            axios.get("tankList.json").then(response => {
                setVehicleList(response.data)
            })

            axios.get("tankDetails.json").then(response => {
                setIndividualVehicleDetails(response.data)
            })

            axios.get("playerTankStats.json").then(response => {
                setPlayerTankStats(response.data)
            })

            axios.get("playerVehicleAchievements.json").then(response => {
                setPlayerTankAchievements(response.data)
            })
        }

        else if (id !== undefined && source === "api") {
            console.log("Fetching Personal Data From API")

            axios.get(GetPlayerVehicleList).then(response => {
                setPlayerVehicles(response.data)
            })

            axios.get(GetVehicleList).then(response => {
                setVehicleList(response.data)
            })

            axios.get(GetIndividualVehicleDetails).then(response => {
                setIndividualVehicleDetails(response.data)
            })

            axios.get(GetPlayerTankStats).then(response => {
                setPlayerTankStats(response.data)
            })

            axios.get(GetPlayerTankAchievements).then(response => {
                setPlayerTankAchievements(response.data)
            })
        }

        else {
            console.log("ID or SOURCE LOCAL Unspecified")
        }
    }, [id, realm, GetPlayerVehicleList, GetIndividualVehicleDetails, GetVehicleList, GetPlayerTankStats, GetPlayerTankAchievements, source])

    if (playerVehicles && vehicleList && individualVehicleDetails && playerTankStats && playerTankAchievements) {
        for (var i = 0; i < playerVehicles.data[id].length; i++) {
            for (var k = 0; k < playerTankStats.data[id].length; k++) {
                if (playerTankStats.data[id][k].tank_id === playerVehicles.data[id][i]?.tank_id) {
                    // console.log(playerTankAchievements)
                    completeData.push({
                        name: vehicleList.data[playerVehicles.data[id][i].tank_id]?.name,
                        id: playerVehicles.data[id][i]?.tank_id,
                        nation: individualVehicleDetails.data[playerVehicles.data[id][i].tank_id]?.nation,
                        tank_image_big: individualVehicleDetails.data[playerVehicles.data[id][i].tank_id]?.images.big_icon,
                        mark_of_mastery: playerTankStats.data[id][k]?.mark_of_mastery,
                        mark_of_excellence: playerTankAchievements.data[id][k]?.achievements.marksOnGun,
                        tier: individualVehicleDetails.data[playerVehicles.data[id][i].tank_id]?.tier,
                        premium: individualVehicleDetails.data[playerVehicles.data[id][i].tank_id]?.is_premium
                    })
                }
            }
        }
    }

    function doneLoading() {
        if (document.getElementById("loadingTankTiles")) {
            document.getElementById("loadingTankTiles").style.display = "none"
            document.getElementById("tankListTiles").style.display = "block"
        }
    }

    return (
        <>
            <div id="loadingTankTiles">
                <span>Loading Player's Tank List...</span>
            </div>

            <table id="tankListTiles">
                <thead>

                </thead>

                {completeData.map((tank) => (
                    <tbody className={"tankTileFull" + "".concat(" ") + "".concat("is_premium_") + tank.premium} key={"tile_" + tank.id} onLoad={doneLoading()}>
                        <tr className={"tankTile".concat(" ") + tank.nation} key={tank.id + "".concat("_") + tank.name + "".concat("_") + tank.premium}>
                            <td key={tank.name} className={tank.name}>{!tank.name ? <i><b>"missing_name"</b></i> : tank.name}</td>
                            <td key={tank.tank_image_big}>
                                <img src={tank.tank_image_big} alt="missing_tank_image" draggable="false"></img>
                            </td>
                            <td key={tank.id} className={tank.id}>ID: {tank.id}</td>
                            <td key={"tier_" + tank.tier} className={tank.tier}>Tier {tank.tier}</td>
                            <td key={"mom_" + tank.mark_of_mastery} id="mark_of_mastery">
                                <p className={"mark_of_mastery_" + tank.mark_of_mastery}></p>
                            </td>
                            <td>
                                <p className={tank.nation + "_mark_of_excellence_" + tank.mark_of_excellence + "".concat(" ") + "mark_of_excellence_" + tank.mark_of_mastery}></p>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
        </>
    )
}

export default GetVehicleData
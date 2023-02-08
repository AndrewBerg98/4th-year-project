import { useEffect, useState } from "react"
import axios from "axios"
import "./styles/GetVehicleData.css"

function GetVehicleData({personalData, id, realm, source}) {
    const GetPlayerVehicleList = "https://api.worldoftanks." + realm + "/wot/account/tanks/?application_id=" + process.env.REACT_APP_APIKEY + "&account_id=" + id
    const [playerVehicles, setPlayerVehicles] = useState(null)
    const [vehicleList, setVehicleList] = useState(null)
    const [individualVehicleDetails, setIndividualVehicleDetails] = useState(null)
    const [playerTankStats, setPlayerTankStats] = useState(null)
    const array = []

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
        }

        else if (id !== undefined && source === "api") {
            console.log("Fetching Personal Data From API")
            axios.get(GetPlayerVehicleList).then(response => {
                setPlayerVehicles(response.data)
            })
        }

        else {
            console.log("ID or SOURCE LOCAL Unspecified")
        }
    }, [id, realm, GetPlayerVehicleList, source])

    if (playerVehicles && vehicleList && individualVehicleDetails && playerTankStats) {
        // console.log("Vehicle Data: ", playerVehicles.data[id])
        // console.log("Vehicle List: ", vehicleList)
        // console.log("Vehicle Details: ", individualVehicleDetails)
        // console.log("Vehicle Tank Stats Details: ", playerTankStats.data[id])

        for (var i = 0; i < playerVehicles.data[id].length; i++) {
            // console.log(vehicleList.data[playerVehicles.data[id][i].tank_id]?.name, "(ID: " + playerVehicles.data[id][i]?.tank_id + ")", "Image Link: " + individualVehicleDetails.data[playerVehicles.data[id][i].tank_id]?.images.big_icon)
            // console.log(vehicleList.data[playerVehicles.data[id][i].tank_id]?.name, playerTankStats.data[id][playerVehicles.data[id][i].tank_id]?.mark_of_mastery)

            array.push({
                name: vehicleList.data[playerVehicles.data[id][i].tank_id]?.name,
                id: playerVehicles.data[id][i]?.tank_id,
                nation: individualVehicleDetails.data[playerVehicles.data[id][i].tank_id]?.nation,
                big_image: individualVehicleDetails.data[playerVehicles.data[id][i].tank_id]?.images.big_icon,
                mark_of_mastery: playerTankStats.data[id][playerVehicles.data[id][i].tank_id]?.mark_of_mastery
            })
        }
    }

    return (
        <table id="tankListTiles">
            <thead>

            </thead>

            <tbody>
                {array.map((tank) => (
                    <tr className={"tankTile".concat(" ") + tank.nation} key={tank.id}>
                        <td key={tank.id}>{tank.name}</td>
                        <td key={tank.big_image}><img src={tank.big_image} alt="missing_tank_image"></img></td>
                        <td key={tank.name}>ID: {tank.id}</td>
                        {/* <td key={tank.mark_of_mastery}>Mark of Mastery: {tank.mark_of_mastery}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default GetVehicleData
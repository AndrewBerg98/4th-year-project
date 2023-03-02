import { useEffect, useState } from "react"
import axios from "axios"
import "./styles/GetVehicleData.css"
import question_mark from "./assets/flaticon - Muhammed Ali.png"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts'

function GetVehicleData({id, realm, source, totalBattles}) {
    // console.clear()

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
    const nationVehicleCount = [
        { nation: 'China', count: 0 },
        { nation: 'Czech', count: 0 },
        { nation: 'France', count: 0 },
        { nation: 'Germany', count: 0 },
        { nation: 'Italy', count: 0 },
        { nation: 'Japan', count: 0 },
        { nation: 'Poland', count: 0 },
        { nation: 'Sweden', count: 0 },
        { nation: 'UK', count: 0 },
        { nation: 'USA', count: 0 },
        { nation: 'USSR', count: 0 }
    ]
    const nationBattleCount = [
        { nation: 'China', count: 0 },
        { nation: 'Czech', count: 0 },
        { nation: 'France', count: 0 },
        { nation: 'Germany', count: 0 },
        { nation: 'Italy', count: 0 },
        { nation: 'Japan', count: 0 },
        { nation: 'Poland', count: 0 },
        { nation: 'Sweden', count: 0 },
        { nation: 'UK', count: 0 },
        { nation: 'USA', count: 0 },
        { nation: 'USSR', count: 0 }
    ]
    // eslint-disable-next-line
    const vehicleTypeCount = [
        { type: 'LT', count: 10 },
        { type: 'MT', count: 20 },
        { type: 'HT', count: 30 },
        { type: 'TD', count: 40 },
        { type: 'SPG', count: 50 }
    ]

    useEffect(() => {
        if(id !== undefined && source === "local") {
            console.log("Fetching Vehicle Data From LOCAL SOURCE")

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
            console.log("Fetching Vehicle Data From API")

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
                    completeData.push({
                        name: vehicleList?.data[playerVehicles.data[id][i].tank_id]?.name,
                        id: playerVehicles.data[id][i]?.tank_id,
                        nation: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.nation,
                        tank_image_big: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.images.big_icon,
                        mark_of_mastery: playerTankStats?.data[id][k]?.mark_of_mastery,
                        mark_of_excellence: playerTankAchievements?.data[id][k]?.achievements.marksOnGun,
                        tier: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.tier,
                        premium: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.is_premium,
                        battles: playerVehicles?.data[id][i]?.statistics.battles,
                        description: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.description
                    })
                }
            }
        }
    }

    // counts how many tanks of each nation a player has
    for (var h = 0; h < completeData.length; h++) {
        if (completeData[h].nation === "china") {
            nationVehicleCount[0]["count"]++
        }

        else if (completeData[h].nation === "czech") {
            nationVehicleCount[1]["count"]++
        }

        else if (completeData[h].nation === "france") {
            nationVehicleCount[2]["count"]++
        }

        else if (completeData[h].nation === "germany") {
            nationVehicleCount[3]["count"]++
        }

        else if (completeData[h].nation === "italy") {
            nationVehicleCount[4]["count"]++
        }

        else if (completeData[h].nation === "japan") {
            nationVehicleCount[5]["count"]++
        }

        else if (completeData[h].nation === "poland") {
            nationVehicleCount[6]["count"]++
        }

        else if (completeData[h].nation === "sweden") {
            nationVehicleCount[7]["count"]++
        }

        else if (completeData[h].nation === "uk") {
            nationVehicleCount[8]["count"]++
        }

        else if (completeData[h].nation === "usa") {
            nationVehicleCount[9]["count"]++
        }

        else if (completeData[h].nation === "ussr") {
            nationVehicleCount[10]["count"]++
        }

        else {
            console.log("Missing Nation?")
        }

        // if (h === completeData.length - 1) {
        //     for (var g = 0; g < nationVehicleCount.length; g++) {
        //         nationVehicleCount[g]["fullMark"] = 121
        //     }
        // }
    }

    // counts how many battles player has played for each nation
    for (var f = 0; f < completeData.length; f++) {
        if (completeData[f].nation === "china") {
            nationBattleCount[0]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "czech") {
            nationBattleCount[1]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "france") {
            nationBattleCount[2]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "germany") {
            nationBattleCount[3]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "italy") {
            nationBattleCount[4]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "japan") {
            nationBattleCount[5]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "poland") {
            nationBattleCount[6]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "sweden") {
            nationBattleCount[7]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "uk") {
            nationBattleCount[8]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "usa") {
            nationBattleCount[9]["count"] += completeData[f].battles
        }

        if (completeData[f].nation === "ussr") {
            nationBattleCount[10]["count"] += completeData[f].battles
        }
    }

    function LoadedTankTiles() {
        if (document.getElementById("loadingTankTiles")) {
            document.getElementById("loadingTankTiles").style.display = "none"
            document.getElementById("tankListTiles").style.display = "inline-block" // using block makes it take space more efficently, but maybe not line up as wanted
            document.getElementById("viewingOptions").style.display = "block"
            document.getElementById("radarChart").style.display = "block"
        }
    }

    function Viewing() {
        const viewingOptions = document.getElementById("viewingOptions")
        const tankListTiles = document.getElementById("tankListTiles")

        if (viewingOptions.style.position !== "sticky") {
            viewingOptions.style.position = "sticky"
            viewingOptions.style.left = "0"
            tankListTiles.style.height = "370px"
            tankListTiles.style.overflowX = "scroll"
            tankListTiles.style.overflowY = "hidden"
            tankListTiles.style.whiteSpace = "nowrap"

            // SOURCE: https://stackoverflow.com/questions/18481308/set-mouse-wheel-to-horizontal-scroll-using-css
            // const container = document.getElementById("tankListTiles")
            // container.addEventListener("wheel", function(e) {
            //     if (e.deltaY > 0) {
            //         container.scrollLeft += 184
            //         e.preventDefault()
            //     }

            //     else {
            //         container.scrollLeft -= 184
            //         e.preventDefault()
            //     }
            // })
        }

        else if (viewingOptions.style.position === "sticky") {
            viewingOptions.style.position = "inherit"
            viewingOptions.style.left = "inherit"
            tankListTiles.style.height = "inherit"
            tankListTiles.style.overflowX = "inherit"
            tankListTiles.style.overflowY = "inherit"
            tankListTiles.style.whiteSpace = "inherit"

            // tankListTiles.replaceWith(tankListTiles.cloneNode(true))

            document.getElementById("switchView").addEventListener("click", function(e) {
                document.getElementById("switchView").onClick = Viewing()
                e.preventDefault()
            })
        }
    }

    function Filtering() {
        
    }

    function HideTankStats() {
        document.getElementById("individualTankInfoContainer").style.display = "none"
    }

    function DisplayTankStats(e) {
        const information = []

        for (var c = 0; c < completeData.length; c++) {
            if (completeData[c].id === Number(e.target.id)) {
                information.push({
                    title: completeData[c].name,
                    image: completeData[c].tank_image_big,
                    description: completeData[c].description
                })
            }
        }

        document.getElementById("tankInfo_title").innerText = information[0].title
        document.getElementById("tankInfo_image").src = information[0].image
        document.getElementById("tankInfo_description").innerText = information[0].description
        document.getElementById("individualTankInfoContainer").style.display = "block"
    }
    
    function RadarChartCustomTooltip({ payload, label, active }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label"><b>{label}</b></p>
                    <p className="intro">Battles: {Number(payload[0].value).toLocaleString()}</p>
                    <p className="desc"></p>
                </div>
            )
        }
    }
    
    return (
        <>
            <div id="loadingTankTiles">
                <span>Loading Player's Tank List...</span>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>

            <div id="radarChart">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={nationBattleCount}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="nation" />
                        <PolarRadiusAxis angle={30} />
                        <Radar name={id} dataKey="count" stroke="rgba(0, 68, 169, 1)" fill="rgb(0, 68, 169, 1)" fillOpacity={0.3} />
                        <Tooltip content={<RadarChartCustomTooltip />} />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
            
            <table id="tankListTiles">
                <thead id="viewingOptions">
                    <tr>
                        <td>
                            <button id="switchView" onClick={() => Viewing()}>Switch View</button>
                            <button id="filterTanks" onClick={() => Filtering()}>Filter</button>
                        </td>
                    </tr>
                </thead>

                {completeData.map((tank) => (
                    <tbody className={"tankTileFull" + "".concat(" ") + "".concat("is_premium_") + tank.premium} key={"tile_" + tank.id} onLoad={LoadedTankTiles()}>
                        <tr className={"tankTile".concat(" ") + tank.nation} key={tank.id + "".concat("_") + tank.name + "".concat("_") + tank.premium}>
                            <td key={tank.name} className={tank.name}>{!tank.name ? <i><b>Unknown Tank</b></i> : tank.name}</td>
                            <td key={tank.tank_image_big}>
                                <img id={tank.id} className="tank_ids" src={navigator.onLine === true ? tank.tank_image_big : question_mark} alt={tank.name + ".png"} draggable="false" onClick={DisplayTankStats}></img>
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

            <div id="individualTankInfoContainer">
                <div id="individualTankInfoBlur" onClick={HideTankStats}></div>
                <div id="individualTankInfoActual">
                    <button id="closeTankInfoActual" onClick={HideTankStats}>X</button>
                    
                    <div id="tankInfo_history">
                        <h3 id="tankInfo_title">Title</h3>
                        <img id="tankInfo_image" src="" alt="missing_tank_image"></img>
                        <p id="tankInfo_description">Description</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetVehicleData
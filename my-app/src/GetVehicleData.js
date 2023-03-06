import { useEffect, useState } from "react"
import axios from "axios"
import "./styles/GetVehicleData.css"
import question_mark from "./assets/flaticon - Muhammed Ali.png"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts'

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
        { Nation: 'China', Tanks: 0 },
        { Nation: 'Czech', Tanks: 0 },
        { Nation: 'France', Tanks: 0 },
        { Nation: 'Germany', Tanks: 0 },
        { Nation: 'Italy', Tanks: 0 },
        { Nation: 'Japan', Tanks: 0 },
        { Nation: 'Poland', Tanks: 0 },
        { Nation: 'Sweden', Tanks: 0 },
        { Nation: 'UK', Tanks: 0 },
        { Nation: 'USA', Tanks: 0 },
        { Nation: 'USSR', Tanks: 0 }
    ]
    const nationBattleCount = [
        { Nation: 'China', Battles: 0 },
        { Nation: 'Czech', Battles: 0 },
        { Nation: 'France', Battles: 0 },
        { Nation: 'Germany', Battles: 0 },
        { Nation: 'Italy', Battles: 0 },
        { Nation: 'Japan', Battles: 0 },
        { Nation: 'Poland', Battles: 0 },
        { Nation: 'Sweden', Battles: 0 },
        { Nation: 'UK', Battles: 0 },
        { Nation: 'USA', Battles: 0 },
        { Nation: 'USSR', Battles: 0 }
    ]
    const COLORS = [
        "rgb(222, 41, 16)", // China
        'rgb(37, 60, 117)', // Czech
        'rgb(255, 255, 255)', // France
        'rgb(0, 0, 0)', // Germany
        'rgb(0, 145, 68)', // Italy
        "rgb(238, 27, 46)", // Japan
        'rgb(220, 20, 60)', // Poland
        'rgb(19,91, 173)', // Sweden
        'rgb(203, 163, 20)', // UK
        'rgb(0, 29, 101)', // USA
        "rgb(203, 1, 1)" // USSR
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
                        description: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.description,
                        crew: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.crew,
                        type: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.type,
                        stock_profile: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.default_profile,
                        price_xp: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.prices_xp,
                        price_gold: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.price_gold,
                        price_credit: individualVehicleDetails?.data[playerVehicles.data[id][i].tank_id]?.price_credit,
                    })
                }
            }
        }
    }

    // counts how many tanks of each nation a player has
    for (var h = 0; h < completeData.length; h++) {
        if (completeData[h].nation === "china") {
            nationVehicleCount[0]["Tanks"]++
        }

        else if (completeData[h].nation === "czech") {
            nationVehicleCount[1]["Tanks"]++
        }

        else if (completeData[h].nation === "france") {
            nationVehicleCount[2]["Tanks"]++
        }

        else if (completeData[h].nation === "germany") {
            nationVehicleCount[3]["Tanks"]++
        }

        else if (completeData[h].nation === "italy") {
            nationVehicleCount[4]["Tanks"]++
        }

        else if (completeData[h].nation === "japan") {
            nationVehicleCount[5]["Tanks"]++
        }

        else if (completeData[h].nation === "poland") {
            nationVehicleCount[6]["Tanks"]++
        }

        else if (completeData[h].nation === "sweden") {
            nationVehicleCount[7]["Tanks"]++
        }

        else if (completeData[h].nation === "uk") {
            nationVehicleCount[8]["Tanks"]++
        }

        else if (completeData[h].nation === "usa") {
            nationVehicleCount[9]["Tanks"]++
        }

        else if (completeData[h].nation === "ussr") {
            nationVehicleCount[10]["Tanks"]++
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
            nationBattleCount[0]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "czech") {
            nationBattleCount[1]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "france") {
            nationBattleCount[2]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "germany") {
            nationBattleCount[3]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "italy") {
            nationBattleCount[4]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "japan") {
            nationBattleCount[5]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "poland") {
            nationBattleCount[6]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "sweden") {
            nationBattleCount[7]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "uk") {
            nationBattleCount[8]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "usa") {
            nationBattleCount[9]["Battles"] += completeData[f].battles
        }

        if (completeData[f].nation === "ussr") {
            nationBattleCount[10]["Battles"] += completeData[f].battles
        }
    }

    function LoadedTankTiles() {
        if (document.getElementById("loadingTankTiles")) {
            document.getElementById("loadingTankTiles").style.display = "none"
            document.getElementById("tankListTiles").style.display = "inline-block" // using block makes it take space more efficently, but maybe not line up as wanted
            document.getElementById("viewingOptions").style.display = "block"
            document.getElementById("barChart").style.display = "inline-block"
            document.getElementById("radarChart").style.display = "inline-block"
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

            // document.getElementById("switchView").addEventListener("click", function(e) {
            //     document.getElementById("switchView").onClick = Viewing()
            //     e.preventDefault()
            // })
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
                    description: completeData[c].description,
                    crew: completeData[c].crew,
                    type: completeData[c].type,
                    armorTurret: completeData[c].stock_profile?.armor?.turret,
                    armorHull: completeData[c].stock_profile.armor.hull,
                    speedForward: completeData[c].stock_profile.speed_forward,
                    speedBackward: completeData[c].stock_profile.speed_backward,
                    rapid: completeData[c].stock_profile?.rapid,
                    priceXP: completeData[c]?.price_xp,
                    priceGold: completeData[c]?.price_gold,
                    priceCredit: completeData[c]?.price_credit
                })

                if (information[0].type === "lightTank") {information[0].type = "Light Tank"}
                if (information[0].type === "mediumTank") {information[0].type = "Medium Tank"}
                if (information[0].type === "heavyTank") {information[0].type = "Heavy Tank"}
                if (information[0].type === "AT-SPG") {information[0].type = "Tank Destroyer"}
                if (information[0].type === "SPG") {information[0].type = "SPG / Artillery"}

                document.getElementById("tankInfo_crewLayout").innerText = ""

                for (var v = 0; v < information[0].crew.length; v++) { 
                    var prev = document.getElementById("tankInfo_crewLayout").innerText
                    const myImage = new Image(60, 60)

                    if (prev === "") {
                        const crewMember = information[0]?.crew[v]["member_id"]

                        if (crewMember === "commander") {
                            myImage.src = require('./assets/crew_roles/commander(2).png')
                            document.getElementById("tankInfo_crewLayout").appendChild(myImage)
                        }

                        else if (crewMember === "gunner") {
                            myImage.src = require('./assets/crew_roles/gunner(2).png')
                            document.getElementById("tankInfo_crewLayout").appendChild(myImage)
                        }

                        else if (crewMember === "driver") {
                            myImage.src = require('./assets/crew_roles/driver(2).png')
                            document.getElementById("tankInfo_crewLayout").appendChild(myImage)
                        }

                        else if (crewMember === "radio_operator") {
                            myImage.src = require('./assets/crew_roles/radio_operator(2).png')
                            document.getElementById("tankInfo_crewLayout").appendChild(myImage)
                        }
                        
                        else if (crewMember === "loader") {
                            myImage.src = require('./assets/crew_roles/loader(2).png')
                            document.getElementById("tankInfo_crewLayout").appendChild(myImage)
                        }
                    }
                }
            }
        }

        document.getElementById("tankInfo_title").innerText = information[0].title
        document.getElementById("tankInfo_image").src = information[0].image
        document.getElementById("tankInfo_subTitle").innerText = information[0].type
        document.getElementById("tankInfo_description").innerText = information[0].description
        document.getElementById("individualTankInfoContainer").style.display = "block"
        document.getElementById("tankInfo_description").scrollTo(0, 0)

        if (information[0].armorTurret) {
            document.getElementById("tankInfo_stockArmorTurretValues").innerText = information[0].armorTurret["front"] + " / " + information[0].armorTurret["sides"] +  " / " + information[0].armorTurret["rear"]
            document.getElementById("tankInfo_stockArmorHullValues").innerText = information[0].armorHull["front"] +  " / " + information[0].armorHull["sides"] +  " / " + information[0].armorHull["rear"]
        }

        else {
            document.getElementById("tankInfo_stockArmorTurretValues").innerText = 0 + " / " + 0 +  " / " + 0
            document.getElementById("tankInfo_stockArmorHullValues").innerText = information[0].armorHull["front"] +  " / " + information[0].armorHull["sides"] +  " / " + information[0].armorHull["rear"]
        }

        document.getElementById("tankInfo_mobilityForwardBackwards").innerText = information[0].speedForward + " / " + information[0].speedBackward

        if (information[0].rapid !== null) {
            document.getElementById("tankInfo_mobilityRapid").innerText = information[0].rapid.speed_forward + " / " + information[0].rapid.speed_forward
        }

        else {
            document.getElementById("tankInfo_mobilityRapid").innerText = "* / *"
        }

        if (information[0].priceXP !== null) {
            if (Object.values(information[0].priceXP) !== undefined) { 
                document.getElementById("tankInfo_miscPriceXP").innerText = "XP Price: " + Number(Object.values(information[0].priceXP)).toLocaleString()
            }
        }

        else {
            document.getElementById("tankInfo_miscPriceXP").innerText = "XP Price: " + 0
        }

        if (information[0].priceGold !== undefined) { 
            document.getElementById("tankInfo_miscPriceGold").innerText = "Gold Price: " + Number(information[0].priceGold).toLocaleString()
        }

        if (information[0].priceCredit !== undefined) { 
            document.getElementById("tankInfo_miscPriceCredits").innerText = "Credits Price: " + Number(information[0].priceCredit).toLocaleString()
        }

    }
    
    function BarChartCustomTooltip({ payload, label, active }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label"><b>{label}</b></p>
                    <p className="intro">Tanks: {Number(payload[0].value).toLocaleString()}</p>
                    <p className="desc"></p>
                </div>
            )
        }

        for (var h = 0; h < document.getElementsByTagName("tspan").length; h++) {
            if (document.getElementsByTagName("tspan")[h].innerHTML === "China") {
                const myImage = new Image(64, 64)
                myImage.src = require('./assets/flags/china.png')
                document.getElementsByTagName("tspan")[h].innerText = "TEST"
                document.getElementsByTagName("tspan")[h].appendChild(myImage)
            }
        }
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
            <div id="allCharts">
                <div id="barChart">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={500} height={300} data={nationVehicleCount} margin={{ top: 5, right: 30, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Nation" />
                        <YAxis />
                        <Tooltip content={<BarChartCustomTooltip />} />
                        <Bar dataKey="Tanks" fill={COLORS}>
                            {COLORS.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
                            ))}
                        </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div id="radarChart">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={nationBattleCount}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="Nation" />
                            <PolarRadiusAxis angle={30} />
                            <Radar name={id} dataKey="Battles" stroke="rgba(0, 68, 169, 1)" fill="rgb(0, 68, 169, 1)" fillOpacity={0.3} />
                            <Tooltip content={<RadarChartCustomTooltip />} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div id="loadingTankTiles">
                <span>Loading Player's Tank List...</span>
                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
                        <h4 id="tankInfo_title">Title</h4>
                        <img id="tankInfo_image" src="" alt="missing_tank_image"></img>
                        <h4 id="tankInfo_subTitle">Type</h4>
                        <p id="tankInfo_description">Description</p>
                    </div>

                    <div id="tankInfo_crew">
                        <h4 id="tankInfo_title2">Crew Layout</h4>
                        <p id="tankInfo_crewLayout"></p>
                    </div>

                    <div id="tankInfo_profile">
                        <h4 id="tankInfo_title3">Stock Configuration</h4>

                        <div className="tankInfo_armorTile">
                            <p id="tankInfo_stockArmorTurretValues"></p>
                            <span>Turret Armor (mm)</span>
                        </div>

                        <div className="tankInfo_armorTile">
                            <p id="tankInfo_stockArmorHullValues"></p>
                            <span>Hull Armor (mm)</span>
                        </div>

                        <div className="tankInfo_mobilityTile">
                            <p id="tankInfo_mobilityForwardBackwards"></p>
                            <span>Forward/Reverse (km/h)</span>
                        </div>

                        <div className="tankInfo_mobilityTile">
                            <p id="tankInfo_mobilityRapid"></p>
                            <span>Rapid (km/h)</span>
                        </div>
                    </div>

                    <div id="tankInfo_misc">
                        <h4 id="tankInfo_title4">Prices (excl. Bonds)</h4>
                        <p id="tankInfo_miscPriceXP"></p>
                        <p id="tankInfo_miscPriceGold"></p>
                        <p id="tankInfo_miscPriceCredits"></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetVehicleData
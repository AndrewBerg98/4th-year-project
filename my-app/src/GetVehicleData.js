import { useEffect, useState, PureComponent } from "react"
import axios from "axios"
import "./styles/GetVehicleData.css"
import question_mark from "./assets/flaticon - Muhammed Ali.png"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Treemap } from 'recharts'

function GetVehicleData({id, realm, source, totalBattles}) {
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
    const vehicleHaves = []
    const COLORS = [
        "rgb(107, 125, 91)", // China
        "rgb(109, 101, 85)", // Czech
        "rgb(87, 107, 101)", // France
        "rgb(95, 94, 95)", // Germany
        "rgb(142, 125, 99)", // Italy
        "rgb(81, 90, 68)", // Japan
        "rgb(57, 48, 38)", // Poland
        "rgb(57, 58, 47)", // Sweden
        "rgb(117, 110, 96)", // UK
        "rgb(129, 124, 109)", // USA
        "rgb(95, 104, 74)" // USSR
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

    // collects certain data regarding each tanks
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

    // names the tanks the player has and battles they played with that particular tank
    if (completeData[0]) {
        var vehicleCount = 0;

        if (completeData.length >= 30) {
            vehicleCount = 30
        }

        else if (completeData.length < 30 && completeData.length >= 20) {
            vehicleCount = 20
        }

        else {
            vehicleCount = 10
        }

        for (var g = 0; g < vehicleCount; g++) {
            vehicleHaves.push({
                name: completeData[g].name,
                nation: completeData[g].nation,
                children: [{
                    name: completeData[g].name, size: completeData[g].battles
                }]
            })

            // console.log("Vehicle Haves: ", vehicleHaves)
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
            document.getElementById("allCharts").style.position = "relative"
            document.getElementById("allCharts").style.zIndex = "1"
            document.getElementById("allCharts").style.opacity = "100%"
            document.getElementById("allCharts").style.top = "inherit"
            document.getElementById("allCharts").style.left = "inherit"
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
                    priceCredit: completeData[c]?.price_credit,
                    nation: completeData[c].nation
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

        document.getElementById("individualTankInfoContainer").style.display = "block"
        document.getElementsByClassName("tankInfo_title")[0].innerText = information[0].title
        document.getElementById("tankInfo_image").src = information[0].image
        document.getElementById("tankInfo_subTitle").innerText = information[0].type
        document.getElementById("tankInfo_description").innerText = information[0].description
        document.getElementById("tankInfo_description").scrollTo(0, 0)


        if (document.getElementById("tankInfo_nation")) {
            var flag = document.getElementById("tankInfo_nationFlag")

            if (information[0].nation !== undefined) {
                flag.src = require("./assets/flags/" + information[0].nation + ".png")
            }
     
        }

        if (document.getElementById("tankInfo_profile")) {
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
        }

        if (document.getElementById("tankInfo_misc")) {
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

        ChangeRadarPolygonColor()
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

    function TreeMapChartCustomTooltip({ payload, label, active }) {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="label"><b>{payload[0].payload.root.name}</b></p>
                    <p className="intro">Battles: {Number(payload[0].value).toLocaleString()}</p>
                    <p className="desc"></p>
                </div>
            )
        }
    }

    function ChangeRadarPolygonColor() {
        var NationWithHighestBattleCount = ""
        var HighestBattleCount = 0
        for (var m = 0; m < nationBattleCount.length; m++) {
            if (nationBattleCount[m].Battles > HighestBattleCount) {
                NationWithHighestBattleCount = nationBattleCount[m].Nation
                HighestBattleCount = nationBattleCount[m].Battles
            }
        }

        switch (NationWithHighestBattleCount) {
            case "China":
                return  (
                    COLORS[0]
                )
            case "Czech":
                return  (
                    COLORS[1]
                )
            case "France":
                return  (
                    COLORS[2]
                )
            case "Germany":
                return  (
                    COLORS[3]
                )
            case "Italy":
                return  (
                    COLORS[4]
                )
            case "Japan":
                return  (
                    COLORS[5]
                )
            case "Poland":
                return  (
                    COLORS[6]
                )
            case "Sweden":
                return  (
                    COLORS[7]
                )
            case "UK":
                return  (
                    COLORS[8]
                )
            case "USA":
                return  (
                    COLORS[9]
                )
            case "USSR":
                return  (
                    COLORS[10]
                )
            default:
                return  (
                    "#8884d8"
                )
        }
    }

    // SOURCE: https://recharts.org/en-US/examples/CustomContentTreemap
    class CustomizedTreeMapContent extends PureComponent {
        render() {
            // eslint-disable-next-line
            const { root, depth, x, y, width, height, index, payload, colors, rank, name } = this.props

            switch (root.nation) {
                case "china":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[0], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "czech":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[1], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "france":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[2], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "germany":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[3], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "italy":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[4], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "japan":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[5], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "poland":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[6], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "sweden":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[7], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "uk":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[8], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "usa":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[9], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                case "ussr":
                    return  (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: COLORS[10], stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
                default:
                    return (
                        <g>
                            <rect x={x} y={y} width={width} height={height} style={{fill: "lightblue", stroke: '#fff', strokeWidth: 2 / (depth + 1e-10), strokeOpacity: 1 / (depth + 1e-10)}} />
                            <text x={x + width / 2} y={y + height / 2 + 7} textAnchor="middle" fill="purple" fontSize={14}>{name}</text>
                        </g>
                    )
            }
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
                            <Tooltip content={<BarChartCustomTooltip />}  isAnimationActive={false} />
                            <Bar dataKey="Tanks" fill={COLORS} isAnimationActive={false}>
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
                            <Radar name={id} dataKey="Battles" stroke="rgb(95, 94, 95)" fill={ChangeRadarPolygonColor()} fillOpacity={0.3} isAnimationActive={false} />
                            <Tooltip content={<RadarChartCustomTooltip />}  isAnimationActive={false} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>

                <div id="treeMap">
                    <ResponsiveContainer width="100%" height="100%">
                        <Treemap width={400} height={200} data={vehicleHaves} dataKey="size" aspectRatio={4 / 3} stroke="#fff" fill="#8884d8"
                        content={<CustomizedTreeMapContent colors={COLORS} />} isAnimationActive={false}>
                            <Tooltip content={<TreeMapChartCustomTooltip />}  isAnimationActive={false} />
                        </Treemap>
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
                        <h4 className="tankInfo_title">Title</h4>
                        <img id="tankInfo_image" src="" alt="missing_tank_image"></img>
                        <h4 id="tankInfo_subTitle">Type</h4>
                        <p id="tankInfo_description">Description</p>
                    </div>

                    <div id="tankInfo_nation">
                        <h4 className="tankInfo_title">Nation</h4>
                        <img id="tankInfo_nationFlag" src="" alt="missing_flag" draggable="false"></img>
                    </div>

                    <div id="tankInfo_crew">
                        <h4 className="tankInfo_title">Crew Layout</h4>
                        <p id="tankInfo_crewLayout"></p>
                    </div>

                    {/* <div id="tankInfo_profile">
                        <h4 className="tankInfo_title">Stock Configuration</h4>

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
                    </div> */}

                    <div id="tankInfo_misc">
                        <h4 className="tankInfo_title">Prices (excl. Bonds)</h4>
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
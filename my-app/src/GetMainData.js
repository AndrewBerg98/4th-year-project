import "./styles/GetMainData.css"

function GetMainData({personalData, id, dateOptions}) {
    const completeMainData = []

    for (var i = 0; i < Object.keys(personalData.data[id].statistics).length; i++) {
        if (Object.keys(personalData.data[id].statistics)[i] !== "trees_cut") {
            if (Object.keys(personalData.data[id].statistics)[i] !== "frags") {
                if (Object.values(personalData.data[id].statistics)[i] !== null) {
                    completeMainData.push({
                        spotted: Object.values(personalData.data[id].statistics)[i]["spotted"],
                        battles_on_stunning_vehicles: Object.values(personalData.data[id].statistics)[i]["battles_on_stunning_vehicles"],
                        max_xp: Object.values(personalData.data[id].statistics)[i]["max_xp"],
                        avg_damage_blocked: Object.values(personalData.data[id].statistics)[i]["avg_damage_blocked"],
                        direct_hits_received: Object.values(personalData.data[id].statistics)[i]["direct_hits_received"],
                        explosion_hits: Object.values(personalData.data[id].statistics)[i]["explosion_hits"],
                        piercings_received: Object.values(personalData.data[id].statistics)[i]["piercings_received"],
                        piercings: Object.values(personalData.data[id].statistics)[i]["piercings"],
                        max_damage_tank_id: Object.values(personalData.data[id].statistics)[i]["max_damage_tank_id"],
                        xp: Object.values(personalData.data[id].statistics)[i]["xp"],
                        survived_battles: Object.values(personalData.data[id].statistics)[i]["survived_battles"],
                        dropped_capture_points: Object.values(personalData.data[id].statistics)[i]["dropped_capture_points"],
                        hits_percents: Object.values(personalData.data[id].statistics)[i]["hits_percents"],
                        draws: Object.values(personalData.data[id].statistics)[i]["draws"],
                        max_xp_tank_id: Object.values(personalData.data[id].statistics)[i]["max_xp_tank_id"],
                        battles: Object.values(personalData.data[id].statistics)[i]["battles"],
                        damage_received: Object.values(personalData.data[id].statistics)[i]["damage_received"],
                        avg_damage_assisted: Object.values(personalData.data[id].statistics)[i]["avg_damage_assisted"],
                        max_frags_tank_id: Object.values(personalData.data[id].statistics)[i]["max_frags_tank_id"],
                        avg_damage_assisted_track: Object.values(personalData.data[id].statistics)[i]["avg_damage_assisted_track"],
                        frags: Object.values(personalData.data[id].statistics)[i]["frags"],
                        stun_number: Object.values(personalData.data[id].statistics)[i]["stun_number"],
                        avg_damage_assisted_radio: Object.values(personalData.data[id].statistics)[i]["avg_damage_assisted_radio"],
                        capture_points: Object.values(personalData.data[id].statistics)[i]["capture_points"],
                        stun_assisted_damage: Object.values(personalData.data[id].statistics)[i]["stun_assisted_damage"],
                        max_damage: Object.values(personalData.data[id].statistics)[i]["max_damage"],
                        hits: Object.values(personalData.data[id].statistics)[i]["hits"],
                        battle_avg_xp: Object.values(personalData.data[id].statistics)[i]["battle_avg_xp"],
                        wins: Object.values(personalData.data[id].statistics)[i]["wins"],
                        losses: Object.values(personalData.data[id].statistics)[i]["losses"],
                        damage_dealt: Object.values(personalData.data[id].statistics)[i]["damage_dealt"],
                        no_damage_direct_hits_received: Object.values(personalData.data[id].statistics)[i]["no_damage_direct_hits_received"],
                        max_frags: Object.values(personalData.data[id].statistics)[i]["max_frags"],
                        shots: Object.values(personalData.data[id].statistics)[i]["shots"],
                        explosion_hits_received: Object.values(personalData.data[id].statistics)[i]["explosion_hits_received"],
                        tanking_factor: Object.values(personalData.data[id].statistics)[i]["tanking_factor"]
                    })
                }

                else {
                    completeMainData.push({
                        spotted: null,
                        battles_on_stunning_vehicles: null,
                        max_xp: null,
                        avg_damage_blocked: null,
                        direct_hits_received: null,
                        explosion_hits: null,
                        piercings_received: null,
                        piercings: null,
                        max_damage_tank_id: null,
                        xp: null,
                        survived_battles: null,
                        dropped_capture_points: null,
                        hits_percents: null,
                        draws: null,
                        max_xp_tank_id: null,
                        battles: null,
                        damage_received: null,
                        avg_damage_assisted: null,
                        max_frags_tank_id: null,
                        avg_damage_assisted_track: null,
                        frags: null,
                        stun_number: null,
                        avg_damage_assisted_radio: null,
                        capture_points: null,
                        stun_assisted_damage: null,
                        max_damage: null,
                        hits: null,
                        battle_avg_xp: null,
                        wins: null,
                        losses: null,
                        damage_dealt: null,
                        no_damage_direct_hits_received: null,
                        max_frags: null,
                        shots: null,
                        explosion_hits_received: null,
                        tanking_factor: null
                    })
                }
            }
        }
    }

    const clan = 0
    const all = 1
    const regular_team = 2
    const historical = 3
    const company = 4
    const random = 5
    const stronghold_skirmish = 6
    const stronghold_defense = 7
    const ranked_battles_current = 8
    const fallout = 9
    const team = 10
    const epic = 11
    const ranked_battles_previous = 12

    return (
        <div style={{overflow: "auto hidden"}}>
            <table id="battleStatistics">
                <thead>
                    <tr>
                        <td id="no_battles"></td>
                        <td id="all_battles" className="battleHeadingButtons">All</td>
                        <td id="random_battles" className="battleHeadingButtons">Random</td>
                        <td id="clan_battles" className="battleHeadingButtons">Clan</td>
                        <td id="regular_team_battles" className="battleHeadingButtons">Regular Team</td>
                        <td id="team_battles" className="battleHeadingButtons">Team</td>
                        <td id="company_battles" className="battleHeadingButtons">Company</td>
                        <td id="historical_battles" className="battleHeadingButtons">Historical</td>
                        <td id="stronghold_skirmish_battles" className="battleHeadingButtons">Stronghold Skirmish</td>
                        <td id="stronghold_defense" className="battleHeadingButtons">Stronghold Defense</td>
                        <td id="grand_battles" className="battleHeadingButtons">Grand Battles</td>
                        <td id="fallout_battles" className="battleHeadingButtons">Fallout</td>
                        <td id="ranked_current" className="battleHeadingButtons">Ranked (Current)</td>
                        <td id="ranked_previous" className="battleHeadingButtons">Ranked (Previous)</td>
                    </tr>
                </thead>

                <tbody>
                    <tr id="total_battles">
                        <td>Total Battles</td>
                        <td>{Number(completeMainData[all].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].battles).toLocaleString()}</td>
                    </tr>
                    <tr id="wins">
                        <td>Wins</td>
                        <td>{Number(completeMainData[all].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].wins).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].wins).toLocaleString()}</td>
                    </tr>
                    <tr id="losses">
                        <td>Losses</td>
                        <td>{Number(completeMainData[all].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].losses).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].losses).toLocaleString()}</td>
                    </tr>
                    <tr id="draws">
                        <td>Draws</td>
                        <td>{Number(completeMainData[all].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].draws).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].draws).toLocaleString()}</td>
                    </tr>
                    <tr id="battles_on_stunning_vehicles">
                        <td>Battles Using Stunning Capable Vehicles</td>
                        <td>{Number(completeMainData[all].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].battles_on_stunning_vehicles).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].battles_on_stunning_vehicles).toLocaleString()}</td>
                    </tr>
                    <tr id="survived_battles">
                        <td>Battles Survived</td>
                        <td>{Number(completeMainData[all].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].survived_battles).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].survived_battles).toLocaleString()}</td>
                    </tr>
                    <tr id="battles_died_in">
                        <td>Battles Died In</td>
                        <td>{(Number(completeMainData[all].battles) - Number(completeMainData[all].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[random].battles) - Number(completeMainData[random].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[clan].battles) - Number(completeMainData[clan].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[regular_team].battles) - Number(completeMainData[regular_team].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[team].battles) - Number(completeMainData[team].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[company].battles) - Number(completeMainData[company].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[historical].battles) - Number(completeMainData[historical].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[stronghold_skirmish].battles) - Number(completeMainData[stronghold_skirmish].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[stronghold_defense].battles) - Number(completeMainData[stronghold_defense].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[epic].battles) - Number(completeMainData[epic].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[fallout].battles) - Number(completeMainData[fallout].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[ranked_battles_current].battles) - Number(completeMainData[ranked_battles_current].survived_battles)).toLocaleString()}</td>
                        <td>{(Number(completeMainData[ranked_battles_previous].battles) - Number(completeMainData[ranked_battles_previous].survived_battles)).toLocaleString()}</td>
                    </tr>
                    <tr id="survival_rate">
                        <td>Survival Rate</td>
                        <td>{(Number(completeMainData[all].survived_battles) / (Number(completeMainData[all].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[random].survived_battles) / (Number(completeMainData[random].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[clan].survived_battles) / (Number(completeMainData[clan].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[regular_team].survived_battles) / (Number(completeMainData[regular_team].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[team].survived_battles) / (Number(completeMainData[team].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[company].survived_battles) / (Number(completeMainData[company].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[historical].survived_battles) / (Number(completeMainData[historical].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[stronghold_skirmish].survived_battles) / (Number(completeMainData[stronghold_skirmish].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[stronghold_defense].survived_battles) / (Number(completeMainData[stronghold_defense].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[epic].survived_battles) / (Number(completeMainData[epic].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[fallout].survived_battles) / (Number(completeMainData[fallout].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[ranked_battles_current].survived_battles) / (Number(completeMainData[ranked_battles_current].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                        <td>{(Number(completeMainData[ranked_battles_previous].survived_battles) / (Number(completeMainData[ranked_battles_previous].battles)) * 100).toFixed(2).toLocaleString().concat("%")}</td>
                    </tr>
                    <tr id="total_frags">
                        <td>Total Kills</td>
                        <td>{Number(completeMainData[all].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].frags).toLocaleString()}</td>
                    </tr>
                    <tr id="max_frags">
                        <td>Max Kills</td>
                        <td>{Number(completeMainData[all].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].max_frags).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].max_frags).toLocaleString()}</td>
                    </tr>
                    <tr id="kill_death_ratio">
                        <td>Kill/Death Ratio</td>
                        <td>{(Number(completeMainData[all].battles) / (Number(completeMainData[all].battles) - Number(completeMainData[all].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[random].battles) / (Number(completeMainData[random].battles) - Number(completeMainData[random].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[clan].battles) / (Number(completeMainData[clan].battles) - Number(completeMainData[clan].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[regular_team].battles) / (Number(completeMainData[regular_team].battles) - Number(completeMainData[regular_team].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[team].battles) / (Number(completeMainData[team].battles) - Number(completeMainData[team].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[company].battles) / (Number(completeMainData[company].battles) - Number(completeMainData[company].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[historical].battles) / (Number(completeMainData[historical].battles) - Number(completeMainData[historical].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[stronghold_skirmish].battles) / (Number(completeMainData[stronghold_skirmish].battles) - Number(completeMainData[all].stronghold_skirmish))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[stronghold_defense].battles) / (Number(completeMainData[stronghold_defense].battles) - Number(completeMainData[all].stronghold_defense))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[epic].battles) / (Number(completeMainData[epic].battles) - Number(completeMainData[epic].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[fallout].battles) / (Number(completeMainData[fallout].battles) - Number(completeMainData[fallout].survived_battles))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[ranked_battles_current].battles) / (Number(completeMainData[ranked_battles_current].battles) - Number(completeMainData[ranked_battles_current].stronghold_skirmish))).toFixed(2).toLocaleString()}</td>
                        <td>{(Number(completeMainData[ranked_battles_previous].battles) / (Number(completeMainData[ranked_battles_previous].battles) - Number(completeMainData[ranked_battles_previous].stronghold_defense))).toFixed(2).toLocaleString()}</td>
                    </tr>
                    <tr id="total_damage_dealt">
                        <td>Total Damage Dealt</td>
                        <td>{Number(completeMainData[all].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].damage_dealt).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].damage_dealt).toLocaleString()}</td>
                    </tr>
                    <tr id="total_xp">
                        <td>Total Experience Earned</td>
                        <td>{Number(completeMainData[all].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].xp).toLocaleString()}</td>
                    </tr>
                    <tr id="average_xp">
                        <td>Average Experience</td>
                        <td>{Number(completeMainData[all].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].battle_avg_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].battle_avg_xp).toLocaleString()}</td>
                    </tr>
                    <tr id="max_xp">
                        <td>Highest Experience Earned</td>
                        <td>{Number(completeMainData[all].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].max_xp).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].max_xp).toLocaleString()}</td>
                    </tr>
                    <tr id="total_shots">
                        <td>Total Shots</td>
                        <td>{Number(completeMainData[all].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].shots).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].shots).toLocaleString()}</td>
                    </tr>
                    <tr id="total_hits">
                        <td>Total Hits</td>
                        <td>{Number(completeMainData[all].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].hits).toLocaleString()}</td>
                    </tr>
                    <tr id="hits_rate">
                        <td>Hit Rate</td>
                        <td>{Number(completeMainData[all].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[random].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[clan].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[regular_team].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[team].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[company].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[historical].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[stronghold_defense].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[epic].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[fallout].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[ranked_battles_current].hits_percents).toLocaleString().concat("%")}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].hits_percents).toLocaleString().concat("%")}</td>
                    </tr>
                    <tr id="total_penetrations">
                        <td>Total Penetrations</td>
                        <td>{Number(completeMainData[all].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].piercings).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].piercings).toLocaleString()}</td>
                    </tr>
                    <tr id="penetrations_rate">
                        <td>Penetration Rate</td>
                        <td>{((Number(completeMainData[all].piercings) / Number(completeMainData[all].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[random].piercings) / Number(completeMainData[random].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[clan].piercings) / Number(completeMainData[clan].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[regular_team].piercings) / Number(completeMainData[regular_team].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[team].piercings) / Number(completeMainData[team].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[company].piercings) / Number(completeMainData[company].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[historical].piercings) / Number(completeMainData[historical].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[stronghold_skirmish].piercings) / Number(completeMainData[stronghold_skirmish].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[stronghold_defense].piercings) / Number(completeMainData[stronghold_defense].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[epic].piercings) / Number(completeMainData[epic].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[fallout].piercings) / Number(completeMainData[fallout].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[ranked_battles_current].piercings) / Number(completeMainData[ranked_battles_current].hits)) * 100).toFixed(2).concat("%")}</td>
                        <td>{((Number(completeMainData[ranked_battles_previous].piercings) / Number(completeMainData[ranked_battles_previous].hits)) * 100).toFixed(2).concat("%")}</td>
                    </tr>
                    <tr id="total_explosion_hits">
                        <td>Total Explosion Hits</td>
                        <td>{Number(completeMainData[all].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].explosion_hits).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].explosion_hits).toLocaleString()}</td>
                    </tr>
                    <tr id="direct_hits_received">
                        <td>Direct Hits Received</td>
                        <td>{Number(completeMainData[all].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].direct_hits_received).toLocaleString()}</td>
                    </tr>
                    <tr id="average_damage_blocked">
                        <td>Average Damage Blocked</td>
                        <td>{Number(completeMainData[all].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].avg_damage_blocked).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].avg_damage_blocked).toLocaleString()}</td>
                    </tr>
                    <tr id="penetrations_received">
                        <td>Penetrations Received</td>
                        <td>{Number(completeMainData[all].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].piercings_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].piercings_received).toLocaleString()}</td>
                    </tr>
                    <tr id="explosion_hits_received">
                        <td>Explosion Hits Received</td>
                        <td>{Number(completeMainData[all].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].explosion_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].explosion_hits_received).toLocaleString()}</td>
                    </tr>
                    <tr id="no_damage_direct_hits_received">
                        <td>Non-Damaging Direct Hits Received</td>
                        <td>{Number(completeMainData[all].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].no_damage_direct_hits_received).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].no_damage_direct_hits_received).toLocaleString()}</td>
                    </tr>
                    <tr id="tanking_factor">
                        <td>Tanking Factor</td>
                        <td>{Number(completeMainData[all].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].tanking_factor).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].tanking_factor).toLocaleString()}</td>
                    </tr>
                    <tr id="average_damage_assisted">
                        <td>Average Assisted Damage</td>
                        <td>{Number(completeMainData[all].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].avg_damage_assisted).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].avg_damage_assisted).toLocaleString()}</td>
                    </tr>
                    <tr id="average_damage_assisted_tracked">
                        <td>Average Assisted Damage (Tracks)</td>
                        <td>{Number(completeMainData[all].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].avg_damage_assisted_track).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].avg_damage_assisted_track).toLocaleString()}</td>
                    </tr>
                    <tr id="average_damage_assisted_radio">
                        <td>Average Assisted Damage (Radio)</td>
                        <td>{Number(completeMainData[all].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].avg_damage_assisted_radio).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].avg_damage_assisted_radio).toLocaleString()}</td>
                    </tr>
                    <tr id="total_stun_assisted_damage">
                        <td>Total Stun Assisted Damage</td>
                        <td>{Number(completeMainData[all].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].stun_assisted_damage).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].stun_assisted_damage).toLocaleString()}</td>
                    </tr>
                    <tr id="capture_points">
                        <td>Capture Points</td>
                        <td>{Number(completeMainData[all].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].capture_points).toLocaleString()}</td>
                    </tr>
                    <tr id="base_defence_points">
                        <td>Base Defence Points</td>
                        <td>{Number(completeMainData[all].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[random].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[clan].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[regular_team].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[team].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[company].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[historical].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_skirmish].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[stronghold_defense].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[epic].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[fallout].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_current].dropped_capture_points).toLocaleString()}</td>
                        <td>{Number(completeMainData[ranked_battles_previous].dropped_capture_points).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GetMainData
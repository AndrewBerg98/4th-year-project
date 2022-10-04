import React, { useEffect } from "react";
import axios from "axios";

export function APIdata({nickname}) {
    // eslint-disable-next-line
    var nickname = nickname;
    var realm = ["ru", "eu", "na", "asia"];
    const url = "https://api.worldoftanks." + realm[1] + "/wot/account/list/?application_id=f1dd0d3153a024d45038753a127d9106&search=" + nickname;

    const [data, setData] = React.useState(null);

    useEffect(() => {
        if(nickname === "andreykaberg") {
            axios.get("playerData.json").then((response) => {
                setData(response.data);
            }, 5000);
        }
    })

    // React.useEffect(() => {
    //     axios.get("playerData.json").then((response) => {
    //         setData(response.data);
    //     });
    // }, []);

    if (!data) return null;

    if (nickname !== "") {
        console.clear()
        console.log(url)
        console.log("Nickname: ", nickname)
    }
}
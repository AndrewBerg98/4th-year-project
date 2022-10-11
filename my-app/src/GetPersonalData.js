import React, { useEffect, useState } from "react"
import axios from "axios"
import GetPlayer from "./GetPlayer"

function GetPersonalData({nickname, id, realm}) {
    const urlGetPersonalData = "https://api.worldoftanks." + realm + "/wot/account/info/?application_id=f1dd0d3153a024d45038753a127d9106&account_id=" + id

    const [data, setData] = useState(null)

    useEffect(() => {
        if(id !== undefined) {
            axios.get("playerPersonalData.json").then(response => {
                setData(response.data)
            })
        }
    }, [id, realm])

    if (id !== undefined && data !== null) {
        var match = false;

        if (data.meta.count !== 0) {
            console.clear()
            
            for (var i = 0; i < 1; i++) {
                if (id === data.data[id].account_id && match === false) {
                    match = true
                    console.log("Personal Data: ", data.data[id])
                }

                else {
                    match = false;
                }
            }
        }

        if (match === false) {
            console.log("Player Does Not Exist")
        }
    }
}

export default GetPersonalData
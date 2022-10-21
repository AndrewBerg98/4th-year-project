import { useEffect, useState } from "react"
import axios from "axios"

function GetPlayer({values}) {
    const [data, setData] = useState({})
    var nicknames = []
    var realms = []
    var valid = false

    if (Object.keys(values).length !== 0) {
        valid = true;
    }

    useEffect(() => {
        if (valid === true) {
            console.log("Fetching Player List")
            axios.get("playerList.json").then(response => {
                setData(response.data)
            })
        }
    }, [valid, values])

    if (valid === true) {
        // We are seeing if the nicknames inputted matches with the data retrieved
        for (let i = 0; i < Object.keys(values).length; i++) {
            for (let j = 0; j <= data?.data?.length; j++) {
                // If they match, store inside an array
                if (data?.data[j]?.nickname === Object.keys(values)[i]) {
                    nicknames.push(data?.data[j]?.nickname)
                }
            }
        }

        for (let k = 0; k < Object.keys(values).length; k++) {
            for (let l = 0; l < nicknames.length; l++) {
                if (nicknames[l] === (Object.keys(values)[k]).slice(0, -6)) { // If nickname from "Data" mtaches with Nickname from "Objects" (sliced)
                    realms.push(Object.values(values)[k]) // Store the realm into array
                }
            }
        }
    }

    if (nicknames.length !== 0 && realms.length !== 0) {
        console.log(nicknames, realms)
    }
}

export default GetPlayer
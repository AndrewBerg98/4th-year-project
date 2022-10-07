import React, { useEffect, useState } from "react";
import axios from "axios";

/*

    BUG LIST:

    1. Component renders -> "nickname" is submitted -> Axios API request runs -> API data does NOT return -> component re-runs again but only returns data problem, nothing else.
       Not really a big issue as the API only runs once, I think?, but is it inefficent to go back to render properly? or is this intended?

*/

function APIRequest({nickname, url}) {
    const [data, setData] = useState(null)
    // console.log("Nickname: ", nickname)

    useEffect(() => {
        // eslint-disable-next-line        
        if (nickname != undefined) {
            console.log("Running AXIOS")
            axios.get(url).then(response => {
                setData(response.data)
            })
        }
    // eslint-disable-next-line
    }, [nickname]); // [] prevents looping: https://stackoverflow.com/questions/67750003/useeffect-infinite-loop-with-axios

    // eslint-disable-next-line      
    if (nickname != undefined && data != null) {
        console.log("Returning Data")

        // eslint-disable-next-line   
        if (data.meta.count == 0) {
            return (
                <div>
                    <p>User Does Not Exists!</p>
                </div>
            )
        }

        return (
            <div>
                <p>Status: {data.status}</p>
                <p>Nickname: {data.data[0].nickname}</p>
                <p>Account ID: {data.data[0].account_id}</p>
            </div>
        )
    }
}

export default APIRequest;
import React, { useEffect, useState } from "react";
import axios from "axios";

function APIRequest({nickname, url}) {
    const [data, setData] = useState(null)

    useEffect(() => {
        // eslint-disable-next-line
        if (nickname != undefined) {
            axios.get(url).then(response => {
                setData(response.data)
            })
        }
    // eslint-disable-next-line
    }, [nickname]); // [] prevents looping: https://stackoverflow.com/questions/67750003/useeffect-infinite-loop-with-axios

    if (data != null) {
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
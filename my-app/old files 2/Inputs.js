import React from "react";
import { useState } from "react";
import { APIdata } from "./APIdata";

const Inputs = ({reset}) => {
    const [nickname, setNickname] = useState("");

    const nicknameUpdate = event => {
        setNickname(event.target.value);
    };

    const DataSubmit = () => {
        console.clear();
        console.log("Nickname: ", nickname);
        // <APIdata nickname={nickname} />
        console.log(reset)
    }

    return (
        <>
            <input type="text" onChange={nicknameUpdate} />
            <button onClick={DataSubmit}>Submit</button>
            <APIdata nickname={nickname} />
        </>
    )
}

export default Inputs;
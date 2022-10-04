import React, { useState, useRef } from "react";
import Process from "./Process";

function App() {
    const [nickname, setNickname] = useState([])
    const nicknameRef = useRef()

    const [realm, setRealm] = useState([])
    const realmRef = useRef()

    function handleSetNickname() {
        const nickname = nicknameRef.current.value
        const realm = realmRef.current.value

        if (nickname !== null || nickname !== "") {
            setNickname(nickname)
            setRealm(realm)
            console.clear()
            console.log("Nickname: ", nickname)
            console.log("Realm: ", realm)
            nicknameRef.current.value = null
            realmRef.current.value = "eu"
        }
    }

    return (
        <>
            <Process nickname={nickname} realm={realm} />

            <label>Nickname: </label>
            <input type="text" ref={nicknameRef}></input><br/>

            <label>Realm: </label>
            <select type="dropdown" defaultValue="eu" ref={realmRef}>
                <option value="ru">RU</option>
                <option value="eu">EU</option>
                <option value="na">NA</option>
                <option value="asia">ASIA</option>
            </select><br/>
            
            <button onClick={handleSetNickname}>Search</button>
        </>
    )
}

export default App;
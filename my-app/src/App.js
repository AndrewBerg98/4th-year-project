import React, { useState, useRef } from "react";
// import Process from "./Process";
import GetPlayer from "./GetPlayer";

function App() {
    const [nickname, setNickname] = useState()
    const nicknameRef = useRef()

    const [realm, setRealm] = useState()
    const realmRef = useRef()

    const url = "https://api.worldoftanks." + realm + "/wot/account/list/?application_id=f1dd0d3153a024d45038753a127d9106&search=" + nickname

    function handleSetNickname() {
        const nickname = nicknameRef.current.value
        const realm = realmRef.current.value

        if (nicknameRef.current.value !== "") {
            setNickname(nickname)
            setRealm(realm)
            console.clear()
            console.log("Nickname: ", nickname)
            console.log("Realm: ", realm)
            console.log("URL: ", url)
            nicknameRef.current.value = null // QOL: clears entered text in input field
            realmRef.current.value = "eu"
        }
    }

    return (
        <>
            {/* <Process nickname={nickname} realm={realm} /> */}
            <div id="topNav">
                <label>Nickname: </label>
                <input type="text" placeholder="Case Sensitive" ref={nicknameRef}></input><br/>

                <label>Realm: </label>
                <select type="dropdown" defaultValue="eu" ref={realmRef}>
                    <option value="ru">RU</option>
                    <option value="eu">EU</option>
                    <option value="na">NA</option>
                    <option value="asia">ASIA</option>
                </select><br/>
                
                <button onClick={handleSetNickname}>Search</button>
            </div>

            <GetPlayer nickname={nickname} url={url} />
        </>
    )
}

export default App;
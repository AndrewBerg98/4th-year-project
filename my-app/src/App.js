import React, { useState, useRef } from "react"
import GetPlayer from "./GetPlayer"
import "./styles/App.css"

function App() {
    const [nickname, setNickname] = useState()
    const nicknameRef = useRef()

    const [realm, setRealm] = useState()
    const realmRef = useRef()

    const urlPlayerList = "https://api.worldoftanks." + realm + "/wot/account/list/?application_id=" + process.env.REACT_APP_APIKEY + "&search=" + nickname

    function handleSetNickname() {
        const nickname = nicknameRef.current.value
        const realm = realmRef.current.value

        if (nicknameRef.current.value !== "") {
            setNickname(nickname)
            setRealm(realm)
            nicknameRef.current.value = null // QOL: clears entered text in input field
            nicknameRef.current.placeholder = nickname
            realmRef.current.value = "eu"
        }
    }

    function logoClicked() {
        document.location.reload()
    }

    window.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.getElementById("searchSubmit").click()
    }})

    return (
        <>
            <div id="topMenu">
                <button type="button" id="logo" onClick={logoClicked}>WOTPlayer</button>
                
                <div id="searchSpace">
                    <label htmlFor="nicknameInput">Nickname: </label>
                    <input type="text" id="nicknameInput" placeholder="Username (case-sensitive)" ref={nicknameRef} defaultValue="karlaskk4"></input>

                    <label htmlFor="realmSelect">Realm: </label>
                    <select type="dropdown" id="realmSelect" defaultValue="eu" ref={realmRef}>
                        <option value="ru">RU</option>
                        <option value="eu">EU</option>
                        <option value="na">NA</option>
                        <option value="asia">ASIA</option>
                    </select>
                    
                    <button type="button" id="searchSubmit" onClick={handleSetNickname}>Search</button>
                </div>
            </div>

            <GetPlayer nickname={nickname} realm={realm} urlPlayerList={urlPlayerList} />
        </>
    )
}

export default App
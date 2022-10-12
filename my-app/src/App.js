import React, { useState, useRef } from "react"
import GetPlayer from "./GetPlayer"
import "./Styles/App.css"

function App() {
    const [nickname, setNickname] = useState()
    const nicknameRef = useRef()

    const [realm, setRealm] = useState()
    const realmRef = useRef()

    const urlPlayerList = "https://api.worldoftanks." + realm + "/wot/account/list/?application_id=f1dd0d3153a024d45038753a127d9106&search=" + nickname

    function handleSetNickname() {
        const nickname = nicknameRef.current.value
        const realm = realmRef.current.value

        if (nicknameRef.current.value !== "") {
            setNickname(nickname)
            setRealm(realm)
            // console.clear()
            console.log("Nickname: ", nickname)
            console.log("Realm: ", realm)
            console.log("URL: ", urlPlayerList)
            nicknameRef.current.value = null // QOL: clears entered text in input field
            realmRef.current.value = "eu"
        }
    }

    function logoClicked() {
        document.location.reload()
    }

    return (
        <>
            <div id="topNav">
                <button type="button" id="logo" onClick={logoClicked}>WOTPlayer</button>
                
                <label htmlFor="nicknameInput">Nickname: </label>
                <input type="text" id="nicknameInput" placeholder="Username (case-sensitive)" ref={nicknameRef}></input>

                <label htmlFor="realmSelect">Realm: </label>
                <select type="dropdown" id="realmSelect" defaultValue="eu" ref={realmRef}> {/* Resolved select has not name attribute: https://dequeuniversity.com/rules/axe/4.0/select-name */}
                    <option value="ru">RU</option>
                    <option value="eu">EU</option>
                    <option value="na">NA</option>
                    <option value="asia">ASIA</option>
                </select>
                
                <button type="button" id="searchSubmit" onClick={handleSetNickname}>Search</button>
            </div>

            <GetPlayer nickname={nickname} realm={realm} urlPlayerList={urlPlayerList} />
        </>
    )
}

export default App
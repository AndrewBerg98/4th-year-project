import React, { useState, useRef } from "react"
import GetPlayer from "./GetPlayer"
import "./styles/App.css"

function App() {
    const [values, setValues] = useState({})
    const [sendValues, setSendValues] = useState({})
    // const [playerList, setPlayerList] = useState()
    const nicknameRef = useRef()
    const realmRef = useRef()

    function logoClicked() {
        document.location.reload()
    }

    const handleSetValues = e => {
        const nickname = nicknameRef.current.value
        const realm = realmRef.current.value
        const realmNick = nickname + "-realm" // Dedicated realm for each player, otherwise one or more players may not be from a specific realm

        if (nickname !== "") {
            setValues(prevValues => {
                return {
                    ...prevValues, // Keeps previous values, otherwise they get deleted (we need to store multiple names)
                    [nickname]: nickname,
                    [realmNick]: realm
                }
            })
        }
        nicknameRef.current.value = ""
        realmRef.current.value = "eu"
    }

    /* Allows us to send props the value when clicking "Search" instead of everytime we add a player name */
    function handleSendValues() {
        setSendValues(values)
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            window.document.getElementById("buttonAdd").click()
        }
    }

    return (
        <>
            <div id="header">
                <button type="button" id="logo" onClick={logoClicked}>WOTPlayer</button>

                <div id="searchSpace">
                    <label htmlFor="inputNickname">Nickname: </label>
                    <input type="text" id="inputNickname" placeholder="Username (case-sensitive)" ref={nicknameRef} onKeyPress={handleKeyPress}></input>

                    <label htmlFor="selectRealm">Realm: </label>
                    <select type="dropdown" id="selectRealm" defaultValue="eu" ref={realmRef}>
                        <option value="ru">RU</option>
                        <option value="eu">EU</option>
                        <option value="na">NA</option>
                        <option value="asia">ASIA</option>
                    </select>

                    <button type="button" id="buttonAdd" onClick={handleSetValues}>Add</button>

                    <button type="button" id="buttonSearch" onClick={handleSendValues}>Search</button>
                </div>
            </div>

            <GetPlayer values={sendValues} />
        </>
    )
}

export default App
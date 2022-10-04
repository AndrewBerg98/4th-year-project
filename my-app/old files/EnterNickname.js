import React from "react";
import Process from "./MatchNicknameToData";

export default class Nickname extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nickname: "",
            realm: "eu"
        }
    }

    nicknameUpdate = (e) => {
        this.setState({
            nickname: e.target.value
        })
    }

    realmUpdate = (e) => {
        this.setState({
            realm: e.target.value
        })
    }

    submitDetails = () => {
        console.log("Nickname: ", this.state.nickname)
        console.log("Realm: ", this.state.realm)
        console.log("Props", this.props.passData)
    }

    render() {
        return (
            <>
                <h3>Rendering EnterNickname.js class "Nickname"</h3>
                <h4>Nickname: {this.state.nickname}</h4>
                <h4>Realm: {this.state.realm}</h4>

                <label>Enter Username: </label>
                <input type="text" onChange={this.nicknameUpdate}></input><br/>

                <label>Select Realm: </label>
                <select type="dropdown" value={this.state.realm} onChange={this.realmUpdate}>
                    <option value="ru">RU</option>
                    <option value="eu">EU</option>
                    <option value="na">NA</option>
                    <option value="asia">Asia</option>
                </select><br/>

                <button type="submit" onClick={this.submitDetails}>Submit</button>
            </>
        )
    }
}
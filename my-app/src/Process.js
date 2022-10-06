import React from "react";

function Process({ nickname, realm }) {
    // eslint-disable-next-line
    if (nickname == "") {
        return null
    }
    const url = "https://api.worldoftanks." + realm + "/wot/account/list/?application_id=f1dd0d3153a024d45038753a127d9106&search=" + nickname;

    // eslint-disable-next-line
    if (nickname != undefined || nickname != null) {
        return (
            <div>
                <p>Nickname: {nickname}</p>
                <p>Realm: {realm}</p>
                <p>URL: {url}</p>
            </div>
        )
    }
}

export default Process;
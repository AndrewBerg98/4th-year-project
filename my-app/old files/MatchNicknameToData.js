import React from "react";
import axios from "axios";
import PassData from "./EnterNickname";

function APIdata(nickname, realm) {
    // var nickname = {this.props.nickname};
    // var realm = {props.realm};
    const baseURL = "https://api.worldoftanks." + realm + "/wot/account/list/?application_id=f1dd0d3153a024d45038753a127d9106&search=" + nickname;

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get("playerData.json").then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;

    return (
        <div>
            <h2>Nickname: {data.data[0].nickname}</h2>
            <p>Account ID: {data.data[0].account_id}</p>
            <p>Url: {baseURL}</p>
        </div>
    )
}

export default APIdata;

// import React from "react";
// import Nickname from "./EnterNickname";

// export default class Process extends React.Component {
//     render() {
//         return (
//             <>
//                 <p>Test</p>
//             </>
//         )
//     }
// }
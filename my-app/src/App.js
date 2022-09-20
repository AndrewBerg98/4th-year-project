
import axios from "axios";
import React from "react";

const baseURL = "https://api.worldoftanks.eu/wot/account/list/?application_id=f1dd0d3153a024d45038753a127d9106&search=andreykaberg";

export default function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setData(response.data);
        });
    }, []);

    if (!data) return null;

    return (
        <div>
            <h2>Nickname: {data.data[0].nickname}</h2>
            <p>Account ID: {data.data[0].account_id}</p>
        </div>
    )
}























// import { useState, useEffect } from "react";

// export default function App() {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('https://api.worldoftanks.eu/wot/account/list/?application_id=f1dd0d3153a024d45038753a127d9106&search=andreykaberg')
        
//         .then((response) => {
//             return response.json();
//         })

//         .then((actualData) => {
//             setData(actualData);
//             setError(null);
//             console.log(actualData);
//         })

//         .catch((err) => {
//             setError(err.message);
//             setData(null);
//         })

//         .finally(() => {
//             setLoading(false);
//         });
//     }, []);

//     return (
//         <div className="App">
//             <h1>API Posts</h1>
//             {loading && <div>A moment please...</div>}
//             {error && (
//                 <div>{`There is a problem fetching the post data - ${error}`}</div>
//             )}
//             <ul>
//                 {data &&
//                     data.map(({ element, index }) => (
//                         <li key={index}>
//                             <h3>{element}</h3>
//                         </li>
//                     ))}
//             </ul>
//         </div>
//     );
// }
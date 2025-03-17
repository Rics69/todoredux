// import {useEffect, useState} from "react";
//
// const UserList =  () => {
//     const [names, setNames] = useState()
//
//     useEffect(() => {
//         const getData = () => {
//             const options = {method: 'GET', headers: {accept: 'application/json'}};
//             fetch('https://open-api.guesty.com/v1/users?skip=0&limit=10', options).then((res) => console.log(res.json())).then((data) => setNames(data))
//         }
//         getData()
//     }, [])
//
//     return {
//         names.map(user => (
//             <div key={user.id}>user.name</div>
//         ))
//     }
// }
//
// export default UserList;
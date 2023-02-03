import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext();

export function UsersProvider({ children }) {

    const [data, setData] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        async function fetchMyAPI() {
            let response = await fetch('https://jsonplaceholder.typicode.com/users')
            let result = await response.json();
            setData(result)
            setFiltered(result);
        }
        fetchMyAPI()
        
    }, [])
    return (
        <UsersContext.Provider value={{dataValue: [data, setData], filteredValue: [filtered, setFiltered]}}>
            {children}</UsersContext.Provider>
    );

}
export default UsersContext;
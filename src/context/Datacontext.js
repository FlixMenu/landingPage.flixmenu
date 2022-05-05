import { useState, createContext } from "react";


const DataContext = createContext(null)

export default DataContext

export function DataProvider({ children }) {

    const [isToggled, setIsToggled] = useState(false)

    function toggleMenu() {
        setIsToggled(!isToggled)
    }

    return (
        <DataContext.Provider value={{ isToggled, setIsToggled, toggleMenu }}>
            {children}
        </DataContext.Provider>
    )
}

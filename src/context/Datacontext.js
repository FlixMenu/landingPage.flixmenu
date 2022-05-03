import { createContext } from "react";


const DataContext = createContext(null)

export default DataContext

export function DataProvider({ children }) {

    return (
        <DataContext.Provider value={{ name: "FlixMenu" }}>
            {children}
        </DataContext.Provider>
    )
}

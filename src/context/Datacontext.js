import { useState, useEffect, createContext } from "react";
import sleep from "../helpers/sleep";


const DataContext = createContext(null)

export default DataContext

export function DataProvider({ children }) {

    const [isToggled, setIsToggled] = useState(false)
    const [flashscreenVisibility, setFlashScreenVisibility] = useState(true)

    // reset the visibility on certain milliseconds
    const FlashScreenTimeout = 5;

    useEffect(() => {
        (async () => {
            await sleep(FlashScreenTimeout)
            setFlashScreenVisibility(false)
        })()
    }, [])


    function toggleMenu() {
        setIsToggled(!isToggled)
    }



    return (
        <DataContext.Provider value={{ isToggled, flashscreenVisibility, setIsToggled, toggleMenu }}>
            {children}
        </DataContext.Provider>
    )
}

import { createContext, useState, } from "react";

export const hoverContext = createContext();

export const HoverProvider = ({ children }) => {
    const [Active, setActive] = useState(0);
    const [prohover, setprohover] = useState(false)
    return (
        <hoverContext.Provider value={{ Active, setActive, prohover, setprohover }}>
            {children}
        </hoverContext.Provider>
    )
}

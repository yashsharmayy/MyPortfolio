import { createContext, useState, } from "react";

export const hoverContext = createContext();

export const HoverProvider = ({ children }) => {
    const [Active, setActive] = useState(0);
    return (
        <hoverContext.Provider value={{ Active, setActive }}>
            {children}
        </hoverContext.Provider>
    )
}

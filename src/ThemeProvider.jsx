import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [toggole,setToggole] = useState(false);
    const ToggleThame =()=>{
         setToggole(!toggole);
    }
    return (
       <ThemeContext.Provider value={{toggole,ToggleThame}} >
           {children}
       </ThemeContext.Provider>
    );
};

export default ThemeProvider;
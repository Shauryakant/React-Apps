import { createContext,useContext } from "react";
import React from "react";
export const ThemeContext=React.createContext({
    lighttheme:()=>{},
    darktheme: ()=>{},
    themeMode: "light"
})

export const ThemeProvider=ThemeContext.Provider;

export default function useTheme() {
    return useContext(ThemeContext);
} 

import { createContext, useContext, useState } from "react"



export const themes = {
    light: {
        backgroundColor: 'bg-white',
        textColor: 'text-black',
        secondaryColor: 'bg-gray-200',
        buttonColor: 'bg-blue-500 hover:bg-blue-600',
      },
      dark: {
        backgroundColor: 'bg-gray-900',
        textColor: 'text-white',
        secondaryColor: 'bg-gray-700',
        buttonColor: 'bg-blue-700 hover:bg-blue-800',
      },
      ocean: {
        backgroundColor: 'bg-blue-100',
        textColor: 'text-blue-900',
        secondaryColor: 'bg-teal-200',
        buttonColor: 'bg-teal-500 hover:bg-teal-600',
      }
}

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);


export const ThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("light");
    const  theme = themes[themeName];

    return (
        <ThemeContext.Provider value={{themeName, setThemeName, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}
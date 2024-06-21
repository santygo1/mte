import LocaleContext from "./LocaleContext.js";
import {useState} from "react";


const LocaleContextProvider = ({children}) => {

    const [language, setLanguage] = useState(null);

    return (
        <LocaleContext.Provider value={{
            language: "language",
            locale: "locale",

        }}>{children}</LocaleContext.Provider>
    )
};

export default LocaleContextProvider;
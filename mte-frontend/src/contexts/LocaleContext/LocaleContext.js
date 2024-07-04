import {createContext} from "react";
import SystemErrorLogger from "../../util/SystemErrorLogger.js";

export default createContext({
    locale: null,
    baseLocale: null,
    language: -1,
    supportedLanguages: null,
    setLanguage: () => {
        SystemErrorLogger.methodNotImplemented("LocaleContext", "setLanguage")
    }
})
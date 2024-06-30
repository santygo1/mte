import AnalyzeTrajectoryContext from "./AnalyzeTrajectoryContext.js";
import {useContext, useEffect, useState} from "react";
import TrajectoryContext from "../TrajectoryContext/TrajectoryContext.js";
import useFetch from "../../hooks/useFetch.js";
import TrajectoryAnalyzeService from "../../api/service/TrajectoryAnalyzeService.js";
import {useToasts} from "react-bootstrap-toasts";
import ComponentUtil from "../../util/ComponentUtil.jsx";


const AnalyzeTrajectoryContextProvider = ({children}) => {
    const [isEnable, setIsEnable] = useState(false);
    const {trajectories, setTrajectories} = useContext(TrajectoryContext);
    const toasts = useToasts();
    const [currentToastId, setCurrentToastId] = useState(null);

    const [fetchAnalyzeResult, isResultLoading, resultError] = useFetch(
        async () => {
            const fetch = await TrajectoryAnalyzeService.getAnalyze();
            applyAnalyzeResult(fetch);
        }
    );

    // Эффекты для тостов об анализе
    useEffect(() => {
        if (isResultLoading) {
            const toastId = toasts.light(ComponentUtil.getProcessingTipContent(
                "Анализируем",
                `Результат будет представлен в скором времени`
            ));
            setCurrentToastId(toastId);
        } else {
            hidePrevToast();
        }
    }, [isResultLoading]);

    useEffect(() => {
        if (resultError) {
            hidePrevToast();
            toasts.danger(ComponentUtil.getDefaultTipContent(
                "Ошибка анализа",
                `${resultError.response.data.description}`
            ));
        }
    }, [resultError]);

    function hidePrevToast() {
        if (currentToastId !== null) {
            toasts.hide(currentToastId);
            setCurrentToastId(null);
        }
    }

    function applyAnalyzeResult(result) {
        setTrajectories(TrajectoryAnalyzeService.getAnalyzeResultAppliedToTrajectories(trajectories, result));
        setIsEnable(true);
    }


    function doMainAreaAnalyze() {
        fetchAnalyzeResult();
    }

    return (
        <AnalyzeTrajectoryContext.Provider
            value={{
                isAnalyzeEnable: isEnable,
                isAnalyzeProcessing: isResultLoading,
                doMainAreaAnalyze: doMainAreaAnalyze
            }}
        >
            {children}
        </AnalyzeTrajectoryContext.Provider>
    );
};
export default AnalyzeTrajectoryContextProvider;
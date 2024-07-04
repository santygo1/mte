import EditNavigator from "./Tools/EditNavigator/EditNavigator.jsx";
import EditConfirmChange from "./Tools/EditConfirmChange/EditConfirmChange.jsx";
import AnalyzeComponents from "./Tools/AnalyzeComponents/AnalyzeComponents.jsx";
import ExportTool from "./Tools/ExportTools/ExportTool.jsx";

export const tools = [
    <AnalyzeComponents key={"MainAreaAnalyzerTool"}/>,
    <EditNavigator key={"EditNavigatorTool"}/>,
    <EditConfirmChange key={"EditConfirmChangeTool"}/>,
    <ExportTool key={"ExportTool"}/>
]
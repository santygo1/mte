import axios from "axios";
import fileDownload from "js-file-download";
import trajectory from "../../components/Trajectory/Trajectory.jsx";

export const EXPORT_FILE_TYPES = {
    csv: "csv",
    excel: "xlsx"
}

export default class ExportService {
    static async exportFile(filetype) {

        await axios
            .post(`/resources/download`, {}, {
                params: {
                    fileFormat: filetype
                },
                responseType: 'blob'
            }).then(res => {
                fileDownload(res.data, 'trajectories.' + filetype);
            });
    }
}
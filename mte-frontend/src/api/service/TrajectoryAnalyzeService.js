import axios from "axios";

export default class TrajectoryAnalyzeService {

    static async getAnalyze(params) {
        const response = await axios.post(`api/v1/trajectories/analyze`, {}, {
            params: params
        });
        return response.data;
    }
}
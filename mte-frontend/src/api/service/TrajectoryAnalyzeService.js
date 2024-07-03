import axios from "axios";

export default class TrajectoryAnalyzeService {

    static async getAnalyze() {
        const response = await axios.post(`api/v1/trajectories/analyze`, {}, {
            params: {
                method: "analyzeMainAreas"
            }
        });
        return response.data;
    }
}
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

    static getAnalyzeResultAppliedToTrajectories(currentTrajectories, analyzeResult) {
        const newTrajectories = currentTrajectories.map(t => {
            const currentResult = analyzeResult.find(r => r.trajectoryId === t.trajectoryId);

            t.coordinates = currentResult.coordinates.map(c => {
                const result = currentResult.coordinates.find(rc => c.lat === rc.lat && c.lon === rc.lon);
                if (result != null) {
                    c.color = result.color;
                }
                return c;
            });

            return t;
        });

        return newTrajectories;
    }
}
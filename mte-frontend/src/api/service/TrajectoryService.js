import axios from "axios";

export default class TrajectoryService {

    static async getAll() {
        const response = await axios.get(`api/v1/trajectories`);
        return response.data;
    }

    static async getById(id) {
        const response = await axios.get(`/api/v1/trajectories/${id}`);
        return response.data;
    }

    static async updateTrajectory(id, trajectory) {
        const response = await axios.get(`/api/v1/trajectories/${id}123`);
        return response.data;
    }
}
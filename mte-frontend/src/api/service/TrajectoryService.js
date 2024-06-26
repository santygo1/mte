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
        const response = await axios.put(`/api/v1/trajectories/${id}`, trajectory);
        return response.data;
    }

    static async checkNewTrajectoryCoordinate(trajectoryId, trajectory, newCoordinate) {
        const response = await axios.post(`/api/v1/trajectories/${trajectoryId}/checkCoordinate`, newCoordinate);
        return response.data;
    }
}
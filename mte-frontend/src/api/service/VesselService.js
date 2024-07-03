import axios from "axios";

export default class VesselService {

    static async getById(id) {
        const response = await axios.get(`/api/v1/vessels/${id}`);
        return response.data;
    }


}